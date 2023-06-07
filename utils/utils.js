const dayjs = require("dayjs");

function formatDate(timestamp) {
  // Use Day.js to format the timestamp
  const formattedDate = dayjs(timestamp).format("YYYY-MM-DD HH:mm:ss");
  return formattedDate;
}

module.exports = formatDate;
