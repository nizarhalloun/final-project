import { useHistory } from 'react-router-dom';
import './NavBarButton.css';

const NavBarButton = ({ text, path }) => {
  const history = useHistory();
  const onClick = () => history.push(path);

  return (
    <button className="navBarButton" onClick={onClick}>
      {text}
    </button>
  );
};

export default NavBarButton;
