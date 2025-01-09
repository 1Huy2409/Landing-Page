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
const workSection = document.querySelector(".work-section");
const workPicture = workSection.querySelector(".work-picture");
const imageWork = workPicture.querySelector("img");
if (workSection)
{
    const workItems = workSection.querySelectorAll(".work-item");
    if (workItems)
    {
        workItems.forEach(button =>
            button.addEventListener("click", () =>
            {
                if (button.classList.contains("first-work"))
                {
                    if (imageWork)
                    {
                        imageWork.src = "./img/pic5.jpg";
                    }
                    workItems.forEach(item =>
                        {
                            if (item.classList.contains("active"))
                            {
                                item.classList.remove("active");
                            } 
                        }
                        )
                    button.classList.add("active");
                }
                if (button.classList.contains("second-work"))
                {
                    if (imageWork)
                    {
                        imageWork.src = "./img/pic6.jpg";
                    }
                    workItems.forEach(item =>
                        {
                            if (item.classList.contains("active"))
                            {
                                item.classList.remove("active");
                            } 
                        }
                        )
                    button.classList.add("active");
                }
                if (button.classList.contains("third-work"))
                {
                    if (imageWork)
                    {
                        imageWork.src = "./img/pic7.jpg";
                    }
                    workItems.forEach(item =>
                        {
                            if (item.classList.contains("active"))
                            {
                                item.classList.remove("active");
                            } 
                        }
                        )
                    button.classList.add("active");
                }
            })
        )
    }
}
const commentSection = document.querySelector(".comment-section"); 
const commentItems = commentSection.querySelectorAll(".comment-item");

if (commentItems)
{
    commentItems.forEach(item =>
    {
        if (item)
        {
            // console.log(item);
            item.addEventListener("click", ()=>
            {
                const content = item.querySelector(".comment-content");
                if (content)
                {
                    content.classList.toggle("active");
                }
            })
        }
    }
    )
}
