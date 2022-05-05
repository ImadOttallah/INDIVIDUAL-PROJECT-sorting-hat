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
// }
];
const badStudents = [

];
const choices = ["gryffindor", "hufflepuff", "ravenclaw", "slytherin"];
const gryffindorImage = `https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88361/91122/Harry-Potter-Gryffindor-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__95823.1507640354.jpg?c=2?imbypass=on`;
const hufflepuffImage = `https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88364/91134/Harry-Potter-Hufflepuff-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__21122.1507644096.jpg?c=2?imbypass=on`
const ravenclawImage = `https://www.seekpng.com/png/full/184-1840811_ravenclaw-crest-harry-potter-harry-potter-ravenclaw-house.png`
const slytherinImage = `https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88362/91127/Harry-Potter-Slytherin-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__31920.1507640618.jpg?c=2?imbypass=on`


/******* UTILITY FUNCTION *******/
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};


/******* STUDENTS *******/
const studentsOnDom = (array) => {
  const student = array.filter(taco => taco.darkside === false);
  //console.log(array)
  let domString = "";
  for (const item of student) {
  domString += `
  <div class="card" style="width: 18rem;">
  <img src="${item.image}" class="card-img-top" alt="...">
  <div class="card-body" id="studentCard">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.school}</p>
    <a href="#" class="btn btn-primary" id="expel--${item.id}" >Expel</a>
  </div>
</div>`
};
renderToDom("#studentContainer", domString)
};

const voldOnDom = (array) => {
  let domString = "";
  const student = array.filter(taco => taco.darkside === false);
  for (const item of student) {
  domString += `
  <div class="card" style="width: 18rem;">
  <img src="${item.image}" class="card-img-top" alt="...">
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
  //const choices = ["gryffindor", "hufflepuff", "ravenclaw", "slytherin"];
  const randomSchool = choices[Math.floor(Math.random()*choices.length)];
  const newStudent = {
    id: students.length + 1,
    image: "",
    name: document.querySelector("#studentInput").value,
    school: randomSchool,
    darkside: false
  };

  if (randomSchool === "gryffindor") {
    newStudent.image = gryffindorImage;
  } else if (randomSchool === "ravenclaw") {
    newStudent.image = ravenclawImage;
  } else if (randomSchool === "slytherin") {
    newStudent.image = slytherinImage;
  } else {
    newStudent.image = hufflepuffImage;
  }

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
  if (e.target.id) {
    const [method, id] = e.target.id.split("--");
    const index = students.findIndex(taco => taco.id === parseInt(id));
  if (e.target.id.includes("expel"))
  badStudents.push(...students.splice(index, 1));
  studentsOnDom(students);
  voldOnDom(badStudents);
  console.log(students)
  console.log(badStudents)
  };
 });
 };


/*********  START APP **********/
const startApp = () => {
  studentsOnDom(students);
  voldOnDom(badStudents);
  eventListeners();
};

startApp();
