window.addEventListener('load', () => {
    const timeBlock = document.getElementsByClassName("time-block");
    
    const taskRows = document.querySelector(".code-rows");
    const containerDiv = document.querySelector(".container");
    // tasks();
    console.log(timeBlock);
    
    // timeBlockConversion();
    // console.log(timeBlockConversion);
    containerDiv.addEventListener('submit', (e) => {
        

        const tasks = input.value;

        if (!tasks) {
            alert("You must enter a task");
        }
    })
})

document.getElementById('save-task1').addEventListener("click", function() {
    localStorage.setItem('9', document.getElementById('9').value)
})
document.getElementById('save-task2').addEventListener("click", function() {
    localStorage.setItem('10', document.getElementById('10').value)
})
document.getElementById('save-task3').addEventListener("click", function() {
    localStorage.setItem('11', document.getElementById('11').value)
})
document.getElementById('save-task4').addEventListener("click", function() {
    localStorage.setItem('12', document.getElementById('12').value)
})
document.getElementById('save-task5').addEventListener("click", function() {
    localStorage.setItem('13', document.getElementById('13').value)
})
document.getElementById('save-task6').addEventListener("click", function() {
    localStorage.setItem('14', document.getElementById('14').value)
})
document.getElementById('save-task6').addEventListener("click", function() {
    localStorage.setItem('15', document.getElementById('15').value)
})
document.getElementById('save-task6').addEventListener("click", function() {
    localStorage.setItem('16', document.getElementById('16').value)
})
document.getElementById('save-task9').addEventListener("click", function() {
    localStorage.setItem('17', document.getElementById('17').value)
})

function getInfo() {
    for (let i = 9; i <= 17; i++) { 
        let a = i.toString()  
        document.getElementById(a).value = localStorage.getItem(a)     
    }
}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

getInfo();

// time element example
// var nine = document.getElementById('.time-block');
const today = new Date();

const nine = new Date(`${today.toDateString()} 09:00:00`);


const ten = new Date(`${today.toDateString()} 10:00:00`);
console.log('ten is here', ten.getHours());
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

const timeBlock = document.getElementsByClassName("time-block");


function timeColor(taskHour, el) {
    console.log('hello');
if (taskHour.getHours() < Date.now()) {
    el.style.backgroundColor = 'crimson';
} else if (taskHour.getHours() === new Date().getHours()) {
    el.style.backgroundColor = 'green';
} else {el.style.backgroundColor = 'gray'

}   
};

function assignColors(arr) {
    console.log(arr);
    for (let i = 0; i < arr.length; i++){
        if (arr[i].id === '9') {
            timeColor(nine, arr[i])

        }
        if (arr[i].id === '10') {
            timeColor(ten, arr[i])

        }
        if (arr[i].id === '11') {
            timeColor(eleven, arr[i])

        }        if (arr[i].id === '12') {
            timeColor(twelve, arr[i])

        }
        if (arr[i].id === '13') {
            timeColor(one, arr[i])

        }
        if (arr[i].id === '14') {
            timeColor(two, arr[i])

        }        if (arr[i].id === '15') {
            timeColor(three, arr[i])

        }
        if (arr[i].id === '16') {
            timeColor(four, arr[i])

        }
        if (arr[i].id === '17') {
            timeColor(five, arr[i])

        }
        //do if for every time 
    }
    
}
assignColors(timeBlock);


         


// function timeColor() {
//     const arr = null;
//     const timeBlock = document.querySelector(".time-block");
//     // change input color based on current time
//     timeBlock.forEach(function(time) {
    
// var timeBlockId = time.getAttribute("time-block");
// console.log(timeBlockId);
//     }
//     )
// }