const h = connectionTegInHtml("thema", "text", "saveText", "getText");


//  console.log(thema);

h.thema.addEventListener("click", () => {
    console.log(document.body.className);
    document.body.classList.toggle("bg");
    if (document.body.className == 'bg') {
        localStorage.setItem('bg', "RED")
    } else {
        localStorage.setItem('bg', "white")
    }

})
// localStorage.setItem('name', 100)

// const infinityFun = (...argument) => {
//     console.log(argument);
//     console.log(...argument);
// }
// console.log(
//     ...[1,'asas',false]
// );
// console.log(1,'asas',false)

// ...  когда исползуещь  ...на  массиве, тип данных масив удаляется  , и остается елементы с верными для них типами данных
// твоя функция будет вызвана ВСЕ ЕЛЕМЕНТЫ  МАССИВА СТАНУТ АРГУМЕНТАМИ ЭТОЙ ФУНКЦИИ 



const bagr = localStorage.getItem('bg');
if (bagr == "RED") {
    document.body.classList.add("bg");
}

const obj = {
    name: 1
};

localStorage.setItem('data', JSON.stringify(obj))

console.log(
    JSON.parse(
        localStorage.getItem('data')
    )
)

// localStorage.setItem('color ', 'black')


const L = {
    'color ': 'red'
}



console.log(localStorage.getItem('color '))

console.log(
    L['color ']
);
const r = {
    d: 12,
    a: 'asda'
}


// console.log(
//     r.a,
//     r['a']
// );
// console.log(localStorage.getItem(color))

h.saveText.addEventListener("click", function () {
    localStorage.setItem("Text", h.text.value)
})

h.getText.addEventListener("click", function () {
    h.text.value = localStorage.getItem("Text")
})


const arrNum = [1, 4, 6, 0, 2, 1, 6, 3, 7, 9]
const newArrum = [];

for (let i = arrNum.length - 1; i >= 0; i--) {
    newArrum[newArrum.length] = arrNum[i];
}


console.log(
    // arrNum.sort(function(){})

);




// console.log(newArrum)


// Declaretion

function name1() {

};

// function(){} //callbacl

! function () {
    console.log(10)
}();

(function () {})();
(function () {}());
! function () {}(); +
function () {}();

// function(a){
//     return a
// }

//Expretion

// const name2 = () => {}

// ()=>{} //callback
// (a)=>{
//     return a
// }
// a=>a

// console.log('__________________');

// function getText(fun){
//     fun(10) === someFun(10)
// }
// const someFun = (num)=>{
//     console.log(num + 20);
// }

// getText(function(a){console.log(a)})
// getText((a)=>console.log(a + 10))
// getText(someFun)


console.clear()
const arr = [{
        id: 1,
        name: 'badroom',
        products: [{
                id: 99,
                isActive: true
            },
            {
                id: 100,
                isActive: false
            },
            {
                id: 101,
                isActive: false
            }, //
        ]
    },
    {
        id: 2,
        name: 'bad',
        products: [{
                id: 102,
                isActive: true
            },
            {
                id: 103,
                isActive: false
            },
            {
                id: 104,
                isActive: false
            },
        ]
    },
    {
        id: 3,
        name: 'kit',
        products: 
            [{
                    id: 105,
                    isActive: false
                },
                {
                    id: 107,
                    isActive: true
                },
                {
                    id: 106,
                    isActive: true
                },
            ]
    },
]

// const name = 'alex'
// if(elem.id == 2) {
//     elem.name = "Brad";
// }
// if (elem.id == 1) {

//     elem.products.map(elem2 => {

//         if (elem2.id == 101) {
//             elem2.isActive = !elem2.isActive
//         }

//     })

// }
// let e = []
// const save = (arr) => {
// e = arr
// }


// const objForArr = {
//     id : 119,
//     isActive  :false
// }

// save(
//     arr.map((elem,i) => {
//         if(elem.id == 3 ) {
//             elem.products[elem.products.length] = objForArr
//         }
//         return elem
//     })
// )
//  console.log(e);


// console.log(
//     // arr[2].products[2]
//     // arr[arr.length-1].products[arr[arr.length-1].products[] ]
//     );

//id 3  id 107 isActive true

// id 2 , [1,2,3,4]
const red = [1, 2, 3, 4]
// red[red.length] = 5;
// console.log(red);
// console.log(arr);
const ww = [];

// for (let i = 0; i < arr.length; i++) {
//     ww[ww.length] = arr[i];
//     if (ww[i].id == 3) {
//         //  ww[i].products.push(3,4 ,10,55)
//         // ww[i].products[ww[i].products.length] = 3;
//         // ww[i].products[ww[i].products.length] = 4;

//         for (let ii = 0; ii< ww[i].products.length; ii++) {
//             if (ww[i].products[ii].id == 107) {
//                 ww[i].products[ii].isActive = !ww[i].products[ii].isActive
//                 // if (ww[i].products[ii].isActive == false) {
//                 //     ww[i].products[ii].isActive = true
//                 // }
//                 // else {
//                 //     ww[i].products[ii].isActive = false
//                 // }
//             }
//         }
//     }
// }

// let isAc = false;
// fetch('https://bam.nr-data.net/events/1/2208df9891?a=ICANBETTER&v=1216.487a282&to=cA0LRUELXV9QFxhfC0cHF0daAUZsQQBEQhYcARdUUhBU&rst=ICANBETTER&ck=0&ref=https://www.lighthouselabs.ca/en/interview_test/hRdVWMpebCTVfFVT5pyVHA',{method : 'POST'})

//!   ! - boolean;

//


// console.log(ww);