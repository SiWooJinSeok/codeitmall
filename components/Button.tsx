import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  className: string;
  as: ReactNode;
}

export default function Button({ className = "", as, ...props }: Props) {
  return <button className={`${styles.button} ${className}`} {...props} />;
}
