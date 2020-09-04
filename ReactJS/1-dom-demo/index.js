let indianClock = document.querySelector("#indianClock");
let dubaiClock = document.querySelector("#dubaiClock");
let usClock = document.querySelector("#usClock");

// using plain js code
function jsClock(props) {
  let date = new Date().toLocaleTimeString("en-US", { timeZone: props });
  let ui = `
    <div>
        <p> ${props}</p>
        <p> ${date} </p>
    <div>
    `;
  return ui;
}



// using react library

let indianClockV1 = document.querySelector("#indianClockV1");
let dubaiClockV1 = document.querySelector("#dubaiClockV1");
let usClockV1 = document.querySelector("#usClockV1");

// using react js code
function reactClock(props) {
  let date = new Date().toLocaleTimeString("en-US", { timeZone: props });
  var ui = (
    <div>
      <p>{props}</p>
      <p>{date}</p>
    </div>
  );
  return ui;
}

setInterval(() => {
    indianClock.innerHTML = jsClock("Asia/kolkata");
    dubaiClock.innerHTML = jsClock("Asia/dubai");
    usClock.innerHTML = jsClock("America/New_york");

    ReactDOM.render(reactClock('Asia/kolkata'),indianClockV1);
    ReactDOM.render(reactClock('Asia/dubai'),dubaiClockV1);
    ReactDOM.render(reactClock('America/New_york'),usClockV1);

  }, 1000);


