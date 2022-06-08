window.addEventListener('load', () => {
    const taskEnter = document.querySelector("#enter-task");
    const taskSave = document.querySelector("#save-task");
    const taskRows = document.querySelector("#row");
    const containerDiv = document.querySelector(".container");
    
    containerDiv.addEventListener('submit', (e) => {
        e.preventDefault();

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

getInfo();






//time element example
// var nineAm = document.getElementById('#row');
// const nineAm = new Date('June 6, 2022 09:00:00');
// const today = new Date();

// const tenAm = new Date(`${today.toDateString()} 10:00:00`);
// console.log(today.toDateString());
// const eleven = new Date(`${today.toDateString()} 11:00:00`);

// if (nineAm > Date.now()) {
//     nineAm.style.backgroundColor = 'red';
// } else {
//     nineAm.style.backgroundColor = 'green';
// }


// console.log(Date.now() < nineAm); 

// const changeBox = function(){
//     const box = document.querySelector
// }