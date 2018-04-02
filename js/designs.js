const color = document.querySelector('#colorPicker');
const width = document.querySelector('#inputWidth');
const height = document.querySelector('#inputHeight');
const sizePicker = document.querySelector('#sizePicker');
const mainCanvas = document.querySelector('#pixelCanvas');

//this clears out the old grid when size is submited!
function gridClear () { 
  mainCanvas.innerHTML='';
}

//this makes a new grid!
function makeGrid () {
  let tr, td;
  for (let z=0; z<height.value; z++) {
    tr = document.createElement('tr');
    mainCanvas.appendChild(tr);
    for (let y=0; y<width.value; y++) {
      td = document.createElement('td');
      tr.appendChild(td);
    }
  }
}

function changeColor () {
  mainCanvas.addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.nodeName === 'TD') {
      event.target.style.backgroundColor = color.value;
    }
  })
}

sizePicker.addEventListener('submit', function(event) {
  event.preventDefault();
  gridClear ();
  makeGrid ();
  changeColor ();
})