import { EditButton } from '@components/EditButton/EditButton';
import { FiX, FiCheck, FiCheckSquare } from 'react-icons/fi';
import Buttonstyles from '@components/EditButton/EditButton.module.css';
import InputStyles from '@components/NomalEditInput/NomalEditInput.module.css';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface NomalEditInput extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icon?: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const NomalEditInput = ({
  type,
  name,
  className,
  disabled = false,
  ...props
}: NomalEditInput) => {
  return (
    <div className={clsx('mypageWrapper', 'bg-slate-200 w-[312px]')}>
      <label htmlFor={type} className="a11yHidden">
        Enter your globex.com email:
      </label>
      <input
        disabled={disabled}
        className={clsx('primaryFocusVisible', InputStyles.input, className)}
        type={type}
        id={type}
        name={name}
        minLength={10}
        required
        {...props}
      />
      <div className={Buttonstyles.wrapper}>
        <EditButton
          disabled={disabled}
          type="button"
          title="체크하기"
          icon={<FiCheck className={Buttonstyles.icon} />}
        ></EditButton>
        <>
          <EditButton
            disabled={disabled}
            type="button"
            title="나가기"
            icon={<FiX className={Buttonstyles.icon} />}
          ></EditButton>
          <EditButton
            disabled={!disabled}
            type="button"
            title="수정하기"
            icon={<FiCheckSquare className={Buttonstyles.icon} />}
          ></EditButton>
        </>
      </div>
    </div>
  );
};
