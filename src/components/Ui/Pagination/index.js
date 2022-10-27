import Full from "./full";
import Simple from "./simple";

export default (props) => {
  const { mode = "full" } = props;
  return mode === "full" ? <Full {...props} /> : <Simple {...props} />;
};
