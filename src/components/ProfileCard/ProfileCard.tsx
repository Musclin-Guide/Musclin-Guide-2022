import Image from 'next/image';
import demo from '@public/assets/profile_demo.jpg';
import styles from '@components/ProfileCard/ProfileCard.module.css';

interface ProfileCardProps {
  userName?: string;
  userCareer: string;
  src?: string;
  undertext?: string;
}
export const ProfileCard = ({
  userName,
  userCareer,
  undertext = '년',
  ...props
}: ProfileCardProps) => {
  if (userCareer < '1') {
    userCareer = '1';
    undertext = '년 이하';
  }
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
        <span className={styles.usercareer}>
          운동경력 {userCareer}
          <span>{undertext}</span>
        </span>
      </div>
    </div>
  );
};
