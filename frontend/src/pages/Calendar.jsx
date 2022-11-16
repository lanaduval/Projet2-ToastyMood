import { useState } from "react";
import NeutralToast from "../assets/NeutralToast.png";
import ArrowLeft from "../assets/ArrowLeft.svg";
import ArrowRight from "../assets/ArrowRight.svg";
import Toaster from "../assets/Toaster.svg";
import "@components/styleCalendar.css";

export default function Calendar({ clickedButtonCalendar, dataToasts }) {
  // const date = new Date();
  // const todayDate = [date.getDate(), date.getMonth() + 1, date.getFullYear()];

  const year = [2021, 2022, 2023];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [currentMonth, setCurrentMonth] = useState(month[10]);
  const [currentYear, setCurrentYear] = useState(year[1]);

  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const thirtyDay = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const handleMinusCalendar = () => {
    if (year.indexOf(currentYear) !== 0 && month.indexOf(currentMonth) === 0) {
      setCurrentMonth(month[11]);
      setCurrentYear(year[year.indexOf(currentYear) - 1]);
    }
    if (month.indexOf(currentMonth) !== 0) {
      setCurrentMonth(month[month.indexOf(currentMonth) - 1]);
    }
  };

  const handlePlusCalendar = () => {
    if (
      year.indexOf(currentYear) !== year.length - 1 &&
      month.indexOf(currentMonth) === 11
    ) {
      setCurrentMonth(month[0]);
      setCurrentYear(year[year.indexOf(currentYear) + 1]);
    }
    if (month.indexOf(currentMonth) !== 11) {
      setCurrentMonth(month[month.indexOf(currentMonth) + 1]);
    }
  };

  return (
    <section
      id="Calendar"
      className={clickedButtonCalendar ? "homeVisible" : "homeHidden"}
    >
      <div id="gridCalendar">
        <div id="navCalendar">
          <button type="button" onClick={handleMinusCalendar}>
            <img src={ArrowLeft} alt="Arrow Left" width="28px" />
          </button>
          <h3>
            {currentMonth}, {currentYear}
          </h3>
          <img src={Toaster} alt="Toaster" />
          <button type="button" onClick={handlePlusCalendar}>
            <img src={ArrowRight} alt="Arrow Right" width="28px" />
          </button>
        </div>
        {dayNames.map((day) => (
          <p>{day}</p>
        ))}
        {thirtyDay.map((day) => (
          <p>
            <p className="toastBackground">
              <img
                src={
                  dataToasts[thirtyDay.indexOf(day)]
                    ? dataToasts[thirtyDay.indexOf(day)].picture
                    : NeutralToast
                }
                alt="Toast"
                width="32px"
              />
            </p>
            {day}
          </p>
        ))}
      </div>
    </section>
    // if/ find? dataToast[X].date === `day/currentMonth/currentYear`
  );
}
