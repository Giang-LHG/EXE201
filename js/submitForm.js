let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  fetch(
    "https://script.google.com/macros/s/AKfycbzqxuQBw44BvnaafJtTg02sRDKHoEzdOHyqKaHzyu3NjF98WC00UoNE1YahizKgyzj3Lw/exec",
    {
      method: "POST",
      body: data,
      mode: "no-cors", // Add this option
    }
  ).then((res) => res.text().then((data) => console.log(data)));
});
