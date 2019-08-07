const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  function fetchData(){
    fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then(person => renderData(person))
    }
    
    function renderData(person){
      fullname.innerText = person['results'][0]['name']['first']
    }
    
    
    fetchData()
    enterfullname()
});




// function fetchData(){
// fetch('https://randomuser.me/api/')
// .then(resp => resp.json())
// .then(person => renderData(person))
// }

// function renderData(person){
//   fullname.innerText = person['results'][0]['name']['first']
// }


// fetchData()
// enterfullname()