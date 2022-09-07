const button = document.getElementById("button");

button.addEventListener("click", async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const { slip } = await response.json();
    if (response.ok) {
      document.getElementById("advice-number").textContent = slip.id;
      document.getElementById("advice").textContent = `“${slip.advice}”`;
    }
  } catch (error) {
    const advice = document.getElementById("advice");
    advice.textContent = "if you see this message something went wrong ";
    advice.style.color = "red";
  }
});
