const questions = [

{
question:"Which language is used for Web Apps?",
answers:[
{text:"Python", correct:false},
{text:"JavaScript", correct:true},
{text:"C++", correct:false},
{text:"Java", correct:false}
]
},


{
question:"HTML stands for?",
answers:[
{text:"Hyper Text Markup Language", correct:true},
{text:"High Text Machine Language", correct:false},
{text:"Hyper Tool Multi Language", correct:false},
{text:"None", correct:false}
]
}

];


const questionElement =
document.getElementById("question");

const answerButtons =
document.getElementById("answer-buttons");

const nextButton =
document.getElementById("next-btn");


let currentQuestionIndex=0;
let score=0;


function startQuiz(){

currentQuestionIndex=0;
score=0;
nextButton.innerHTML="Next";

showQuestion();

}


function showQuestion(){

resetState();

let currentQuestion=
questions[currentQuestionIndex];

questionElement.innerHTML =
currentQuestion.question;


currentQuestion.answers.forEach(answer=>{

const button=
document.createElement("button");

button.innerHTML=answer.text;

button.classList.add("btn");

answerButtons.appendChild(button);


if(answer.correct){
button.dataset.correct=answer.correct;
}


button.addEventListener(
"click",
selectAnswer
);


});

}



function resetState(){

nextButton.style.display="none";

while(answerButtons.firstChild){

answerButtons.removeChild(
answerButtons.firstChild
);

}

}



function selectAnswer(e){

const selectedBtn=e.target;

if(selectedBtn.dataset.correct){

score++;

}

Array.from(answerButtons.children)
.forEach(button=>{

button.disabled=true;

});


nextButton.style.display="block";

}



nextButton.addEventListener(
"click",
()=>{

currentQuestionIndex++;

if(currentQuestionIndex < questions.length){

showQuestion();

}
else{

questionElement.innerHTML=
"Your Score: "+score+"/"+questions.length;

resetState();

}

}
);


startQuiz();
