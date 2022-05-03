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
//   name: "Harry",
//   school: "Ravenclaw",
//   darkside: false
// },
// {
//   name: "Carrie",
//   school: "Slytherin",
//   darkside: true
// },
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
console.log(students)
renderToDom("#studentContainer", domString)
};



/* ADD STUDENTS */
const choices = ["gryffindor", "hufflepuff", "ravenclaw", "slytherin"];
const randomSchool = choices[Math.floor(Math.random()*choices.length)];
console.log(randomSchool)


function addStudent(){
  const choices = ["gryffindor", "hufflepuff", "ravenclaw", "slytherin"];
  const randomSchool = choices[Math.floor(Math.random()*choices.length)];
  console.log(randomSchool)

  const newStudent = {
    name: document.querySelector("#studentInput").value,
    school: randomSchool,
    darkside: false
  };
  students.push(newStudent);
  document.querySelector("#studentInput").value="",
  studentsOnDom(students)
  }


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
  //dont forget to add function
  function expelStudent(){
    const badStudent = {
      darkside: true
    };
    students.push(badStudent);
  };

  if (e.target.id === "expel") {
    console.log("you clicked me"); 
    const voldsarmy = students.filter(taco => taco.darkside === true);
    studentsOnDom(voldsarmy);
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
