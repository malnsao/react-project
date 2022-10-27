import styles from "./index.less";

const Index = (props) => {
  const { children, className, ...otherProps } = props;
  return (
    <div className={`${styles.card} ${className}`} {...otherProps}>
      {children}
    </div>
  );
};

export default Index;
