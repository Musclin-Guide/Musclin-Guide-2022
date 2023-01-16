import { Header, TabBar, Widget } from '@components/index';
import styles from '@components/Layout/Layout.module.css';
import clsx from 'clsx';
import { ReactNode } from 'react';

export interface LayoutProps {
  className?: string;
  wrapperClassName?: string;
  children?: ReactNode;
}

export const Layout = ({
  className,
  wrapperClassName,
  children,
}: LayoutProps): JSX.Element => {
  return (
    <div className={clsx(styles.wrapper, wrapperClassName)}>
      <Header />
      <main className={clsx(styles.main, className)}>
        {/* {children} */}
        <section>
          국회는 의장 1인과 부의장 2인을 선출한다. 일반사면을 명하려면 국회의
          동의를 얻어야 한다. 대통령은 제3항과 제4항의 사유를 지체없이
          공포하여야 한다. 국가는 지역간의 균형있는 발전을 위하여 지역경제를
          육성할 의무를 진다. 환경권의 내용과 행사에 관하여는 법률로 정한다.
          대한민국의 경제질서는 개인과 기업의 경제상의 자유와 창의를 존중함을
          기본으로 한다. 국회는 의장 1인과 부의장 2인을 선출한다. 일반사면을
          명하려면 국회의 동의를 얻어야 한다. 대통령은 제3항과 제4항의 사유를
          지체없이 공포하여야 한다. 국가는 지역간의 균형있는 발전을 위하여
          지역경제를 육성할 의무를 진다. 환경권의 내용과 행사에 관하여는 법률로
          정한다. 대한민국의 경제질서는 개인과 기업의 경제상의 자유와 창의를
          존중함을 기본으로 한다. 국회는 의장 1인과 부의장 2인을 선출한다.
          일반사면을 명하려면 국회의 동의를 얻어야 한다. 대통령은 제3항과
          제4항의 사유를 지체없이 공포하여야 한다. 국가는 지역간의 균형있는
          발전을 위하여 지역경제를 육성할 의무를 진다. 환경권의 내용과 행사에
          관하여는 법률로 정한다. 대한민국의 경제질서는 개인과 기업의 경제상의
          자유와 창의를 존중함을 기본으로 한다. 국회는 의장 1인과 부의장 2인을
          선출한다. 일반사면을 명하려면 국회의 동의를 얻어야 한다. 대통령은
          제3항과 제4항의 사유를 지체없이 공포하여야 한다. 국가는 지역간의
          균형있는 발전을 위하여 지역경제를 육성할 의무를 진다. 환경권의 내용과
          행사에 관하여는 법률로 정한다. 대한민국의 경제질서는 개인과 기업의
          경제상의 자유와 창의를 존중함을 기본으로 한다. 3항과 제4항의 사유를
          지체없이 공포하여야 한다. 국가는 지역간의 균형있는 발전을 위하여
          지역경제를 육성할 의무를 진다. 환경권의 내용과 행사에 관하여는 법률로
          정한다. 대한민국의 경제질서는 개인과 기업의 경제상의 자유와 창의를
          존중함을 기본으로 한다 3항과 제4항의 사유를 지체없이 공포하여야 한다.
          국가는 지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를 진다.
          환경권의 내용과 행사에 관하여는 법률로 정한다. 대한민국의 경제질서는
          개인과 기업의 경제상의 자유와 창의를 존중함을 기본으로 한다 3항과
          제4항의 사유를 지체없이 공포하여야 한다. 국가는 지역간의 균형있는
          발전을 위하여 지역경제를 육성할 의무를 진다. 환경권의 내용과 행사에
          관하여는 법률로 정한다. 대한민국의 경제질서는 개인과 기업의 경제상의
          자유와 창의를 존중함을 기본으로 한다 정한다. 대한민국의 경제질서는
          개인과 기업의 경제상의 자유와 창의를 존중함을 기본으로 한다 3항과
          제4항의 사유를 지체없이 공포하여야 한다. 국가는 지역간의 균형있는
          발전을 위하여 지역경제를 육성할 의무를 진다. 환경권의 내용과 행사에
          관하여는 법률로 정한다. 대한민국의 경제질서는 개인과 기업의 경제상의
          자유와 창의를 존중함을 기본으로 한다 3항과 제4항의 사유를 지체없이
          공포하여야 한다. 국가는 지역간의 균형있는 발전을 위하여 지역경제를
          육성할 의무를 진다. 환경권의 내용과 행사에 관하여는 법률로 정한다.
          대한민국의 경제질서는 개인과 기업의 경제상의 자유와 창의를 존중함을
          기본으로 한다
        </section>
        <Widget />
      </main>
      <TabBar />
    </div>
  );
};
