import { useEffect, useState } from "react";
import style from "./RadioGroup.less";

const Index = (props) => {
  const {
    onChange = null,
    options = [],
    defaultValue = [],
    children,
  } = props || {};

  return (
    <div className={style.radioGroup} onChange={onChange}>
      {children}
    </div>
  );
};

export default Index;
