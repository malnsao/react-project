import style from "./index.less";

import { Backtotop, Help, Onlinesupport } from "@/components/Ui/Icon";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { isMobile,  } from "@/utils";

const Index = () => {
  const navigate = useNavigate();

  const renderPc = () => (
    <div className={style.ul}>
      <div className={style.li} >
        <div className={style.img}>
          <Onlinesupport />
        </div>
        <div className={style.text}>
          <FormattedMessage id="LIVE_CHAT" />
        </div>
      </div>
      <div className={style.li} onClick={() => navigate("/helpcenter/aboutus")}>
        <div className={style.img}>
          <Help />
        </div>
        <div className={style.text}>
          <FormattedMessage id="HELP" />
        </div>
      </div>
      <div
        className={style.li}
        onClick={() => {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }}>
        <div className={style.img}>
          <Backtotop />
        </div>
        <div className={style.text}>
          <FormattedMessage id="TOP" />
        </div>
      </div>
    </div>
  );

  const renderMb = () => (
    <div className={style.img} >
      <Onlinesupport />
    </div>
  );

  return (
    <div className={style.palette}>{isMobile() ? renderMb() : renderPc()}</div>
  );
};

export default Index;
