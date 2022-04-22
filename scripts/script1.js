function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s*1000));
}

function showOnWebsite(text,img_path){
    let img = document.createElement("IMG");
    img.src = img_path; 
    let number = document.createElement("recognized-text");
    number.textContent = text;
    let output = document.getElementById("show-results");
    output.append(number,img);
    alert(text);
}
function showimage(event) {
    let img_path = URL.createObjectURL(event.target.files[0]);
    Tesseract.recognize(
    img_path,
    'eng',
    { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
    showOnWebsite(text,img_path);
    console.log(text);
    });
};





