const Button = ({children, onClick, variant = "primary", className = ""}) => {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-800 text-white",
    secondary: "bg-gray-600 hover:bg-gray-800 text-white",
    warning: "bg-orange-600 hover:bg-orange-800 text-white",
    danger: "bg-red-600 hover:bg-red-800 text-white",
    link: "text-blue-600 hover:text-blue-800 bg-transparent"
  };

  return (
    <button
      className={`cursor-pointer px-4 py-2 rounded-md font-medium transition-colors ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
} 

export default Button;