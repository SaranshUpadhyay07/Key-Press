document.getElementById("light").addEventListener("click", function(){
    document.getElementById("big-container").classList.remove("container-dark");
    document.getElementById("big-container").classList.add("container-light");
});
document.getElementById("dark").addEventListener("click", function(){
    document.getElementById("big-container").classList.remove("container-light");
    document.getElementById("big-container").classList.add("container-dark");
});
document.querySelector(".key-top").addEventListener("mousedown", () => {
  const audio = document.getElementById("key-sound");
  audio.play();
})
