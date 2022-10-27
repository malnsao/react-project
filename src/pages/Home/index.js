import styles from "./index.less";
import { Card, Button, Img } from "@/components/Ui";
import { isMobile, getGameUrl } from "@/utils";
import { getBanner } from "@/services/home";
import { getGames } from "@/services/game";
import { Link } from "react-router-dom";
import Swiper from "@/components/Swiper";
import Title from "./Title";
import ReadMore from "./ReadMore";

import hover_video from "@/assets/index/hover_video.png";
import advantage_user from "@/assets/index/user.png";
import free from "@/assets/index/free.png";
import good from "@/assets/index/good.png";
import gou from "@/assets/index/gou.png";

import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import SearchBox from "@/components/SearchBox";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPromotionsList } from "@/services/promotions";
import { isArray } from "lodash";
import { onChange } from "@/store/reducer/authSlice";


export default () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const language = useSelector((state) => state.language);
  const { isLogin } = useSelector((state) => state.auth);

  const [banners, setBanners] = useState({});

  

  const fetchBanner = async () => {
    const res = await getBanner();
    if (res?.content) {
      const content = JSON.parse(res.content.replace(/'/g, '"'));
      const banners = {};
      Object.keys(content).forEach((item) => {
        const _content = content[item].map((item) => ({
          ...item,
          renderItem: renderBannerItem,
        }));
        banners[item] = _content;
      });
      setBanners(banners);
    }
  };


  return (
    <div className={styles.home}>
      {banners[language.locale]?.length && renderBanner()}
    </div>
  );
};
