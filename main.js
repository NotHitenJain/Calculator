let input = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
let operators = ['+','-','*','/','%'];
let isfinish = false;
arr.forEach(button => {
    button.addEventListener('click',(e)=>{
        let a = e.target.innerHTML
        if(a == '='){
            try{
            string = eval(string).toString();
            input.value = string;
            isfinish = true;
            }catch(error){ input.value = "error";
                string = "";
                isfinish = false;
            }
        }
        else if(a == "AC"){
            isfinish = false;
            string ="";
            input.value = string;
       }
        else if(a=="DEL"){
            string = string.slice(0,-1);
            input.value = string;
        }
        else{
            if(isfinish){
                if(operators.includes(a)){isfinish=false;}
                else {string = "";isfinish=false;}
            }
            if ( operators.includes(string.slice(-1)) && operators.includes(a)){
                string = string.slice(0,-1) + a;
            }else{
             string += a;}
        input.value = string;
        }
    })
})