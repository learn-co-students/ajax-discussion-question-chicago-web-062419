const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const street = document.getElementById("street");
const city = document.getElementById("city")
const state = document.getElementById('state') //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  function fetchData(){
    fetch('https://randomuser.me/api/')
      .then( res => res.json() )
      .then( person => renderData(person) )
}
});

