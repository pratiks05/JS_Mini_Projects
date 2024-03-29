const questions=[
    {
        question: "What is the capital of Japan?",
        answer: [
            {text:"Beijing",correct:false},
            {text:"Tokyo",correct:true},
            {text:"Seoul",correct:false},
            {text:"Bangkok",correct:false},

        ]
    },
    {
        question: "which is the smallest country in world?",
        answer: [
            {text:"Vetican City",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"Goa",correct:false},

        ]
    },
    {
        question: "which is the largest dessert in world?",
        answer: [
            {text:"Kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antartica",correct:true},

        ]
    },
    {
        question: "which is the smallest continent in world?",
        answer: [
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false},

        ]
    },
    {
        question: "Which is the largest island?",
        answer: [
            {text:"New Guinea",correct:false},
            {text:"Andaman Nicobar",correct:false},
            {text:"Greenland",correct:true},
            {text:"Hawaii",correct:false},

        ]
    },
    {
        question: "Which is the richest country in the world?",
        answer: [
            {text:"Qatar",correct:true},
            {text:"India",correct:false},
            {text:"USA",correct:false},
            {text:"UAE",correct:false},

        ]
    },
    {
        question: "Which city is called the “City of Winds”?",
        answer: [
            {text:"Chicago",correct:true},
            {text:"Veliky Novgorod",correct:false},
            {text:"USA",correct:false},
            {text:"Washington",correct:false},

        ]
    },
    {
        question: "What chemical element is designated as Hg?",
        answer: [
            {text:"Silver",correct:false},
            {text:"Tin",correct:false},
            {text:"Copper",correct:false},
            {text:"Mercury",correct:true},

        ]
    },
    {
        question: "Hitler's party is known as:?",
        answer: [
            {text:"Labour Party",correct:false},
            {text:"Ku-Klux-Klan",correct:false},
            {text:"Nazi Party",correct:true},
            {text:"Democratic Party",correct:false},

        ]
    },
    {
        question: "Who wrote the novel 'War and Peace'?",
        answer: [
            {text:"Anton Chekhov",correct:false},
            {text:"Fyodor Dostoevsky",correct:false},
            {text:"Leo Tolstoy",correct:true},
            {text:"Ivan Turgenev",correct:false},

        ]
    }
    
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz()
{
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();

}

function showQuestion()
{
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;


    currentQuestion.answer.forEach(answer=>
        {
            const button=document.createElement("button");
            button.innerHTML=answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct)
            {
                button.dataset.correct=answer.correct;
            }
            button.addEventListener("click",selectAnswer);
        })
}


function resetState()
{
    nextButton.style.display="None";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct === "true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;

    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true")
        {
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}



function showScore()
{
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length)
    {
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();