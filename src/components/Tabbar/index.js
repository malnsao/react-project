import styles from "./index.less";
import { Home, User, Promotions, AcCharge } from "@/components/Ui/Icon";
import { useLocation, useNavigate } from "react-router-dom";

const Index = () => {
  const { pathname = "" } = useLocation() || {};
  const navigate = useNavigate();

  const tabbar = [
    {
      icon: <Home />,
      name: "Home",
      path: "/home",
    },
    {
      icon: <Promotions />,
      name: "Promotions",
      path: "/promotions",
    },
    {
      icon: <AcCharge />,
      name: "Cashier",
      path: "/depositwithdraw",
    },
    {
      icon: <User />,
      name: "Account",
      path: "/personal",
    },
  ];
  return (
    <div className={styles.tabbar}>
      <div className={styles.content}>
        {tabbar.map((item, index) => (
          <div
            className={`${styles.item} ${
              pathname === item.path ? styles.active : ""
            }`}
            key={index}
            onClick={() => navigate(item.path)}>
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
