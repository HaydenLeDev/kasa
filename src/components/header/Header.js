import Logo from "./Logo";
import Menu from "./Menu";
import '../../style/components/header/header.css';

function Header() {
  return (
    <div className="Header">
      <Logo/>
      <Menu/>
    </div>
  );
}

export default Header;
