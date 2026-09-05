const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");



/* =========================
   MOBILE MENU
========================= */

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



/* =========================
   CLOSE MENU AFTER CLICK
========================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});



/* =========================
   TYPING EFFECT
========================= */

const typingElement =
    document.querySelector(".typing-text");


const words = [

    ".NET Developer",

    "C# Programmer",

    "Software Developer",

    "AI Enthusiast"

];


let wordIndex = 0;
let characterIndex = 0;

let deleting = false;



function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) %
                words.length;

        }

    }


    const speed =
        deleting ? 45 : 80;


    setTimeout(typeEffect, speed);

}


typeEffect();