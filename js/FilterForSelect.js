const H = connectionTegInHtml( "images");

const filtMen = (slot = -1) => {
    ObjItems
        .filter(el => {
            if (slot == -1) {
                return true
            } else {
                return el.value == slot
            }
        })
        .forEach(createProducts);
}

// H.selector.addEventListener("click", function (e) {
//     // if(H.selectForm.className.includes("active")) {
//     //     H.selectForm.classList.remove("active")
//     // } else {
//     //     H.selectForm.classList.add("active"); 
//     // }
//     H.selectForm.classList.toggle("active");

//     if (e.target == H.selector || e.target == H.selectForm || e.target == H.choose) return;
//     H.choose.innerHTML = e.target.innerText;
//     H.images.innerHTML = "";
//     //filtMen(e.target.slot);
// })

const createProducts = (imgs) => {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const text = document.createElement("p");
    const price = document.createElement("p");
    const img = document.createElement("img");
    h2.innerHTML = imgs.name;
    img.src = imgs.photo;
    text.innerHTML = imgs.text;
    price.innerHTML = imgs.price;
    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(text);
    div.appendChild(price);
    H.images.appendChild(div);
}

(function () {
    // ObjItems.forEach(createProducts)
    filtMen()
})()

// *************  price       *****************

// const H_pr = connectionTegInHtml("selector_pr");

// H_pr.selector_pr.addEventListener("click", function (e) {
    // H.selectForm.classList.toggle("active");
    // if (e.target == H_pr.selector_pr || e.target == H.selectForm || e.target == H.choose)return
    // H.choose.innerHTML = e.target.innerHTML;

    // H.images.innerHTML = "";

    // ObjItems
    //     .filter(elem =>
    //         e.target.slot == -1 ?
    //         true :
    //         elem.price <= e.target.slot)
    //     .forEach(createProducts);

// })



// H.selector.addEventListener("click", function (e) {
//     selector.children[1].classList.toggle("active");

//     if (e.target == H.selector || e.target == H.selectForm || e.target == H.choose) return;
//     H.choose.innerHTML = e.target.innerText;
//     H.images.innerHTML = "";
//     filtMen(e.target.slot);
// })

const selectors = document.querySelectorAll('.selector')



// null
// undefined;

// Object -> Function Array Promise 
// Boolean
// Number
// String

// BigInt //53
// Symbol

const allFilter = () => {
    ObjItems  
        .forEach(elem=>{
            const price = selectors[1].value == -1 ? true : selectors[1].value >= elem.price;
            const group = selectors[0].value == -1 ? true : selectors[0].value == elem.value;
            if(price && group) {
                createProducts(elem)
            }
        })
        
        // .filter(elem =>{
        //     if(selectors[1].value == -1) return true;
        //     return selectors[1].value >= elem.price 
        // })
        // .filter(elem =>{
        //     if(selectors[0].value == -1) return true;
        //     return selectors[0].value == elem.value ;
        // })
        // .forEach(createProducts)

}




selectors.forEach((selector)=> {
    selector.addEventListener('blur', e => {
        selector.children[1].classList.remove("active")
    })
    
    selector.addEventListener("click", function (e) {
        selector.children[1].classList.toggle("active");
        if (e.target.slot == "" ) return;

        selector.value = e.target.slot;
        H.images.innerHTML = "";
        selector.children[0].innerHTML = e.target.innerText;

        allFilter();

    })
})




//! reduce







// const t = [1,2,3,4,5];
// const q = [6,7,8,9,'f',5,1]; //7

// const t_q = [...t, ...q];
// // console.log(t);
// t.concat(q);

// console.log( 
//     q.map (elem => {
//         return t.push(elem);   
// })
// )

// // q.forEach()
//  // 6
// console.log();

// const s = [1,2,3]
// // console.log(
// //     s.map((elem,i)=>{
// //         return `<div>${elem}</div>`
// //         console.log(elem);
// //     })
// // );
// // console.log(s.push(1));
// // console.log(s.push(1));
// // console.log(s.push(1));
// // console.log(s.push(1));
// // console.log(s.push(1));

// 'elem - 1 index - 0'


// const num = [0,2,2,1,2,3,4,5,6,7,8,9]
// ///7

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(2,0,'add','ff','dd');

// console.log(months.concat(num), months);



// //    reverse reduce

// // origin
// //splice sort

// //no origin
// //includes  indexOf find filter map slice split join concat


