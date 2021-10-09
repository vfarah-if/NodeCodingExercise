const MILLISECONDS_PER_SECOND = 1000;
// const SECONDS_PER_MINUTE = 60;
// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const DAYS_PER_WEEK = 7;
// const MONTHS_PER_YEAR = 12;

// const SECOND = MILLISECONDS_PER_SECOND;
// const MINUTE = SECOND * SECONDS_PER_MINUTE;
// const HOUR = MINUTE * MINUTES_PER_HOUR;
// const DAY = HOUR * HOURS_PER_DAY;
// const WEEK = DAY * DAYS_PER_WEEK;
// const YEAR = DAY * 365.24;
// const NORMAL_YEAR = DAY * 365;
// const LEAP_YEAR = DAY * 366;
// const DECADE = 10 * YEAR;
// const HALF_YEAR = YEAR / 2;
// const AVERAGE_MONTH = YEAR / 12;

export const subtractDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
};

export const epochToDate = (epochTimeStamp) => {
  return new Date(epochTimeStamp * MILLISECONDS_PER_SECOND);
};

export const dateToEpoch = (date) => {
  return (date.getTime() - date.getMilliseconds()) / MILLISECONDS_PER_SECOND;
};

export const secondsSinceEpoch = (numericDateValue) => {
  return Math.floor(numericDateValue / MILLISECONDS_PER_SECOND);
};
