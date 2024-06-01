let menuBar = document.querySelector(".menu-bar");
let dropDown = document.querySelector(".dropdown-container");

menuBar.addEventListener("click", function () {
    dropDown.classList.toggle("open");

})
let submit = document.querySelector(".submit");

submit.addEventListener("click", function () {

    let isValid = true;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let textarea = document.getElementById("textarea").value;

    if (name.trim() === "" || email.trim() === "" || password.trim() === "" || textarea.trim() === "") {
        isValid = false
        alert("Please First Fill All Form!");

    }
    if (isValid) {
        localStorage.setItem("Name",`${name}`);
        localStorage.setItem("Email",`${email}`);
        localStorage.setItem("Password",`${password}`);
        localStorage.setItem("textarea",`${textarea}`);
        
        alert("Submited Successfully!")
        
        name.value= "";
        email.value="";
        password.value="";
        textarea.value="";
    }

})
