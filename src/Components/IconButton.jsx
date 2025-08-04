// src/components/IconButton.jsx
const IconButton = ({
  icon: Icon,
  onClick,
  size = "sm",
  variant = "primary",
  className = "",
  label = "",
  ...props
}) => {
  const sizeClasses = {
    sm: "p-2 text",
    md: "p-3 text-base",
    lg: "p-4 text-lg",
  };

  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-transparent",
    danger: "bg-red-500 text-white hover:bg-red-600",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      className={`inline-flex  cursor-pointer  items-center justify-center rounded-full transition-colors duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      aria-label={label}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5 stroke-3"/>}
    </button>
  );
};

export default IconButton;
