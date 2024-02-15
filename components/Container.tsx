import { ReactNode } from "react";
import styles from "./Container.module.css";

interface Props {
  className?: string;
  page?: boolean;
  children: ReactNode;
}

export default function Container({
  className = "",
  page = false,
  children,
}: Props) {
  const classNames = `${styles.container} ${
    page ? styles.page : ""
  } ${className}`;
  return <div className={classNames}>{children}</div>;
}
