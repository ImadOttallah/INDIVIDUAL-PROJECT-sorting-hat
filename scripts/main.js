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
const badStudents = [];
const choices = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
const gryffindorImage = `https://rb.gy/hlmu4x`;
const hufflepuffImage = `https://rb.gy/kucl7d`;
const ravenclawImage = `https://rb.gy/enrnri`;
const slytherinImage = `https://rb.gy/u9xuyv`;

/******* UTILITY FUNCTION *******/
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

/******* STUDENTS *******/
const studentsOnDom = (array) => {
  const student = array.filter((taco) => taco.darkside === false);
  let domString = "";
  for (const item of student) {
    domString += `
    <div class="card rcorners" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top rcorners" alt="...">
    <div class="card-body" id="studentCard">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.school}</p>
      <a href="#" class="btn btn-primary expelBtn" id="expel--${item.id}" >Expel</a>
    </div>
  </div>`;
  }
  renderToDom("#studentContainer", domString);
};

const voldOnDom = (array) => {
  let domString = "";
  const student = array.filter((taco) => taco.darkside === false);
  for (const item of student) {
    domString += `
    <div class="card2 rcorners" style="width: 18rem;">
    <img src="https://rb.gy/mn64l0" class="card-img-top rcorners" alt="...">
    <div class="card-body" id="studentCard">
      <h5 class="card-title">${item.name} has joined</h5>
      <p class="card-text">Voldermort's Army</p>
    </div>
  </div>`;
  }
  renderToDom("#voldContainer", domString);
};

/* ADD STUDENTS */
function addStudent() {
  const input = document.querySelector("#studentInput").value;
  if (input === "") {
    alert("Please enter your name!");
  } else {
    const randomSchool = choices[Math.floor(Math.random() * choices.length)];
    const newStudent = {
      id: students.length + 1,
      image: "",
      name: input,
      school: randomSchool,
      darkside: false,
    };

    if (randomSchool === "Gryffindor") {
      newStudent.image = gryffindorImage;
    } else if (randomSchool === "Ravenclaw") {
      newStudent.image = ravenclawImage;
    } else if (randomSchool === "Slytherin") {
      newStudent.image = slytherinImage;
    } else {
      newStudent.image = hufflepuffImage;
    }

    students.push(newStudent);
    document.querySelector("#studentInput").value = "";
    studentsOnDom(students);
  }
}

/* FILTER BUTTONS */
const filterButtons = () => {
  const domString = `
      <div class="navigation-btn">
    <button id="all">All</button>
    <button id="Gryffindor">Gryffindor</button>
    <button id="Hufflepuff">Hufflepuff</button>
    <button id="Ravenclaw">Ravenclaw</button>
    <button id="Slytherin">Slytherin</button>
      </div>
      `;
  renderToDom("#filterStudents", domString);
};

/****** EVENT LISTENERS ******/
const eventListeners = () => {
  document.querySelector("#filterStudents").addEventListener("click", (e) => {
    if (e.target.id === "all") {
      studentsOnDom(students);
    } else if (e.target.id === "Gryffindor") {
      const gryffindor = students.filter(
        (taco) => taco.school === "Gryffindor"
      );
      studentsOnDom(gryffindor);
    } else if (e.target.id === "Hufflepuff") {
      const hufflepuff = students.filter(
        (taco) => taco.school === "Hufflepuff"
      );
      studentsOnDom(hufflepuff);
    } else if (e.target.id === "Ravenclaw") {
      const ravenclaw = students.filter((taco) => taco.school === "Ravenclaw");
      studentsOnDom(ravenclaw);
    } else if (e.target.id === "Slytherin") {
      const slytherin = students.filter((taco) => taco.school === "Slytherin");
      studentsOnDom(slytherin);
    }
  });

  /** START THE PROCESS **/
  const welcomeBtn = document.querySelector("#welcomeBtn");
  welcomeBtn.addEventListener("click", () => {
    welcomeBtn.style.display = "none";
    const box = document.querySelector("#startSort");
    box.style.display = "block";
  });

  document.querySelector("#studentContainer").addEventListener("click", (e) => {
    if (e.target.id) {
      const [method, id] = e.target.id.split("--");
      const index = students.findIndex((taco) => taco.id === parseInt(id));
      if (e.target.id.includes("expel"))
        badStudents.push(...students.splice(index, 1));
      studentsOnDom(students);
      voldOnDom(badStudents);
    }
  });
};

/*********  START APP **********/
const startApp = () => {
  studentsOnDom(students);
  voldOnDom(badStudents);
  filterButtons();
  eventListeners();
};

startApp();
