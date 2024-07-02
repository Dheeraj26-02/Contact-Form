const name1 = document.querySelector("#input-name");
const yname=document.querySelector(".yourname");
const yemail=document.querySelector(".youremail");
const email=document.querySelector("#input-email");
const text=document.querySelector("#input-message");
const ytext=document.querySelector(".yourmessage");


name1.addEventListener("click", () => {
    yname.style.color="#0d9f95";
    yname.style.transform="scale(1.1)";
    yname.style.transition=".5s";
})
email.addEventListener("click", () => {
    yemail.style.color="#0d9f95";
    yemail.style.transform="scale(1.1)";
    yemail.style.transition=".5s";
})
text.addEventListener("click", () => {
    ytext.style.color="#0d9f95";
    ytext.style.transform="scale(1.1)";
    ytext.style.transition=".5s";
})
