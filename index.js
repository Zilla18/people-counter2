const countEl = document.getElementById("count-el");
// const saveBTN = document.getElementById("save-btn");

let count = 0;

function increment() {
  count = count + 1;

  countEl.innerText = count;
}

function save() {
  console.log(count);
}
