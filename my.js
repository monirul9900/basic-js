document.title = "i love u nafisa";

const name = document.querySelector("input[placeholder ='Name']");
const birth_year = document.querySelector("input[placeholder ='birth year']");

const click = document.querySelector("button");
const h1 = document.querySelector("h1");

click.addEventListener("click", function () {
  if (!name.value || !birth_year.value) {
    h1.innerHTML = "all fields are require";
  } else {
    const age = new Date().getFullYear() - Number(birth_year.value);

    if (age >= 21) {
      h1.innerHTML = `<img src="https://media.tenor.com/q8TigR5GnWkAAAAM/firecracker-diwali.gif" alt="">`;
    } else {
      h1.innerHTML = `<img src="https://i.pinimg.com/originals/80/eb/ff/80ebff5d4895501127835eec2df88dd5.gif" alt="">`;
    }
  }
});
