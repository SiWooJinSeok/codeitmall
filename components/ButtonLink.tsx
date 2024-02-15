import Link from "next/link";
import styles from "./Button.module.css";
import { ReactNode } from "react";

interface Props {
  className: string;
  children: ReactNode;
  href: string;
}

export default function ButtonLink({ className = "", ...props }: Props) {
  return <Link className={`${styles.button} ${className}`} {...props} />;
}
