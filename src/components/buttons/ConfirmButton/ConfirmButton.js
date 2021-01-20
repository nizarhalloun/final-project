import './ConfirmButton.css';

const ConfirmButton = ({ text, width }) => {
  const style = {
    width,
  };

  return (
    <button className="confirmButton" style={style}>
      {text}
    </button>
  );
};

export default ConfirmButton;
