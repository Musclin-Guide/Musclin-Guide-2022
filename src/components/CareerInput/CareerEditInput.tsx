import { CareerButton, CareerInput } from '@components/CareerInput/index';
import Inputstyles from '@components/CareerInput/CareerInput.module.css';
import Buttonstyles from '@components/CareerInput/CareerButton.module.css';
import {
  ListNumber,
  ListNumber2,
  empty,
} from '@components/CareerInput/CareerInput';
import { FiX, FiCheck, FiCheckSquare, FiCalendar } from 'react-icons/fi';
import clsx from 'clsx';

export const CareerEditInput = ({ disabled = false }) => {
  return (
    <div role={'list'} className={clsx(Buttonstyles.wrapper)}>
      <div className="w-80 h-10 gap-6  flex justify-between items-center">
        <div className="flex gap-5">
          <CareerInput
            disabled={disabled}
            id="Year"
            List={ListNumber}
            className={clsx(
              Inputstyles.inputCommon,
              Inputstyles.inputNormalSize
            )}
            selectName="year"
            text="년"
          />
          <CareerInput
            disabled={disabled}
            id="Month"
            List={ListNumber}
            className={clsx([
              Inputstyles.inputCommon,
              Inputstyles.inputNormalSize,
            ])}
            selectName="Month"
            text="개월"
          />
        </div>
        <div className="flex gap-2 items-center">
          <CareerButton
            disabled={!disabled}
            type="button"
            title="체크하기"
            icon={<FiCheck className={Buttonstyles.icon} />}
          ></CareerButton>
          <CareerButton
            disabled={!disabled}
            type="button"
            title="나가기"
            icon={<FiX className={Buttonstyles.icon} />}
          ></CareerButton>
          <CareerButton
            disabled={disabled}
            type="button"
            title="수정하기"
            icon={<FiCheckSquare className={Buttonstyles.icon} />}
          ></CareerButton>
        </div>
      </div>
    </div>
  );
};
