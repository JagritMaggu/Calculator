
let buttons= document.querySelectorAll('button');
let input= document.getElementById('inputB');
let str="";
let multiPly = document.querySelector('.multiply');


let arr= Array.from(buttons);


arr.forEach(button=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML=='='){
            str = eval(str);
            input.value=str;
        }
        else if(e.target.innerHTML=='AC'){
           str="";
           input.value=str;
        }
        else if(e.target.innerHTML=='DEL'){
            str= str.substring(0, str.length-1);
           
         
            input.value=str;
        }
       
        
       else
        {
        str= str + e.target.innerHTML;
        input.value=str;
        }
    })
})