import { Modal, Input, Card, PopupMb, Img } from "@/components/Ui";
import Empty from "@/components/Empty";

import styles from "./index.less";
import { isMobile, getGame2Url } from "@/utils";
import { useEffect, useState } from "react";
import { getGames } from "@/services/game";
import { Link } from "react-router-dom";

const Index = (props) => {
  const { visible, onClose } = props;

  const [games, SetGames] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const fetchGames = async () => {
    const res = await getGames({ gameName: searchValue });
    SetGames(res.list);
  };

  const onSearch = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value.length > 3) {
      fetchGames();
    }
  };

  // useEffect(() => {
  //   fetchGames();
  // }, []);

  const renderPc = () => (
    <Modal
      visible={visible}
      title="Search Games"
      onCancel={onClose}
      showFooter={false}>
      <div className={styles.search_box}>
        <Input
          placeholder="Search for games"
          onChange={onSearch}
          value={searchValue}
        />
        {games.length > 0 ? (
          <div className={styles.content}>
            {games.map((item, index) => (
              <div className={styles.item} key={index}>
                <Card className={styles.card}>
                  <Img src={item.gameImgUrl} />
                </Card>
                <div className={styles.title}>{item.gameName}</div>
                <div className={styles.tip}>{item.gameTypeName}</div>
              </div>
            ))}
          </div>
        ) : (
          searchValue.length > 3 && <Empty className={styles.empty} />
        )}
      </div>
    </Modal>
  );
  const renderMb = () => (
    <PopupMb visible={visible} title="Search Games" onClose={onClose}>
      <div className={styles.search_box}>
        <Input
          placeholder="Search for games"
          value={searchValue}
          onChange={onSearch}
        />
        {games.length > 0 ? (
          <div className={styles.content}>
            {games.map((item) => (
              <div
                className={styles.item}
                key={`${item.gameNameId}-${item.gameApiId}`}>
                <Link
                  target="_blank"
                  to={getGame2Url(
                    1,
                    item.gameCode,
                    item.gameApiId,
                    item.gameName,
                  )}>
                  <Card className={styles.card}>
                    <Img src={item.gameImgUrl} />
                  </Card>
                </Link>
                <div className={styles.title}>{item.gameName}</div>
                <div className={styles.tip}>{item.gameTypeName}</div>
              </div>
            ))}
          </div>
        ) : (
          searchValue.length > 3 && (
            <Empty
              className={styles.empty}
              text="Sorry, we couldn’t find the game you were looking for.Please try another keyword."
            />
          )
        )}
      </div>
    </PopupMb>
  );
  return isMobile() ? renderMb() : renderPc();
};

export default Index;
