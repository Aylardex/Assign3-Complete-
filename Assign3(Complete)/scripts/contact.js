// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const contPage = document.getElementById("contact-page");
const subButton = document.getElementById("submit-button");

subButton.addEventListener("click", function(click) {
    click.preventDefault();

    
    const thanks = document.createElement("p");
    thanks.textContent = "Thank you for your message!";
    thanks.style.fontSize = "24px";


    contPage.innerHTML = "";
    contPage.appendChild(thanks);
});