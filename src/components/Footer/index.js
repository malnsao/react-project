import styles from "./index.less";
import { isMobile } from "@/utils";
import Swiper from "@/components/Swiper";

const Index = () => {
 
  const renderTrademarkPc = () => (
    <div className={styles.trademarkPc}>
      <div className={styles.box}>
        <Swiper
          slidesPerGroup={isMobile() ? 3 : 6}
          slidesPerView={isMobile() ? 3 : "auto"}
          data={trademarkData.map((item) => ({
            ...item,
            renderItem: renderTrademarkPcItem,
          }))}
          classNavigation={styles.navigation}
          loopedSlides={6}
        />
      </div>
    </div>
  );


  return (
    <div className={styles.footer}>
      footer
    </div>
  )
   
};

export default Index;
