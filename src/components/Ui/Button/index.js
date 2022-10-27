import { useEffect, useState } from "react";
import styles from "./index.less";

const Index = (props) => {
  const {
    onClick = null,
    form = "",
    children = "Button",
    className = "",
  } = props || {};
  const [type, setType] = useState("button");
  useEffect(() => {
    if (form) {
      setType("submit");
    }
  }, []);
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      htmltype={type}
      form={form}>
      {children}
    </button>
  );
};

export default Index;
