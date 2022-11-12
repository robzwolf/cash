import styles from './profilepicture.module.css'
import Image from "next/image";
import profilePic from "../../assets/img/robbie.jpg";

const ProfilePicture = () => (
    <Image src={profilePic  } alt="Robbie" width={140} height={140} className={styles.profilepic} />
)

export default ProfilePicture;
