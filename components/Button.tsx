import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  children: ReactNode;
}

export default function Button({ className = "", ...props }: Props) {
  return <button className={`${styles.button} ${className}`} {...props} />;
}
