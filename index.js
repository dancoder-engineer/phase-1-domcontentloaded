// Your code goes here
function textChange() {
    document.getElementById(`text`).innerText = `This is really cool!`

}

document.addEventListener('DOMContentLoaded', () => { document.querySelector('p').textContent = `This is really cool!`; } );
//document.addEventListener('DOMContentLoaded', textChange);

//document.addEventListener('DOMContentLoaded', () => { document.getElementById(`text`).innerText = `This is really cool!`; } );