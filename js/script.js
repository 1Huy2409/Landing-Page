const navbar = document.querySelector(".navbar");
const navbarButton = navbar.querySelector(".navbar-button");
const navbarResponsive = document.querySelector(".navbar-responsive");
if (navbarButton)
{
    navbarButton.addEventListener("click", () =>
    {
        if (navbarResponsive)
            {
            navbarResponsive.classList.toggle("active");
        }   
    })
}