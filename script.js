function scrollToDestinations(){
    document.getElementById("destinations")
        .scrollIntoView({behavior:"smooth"});
}

// Dark Mode
const toggle = document.getElementById("modeToggle");
toggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    toggle.textContent = 
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Image Slider
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(()=>{
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
},4000);
