/******* DATA *******/
const students = [
{
  id: 1,
  name: "Larry",
  school: "Gryffindor",
  darkside: false
},
{
  id: 2,
  name: "Mary",
  school: "Hufflepuff",
  darkside: false
},
{
  id: 3,
  name: "Harry",
  school: "Ravenclaw",
  darkside: false
},
{
  id: 4,
  name: "Carrie",
  school: "Slytherin",
  darkside: true
},
];

/******* UTILITY FUNCTION *******/
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};


/******* STUDENTS *******/
const studentsOnDom = (array) => {
  let domString = "";
  for (const item of array) {
  domString += `
  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body" id="studentCard">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.school}</p>
    <a href="#" class="btn btn-primary" id="expel">Expel</a>
  </div>
</div>`
};
console.log(students);
renderToDom("#studentContainer", domString)
};

/****** EVENT LISTENERS ******/
const eventListeners = () => {
  
document.querySelector("#filterStudents").addEventListener("click", (e) => {
  console.log("you clicked me", e.target.id);
  if (e.target.id === "all") {
    studentsOnDom(students);
  } else if (e.target.id === "gryffindor") {
      const gryffindor = students.filter(taco => taco.school === "Gryffindor" )
      studentsOnDom(gryffindor);
    } else if (e.target.id === "hufflepuff") {
      const hufflepuff = students.filter(taco => taco.school === "Hufflepuff" )
      studentsOnDom(hufflepuff)
    } else if (e.target.id === "ravenclaw") {
      const ravenclaw = students.filter(taco => taco.school === "Ravenclaw" )
      studentsOnDom(ravenclaw)
    } else if (e.target.id === "slytherin") {
      const slytherin = students.filter(taco => taco.school === "Slytherin" )
      studentsOnDom(slytherin)
    }
    
});

/** EXPEL TO VOLDEMORT ARMY **/
document.querySelector("#studentContainer").addEventListener("click",(e) => {
  if (e.target.id === "expel") {
    console.log("you clicked me"); 
    const voldsarmy = students.filter(taco => taco.darkside === true);
    studentsOnDom(voldsarmy)
    renderToDom("#voldContainer", voldsarmy)

  };
});
};




/*********  START APP **********/
const startApp = () => {
  studentsOnDom(students);
  eventListeners();
};

startApp();
