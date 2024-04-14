import "./button.css";

function Button({ icon, className, children, onClick }) {
    return (
        <button className={`button ${className}`} onClick={onClick}>
            {icon}
            {children}
        </button>
    );
}

export default Button;
