import mockData from "./assets/mockData.js";

const formattedData = mockData.sort((p1, p2) =>
  p1.points < p2.points ? 1 : -1
);

const container = document.querySelector(".cards");
let racingCards = "";

formattedData.forEach((racer, index) => {
  racingCards += `
           <div class="container" >
           <div class="general-info line">
             <div class="rank" >${index + 1}</div>
             <button class="btn" > 
             +
            </button>
             <div class="points">
               <div class="number-points">${racer.points}</div>
               <div class="pts">PTS</div>
             </div>
            
           </div>
           <div class="pilot-info line">
             <div class="name">
               <div class="vertical-line" style="background-color: ${
                 racer.hex
               }"></div>
               <span class="first-name">${racer.firstName}</span>
               <span class="last-name">${racer.lastName}</span>
             </div>
             <img
               class="flag"
               src=${racer.flag}
             />
           </div>
           <p class="team">${racer.team}</p>
   
           <div class="driver-info">
             <img
               class="driver-picture"
               src=${racer.image}
             />
             <img
               class="driver-number"
               src=${racer.img}
             />
           </div>
         </div>
       `;
});

container.innerHTML = racingCards;

//increase score

const increaseScore = (event) => {
  const score = event.target.parentElement.querySelector(
    ".points .number-points"
  );
  score.innerHTML = Number(score.innerHTML) + 1;
};

container.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (e) => increaseScore(e));
});

//change border color

container.querySelectorAll(".container").forEach((driverCard, index) => {
  driverCard.addEventListener(
    "mouseover",
    (e) => (driverCard.style.borderColor = mockData[index].hex)
  );
  driverCard.addEventListener(
    "mouseout",
    (e) => (driverCard.style.borderColor = "black")
  );
});

//TODO: media queries
//TODO: primele 3 carduri sa aiba dimensiuni diferite
