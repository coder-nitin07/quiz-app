// Quiz question data
const QuizData = [
    {
        id:1,
        question: 'What html stand for?',
        options: [
            "HyperText Making Langaugae",
            "HyperText MarkupLangaugae",
            "HyperText Machine Langaugae",
            "HyperLink and Text Markup Langaugae",
        ],
        correctAnswer: 2
    },
    {
        question: 'What CSS stand for?',
        options: [
            "CSS Making Langaugae",
            "CSS MarkupLangaugae",
            "CSS Machine Langaugae",
            "CSS and Text Markup Langaugae",
        ],
        correctAnswer: 3
    },
    {
        question: 'What JS stand for?',
        options: [
            "JS Making Langaugae",
            "JS MarkupLangaugae",
            "JS Machine Langaugae",
            "JS and Text Markup Langaugae",
        ],
        correctAnswer: 1
    },
    {
        question: 'What React stand for?',
        options: [
            "React Making Langaugae",
            "React MarkupLangaugae",
            "React Machine Langaugae",
            "React and Text Markup Langaugae",
        ],
        correctAnswer: 4
    }
];

// get Variables 
const question = document.getElementById('question');
const answerText = document.querySelectorAll('.answerText');
const nextBtn = document.getElementById('next');
const container = document.querySelector('.container');
const result = document.querySelector('.result');
const userSelectAnswer = document.querySelectorAll('.answer');
let a = 0;
let selectedOption = null;


userSelectAnswer.forEach((radio) => {
    radio.addEventListener('change', (event, key) => {
         selectedOption = event.target.id;
        console.log(`Selected option: ${selectedOption}`);
    });
});

function updateQuiz(){
    question.innerHTML = QuizData[a].question;
    answerText.forEach((e, key)=>{
        e.innerHTML = QuizData[a].options[key];
        // console.log(e.innerHTML = QuizData[a].options[key]);
   });
}
updateQuiz()

nextBtn.addEventListener('click', function(){
    a = a + 1;  
    
    QuizData.forEach((e,key)=>{
        console.log("first")
        if(e.correctAnswer == selectedOption){
            console.log("true")
        }
    });


    // console.log(QuizData.length)
    if (a < QuizData.length) { 
        updateQuiz();
    } else {
        console.log("No more questions.");

        container.style.display = 'none';         
        result.style.display = 'block';         
    }
});