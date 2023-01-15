import { FiPlusCircle } from 'react-icons/fi';
import menuButton from '@components/Dropdown/Menu/MenuButton.module.css';
import { widgetToggle } from '@atoms/Widget';
import { useRecoilState } from 'recoil';
interface MenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
export function MenuButton({ className }: MenuButtonProps): JSX.Element {
  const [istoggle, settoggle] = useRecoilState(widgetToggle);

  const changeToggle = () => {
    settoggle((prev: boolean) => !prev);
  };

  return (
    <button
      id="MenuButton"
      // aria-label="open"
      type="button"
      className={className}
      onClick={changeToggle}
    >
      <FiPlusCircle className={menuButton.plusCircle} />
    </button>
  );
}
