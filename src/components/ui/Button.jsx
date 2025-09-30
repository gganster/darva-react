import "./Button.css"

const Button = ({children, onClick, color = "primary"}) => {
  return (
    <button
      className={`Button Button-${color}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
} 

export default Button;