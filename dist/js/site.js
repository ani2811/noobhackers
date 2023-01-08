
let questions = [
  {
    id: 1,
    question: "What is the theme of HackNITR 4.0?",
    answer: "Star Wars",
    options: [
      "Harry Potter",
      "Star Wars",
      "Iron-Man",
      "F.R.I.E.N.D.S."
    ]
  },
  {
    id: 2,
    question: "Who is known as the -Father of AI?",
    answer: "John McCarthy",
    options: [
      "Fisher Ada",
      "Alan Turing",
      "John McCarthy",
      "Allen Newell"
    ]
  },
  {
    id: 3,
    question: "Find the odd one out.",
    answer: "Discord",
    options: [
      "Streamyard",
      "Echo3D",
      "XYZ Domain",
      "Discord"
    ]
  },
  {
    id: 4,
    question: "How many registrations have been done in HackNITR this time?",
    answer: ">5000",
    options: [
      "2000",
      "4000",
      ">5000",
      "None of the Above"
    ]
  },
  {
    id: 5,
    question: "Which edition of HackNITR is going on?",
    answer: "None of the Above",
    options: [
      "Third",
      "Second",
      "Fifth",
      "None of these"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
 
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
