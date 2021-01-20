import { useHistory } from 'react-router-dom';
import './NavBarButton.css';

const NavBarButton = ({ text, path }) => {
  const history = useHistory();
  const onClick = () => history.push(path);

  return (
    <div className="navBarButton" onClick={onClick}>
      {text}
    </div>
  );
};

export default NavBarButton;
