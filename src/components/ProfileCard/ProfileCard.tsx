import Image from 'next/image';
import demo from '@public/assets/profile_demo.jpg';
import styles from '@components/ProfileCard/ProfileCard.module.css';

interface ProfileCardProps {
  userName?: string;
  userCareer?: string;
  src?: string;
}
export const ProfileCard = ({
  userName,
  userCareer,
  ...props
}: ProfileCardProps) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={demo}
        alt={'유저 프로필 이미지'}
        className="rounded-full"
        width={56}
        height={56}
      />
      <div className={styles.wrapper2}>
        <span className={styles.username}>{userName} </span>
        <span className={styles.usercareer}>운동경력 {userCareer}년</span>
      </div>
    </div>
  );
};
