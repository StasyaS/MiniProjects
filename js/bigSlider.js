// data
const H = connectionTegInHtml(
    "main_images",
    "img1",
    "tiny_images",
    // "tiny1","tiny2", 
    // "tiny3","tiny4", 
    "buttons",
    "prev", "next"
);
let count = 1;
const tinyImages = document.querySelectorAll(".tiny");

// logic
const createBigImg = () => {
    H.img1.src = ObjItems[count].photo; 
}

// Add event


H.next.addEventListener("click", function () {
    count++;
    if (count > ObjItems.length - 1) {
        count = 0
    }
    createBigImg();
    createTinyImg();
})
//count 1
H.prev.addEventListener("click", function () {
    count--; //0
    if (count < 0) {
        count = ObjItems.length - 1;
    }
    createBigImg();
    createTinyImg();
})
const choiceImg = (img,i)=>{
    let countImg = count; // number
    const length =  ObjItems.length - 1 ;
    switch(i){ // 0 1 2 3;
        case 0 : countImg == 0 ? countImg = length: countImg--;
        break;
        case 2 :  countImg == length ? countImg = 0 : countImg++;
        break;
        case 3 : // countImg == length-1 ? countImg = 0 : countImg += 2 ;
            if(countImg == length-1) {
                countImg = 0
            } else if(countImg == length) {
                countImg =1
            } else {
                countImg += 2
            }
        break;
    
}
// console.log(countImg);
   img.src = ObjItems[countImg].photo
// console.log(img);
// console.log(i);
}
const createTinyImg = () => {
//     );
    tinyImages.forEach(choiceImg);
    // console.log(count);
    // switch(count)
    // if (count == 0) {
    //     tinyImages[0].src = ObjItems[ObjItems.length - 1].photo; //11
    // }else {
    //     tinyImages[0].src = ObjItems[count - 1].photo; //10
    // }
    // count == 0 
        // ? tinyImages[0].src = ObjItems[ObjItems.length - 1].photo
        // :tinyImages[0].src = ObjItems[count - 1].photo;

    // if(count == ObjItems.length - 1 ){
    //     tinyImages[2].src = ObjItems[0].photo;
    // }
    // else {
    //     tinyImages[2].src = ObjItems[count+1].photo;
    // }

    // if ( count < ObjItems.length - 2 ) {    // 10 < 10
    //     tinyImages[3].src = ObjItems[count+2].photo;
    // } else if ( count == ObjItems.length - 2 ) {  // 10 == 10
    //     tinyImages[3].src = ObjItems[0].photo;
    // } else if ( count == ObjItems.length - 1) { // 11 == 11
    //     tinyImages[3].src = ObjItems[1].photo
    // } 


    // tinyImages[1].src = ObjItems[count].photo;
   
    
}


    // Start

    !(function () {
        createBigImg();
        createTinyImg();
    })();


// let r = 1 /// type value
// r = 5
// r = 6
// r = 10;




// товары главная  конт (карта)
//филтр


    // js
//'asflsmkldfiwq,casdpodqw0laskdf;was'


//5 //3 - 2 //2
//10 - 15



// switch(){}
// ===
// const oos = 10;
// switch(oos){
//     //oos === 1
//     case 1: console.log('one');
//     break;
//     case 2: console.log('two');
//     // break;
//     case 5: console.log('fi');
//     // break;
//     case "50": console.log('fыфвi');
//     // break;
//     default : console.log('def');
// }

// 
// const num = 2; 

// switch(num) {
//     case 0 : console.log(0);
//     break;
//     case 1 : console.log(1);
//     break;
//     case 2 : 
//     case 3 : console.log(2+ "or" + 3);
//     break;
//     default:  
//         console.log(0);
// }


// console.log(000000000000000000000000);








