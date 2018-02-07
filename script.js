var stickyHeader, sticky, scrollCurr=0, scrollPrev=0, scrollDif=0, body;
window.onload=function () {
    alert("2");
    body=document.getElementById("body");
    checkOrientation();
};

function checkOrientation()
{
    if(window.innerWidth<=800)
    {
        stickyHeader = document.getElementById("mobileNav");
    }
    else
    {
        stickyHeader = document.getElementById("desktopNav");
    }
    //if()
    //sticky = getOffset(stickyHeader);
    sticky = stickyHeader.offsetTop;
};

function getOffset(el) {
    el = el.getBoundingClientRect();
    return  el.top + window.scrollY;
};

window.onresize = function(){
    checkOrientation();
};

body.addEventListener("scroll", function (e) {
    if (getOffset(body) > sticky)
    {
        stickyHeader.classList.add("sticky-header");
    }
    else
    {
        stickyHeader.classList.remove("sticky-header");
    }
});
/*window.onscroll=function () {
    scrollCurr=window.pageYOffset;
    scrollDif=scrollPrev-scrollCurr;
    if (window.pageYOffset > sticky)
    {
        stickyHeader.classList.add("sticky-header");
    }
    else if(window.pageYOffset <= sticky)
    {
        stickyHeader.classList.remove("sticky-header");
    }
    if(scrollCurr <= 0)
    {
        stickyHeader.classList.remove("sticky-header");
    }
    else if(scrollDif < 0)
    {
        stickyHeader.classList.add("sticky-header")
    }
    else if(scrollDif > 0)
    {
        stickyHeader.classList.remove("sticky-header");
    }
    scrollPrev=scrollCurr;
};*/


function showHideMenu() {
    var burgerMenu=document.getElementById("burger-menu");
    var mobileUl=document.getElementById("mobile-ul");
    if(hasClass(burgerMenu, "burger-menu"))
    {
        burgerMenu.classList.remove("burger-menu");
        burgerMenu.classList.add("close-menu");
        mobileUl.classList.remove("display-none");
    }
    else if(hasClass(burgerMenu, "close-menu"))
    {
        burgerMenu.classList.add("burger-menu");
        burgerMenu.classList.remove("close-menu");
        mobileUl.classList.add("display-none");
    }
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}