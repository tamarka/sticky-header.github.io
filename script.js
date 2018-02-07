var stickyHeader, sticky;
window.onload=function () {
    alert("4");
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
    sticky = getOffset(stickyHeader);
    //sticky = stickyHeader.offsetTop;
};

function getOffset(el) {
    el = el.getBoundingClientRect();
    return  el.top + window.scrollY;
};

window.onresize = function(){
    checkOrientation();
};
window.onscroll=function () {
    if (window.pageYOffset > sticky)
    {
        stickyHeader.classList.add("sticky-header");
    }
    else if(window.pageYOffset <= sticky)
    {
        stickyHeader.classList.remove("sticky-header");
    }
};

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