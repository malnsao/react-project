import style from "./index.less";
import check from "@/assets/index/check.svg";

const Index = (props) => {
  const { children, onChange, value, checked = false } = props || {};
  return (
    <div className={style.radio}>
      <input type="radio" value={value} id={value} name="radio" />
      <label htmlFor={value} className={style.label}>
        <span className={style.text}>{children}</span>
      </label>
    </div>
  );
};

export default Index;
