const connectionTegInHtml = (...name) => {
    const obj = {};
    name.forEach(element => {
        obj[element] = document.querySelector("."+element);
    });
    return obj;
}

let Newid = 0
let crreateNewId = () => Newid++;

