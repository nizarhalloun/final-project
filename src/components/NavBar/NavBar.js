import NavBarButton from '../NavBarButton';
import Logo from '../Logo';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navBar">
      <NavBarButton text="חיפוש משתמשים" path="/" />
      <NavBarButton text="תורים מתוכננים" path="/" />
      <NavBarButton text="הוספת תורים" path="/" />
      <Logo />
    </div>
  );
};

export default NavBar;
