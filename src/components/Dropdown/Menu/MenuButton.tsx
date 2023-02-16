import { FiPlusCircle } from 'react-icons/fi';
import menuButton from '@components/Dropdown/Menu/MenuButton.module.css';
import { widgetToggle } from '@atoms/Widget';
import { useRecoilState } from 'recoil';
interface MenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
export function MenuButton({ className }: MenuButtonProps): JSX.Element {
  const [istoggle, setToggle] = useRecoilState(widgetToggle);

  const changeToggle = () => {
    setToggle((prev: boolean) => !prev);
  };

  return (
    <button
      name="MenuButton"
      aria-label="MenuButton"
      id="MenuButton"
      type="button"
      className={className}
      onClick={changeToggle}
    >
      <FiPlusCircle className={menuButton.plusCircle} />
    </button>
  );
}
