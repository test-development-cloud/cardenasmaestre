const inputSearch = document.getElementById("inputSearch");
const btnSearch = document.getElementById("btnSearch");

inputSearch.addEventListener("change", ()=>{
    const valueSerarch = inputSearch.value;
    const inputSearchClean = valueSerarch.replace(/[^-A-Za-z0-9]+/g, '_').toLowerCase();
    const link = inputSearchClean + ".html";
    btnSearch.href = link;
})

inputSearch.addEventListener("keyup", ({key})=>{
    if (key === "Enter"){
        btnSearch.click();
    }
})
