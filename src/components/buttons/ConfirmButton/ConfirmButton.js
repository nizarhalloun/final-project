import './ConfirmButton.css';

const ConfirmButton = ({ text, width, disabled }) => {
  const style = {
    width,
  };

  return (
    <button className="confirmButton" style={style} disabled={disabled}>
      {text}
    </button>
  );
};

export default ConfirmButton;
