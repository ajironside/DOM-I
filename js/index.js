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

// update the img src for the second image
let snippet = document.getElementById("cta-img");
snippet.setAttribute('src', siteContent["cta"]["img-src"]);

// update the img src for the third image
let crossScreen = document.getElementById("middle-img");
crossScreen.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


//update navigation bar
let links = document.querySelectorAll('a');
for (let i = 0; i < links.length; i++) {
    links[i].classList.add(`nav-item-${i+1}`);
    links[i].textContent = siteContent.nav[`nav-item-${i+1}`];
}

//update DOM IS AWESOME heading
let title = document.querySelector('h1');
title.setAttribute('style', 'white-space: pre;');
title.textContent = "DOM \r\n";
title.textContent += "Is \r\n";
title.textContent += "Awesome";

//update Get Started button
let btn = document.querySelector('button');
btn.textContent = "Get Started";

//group h4 tags
let sectionTitle = document.getElementsByTagName('h4');
let sectionTitleArray = Array.from(sectionTitle);

//change h4 tags
sectionTitleArray[0].textContent = siteContent["main-content"]["features-h4"];
sectionTitleArray[1].textContent = siteContent["main-content"]["about-h4"];
sectionTitleArray[2].textContent = siteContent["main-content"]["services-h4"];
sectionTitleArray[3].textContent = siteContent["main-content"]["product-h4"];
sectionTitleArray[4].textContent = siteContent["main-content"]["vision-h4"];
sectionTitleArray[5].textContent = siteContent["contact"]["contact-h4"];

//update copyright info footer
let date = document.querySelector('footer');
date.textContent = siteContent["footer"]["copyright"];