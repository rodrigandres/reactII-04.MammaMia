const Button = ({ children, type, onChange, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      onChange={onChange}
      type={type}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
