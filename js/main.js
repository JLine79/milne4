/* Burger menu toggle function */
const navClick = document.querySelector("#icon");
navClick.addEventListener("click", function(){
    const getNav = document.querySelector("#navbar");
    if (!getNav.classList.contains ("hide")) {
        getNav.classList.add ("hide");
    }
    else {
        getNav.classList.remove ("hide");
    }
})

/*Retoggle menu when menu item is clicked */
const menuClick = document.querySelector ("nav ul");
menuClick.addEventListener("click", function() {
    const getNav = document.querySelector("#navbar");
    if (!getNav.classList.contains ("hide")) {
        getNav.classList.add ("hide");
    }
})

/*Scroll to top when logo is clicked */
const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", function(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})
