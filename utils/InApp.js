// Taken from https://github.com/f2etw/detect-inapp/blob/b82a67e7293ebb7534210770b9c85cc6617fa44d/src/inapp.js
// Used with MIT license on 2021-01-05

export default class InApp {
  constructor(userAgent) {
    this.ua = userAgent || "";
    this.browserList = {
      messenger: /\bFB[\w_]+\/(Messenger|MESSENGER)/,
      facebook: /\bFB[\w_]+\//,
      twitter: /\bTwitter/i,
      line: /\bLine\//i,
      wechat: /\bMicroMessenger\//i,
      puffin: /\bPuffin/i,
      miui: /\bMiuiBrowser\//i,
      instagram: /\bInstagram/i,
      chrome: /\bCrMo\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?/,
      safari: /Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari/,
      ie: /IEMobile|MSIEMobile/,
      firefox:
        /fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS/,
    };
  }

  findKey(obj, target) {
    for (let browser in this.browserList) {
      // Double-check that `browser` is actually in the list of browsers
      if (!this.browserList.hasOwnProperty(browser)) {
        continue;
      }

      // Grab the regex expression
      const regex = this.browserList[browser];

      // If the expression matches, then we've found our browser
      if (target.test(regex)) {
        return browser;
      }
    }

    // If no matches, we found nothing
    return false;
  }

  get browser() {
    return this.findKey(this.browserList, this.ua) || "other";
  }

  get isMobile() {
    return /(iPad|iPhone|Android|Mobile)/i.test(this.ua) || false;
  }

  get iOS() {
    return /(iPad|iPhone)/i.test(this.ua) || false;
  }

  get isDesktop() {
    return !this.isMobile;
  }

  get isInApp() {
    const rules = [
      "WebView",
      "(iPhone|iPod|iPad)(?!.*Safari/)",
      "Android.*(wv|.0.0.0)",
    ];
    const regex = new RegExp(`(${rules.join("|")})`, "ig");
    return !!this.ua.match(regex);
  }
}
