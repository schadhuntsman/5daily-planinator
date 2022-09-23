const date = new Date(); 
const current_time = date.getHours();
console.log(current_time)
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const saveBtn = document.querySelectorAll("button");

window.addEventListener('load', () => {
    const textArea = document.querySelectorAll(".time-block");   
    

    for (let i = 0; i < textArea.length; i++) { 
        let hourEl = textArea[i]
        console.log(hourEl);
        const hourString = hourEl.getAttribute("id")
        console.log(hourString, "what's this?");
        const hour = parseInt(hourString)
        if(hour > current_time) {
            $(hourEl).addClass("future")
        } else if (hour < current_time) {
            $(hourEl).addClass("past")
        } else {
            // (hour = current_time)
            $(hourEl).addClass("present")
        }     
    }  
})

timeSave = () => {
    for (let i = 0; i < numbers.length; i++){
        $("input")[i].value = localStorage.getItem("input" + String(i+1));
    }
}
    $("button").on("click", function(event){
        event.preventDefault();
        for (let i = 0; i < numbers.length; i++) {
            localStorage.setItem("input" + String(i+1), $("input")[i].value)
        }
    });
    timeSave();    

    

    const taskRows = document.querySelector(".code-rows");
    const containerDiv = document.querySelector(".container");
    
    containerDiv.addEventListener('submit', (e) => {
        

        const tasks = input.value;

        if (!tasks) {
            alert("You must enter a task");
        }
    })

const nine = new Date('June 6, 2022 09:00:00');
const today = new Date();

const ten = new Date(`${today.toDateString()} 10:00:00`);
console.log(today.toDateString());

const eleven = new Date(`${today.toDateString()} 11:00:00`);
console.log(today.toDateString());

const twelve = new Date(`${today.toDateString()} 12:00:00`);
console.log(today.toDateString());

const one = new Date(`${today.toDateString()} 13:00:00`);
console.log(today.toDateString());

const two = new Date(`${today.toDateString()} 14:00:00`);
console.log(today.toDateString());

const three = new Date(`${today.toDateString()} 15:00:00`);
console.log(today.toDateString());

const four = new Date(`${today.toDateString()} 16:00:00`);
console.log(today.toDateString());

const five = new Date(`${today.toDateString()} 17:00:00`);
console.log(today.toDateString());
