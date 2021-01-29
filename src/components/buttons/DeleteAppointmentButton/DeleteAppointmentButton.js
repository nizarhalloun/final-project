import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Button from '@material-ui/core/Button';

import './DeleteAppointmentButton.css';
const style = {
  color: '#B00320',
};

const DeleteAppointmentButton = () => {
  return (
    <Button
      variant="outlined"
      color="secondary"
      className="deleteAppointmentButton"
    >
      מחק תור <DeleteOutlineOutlinedIcon style={style} />
    </Button>
  );
};

export default DeleteAppointmentButton;
