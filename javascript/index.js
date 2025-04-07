function updateTime() {
  let johannesburgElement = document.getElementById("Johannesburg");
  let JohannesburgDateElement = document.querySelector("#Johannesburg .date");
  JohannesburgDateElement.innerHTML = moment().format("MMMM Do YYYY");

  let johannesburgTimeElement = document.querySelector("#Johannesburg .time");
  johannesburgTimeElement.innerHTML = moment().format(
    "hh:mm:ss [<small>]a[</small>]"
  );

  //Amsterdam
  let AmsterdamElement = document.getElementById("Amsterdam");
  let AmsterdamDateElement = document.querySelector("#Amsterdam .date");
  JohannesburgDateElement.innerHTML = moment().format("MMMM Do YYYY");

  let AmsterdamTimeElement = document.querySelector("#Amsterdam .time");
  AmsterdamTimeElement.innerHTML = moment()
    .tz("Europe/Amsterdam")
    .format("hh:mm:ss [<small>]a[</small>]");

  setInterval(updateTime, 1000);
}
updateTime();
