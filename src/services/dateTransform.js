import { months } from "../consts";

const dateTransformToString = (isoDate) => {
  const parsedDate = new Date(isoDate);
  const month = months[parsedDate.getMonth()];
  const day = parsedDate.getDate();
  const dayTail = tailFinder(day);
  const year = parsedDate.getFullYear();
  const dateString = `${month} ${day}${dayTail} ${year}`;
  return dateString;
};

const tailFinder = (day) => {
  let tail = "";
  switch (day) {
    case 1:
      tail = "st";
      break;
    case 2:
      tail = "nd";
      break;
    case 3:
      tail = "rd";
      break;
    default:
      tail = "th";
  }
  return tail;
};

export default dateTransformToString;
