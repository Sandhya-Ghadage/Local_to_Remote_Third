 let demoId=document.querySelector(`#demo`);
 demoId.innerHTML="JS is a object based client side scripting lang"

 let submitId=document.querySelector("#submit").addEventListener("click",
    function(){
        // document.querySelector("#submit").style.color="blue";
        this.style.color="green"
    }
 )