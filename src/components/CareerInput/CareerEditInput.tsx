import { EditButton } from '@components/EditButton/index';
import { CareerInput } from '@components/CareerInput/CareerInput';
import Inputstyles from '@components/CareerInput/CareerInput.module.css';
import Buttonstyles from '@components/EditButton/EditButton.module.css';
import { empty } from '@components/CareerInput/CareerInput';
import { FiX, FiCheck, FiCheckSquare } from 'react-icons/fi';
import clsx from 'clsx';

export const CareerEditInput = ({ disabled = false }) => {
  return (
    <div className={clsx('mypageWrapper', 'w-80 h-10 gap-6')}>
      <div className="flex gap-5">
        <CareerInput
          disabled={disabled}
          id="Year"
          List={empty}
          className={clsx(Inputstyles.inputCommon, Inputstyles.inputNormalSize)}
          selectName="year"
          text={'년'}
        />
      </div>
      <div className="flex gap-2 items-center">
        <EditButton
          disabled={!disabled}
          type="button"
          title="체크하기"
          icon={<FiCheck className={Buttonstyles.icon} />}
        ></EditButton>
        <EditButton
          disabled={!disabled}
          type="button"
          title="나가기"
          icon={<FiX className={Buttonstyles.icon} />}
        ></EditButton>
        <EditButton
          disabled={disabled}
          type="button"
          title="수정하기"
          icon={<FiCheckSquare className={Buttonstyles.icon} />}
        ></EditButton>
      </div>
    </div>
  );
};
