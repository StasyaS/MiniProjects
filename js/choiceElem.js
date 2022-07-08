const H = connectionTegInHtml("img", "text_slide", "buttons");


function choiceElem (i) {
    const E =  ObjItems[i];
    H.img.src = E.photo;
    H.text_slide.innerHTML = E.text;
    //console.log(ObjItems[i].photo, H.img,  H.text_slide);
}

H.buttons.addEventListener("click", (e) => {
    if (e.target.value == undefined) return;
    choiceElem(e.target.value);
})





