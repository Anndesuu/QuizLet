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
        "question" : "What is a female fox called?",
        "answers" : [
            {"option":"Tigress", "correct": false}, 
            {"option":"Cheetah", "correct": false}, 
            {"option":"Vixen", "correct": true}, 
            {"option":"Lynx", "correct": false}, 
        ]
    },
    {
        "question" : "Which of the following has no Skeleton at all?",
        "answers" : [
            {"option":"Silverfish", "correct": false}, 
            {"option":"Sponge", "correct": false}, 
            {"option":"Starfish", "correct": false}, 
            {"option":"Jellyfish", "correct": true}, 
        ]
    },
    // 3
    {
        "question" : "What animal has the worst memory?",
        "answers" : [
            {"option":"Elephant", "correct": true}, 
            {"option":"Lion", "correct": false}, 
            {"option":"Giraffe", "correct": false}, 
            {"option":"Cheetah", "correct": false}, 
        ]
    },
    //4
    {
        "question" : "Which animal can create the loudest sound among any living creature?",
        "answers" : [
            {"option":"Howler Monkey", "correct": false}, 
            {"option":"Whale SHark", "correct": false}, 
            {"option":"Humpback Whales", "correct": true}, 
            {"option":"Gibbon", "correct": false}, 
        ]
    },
    //5
    {
        "question" : "Which one of the following is not a true fish?",
        "answers" : [
            {"option":"Silver fish", "correct": false}, 
            {"option":"Saw fish", "correct": false}, 
            {"option":"Sucker fish", "correct": true}, 
            {"option":"Hammer fish", "correct": false}, 
        ]
    },
    //6
    {
        "question" : "Which mammal is known to have the most powerful bite in the world?",
        "answers" : [
            {"option":"Hippopotamus", "correct": true}, 
            {"option":"Elephant", "correct": false}, 
            {"option":"Giraffe", "correct": false}, 
            {"option":"Horse", "correct": false}, 
        ]
    },
       //7
       {
        "question" : "What object does a male penguin often gift to a female penguin to win her over?",
        "answers" : [
            {"option":"Coral", "correct": false}, 
            {"option":"Pebble", "correct": true}, 
            {"option":"Seaweed", "correct": false}, 
            {"option":"Snail", "correct": false}, 
        ]
    },
       //8
       {
        "question" : "A dog sweats through which part of its body?",
        "answers" : [
            {"option":"Paws", "correct": true}, 
            {"option":"Feet", "correct": false}, 
            {"option":"Ears", "correct": false}, 
            {"option":"Nose", "correct": false}, 
        ]
    },
       //9
       {
        "question" : "What color is the tongue of a giraffe?",
        "answers" : [
            {"option":"Purple", "correct": true}, 
            {"option":"Red", "correct": false}, 
            {"option":"Pink", "correct": false}, 
            {"option":"Orange", "correct": false}, 
        ]
    },
    //10
    {
        "question" : "Which animal’s stripes are on their skin as well as their fur?",
        "answers" : [
            {"option":"Giraffe", "correct": false}, 
            {"option":"Lion", "correct": false}, 
            {"option":"Tiger", "correct": true}, 
            {"option":"Cat", "correct": false}, 
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