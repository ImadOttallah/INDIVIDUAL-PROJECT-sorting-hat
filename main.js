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
  darkside: false
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
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.school}</p>
    <a href="#" class="btn btn-primary">Expel</a>
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
      const gryffindor = students.filter(taco => taco.school === "gryffindor" )
      studentsOnDom(gryffindor);
    } else if (e.target.id === "hufflepuff") {
      const hufflepuff = students.filter(taco => taco.school === "hufflepuff" )
      studentsOnDom(hufflepuff)
    } else if (e.target.id === "ravenclaw") {
      const ravenclaw = students.filter(taco => taco.school === "ravenclaw" )
      studentsOnDom(ravenclaw)
    } else if (e.target.id === "slytherin") {
      const slytherin = students.filter(taco => taco.school === "slytherin" )
      studentsOnDom(slytherin)
    }
    
});

};




/*********  START APP **********/
const startApp = () => {
  studentsOnDom(students);
  eventListeners();
};

startApp();
