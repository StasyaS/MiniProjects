const H = connectionTegInHtml('mainBlock','inputSearch')

const paintAllList = () => {
   H.mainBlock.innerHTML = "";
    person
    .filter(element => element.value.toLowerCase().includes(H.inputSearch.value.toLowerCase()))
        // .filter(element => -1 !=  element.value.toLowerCase().indexOf(H.inputSearch.value.toLowerCase())) 
        .forEach(element => {
            const div = document.createElement("div");
            div.innerHTML =  element.value;
            H.mainBlock.appendChild(div);
        });
}
paintAllList();

H.inputSearch.addEventListener("input" ,paintAllList)