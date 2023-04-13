const myForm = document.querySelector('form');
const loops = ['while', 'forin', 'forof', 'for'];
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let myloop = document.getElementById("select").value
    
    
    if(myloop == ""){
       let p = document.createElement('p');
            p.innerHTML = 'cannot be blank';
            p.style.color = 'red';
            p.style.overflow = 'hidden';

        myForm.append(p);
        return false;
        
    }
    else if(myloop == document.getElementById('select').value[0]){
        p.style.display = 'none';
        return false;
    }else{
        
        
        switch(myloop){
            case 'while': 
                let text = "";
                let i = 0;
                while (i < 4){
                    text += 'The number is ' + i + "<br>";
        
                    i++;
                }
                document.getElementById("demo").innerHTML = text;
                break;
        
            case 'forin':
                const person = {fname:"John", lname:"Doe", age:25}; 
        
                let txt = "";
                for (let x in person) {
                    txt += person[x] + " ";
                }
        
                 document.getElementById("demo").innerHTML = txt;  
        
            break;
            case 'forof':
                const cars = ["BMW", "Volvo", "Mini"];
        
                let motor = "";
                for (let x of cars) {
                     motor += x + "<br>";
                }
        
                document.getElementById("demo").innerHTML = motor;
                break;
        
            case 'for':
                let number = "";
        
                for (let i = 0; i < 5; i++) {
                    number += "The number is " + i + "<br>";
                }
        
                document.getElementById("demo").innerHTML = number
                break;    
                
                default:
        
                break;
                
        
        }
    }
})
 
    // let x = document.forms["myForm"]["loops"].value;



