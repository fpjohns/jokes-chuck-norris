const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", (e) => {
  const response = fetch("https://api.chucknorris.io/jokes/random");
  response
    .then((a) => {
      return a.json();
    })
    .then((json) => {
      result.append(json.value);
    });
});
