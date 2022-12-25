import { EditButton, CareerInput } from '@components/index';
import Inputstyles from '@components/CareerInput/CareerInput.module.css';
import Buttonstyles from '@components/EditButton/EditButton.module.css';
import {
  ListNumber,
  ListNumber2,
  empty,
} from '@components/CareerInput/CareerInput';
import { FiX, FiCheck, FiCheckSquare, FiCalendar } from 'react-icons/fi';
import clsx from 'clsx';

export const DataEditInput = ({ disabled = false }) => {
  return (
    <div className="w-80 h-10 gap-6  flex justify-between items-center">
      <div className="flex gap-5">
        <CareerInput
          disabled={disabled}
          id="Year"
          List={ListNumber2}
          className={clsx(Inputstyles.inputCommon, Inputstyles.inputWideSize)}
          selectName="year"
          text={'년'}
        />
        <CareerInput
          disabled={disabled}
          id="Month"
          List={ListNumber}
          className={clsx([
            Inputstyles.inputCommon,
            Inputstyles.inputNormalSize,
          ])}
          selectName="month"
          text={'월'}
        />
        <CareerInput
          disabled={disabled}
          id="Day"
          List={ListNumber}
          className={clsx([
            Inputstyles.inputCommon,
            Inputstyles.inputNormalSize,
          ])}
          selectName="day"
          text={'일'}
        />
      </div>
      <div className={Buttonstyles.wrapper}>
        <EditButton
          disabled={!disabled}
          type="button"
          title="나가기"
          icon={<FiCalendar className={Buttonstyles.icon} />}
        ></EditButton>
        <EditButton
          disabled={disabled}
          type="button"
          title="수정하기"
          icon={<FiCheck className={Buttonstyles.icon} />}
        ></EditButton>
      </div>
    </div>
  );
};
