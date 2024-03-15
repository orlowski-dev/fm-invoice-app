import type { ButtonHTMLAttributes, ReactElement } from "react";

export type ButtonColor = "primary" | "soft" | "dimmed" | "danger" | "plain";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  startIcon?: ReactElement;
  loading?: boolean;
}
