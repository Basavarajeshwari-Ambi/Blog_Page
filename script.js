var updateButton = document.getElementById("show");
var dialog = document.getElementById("myFirstDialog");

(function () { 
  document.getElementById("hide").onclick = function () {
      dialog.close();
  };
})();

updateButton.addEventListener('click', function () {
  if (typeof dialog.showModal == "function") {
   dialog.showModal();
  } 
});

