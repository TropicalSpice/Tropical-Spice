const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main-content");
const toggleBtn = document.getElementById("toggleSidebar");

toggleBtn.addEventListener("click", () => {

    sidebar.classList.toggle("collapsed");

    main.classList.toggle("expanded");

});