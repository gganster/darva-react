import "./TextInput.css"

const TextInput = ({label, errorMessage, className, ...rest}) => {
  return (
    <>
      {label ?
        <label className="TextInput-label">
          {label}
        </label>
        : null
      }
      <input
        {...rest}
        className={`TextInput ${className}`}
      />
      {errorMessage ? <span className="TextInput-error">{errorMessage}</span> : null}
    </>
  )
}

export default TextInput;