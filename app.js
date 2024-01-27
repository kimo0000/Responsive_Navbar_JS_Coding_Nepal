const bodyEl = document.querySelector('body'),
    header = document.querySelector('header'),
    menu = header.querySelector('header .menu'),
    navEl = header.querySelector('nav'),
    closeBtn = navEl.querySelector('.close_btn'),
    theme = header.querySelector(".mode"),
    inputSearchParent = header.querySelector(".inp_search"),
    inputSearchEl = header.querySelector(".search");

// console.log(localStorage.getItem("mode"));

if(localStorage.getItem('mode')) {
    bodyEl.classList.add(localStorage.getItem("mode"));
    theme.children[0].className = "fa-solid fa-moon dark";
} else {
    theme.children[0].className = "fa-regular fa-sun light";
}

theme.addEventListener('click', () => {
    bodyEl.classList.toggle('dark');
    if(bodyEl.classList.contains('dark')) {
        theme.children[0].className = "fa-solid fa-moon dark";
        // localStorage.setItem("mode", "light");
    } else {
        theme.children[0].className = "fa-regular fa-sun light";
    }

    localStorage.setItem("mode", bodyEl.classList);
});

menu.addEventListener('click', () => {
     navEl.classList.toggle('show_nav');
});

closeBtn.addEventListener('click', () => menu.click());


inputSearchEl.addEventListener('click', () => {
    inputSearchParent.classList.toggle("show");
    if(inputSearchParent.classList.contains("show")) {
       inputSearchEl.className = "fa-solid fa-xmark close";
    } else {
       inputSearchEl.className = "fa-solid fa-magnifying-glass search";
    }
})