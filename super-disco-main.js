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