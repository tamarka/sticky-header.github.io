var stickyHeader, sticky, banner;
window.onload=function () {
    alert("2");
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
    //scrollCurr=window.pageYOffset;
    //scrollDif=scrollPrev-scrollCurr;
    sticky = stickyHeader.offsetTop;
    banner=document.getElementById("banner");
    if (window.scrollY > sticky && sticky!=0)
    {
        stickyHeader.classList.add("sticky-header");
    }
    else if( banner.scrollHeight > window.scrollY && sticky==0)
    {
        stickyHeader.classList.remove("sticky-header");
    }
    else if(window.scrollY <= sticky)
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