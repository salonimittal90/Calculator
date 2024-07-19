const input = document.querySelector('input');
const btns = document.querySelectorAll('button')


let string="";
let arr = Array.from(btns);
arr.forEach(button =>{
    button.addEventListener('click',function(e){
            if(e.target.innerHTML=='='){
                string = eval(string);
                input.value = string;
            }

            else if(e.target.innerHTML=='C'){
                string="";
                input.value = string;
            }
            else if(e.target.innerHTML=='BS'){
                string = string.substring(0,string.length-1);
                input.value=string;
            }
            else{
            string = string+e.target.innerHTML;
            input.value = string
            }
    })
})

