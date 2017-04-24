export function DateBetween (startDate, endDate) {
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let distance = endDate - startDate;

  if (distance < 0) {
    return {
      days: 0,
      hour: 0,
      minutes: 0,
      seconds: 0
    };
  }

  let days = Math.floor(distance / day);
  let hours = Math.floor((distance % day) / hour);
  let minutes = Math.floor((distance % hour) / minute);
  let seconds = Math.floor((distance % minute) / second);

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}