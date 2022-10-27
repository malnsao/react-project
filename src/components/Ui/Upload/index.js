import styles from "./index.less";
import { useState } from "react";
import upload from "@/helpers/upload";
import { Upload } from "../Icon";
import { Img } from "@/components/Ui";

const Index = (props) => {
  const { title = "Click to upload documents", subTitle, onChange } = props;
  const [image, setImage] = useState();

  const onImageChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const res = await upload("/player-resource/create", file);
      if (res.success) {
        setImage(URL.createObjectURL(file));
        onChange && onChange(res.filePath);
      }
    }
  };

  return image ? (
    <div className={styles.file}>
      <Img src={image} />
    </div>
  ) : (
    <div className={styles.card}>
      <input type="file" onChange={onImageChange} />
      <Upload />
      <div className={styles.title}>{title}</div>
      <div className={styles.subTitle}>
        {subTitle}
        <span style={{ color: "#FA6E42" }}>*</span>
      </div>
    </div>
  );
};

export default Index;
