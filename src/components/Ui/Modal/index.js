import { createPortal } from "react-dom";
import useScrollPenetrate from "@/common/useScrollPenetrate";

import { Close } from "../Icon";

import styles from "./index.less";
import { Button } from "..";
import { useEffect } from "react";

const Index = (props) => {
  const [modalVisible, modalHide] = useScrollPenetrate();

  const {
    children,
    visible = false,
    title = "",
    onCancel,
    onOk = null,
    form = "",
    showFooter = true,
  } = props;

  useEffect(() => {
    if (visible) {
      modalVisible();
    } else {
      modalHide();
    }
  }, [visible]);

  return (
    visible &&
    createPortal(
      <div className={styles.modal}>
        <div className={styles.dialog}>
          <div className={styles.header}>
            <div className={styles.title}>{title}</div>
            <div className={styles.img} onClick={onCancel}>
              <Close />
            </div>
          </div>
          <div className={styles.body}>{children}</div>
          {showFooter && (
            <div className={styles.footer}>
              <Button onClick={onOk} form={form} className={styles.button}>
                Confirm
              </Button>
            </div>
          )}
        </div>
      </div>,
      document.body,
    )
  );
};

export default Index;
