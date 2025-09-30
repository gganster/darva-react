import "./HelloWorld.css"

const HelloWorld = ({
  name,
  className
}) => (
  <span
    className={`hello-world ${className}`}
    style={{width: 100, backgroundColor: "red"}}
  >
    Bonjour {name} {1+1}
  </span>
)

export default HelloWorld