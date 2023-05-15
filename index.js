function function1() {
document.querySelector('body').style.backgroundImage='linear-gradient(to right, red, yellow,
green)';
var x = document.querySelector('body').style;
function function2() {
x.backgroundImage='linear-gradient(to right, blue, white, blue, white, blue)';
function function3() {
x.backgroundImage='linear-gradient(to right, red, white, blue)';
}
document.getElementById('button5').addEventListener('click', function3);
var y = document.getElementById('header');
function getBigger() {
y.style.fontSize='100px';
y.style.color='purple';
}
function getSmaller() {
y.style.fontSize='50px';
y.style.color='orange';
}
function change Text() {
y.innerHTML='My Awesome Website';
y.style.color='green';
}
y.addEventListener('mouseover', getBigger);
y.addEventListener('mouseout', getSmaller);
y.addEventListener('click', changeText);
