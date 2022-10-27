import style from "./index.less";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthModal from "@/components/Auth";

import Palette from "@/components/Palette";
import Tabbar from "@/components/Tabbar";
import { useLocation } from "react-router-dom";
import {
  filterHeaderComp,
  filterFooterComp,
  filterTabbarComp,
} from "@/common/constant";

import { isMobile } from "@/utils";
import { useEffect } from "react";

const Index = (props) => {
  const { pathname = "" } = useLocation() || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {filterHeaderComp(pathname) && <Header />}
      <div className={style.content}>
        {props.children}
        <AuthModal />
        <Palette />
      </div>
      {isMobile() && filterTabbarComp(pathname) && <Tabbar />}

      {filterFooterComp(pathname) && <Footer />}
    </>
  );
};
export default Index;
