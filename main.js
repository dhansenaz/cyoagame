let modal = document.getElementById('forestModal');
let btn = document.getElementById('forestButton');
let span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
    console.log('button clicked')
    modal.style.display = 'block'
}

span.onclick = function() {
    modal.style.display = 'none'
}

window.onclick = function(e) {
    if(e.target === modal) {
        modal.style.display = 'none'
    }
}