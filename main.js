
// MODAL OPEN AND CLOSE

let modal = document.getElementById('forestModal');
let btn = document.getElementById('forestButton');
let span = document.getElementsByClassName('close')[0];
let btnHide = document.getElementById('buttons')

btn.onclick = function () {
    console.log('button clicked')
    modal.style.display = 'block'
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(e) {
    if(e.target === modal) {
        modal.style.display = 'none'
    }
}

//BUTTON HIDE


btnHide.onclick = function () {
    console.log('button clicked')
    document.getElementById('buttons').style.visibility='hidden';
}

