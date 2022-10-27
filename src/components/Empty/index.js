import styles from "./index.less";

import empty from "@/assets/common/empty.png";
import { Img } from "@/components/Ui";

const Index = (props) => {
  const { className = "", text = "You currently have no offers to claim" } =
    props;
  return (
    <div className={`${styles.empty} ${className}`}>
      <div className={styles.content}>
        <Img src={empty} />
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Index;
