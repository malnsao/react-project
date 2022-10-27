import styles from "./index.less";
import loadingIcon from "@/assets/icon/loading.svg";
import emptyIcon from "@/assets/common/empty.png";
import { Img } from "@/components/Ui";

export default (props) => {
  const {
    dataSource = [],
    columns = [],
    rowKey = "key",
    emptyText = "No Data",
    loading = false,
  } = props;

  const Empty = (
    <tr>
      <td
        className={`
          ${styles["table-cell"]}
        `}
        colSpan={columns.length}
        align="center">
        <div className={styles["table-empty"]}>
          <Img className={styles["table-empty-img"]} src={emptyIcon} />
          <div className={styles["table-empty-text"]}>{emptyText}</div>
        </div>
      </td>
    </tr>
  );
  const Loading = (
    <div className={styles["loading-wrap"]}>
      <Img src={loadingIcon} />
    </div>
  );
  const cols = columns.map((item) => {
    return (
      <col
        key={item.dataIndex}
        style={{ width: `${item.width || 100}px` }}></col>
    );
  });
  const ths = columns.map((item) => {
    const { align = "left" } = item;
    return (
      <th
        className={`
          ${styles["table-cell"]}
          ${styles[`table-cell-${align}`]}
          ${item.className || ""}
        `}
        key={item.dataIndex}>
        {item.title}
      </th>
    );
  });
  const trs = dataSource.map((row, index) => {
    return <tr key={row[rowKey]}>{getIds(row, index)}</tr>;
  });
  function getIds(row, index) {
    return columns.map((item) => {
      const { align = "left", render } = item;
      return (
        <td
          className={`
            ${styles["table-cell"]}
            ${styles[`table-cell-${align}`]}
            ${item.className || ""}
          `}
          key={item.dataIndex}>
          {render
            ? render(row[item.dataIndex], row, index)
            : row[item.dataIndex]}
        </td>
      );
    });
  }
  return (
    <div className={styles["table-container"]}>
      <table className={styles["table"]}>
        <colgroup>{cols}</colgroup>
        <thead>
          <tr>{ths}</tr>
        </thead>
        <tbody>
          {trs}
          {dataSource.length === 0 ? Empty : null}
        </tbody>
      </table>
      {loading ? Loading : null}
    </div>
  );
};
