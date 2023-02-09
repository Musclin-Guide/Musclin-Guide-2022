import Image, { StaticImageData } from 'next/image';
import demo from '@public/assets/profile_demo.jpg';
import styles from '@components/ProfileCard/ProfileCard.module.css';

interface ProfileCardProps {
  userName?: string;
  userCareer: string;
  src?: StaticImageData | string;
}
export const ProfileCard = ({
  userName,
  userCareer,
  src = demo,
  ...props
}: ProfileCardProps) => {
  return (
    <div role={'userprofile'} className={styles.wrapper}>
      <Image
        src={src}
        alt={'유저 프로필 이미지'}
        className="rounded-full"
        width={56}
        height={56}
      />
      <div className={styles.wrapper2}>
        <span className={styles.username}>{userName} </span>
        <span className={styles.usercareer}>
          <span> 운동경력 {userCareer}</span>
        </span>
      </div>
    </div>
  );
};
