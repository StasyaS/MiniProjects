const H = connectionTegInHtml("buttons", "listItems", "C_cont"); //1

const allPain = (value) => {
    H.listItems.innerHTML = "";

    ObjItems
        .filter(elem => {
            if (elem.value == value) return true
        })
        .forEach(createItem)
}

H.buttons.addEventListener("click", function (e) {
    const value = e.target.value;
    if (value == undefined) return;
    if (value === '-1') {
        H.listItems.innerHTML = "";
        count = 0;
        buttonBlock()
        createMenu();
       
    } else {
        deletebuttonBlock();
        allPain(value)
    }
})

let count = 0;

function createMenu() {

    for(let i = 0; i <= 1; i++){
        if(ObjItems[count] == undefined) break;
        createItem(ObjItems[count]);
        count += 1;
    }
    // ObjItems.forEach((elem, i) => {
    //     if (i <=1 ) {
    //         createItem(elem);
    //     }
    //     console.log(1);
    // })  
//     if(count >= ObjItems.length) {
// console.log(1);
//     }
}



const buttonBlock = () => {
    const b = document.querySelector('.butMore')
    if(b) return;
    const more = document.createElement("button");
    more.value = "more";
    more.classList.add('butMore')
    more.innerHTML="more";
    more.addEventListener("click", createMenu);
    H.C_cont.appendChild(more);          
}

const createItem = (elem) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");
    img.src = elem.photo;
    p.innerHTML = elem.name;

    div.appendChild(img);
    div.appendChild(p);

    H.listItems.appendChild(div);     
}

const deletebuttonBlock = () => {
    const dB =  document.querySelector('.butMore');
    if (dB == null) return;
    dB.remove();
}


const start = () => {
    createMenu(); //2
    buttonBlock()  
   
}
start()
//! HW  git ;
//! add CSS