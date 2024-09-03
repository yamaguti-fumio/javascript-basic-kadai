document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("btn");
  const textElement = document.getElementById("text");

  button.addEventListener("click", function() {
      setTimeout(function() {
          textElement.textContent = "ボタンがクリックされました";
      }, 2000); // 2000ミリ秒 = 2秒
  });
});
