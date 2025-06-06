import React from "react";
import styles from "./TextAnimLoader.module.css";

const TextAnimLoader: React.FC = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className={styles.loader} />
    </div>
  );
};

export default TextAnimLoader;
