const H = connectionTegInHtml("buttons", "listItems", "C_cont"); //1
// H.listItems = "";
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
        if(ObjItems[i] == undefined) break;
        createItem(ObjItems[i]);
        count += 1;
    }
    if (ObjItems[count] == undefined) {
        changeButton();
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


const clearList = () => {
    const b = document.querySelector('.butMore')
    H.listItems.innerHTML = "";
    b.innerHTML="Down to bottom";
    count = 0
    createMenu();
    b.onclick = createMenu;
}


const changeButton = () => {
    const b = document.querySelector('.butMore');
    b.innerHTML="UP to top";
    b.onclick = clearList;
}

const buttonBlock = () => {
    const b = document.querySelector('.butMore')
    if(b) return;
    const more = document.createElement("button");
    more.value = "more";
    more.classList.add('butMore')
    more.innerHTML="more";
    // more.addEventListener("click", createMenu);
    more.onclick = createMenu;
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
start();






// const q = () => {
//     console.log(2);
//  r()
// }

// const s = () => {
//     console.log(3);
//     // setTimeout(q,20)
// }

// s() /// 108

// const r = () => {
//     console.log(1);
// }

document.querySelector('body').setHTML('');
const targetDiv = document.createElement('div');
var items = [
    {'color': 'blue', type:'blues'},
    {'color': 'light blue', type:'blues'},
    {'color': 'red', type:'reds'},
    {'color': 'light red', type:'reds'},
    {'color': 'yellow', type:'yellows'},
    {'color': 'green', type:'greens'}
];

items.forEach((current) => {
    if (document.querySelectorAll('button[value="' + current.type + '"]').length == 0){
        const button = document.createElement('button');
        button.value = current.type;
        document.querySelector('body').appendChild(button);
        button.innerText = current.type;
    }
});
document.querySelector('body').appendChild(targetDiv);       


document.querySelectorAll('button').forEach(currentButton => {
    currentButton.onclick = function(event){
        targetDiv.setHTML('');
        console.log(items.filter(obj => obj.type == event.srcElement.value));
        items.filter(obj => obj.type == event.srcElement.value).forEach(currentItem => {
            targetDiv.setHTML(targetDiv.getInnerHTML() + JSON.stringify(currentItem));
        });
        
    }
})

