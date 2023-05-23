
const Button = ({ onClick, className, value }) => {
  return (
    <button onClick={onClick} className={className}>{value}</button>
  );
};

export default Button;