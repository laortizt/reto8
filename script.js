const container = document.getElementById('container') /*se agrega container */
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'] /*se agrega colores*/
const SQUARES = 500

for(let i = 0; i < SQUARES; i++) { /*se agrega i++*/
    const square = document.createElement('div') /*se agrega div*/
    square.classList.add('square') /*se agrega square*/

    square.addEventListener('mouseover', () => setColor(square))/*se agrega mouseover*/

    square.addEventListener('mouseout', () => removeColor(square))/*se agrega mouseout*/

    container.appendChild(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color  /*se agrega color*/
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`/*se agrega `0 0 2px ${color}, 0 0 10 ${color}`*/
}

function removeColor(element) {
   element.style.background = '#1d1d1d'  /*se agrega '#1d1d1d'*/
   element.style.boxShadow = '0 0 2px #000' /*se agrega '0 0 2px #000'*/
}

function getRandomColor() {
    return colors[Math.floor(Math.random()* colors.length)]/*se agrega * colors.length*/
}