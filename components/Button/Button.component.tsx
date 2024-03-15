import type { ButtonProps } from ".";
import { makeClassList } from "@/lib/utils";
import "./Button.style.scss";
import { FaSpinner } from "react-icons/fa";

const Button = ({
  color,
  startIcon,
  loading,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={makeClassList([
        "btn",
        color ?? "primary",
        startIcon ? "with-start-icon" : null,
      ])}
      disabled={loading}
      {...rest}
    >
      {startIcon ? <span className="start-icon">{startIcon}</span> : null}
      {children}
      {loading ? (
        <span className="loading">
          <FaSpinner className="spinner" />
        </span>
      ) : null}
    </button>
  );
};

export default Button;
