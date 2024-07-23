qiuz =[
    {
        question:"In what year did the Great October Socialist Revolution take place?",
        options:[1917,1923,1914,1920],
        answer:1917
    },
    {
        question:"What is the largest lake in the world?",
        options:["Caspian Sea",
            "Baikal",
            "Lake Superior",
            "Ontario"],
        answer:"Baikal"
    },
    {
        question:"Who wrote the novel “War and Peace”?",
        options:["Anton Chekhov",
            "Fyodor Dostoevsky",
            "Leo Tolstoy",
            "Ivan Turgenev"],
        answer: "Leo Tolstoy"

    }
]

 let currentquestionIndex=0
 let score=0

 let questionbox= document.getElementById("question-box")
 let optionbox= document.getElementById("option-box")
 let completionmessage=document.getElementById("completionmessage")

function createquestion(){
    questionbox.textContent=qiuz[currentquestionIndex].question;
   optionbox.textContent=''
    for( let i=0;i<qiuz[currentquestionIndex].options.length;i++){
       option= document.createElement("div")
       option.textContent=qiuz[currentquestionIndex].options[i]
       optionbox.appendChild(option)

       option.classList.add("optionstyle")
  
       option.addEventListener("click",()=>{
         createanswer(qiuz[currentquestionIndex].options[i])})

    }
}
    function createanswer(selectedoption){


        if(qiuz[currentquestionIndex].answer==selectedoption)
        {
           console.log("correct answer")
           score++
        }
        else{
            console.log("wrong answer")
        }   
    }

     document.getElementById("next-button").addEventListener("click",()=>
            {  
               
        currentquestionIndex++;

        if(currentquestionIndex <qiuz.length){
            createquestion()
        }
        else{
            questionbox.style.display='none'
            optionbox.style.display='none'
            completionmessage.style.display='block'
            displayResult()
        }
            });

            function displayResult() {
                let resultMessage = `Your score: ${score} out of ${qiuz.length}`;
                completionmessage.textContent = resultMessage;
            }

createquestion()






