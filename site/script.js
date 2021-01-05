// Taken from https://github.com/f2etw/detect-inapp/blob/b82a67e7293ebb7534210770b9c85cc6617fa44d/src/inapp.js
// Used with MIT license on 2021-01-05

class InApp {
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
            firefox: /fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS/,
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
        return this.findKey(this.browserList, this.ua) || 'other';
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
            'WebView',
            '(iPhone|iPod|iPad)(?!.*Safari\/)',
            'Android.*(wv|\.0\.0\.0)',
        ];
        const regex = new RegExp(`(${rules.join('|')})`, 'ig');
        return !!this.ua.match(regex);
    }
}

const route = new URL(window.location.href);
const rawAmount = route.pathname.replace("/","");
const amount = parseFloat(rawAmount).toFixed(2);
console.log(amount, rawAmount);

const container = document.querySelector("main");
const subtitle = document.querySelector(".subtitle");
const printedAmount = document.querySelector(".subtitle .amount");
const applePayButton = document.querySelector(".apple-pay");
const paypalButton = document.querySelector(".paypal");
const debitCardButton = document.querySelector(".debit-card");
const inappBrowserWarning = document.querySelector("aside");

if (rawAmount) {
    printedAmount.innerHTML += amount;
    subtitle.classList.remove("hidden");

    applePayButton.href += amount;
    paypalButton.href += amount;
    debitCardButton.href += amount;
}

// If Apple Pay is enabled, show the Apple Pay button
if (window.ApplePaySession) {
    applePayButton.classList.remove("hidden");
}

// Wait half a second before displaying everything to wait for the images to load
setTimeout(() => {
    container.classList.remove("hidden");
}, 500);


const inapp = new InApp(navigator.userAgent || navigator.vendor || window.opera);
if (inapp.isInApp && inapp.iOS) {
    // Wait another quarter of a second before displaying the in-app browser warning
    setTimeout(() => {
        inappBrowserWarning.classList.remove("hidden");

        // Wait a fraction of a second before removing the red outline
        setTimeout(() => {
            inappBrowserWarning.classList.remove("red");
        }, 100);
    }, 750);

    inappBrowserWarning.addEventListener("click", () => {
        inappBrowserWarning.classList.add("hidden");
    })

    applePayButton.classList.add("disabled");
    applePayButton.classList.remove("hidden");
    applePayButton.addEventListener("click", (e) => {
        e.preventDefault();
        inappBrowserWarning.classList.add("red");
        setTimeout(() => {inappBrowserWarning.classList.remove("red")}, 100);
    })
}
