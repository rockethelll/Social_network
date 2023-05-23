
const Button = ({ logoutClick, value }) => {
  return (
    <button onClick={logoutClick} >{value}</button>
  );
};

export default Button;