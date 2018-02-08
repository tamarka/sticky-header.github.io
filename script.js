var stickyHeader, sticky, banner, content, contentStyle;
window.onload=function () {
    alert("2");
    content=document.getElementById("content");
    checkOrientation();
    addStyleContent();
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
    sticky = stickyHeader.offsetTop;
};

function addStyleContent() {
    contentStyle=content.style;
    var marginTop=-stickyHeader.scrollHeight;
    var paddinTop=stickyHeader.scrollHeight + 20;
    contentStyle.marginTop= ''+ marginTop +'px';
    contentStyle.paddingTop=''+ paddinTop +'px';
};

window.onresize = function(){
    checkOrientation();
    addStyleContent();
};
window.onscroll=function () {
    sticky = stickyHeader.offsetTop;
    banner=document.getElementById("banner");
    if (window.scrollY > sticky && sticky!=0)
    {
        stickyHeader.classList.add("sticky-header");
        content.classList.add("content-with-sticky");
    }
    else if( banner.scrollHeight > window.scrollY && sticky==0)
    {
        stickyHeader.classList.remove("sticky-header");
        content.classList.remove("content-with-sticky");
    }
    else if(window.scrollY <= sticky)
    {
        stickyHeader.classList.remove("sticky-header");
        //content.classList.remove("content-with-sticky");
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