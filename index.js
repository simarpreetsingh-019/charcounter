const textarea_el = document.getElementById("textarea");
const totalCounter_el = document.getElementById("total-counter");

textarea_el.addEventListener("keyup", ()=> {
  updateCounter();
});

function updateCounter(){
  totalCounter_el.innerHTML = textarea_el.value.length;
}