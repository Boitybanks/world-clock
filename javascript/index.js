function updateTime() {
  let johannesburgTimeElement = document.querySelector("#Johannesburg .time");
  johannesburgTimeElement.innerHTML = moment().format(
    "hh:mm:ss [<small>]a[</small>]"
  );

  let AmsterdamTimeElement = document.querySelector("#Amsterdam .time");
  AmsterdamTimeElement.innerHTML = moment()
    .tz("Europe/Amsterdam")
    .format("hh:mm:ss [<small>]a[</small>]");
}
setInterval(updateTime, 1000);
updateTime();

function updateCityTime(event) {
  let cityTimezone = event.target.value;
  let citiesBodyElement = document.querySelector("#cities");
  let selectedCity = event.target.options[event.target.selectedIndex].text;
  //

  let cityTime = moment()
    .tz(cityTimezone)
    .format("hh:mm:ss [<small>]a[</small>]");
  let cityMoment = moment().tz(cityTimezone);

  citiesBodyElement.innerHTML = `
        <div class="city">
          <h2>${selectedCity}</h2>
          <div class="date">${cityMoment.format("MMMM Do YYYY")}</div>
          <div class="time">${cityTime}</div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#selectedcity");
citiesSelectElement.addEventListener("change", updateCityTime);
