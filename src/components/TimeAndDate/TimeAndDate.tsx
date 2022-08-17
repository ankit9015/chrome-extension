import { useEffect, useState } from "react";
import { useBrowser } from "../../context";
import { greetings } from "../../utils";
import "./TimeAndDate.css";

const TimeAndDate = () => {
  const { user } = useBrowser();
  const [timeAndDateDetails, updateTimeAndDateDetails] = useState<Date>(
    new Date()
  );
  const [clockFormat, setClockFormat] = useState<number>(24);
  const hours = timeAndDateDetails.getHours();
  const hoursIn12 = hours % 12 || 12;
  const minutes = timeAndDateDetails.getMinutes();
  const minutesFormatted = minutes / 10 < 1 ? `0${minutes}` : `${minutes}`;
  const hoursAndMinutesIn24 = `${hours}:${minutesFormatted}`;
  const hoursAndMinutesIn12 = `${hoursIn12}:${minutesFormatted}`;
  const periodOfTheDayInfo = greetings(hours);
  useEffect(() => {
    let timer = setTimeout(() => {
      updateTimeAndDateDetails(() => new Date());
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [timeAndDateDetails]);
  return (
    <div className="fontEnhanced">
      <h1
        onClick={() => {
          setClockFormat((prev) => (prev === 12 ? 24 : 12));
        }}
        className="hoursAndMinutesInfo"
      >
        {clockFormat === 24 ? hoursAndMinutesIn12 : hoursAndMinutesIn24}
        <p className="hoursAndMinutesHoverText">
          Tap on time to change the time format. {clockFormat}
        </p>
      </h1>
      <h1 className="usernameGreetings">
        {periodOfTheDayInfo} {user}
      </h1>
    </div>
  );
};
export default TimeAndDate;
