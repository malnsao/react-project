import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import isToday from "dayjs/plugin/isToday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import localeData from "dayjs/plugin/localeData";
import "dayjs/locale/zh-cn";

import styles from "./index.less";
import { useState } from "react";
import { Button } from "@/components/Ui";
import UseRefClose from "@/common/useRefClose";

import { NextMonth, NextYear, PrevMonth, PrevYear } from "@/components/Ui/Icon";

const Index = (props) => {
  const { onChange, textAlign = "center", placeholder = "YYMMDD" } = props;
  dayjs.locale("zh-cn");
  dayjs.extend(isoWeek);
  dayjs.extend(isToday);
  dayjs.extend(weekOfYear);
  dayjs.extend(localeData);

  const [today, setToday] = useState(dayjs());
  const [currentDate, setCurrentDate] = useState(today.date(1));
  const [year, setYear] = useState(today.year());

  const [visible, setVisible] = useState(false);

  const [visibleYear, setVisibleYear] = useState(false);

  const [visibleMonth, setVisibleMonth] = useState(false);

  const [value, setValue] = useState("");

  const dateArr = Array.from({ length: 35 }).map((item, index) => {
    return dayjs(currentDate.day(1)).add(index, "day");
  });

  const newDateArr = () => {
    const newArr = [];
    for (var i = 0; i < dateArr.length; i = i + 7) {
      newArr.push(dateArr.slice(i, i + 7));
    }
    return newArr;
  };

  const dateYearArr = Array.from({ length: 12 }).map((item, index) => {
    return dayjs()
      .year(parseInt(year / 10) * 10 - 1)
      .add(index, "year");
  });

  const dateMonthArr = Array.from({ length: 12 }).map((item, index) => {
    return dayjs().month(index);
  });

  const toOtherYear = (to) => {
    const lastYear = currentDate.year(currentDate.year() + to).date(1);
    setCurrentDate(lastYear);
  };

  const toOtherMonth = (to) => {
    const lastMonth = currentDate.month(currentDate.month() + to).date(1);
    setCurrentDate(lastMonth);
  };

  const toToday = () => {
    setToday(dayjs());
    setCurrentDate(dayjs().date(1));
    setVisible(false);
  };

  const renderDay = () => (
    <div className={styles.calendar}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.arrow} onClick={() => toOtherYear(-1)}>
            <PrevYear />
          </div>
          <div className={styles.arrow} onClick={() => toOtherMonth(-1)}>
            <PrevMonth />
          </div>
          <div className={styles.text}>
            <div
              onClick={() => {
                setVisibleYear(true);
              }}
              className={styles.btn_year}>
              {currentDate.year()}
            </div>
            -
            <div
              className={styles.btn_month}
              onClick={() => {
                setVisibleMonth(true);
              }}>
              {currentDate.month() + 1}
            </div>
          </div>
          <div className={styles.arrow} onClick={() => toOtherMonth(1)}>
            <NextMonth />
          </div>
          <div className={styles.arrow} onClick={() => toOtherYear(1)}>
            <NextYear />
          </div>
        </div>
        <div className={styles.day}>
          <table className={styles.content}>
            <thead>
              <tr>
                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(
                  (item, index) => (
                    <th key={index}>
                      <div className={styles.week}>{item}</div>
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {newDateArr().map((item, index) => (
                <tr key={index}>
                  {item.map((i) => (
                    <td
                      key={i.date()}
                      onClick={() => {
                        setToday(i);
                        setVisible(false);
                        onChange(
                          i,
                          `${today.year()}年${
                            today.month() + 1
                          }月${today.date()}日`,
                        );
                        setValue(
                          `${today.year()}-${
                            today.month() + 1
                          }-${today.date()}`,
                        );
                      }}>
                      <div
                        className={`${styles.cell} ${
                          i.month() === currentDate.month() &&
                          styles.cell_in_view
                        } ${i.isSame(today, "day") && styles.cell_selected}`}>
                        {i.date()}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <Button className={styles.buttonToday} onClick={() => toToday()}>
            Today
          </Button>
        </div>
      </div>
    </div>
  );

  const renderMonth = () => (
    <div className={styles.calendar}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.arrow} onClick={() => toOtherYear(-1)}>
            <PrevYear />
          </div>
          <div className={styles.text}>
            <div className={styles.btn_year}>{currentDate.year()}</div>
          </div>
          <div className={styles.arrow} onClick={() => toOtherYear(1)}>
            <NextYear />
          </div>
        </div>
        <div className={styles.month}>
          {dateMonthArr.map((item, index) => (
            <div
              key={index}
              className={`${styles.cell} `}
              onClick={() => {
                setCurrentDate(item.date(1));
                setVisibleMonth(false);
              }}>
              {item.month() + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderYear = () => (
    <div className={styles.calendar}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div
            className={styles.arrow}
            onClick={() => {
              setYear(year - 10);
            }}>
            <PrevYear />
          </div>
          <div className={styles.text}>
            <div className={styles.btn_year}>{dateYearArr[0].year() + 1}</div>-
            <div className={styles.btn_month}>
              {dateYearArr[dateYearArr.length - 2].year()}
            </div>
          </div>

          <div
            className={styles.arrow}
            onClick={() => {
              setYear(year + 10);
            }}>
            <NextYear />
          </div>
        </div>

        <div className={styles.year}>
          {dateYearArr.map((item, index) => (
            <div
              key={index}
              className={`${styles.cell} ${
                (index === 0 || index === dateYearArr.length - 1) &&
                styles.cell_in_view
              }`}
              onClick={() => {
                setCurrentDate(item.date(1));
                setVisibleYear(false);
              }}>
              {item.year()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <UseRefClose
      visible={visible}
      callBack={(value) => {
        setVisible(value);
      }}>
      <div className={styles.picker}>
        <div className={styles.input} onClick={() => setVisible(true)}>
          <input
            style={{ textAlign: textAlign }}
            value={value}
            onChange={(e) => {}}
            placeholder={placeholder}
          />
        </div>
        {visible && (!visibleYear || !visibleMonth) && renderDay()}
        <>
          <div style={{ display: `${visibleYear ? "block" : "none"} ` }}>
            {renderYear()}
          </div>
          <div style={{ display: `${visibleMonth ? "block" : "none"} ` }}>
            {renderMonth()}
          </div>
        </>
      </div>
    </UseRefClose>
  );
};

export default Index;
