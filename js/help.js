const connectionTegInHtml = (...name) => {
    const obj = {};
    name.forEach(element => {
        obj[element] = document.querySelector("."+element);
    });
    console.log(obj)
    return obj;
}

let Newid = 0
let crreateNewId = () => Newid++;


