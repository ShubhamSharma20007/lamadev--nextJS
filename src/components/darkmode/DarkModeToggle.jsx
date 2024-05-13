import React, { useState } from "react";
import styles from "./darkmodetoggle.module.css";

const DarkModeToggle = () => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };

  return (
    <div className={styles.container} onClick={toggleMode}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={{
          transform: `translateX(${mode === "light" ? 0 : 18}px)`,
          background: mode === "light" ? "orange" : "#53c28b",
        }}
      />
    </div>
  );
};

export default DarkModeToggle;
