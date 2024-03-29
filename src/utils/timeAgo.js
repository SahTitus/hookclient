export const timeAgo = (timeInMs) => {
  let sec = (timeInMs / 1000).toFixed(0);
  let min = (timeInMs / (1000 * 60)).toFixed(0);
  let hrs = (timeInMs / (1000 * 60 * 60)).toFixed(0);
  let days = (timeInMs / (1000 * 60 * 60 * 24)).toFixed(0);
  let weeks = (timeInMs / (1000 * 60 * 60 * 24 * 7)).toFixed(0);
  let months = (timeInMs / (1000 * 60 * 60 * 24 * 31)).toFixed(0);
  let years = (timeInMs / (1000 * 60 * 60 * 24 * 12)).toFixed(0);

  if (sec < 60) {
    return "seconds";
  } else if (min > 60) {
    return min + "mins";
  } else if (hrs < 24) {
    return hrs + "hrs";
  } else if (days < 7) {
    return days + "days";
  } else if (weeks < 4) {
    return weeks + "weeks";
  } else if (months < 12) {
    return months + "months";
  } else {
    return years + "years";
  }
};

