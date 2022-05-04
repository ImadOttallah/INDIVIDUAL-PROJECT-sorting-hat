/******* DATA *******/
const students = [
// {
//   name: "Larry",
//   school: "Gryffindor",
//   darkside: false
// },
// {
//   name: "Mary",
//   school: "Hufflepuff",
//   darkside: false
// },

// {
//   name: "Carrie",
//   school: "Slytherin",
//   darkside: true
//}
];



/******* UTILITY FUNCTION *******/
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};


/******* STUDENTS *******/

const studentsOnDom = (array) => {
  const student = array.filter(taco => taco.darkside === false);
  console.log(array)
  let domString = "";
  for (const item of student) {
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
renderToDom("#studentContainer", domString)
};

const voldOnDom = (array) => {
  let domString = "";
  console.log(array)
  for (const item of array) {
  domString += `
  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body" id="studentCard">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.school}</p>
  </div>
</div>`
};
renderToDom("#voldContainer", domString)
};




/* ADD STUDENTS */
function addStudent(){
  const choices = ["gryffindor", "hufflepuff", "ravenclaw", "slytherin"];
  const randomSchool = choices[Math.floor(Math.random()*choices.length)];
  const newStudent = {
    name: document.querySelector("#studentInput").value,
    school: randomSchool,
    darkside: false
  };
  students.push(newStudent);
  document.querySelector("#studentInput").value="";
  studentsOnDom(students);
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


/** EXPEL TO VOLDEMORT ARMY **/
 document.querySelector("#studentContainer").addEventListener("click",(e) => {
  
  if (e.target.id === "expel") {
   function expel(){
   const vald = {
     darkside: true
    };
   students.push(vald)
  }
expel();
    console.log("you clicked me"); 
    const voldsarmy = students.filter(taco => taco.darkside === true);
    voldOnDom(voldsarmy);
  };
  console.log(students)
 });

 };




/*********  START APP **********/
const startApp = () => {
  studentsOnDom(students);
  voldOnDom(students);
  eventListeners();
};

startApp();
