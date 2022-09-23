const input = document.querySelector(".input");
let amountOfSymbols;
input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
   (amountOfSymbols = `${input}`) => {
      return amountOfSymbols.length;
    };
  }
  console.log(amountOfSymbols);
});
