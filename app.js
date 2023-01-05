var addDays = require("date-fns/addDays");

const express = require("express");

const app = express();

app.get("/", (request, response) => {
  const dateTime = new Date();
  const result = addDays(
    new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate()),
    100
  );
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

app.listen(3000);
module.exports = app;

// app.get("/", (request, response) => {
//   const dateTimeNow = new Date();
//   const addedDays = addDays(
//     new Date(
//       dateTimeNow.getFullYear(),
//       dateTimeNow.getMonth(),
//       dateTimeNow.getDate()
//     ),
//     100
//   );

//   response.send(
//     `${addedDays.getDate()}/${
//       addedDays.getMonth() + 1
//     }/${addedDays.getFullYear()}`
//   );
// });
