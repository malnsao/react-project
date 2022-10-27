import styles from "./index.less";

const Index = (props) => {
  const { className = "", src = "", alt = "", onClick = null } = props;
  return (
    <img
      className={`${styles.img} ${className}`}
      src={src}
      alt={alt}
      onClick={onClick}
    />
  );
};

export default Index;
