let question = document.getElementById("question");
let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");
let ans4 = document.getElementById("ans4");
let submit = document.getElementById("submit");
let score = document.getElementById("score");
var ichiban = document.getElementById("ichiban");
var niban = document.getElementById("niban");
let endscore = document.getElementById("endscore");
let points = 0;

score.textContent = `Score: ${points}`;

questions = [
    {
        "question" : "What is the capital of India?",
        "answers" : [
            {"option":"Delhi", "correct": true}, 
            {"option":"Mumbai", "correct": false}, 
            {"option":"Chennai", "correct": false}, 
            {"option":"Kolkota", "correct": false}, 
        ]
    },
    {
        "question" : "Which country is known as the Land of the Rising Sun?",
        "answers" : [
            {"option":"Vietnam", "correct": false}, 
            {"option":"Korea", "correct": false}, 
            {"option":"Japan", "correct": true}, 
            {"option":"China", "correct": false}, 
        ]
    },
    // 3
    {
        "question" : "What is the capital of Italy?",
        "answers" : [
            {"option":"Milan", "correct": false}, 
            {"option":"Rome", "correct": true}, 
            {"option":"Naples", "correct": false}, 
            {"option":"Turin", "correct": false}, 
        ]
    },
    //4
    {
        "question" : "What city is the Statue of Liberty in?",
        "answers" : [
            {"option":"Chicago", "correct": false}, 
            {"option":"New York City", "correct": true}, 
            {"option":"San Francisco", "correct": false}, 
            {"option":"Los Angeles", "correct": false}, 
        ]
    },
    //5
    {
        "question" : "What is the capital of New Zealand?",
        "answers" : [
            {"option":"Auckland", "correct": false}, 
            {"option":"Christchurch", "correct": false}, 
            {"option":"Wellington", "correct": true}, 
            {"option":"Dunedin", "correct": false}, 
        ]
    },
    //6
    {
        "question" : "Mount Everest is located in which mountain range?",
        "answers" : [
            {"option":"The Alps", "correct": false}, 
            {"option":"Andes", "correct": false}, 
            {"option":"Sierra Nevada", "correct": false}, 
            {"option":"The Himalayas", "correct": true}, 
        ]
    },
       //7
       {
        "question" : "What is the smallest country in the world?",
        "answers" : [
            {"option":"Vatican City", "correct": true}, 
            {"option":"Monaco", "correct": false}, 
            {"option":"San Marino", "correct": false}, 
            {"option":"Malaysia", "correct": false}, 
        ]
    },
       //8
       {
        "question" : "Which desert is the largest in the world?",
        "answers" : [
            {"option":"Great Sandy Desert", "correct": false}, 
            {"option":"Antarctic", "correct": false}, 
            {"option":"Gobi", "correct": false}, 
            {"option":"Sahara", "correct": true}, 
        ]
    },
       //9
       {
        "question" : "What is the longest river in the world?",
        "answers" : [
            {"option":"Nile", "correct": true}, 
            {"option":"Amazon", "correct": false}, 
            {"option":"Yangtze", "correct": false}, 
            {"option":"Mississippi", "correct": false}, 
        ]
    },
    //10
    {
        "question" : "What is the capital of Canada?",
        "answers" : [
            {"option":"Toronto", "correct": false}, 
            {"option":"Ottawa", "correct": true}, 
            {"option":"Vancouver", "correct": false}, 
            {"option":"Calgary", "correct": false}, 
        ]
    },


]

function start(){
    question.textContent = questions[0].question;
    ans1.textContent = questions[0].answers[0].option;
    ans2.textContent = questions[0].answers[1].option;
    ans3.textContent = questions[0].answers[2].option;
    ans4.textContent = questions[0].answers[3].option;
}

start();

let number = 0;

function next(){
    
    question.textContent = questions[number].question;
    ans1.textContent = questions[number].answers[0].option;
    ans2.textContent = questions[number].answers[1].option;
    ans3.textContent = questions[number].answers[2].option;
    ans4.textContent = questions[number].answers[3].option;
    console.log(number);

    

}

let btn = [ans1, ans2, ans3, ans4];


submit.addEventListener("click", function(){
    number++;
    for (let i = 0; i < btn.length; i++){
        btn[i].style.backgroundColor = "white";
        btn[i].style.color = "black";
    }
    if (number <= 9){
        next();
    } else {
        endscore.textContent = `Your score is ${points}`;
        ichiban.style.display = "none";
        niban.style.display = "block";
    }
    
});


// questions[0].answers[0].option;
function check(){
    for (let i = 0; i < btn.length; i++){
        if(questions[number].answers[i].correct){
            btn[i].style.backgroundColor = "green";
            btn[i].style.color = "white";
        }else{
            btn[i].style.backgroundColor = "red";
            btn[i].style.color = "white";
        }
    }
}



ans1.addEventListener("click", function(){
    check();
    if (ans1.style.backgroundColor === "green"){
        points++;
        score.textContent = `Score: ${points}`;
    }
   
});
ans2.addEventListener("click", function(){
    check();
    if (ans2.style.backgroundColor === "green"){
        points++;
        score.textContent = `Score: ${points}`;
    }
    
});
ans3.addEventListener("click", function(){
    check();
    if (ans3.style.backgroundColor === "green"){
        points++;
        score.textContent = `Score: ${points}`;
    }
    
});
ans4.addEventListener("click", function(){
    check();
    if (ans4.style.backgroundColor === "green"){
        points++;
        score.textContent = `Score: ${points}`;
    }
});