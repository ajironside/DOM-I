const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//update navigation bar
let links = document.querySelectorAll('a');
for (let i = 0; i < links.length; i++) {
    links[i].classList.add(`nav-item-${i+1}`);
    links[i].textContent = siteContent.nav[`nav-item-${i+1}`];
}

//update DOM IS AWESOME heading
const title = document.querySelector('h1');
title.setAttribute('style', 'white-space: pre;');
title.textContent = "DOM \r\n";
title.textContent += "Is \r\n";
title.textContent += "Awesome";

//update Get Started button
const btn = document.querySelector('button');
btn.textContent = "Get Started";

//update top content
//const featuresTitle = top - content.querySelector('h4');
//featuresTitle.textContent = siteContent["main-content"]["features-h4"];

//const aboutTitle = document.top - content.querySelector('h4');
//aboutTitle.textContent = siteContent["main-content"]["about-h4"];

// update the img src for the second image
let snippet = document.getElementById("cta-img");
snippet.setAttribute('src', siteContent["cta"]["img-src"]);

//update bottom content

// update the img src for the third image
let crossScreen = document.getElementById("middle-img");
crossScreen.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//update contact info
//const infoTitle = document.querySelector('h4');
//infoTitle.textContent = siteContent["contact"]["contact-h4"];

//const infoAddress = document.querySelector();

//const infoPhone = document.querySelector();

//const infoEmail = document.querySelector();


//update copyright info footer
const date = document.querySelector('footer');
date.textContent = siteContent["footer"]["copyright"];