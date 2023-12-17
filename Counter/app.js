const count = document.getElementById('count');
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const reset = document.getElementById('reset');

//starting from 0, will add 1 each time the increase button is clicked
add.addEventListener('click', () => {
    count.innerHTML++;
    applyColor();
});

//starting from 0, will subtract 1 each time the decrease button is clicked
sub.addEventListener('click', () => {
    count.innerHTML--;
    applyColor();
});

//resets any value to 0
reset.addEventListener('click', () => {
    count.innerHTML = 0;
    applyColor();
});

function applyColor() {
    if(count.innerHTML > 0) {
        count.style.color = 'green';
    } else if(count.innerHTML < 0) {
        count.style.color = 'orangered';
    } else {
        count.style.color = 'black';
    }
}
