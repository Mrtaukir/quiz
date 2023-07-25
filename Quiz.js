const form=document.querySelector(".quiz-form");
const CorrectAnsawer=["C","C","D","C","A"];
const Que=document.querySelectorAll(".question")
let ColorRes=document.querySelector(".question")
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    var userAnswer=[form.q1.value,
                    form.q2.value,
                    form.q3.value,
                    form.q4.value,
                    form.q5.value];
    let score=0;
    userAnswer.forEach((element,index)=>{
        if(element==CorrectAnsawer[index]){
            score++;
            Que[index].classList.add("Right");
        }
        else{
            Que[index].classList.add("Wrong");
        }
    });
    var p=document.querySelector(".result p");
    p.textContent=`You have got ${score}/5`;
    var result=document.querySelector(".result");
    result.classList.remove("hide");
    scrollTo(0,0);
});