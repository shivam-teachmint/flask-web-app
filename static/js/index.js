// Toggle menu burger code
let menuBurger = document.getElementById("menu-burger");
let menuList = document.getElementById("menu-container-mobile");
menuList.style.display = "none";
menuBurger.addEventListener("click", () => {
    let menuList = document.getElementById("menu-container-mobile");
    console.log();
    if (menuList.style.display === "flex") menuList.style.display = "none";
    else menuList.style.display = "flex";
});
