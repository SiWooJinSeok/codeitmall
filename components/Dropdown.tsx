import { useEffect, useState, useRef, MouseEvent } from "react";
import styles from "./Dropdown.module.css";
import arrowImg from "@/public/arrow.svg";
import Image from "next/image";

interface Option {
  label: string;
  value: string;
}

interface Props {
  className: string;
  name: string;
  value: string;
  options: Option[];
  onChange: (name: string, value: string) => void;
}

export default function Dropdown({
  className,
  name,
  value,
  options,
  onChange,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLDivElement | null>(null);

  function handleInputClick() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function handleBlur() {
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent<Element, MouseEvent>) {
      const isInside = inputRef.current?.contains(e.target as Node);
      if (!isInside) {
        setIsOpen(false);
      }
    }

    window.addEventListener(
      "click",
      handleClickOutside as unknown as EventListener
    );
    return () => {
      window.removeEventListener(
        "click",
        handleClickOutside as unknown as EventListener
      );
    };
  }, []);

  const classNames = `${styles.input} ${
    isOpen ? styles.opened : ""
  } ${className}`;
  const selectedOption = options.find((option) => option.value === value);

  return (
    <div
      className={classNames}
      onClick={handleInputClick}
      onBlur={handleBlur}
      ref={inputRef}
    >
      {selectedOption?.label}
      <Image
        className={styles.arrow}
        src={arrowImg.src}
        width={12}
        height={9}
        alt="▼"
      />
      <div className={styles.options}>
        {options.map((option) => {
          const selected = value === option.value;
          const className = `${styles.option} ${
            selected ? styles.selected : ""
          }`;
          return (
            <div
              className={className}
              key={option.value}
              onClick={() => onChange(name, option.value)}
            >
              {option.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
