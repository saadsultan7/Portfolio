import React from "react"
import "./button.css"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <button ref={ref} className={`button ${className}`} {...props}>
        <span className="ripple"></span>
        <span>{children}</span>
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
