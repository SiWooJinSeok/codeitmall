import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className = "", ...props }: Props) {
  const classNames = `${styles.input} ${className}`;
  return <input className={classNames} {...props} />;
}
