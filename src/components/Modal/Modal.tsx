import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import React, { MouseEvent, useEffect, useRef } from "react";

interface ModalProps {
  children: React.ReactNode;
  close: () => void;
}

export const Modal = ({ children, close }: ModalProps) => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        close();
      }
    });

    return () => {
      document.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
          close();
        }
      });
      document.body.style.overflowY = "visible";
    };
  }, []);

  const handleClick = (event: MouseEvent) => {
    if (event.target === containerRef.current) {
      close();
    }
  };

  return (
    <>
      {createPortal(
        <div className={styles.modal} onClick={handleClick}>
          <div ref={containerRef} className={styles.modalContain}>
            <div className={styles.modalBody}>
                <button onClick={close} className={styles.Button}>
                  X
                </button>
              <div className={styles.Content}>{children}</div>
            </div>
          </div>
        </div>,
        document.getElementById("modal-root") as HTMLDivElement
      )}
    </>
  );
};
