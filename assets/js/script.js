/*Function of change the picture*/
function imgSlider(e){
    document.querySelector('#phone').src = e;
}

/*Function of change the circle color*/
function circleChange(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}