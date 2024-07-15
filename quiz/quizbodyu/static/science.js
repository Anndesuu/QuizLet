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
        "question" : "What is the chemical symbol for the element gold?",
        "answers" : [
            {"option":"X", "correct": false}, 
            {"option":"Ag", "correct": false}, 
            {"option":"Au", "correct": true}, 
            {"option":"Gd", "correct": false}, 
        ]
    },
    {
        "question" : "Which of the following is an example of a renewable energy source?",
        "answers" : [
            {"option":"Coal", "correct": false}, 
            {"option":"Nuclear", "correct": false}, 
            {"option":"Solar Power", "correct": true}, 
            {"option":"Hydroelectric", "correct": false}, 
        ]
    },
    // 3
    {
        "question" : "What is the process by which plants convert light energy into chemical energy?",
        "answers" : [
            {"option":"Photosynthesis", "correct": true}, 
            {"option":"Reproduction", "correct": false}, 
            {"option":"Nutrition", "correct": false}, 
            {"option":"Respiration", "correct": false}, 
        ]
    },
    //4
    {
        "question" : "Which planet is known as the “Red Planet”?",
        "answers" : [
            {"option":"Mercury", "correct": false}, 
            {"option":"Earth", "correct": false}, 
            {"option":"Venus", "correct": false}, 
            {"option":"Mars", "correct": true}, 
        ]
    },
    //5
    {
        "question" : "Which force keeps planets in orbit around the sun?",
        "answers" : [
            {"option":"Magnetic", "correct": false}, 
            {"option":"Solar", "correct": false}, 
            {"option":"Gravitational force", "correct": true}, 
            {"option":"Electromagnetic", "correct": false}, 
        ]
    },
    //6
    {
        "question" : "What is the smallest unit of matter that retains the properties of an element?",
        "answers" : [
            {"option":"Electron", "correct": false}, 
            {"option":"Molecule", "correct": false}, 
            {"option":"Proton", "correct": false}, 
            {"option":"Atom", "correct": true}, 
        ]
    },
       //7
       {
        "question" : "What is the function of the human respiratory system?",
        "answers" : [
            {"option":"Pumping blood to the body", "correct": false}, 
            {"option":"Transportation of oxygen in the blood", "correct": true}, 
            {"option":"Transportation of nitrogen in the blood", "correct": false}, 
            {"option":"Digestion of food", "correct": false}, 
        ]
    },
       //8
       {
        "question" : "Which process involves the conversion of a solid directly into a gas without passing through the liquid state?",
        "answers" : [
            {"option":"Sublimation", "correct": true}, 
            {"option":"Evaporation", "correct": false}, 
            {"option":"Condensation", "correct": false}, 
            {"option":"Fusion", "correct": false}, 
        ]
    },
       //9
       {
        "question" : "What is the main function of the nervous system?",
        "answers" : [
            {"option":"Respiration", "correct": false}, 
            {"option":"Circulation of blood", "correct": false}, 
            {"option":"Control and coordination of body activities", "correct": true}, 
            {"option":"Digestion", "correct": false}, 
        ]
    },
    //10
    {
        "question" : "Which of the following is a greenhouse gas?",
        "answers" : [
            {"option":"Hydrogen (H2)", "correct": false}, 
            {"option":"Oxygen (O2)", "correct": false}, 
            {"option":"Nitrogen (N2)", "correct": false}, 
            {"option":"Carbon Dioxide (CO2)", "correct": true}, 
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