import { FiPlusCircle } from 'react-icons/fi';
import menuButton from '@components/Dropdown/Menu/MenuButton.module.css';
interface MenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
}
export function MenuButton({ className }: MenuButtonProps): JSX.Element {
  return (
    <button
      id="MenuButton"
      aria-label="open"
      type="button"
      className={className}
    >
      <FiPlusCircle className={menuButton.plusCircle} />
    </button>
  );
}
