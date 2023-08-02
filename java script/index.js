

var swiper = new Swiper(".mySwiper", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  }
});

const key = 'iTrn-p6BQN7ru9whsXaTUFby8wLILmvq';

const getFlights = (event) => {
  event.preventDefault();

  const fromCity = document.getElementById("fromCity").value;
  const toCity = document.getElementById("toCity").value;
  const dateFrom = document.getElementById("dateFrom").value;
  const dateTo = document.getElementById("dateTo").value;
  const travelClass = document.getElementById("travelClass").value;

  if (fromCity !== '' && toCity !== '' && dateFrom !== '' && dateTo !== '') {
    sendRequest(fromCity, toCity, dateFrom, dateTo, travelClass);
  }
};

  




sendRequest = (fromCity,toCity,dateFrom,dateTo,travelClass)=>{
  fetch(`https://api.tequila.kiwi.com/v2/search?fly_from=${fromCity}&fly_to=${toCity}&date_from=${dateFrom}&date_to=${dateTo}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'apikey': key
		},
	})
  .then(response => response.json())
  .then(response => {
    // Store the flight data in the session storage before redirecting to the new page
    sessionStorage.setItem('flightData', JSON.stringify(response));
    // Redirect to the new page to display the flight data
    window.location.href = 'flight_results.html';
  })
  .catch(err => console.error(err));
		
}

