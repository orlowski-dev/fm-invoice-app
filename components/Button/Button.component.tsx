import type { ButtonProps } from ".";
import { makeClassList } from "@/lib/utils";
import "./Button.style.scss";

const Button = ({
  color,
  startIcon,
  loading,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button className={makeClassList(["btn", color ?? "primary"])} {...rest}>
      {children}
    </button>
  );
};

export default Button;
