import { createPortal } from "react-dom";
import styles from "./SearchDropDown.module.css";
import React, { MouseEvent, useEffect, useRef } from "react";

interface SearchDropDownProps {
  children: React.ReactNode;
  close: () => void;
}

export const SearchDropDown = ({ children, close }: SearchDropDownProps) => {

  const overlayRef = useRef(null);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "visible";
    };
  }, []);

  const handleClick = (event: MouseEvent) => {
    if (event.target === overlayRef.current) {
      close();
    }
  };

  return (
    <>
      {createPortal(
        <div ref={overlayRef} className={styles.overlay} onClick={handleClick}>
          <div className={styles.dropDown}>
              <div className={styles.Content}>{children}</div>
          </div>
        </div>,
        document.getElementById("dropDown-root") as HTMLDivElement
      )}
    </>
  );
};
