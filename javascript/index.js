function updateTime() {
  const johannesburgTimeElement = document.querySelector("#Johannesburg .time");
  johannesburgTimeElement.innerHTML = moment().format(
    "hh:mm:ss [<small>]a[</small>]"
  );

  const amsterdamTimeElement = document.querySelector("#Amsterdam .time");
  amsterdamTimeElement.innerHTML = moment()
    .tz("Europe/Amsterdam")
    .format("hh:mm:ss [<small>]a[</small>]");
}

setInterval(updateTime, 1000);
updateTime();

function updateCityTime(event) {
  const cityTimezone = event.target.value;
  const citiesBodyElement = document.querySelector("#cities");
  const selectedCity = event.target.options[event.target.selectedIndex].text;
  const cityMoment = moment().tz(cityTimezone);
  const cityTime = cityMoment.format("hh:mm:ss [<small>]a[</small>]");

  citiesBodyElement.innerHTML = `
    <div class="city">
      <h2>${selectedCity}</h2>
      <div class="date">${cityMoment.format("MMMM Do YYYY")}</div>
      <div class="time">${cityTime}</div>
    </div>`;
}

const citiesSelectElement = document.querySelector("#selectedcity");
citiesSelectElement.addEventListener("change", updateCityTime);
