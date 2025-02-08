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
                item.classList.toggle('active');
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
// animation scroll and load
// check element in viewport
function isInViewport(element)
{
    const rect = element.getBoundingClientRect();
    return (
        rect.top + rect.height / 2 <= window.innerHeight &&
        rect.bottom - rect.height / 2 >= 0
    );
}
// end check element in vp
const basicScrollLoad = (element, animation, state) =>
{
    if (isInViewport(element) && !state.hasAnimation)
    {
        element.classList.add(animation);
        state.hasAnimation = true;
    }
}
const contactScrollLoad = (parent, child, animation, state) =>
{
    if (isInViewport(parent) && !state.hasAnimation)
    {
        child.classList.add(animation);
        state.hasAnimation = true;
    }
}
const featureScrollLoad = (element, features, animation, state) =>
{
    if (isInViewport(element) && !state.hasAnimation)
    {
        features.forEach((item, index) =>
        {
            setTimeout(()=>
            {
                item.classList.add(animation);
            }, index*400)
        })
        state.hasAnimation = true;
    }
}
const pricingScrollLoad = (element, priceTypes, animation, state) =>
{
    if (isInViewport(element) && !state.hasAnimation)
    {
        priceTypes.forEach((index, item) =>
        {
            setTimeout(() =>
            {
                item.classList.add(animation);
            }, index*400)
        })
        state.hasAnimation = true;
    }
}
const discoverStatus = {hasAnimation: false};
const portfolioStatus = {hasAnimation: false};
const featuresStatus = {hasAnimation: false};
const pricingStatus = {hasAnimation: false};
const contactStatus = {hasAnimation: false};

// querySelector
const discoverImg = document.querySelector('.discover-img');
const portfolioBox = document.querySelector('.con-2');
const featureSection = document.querySelector('.feature-section');
const featureItems = featureSection.querySelectorAll('.col-features');
const features = [...featureItems];
const priceSection = document.querySelector('.price-section');
const priceBoxes = priceSection.querySelectorAll('.inner-box');
const priceArray = [...priceBoxes];
const contactSection = document.querySelector('.contact-section');
const contactBox = contactSection.querySelector('.contact-box');
window.addEventListener("scroll", () =>
{
    basicScrollLoad(discoverImg, "slideInLeft", discoverStatus);
    basicScrollLoad(portfolioBox, "fadeIn", portfolioStatus);
    featureScrollLoad(featureSection, features, "fadeIn", featuresStatus);
    featureScrollLoad(priceSection, priceArray, "bounceIn", pricingStatus);
    contactScrollLoad(contactSection, contactBox, "bounceIn", contactStatus);
})