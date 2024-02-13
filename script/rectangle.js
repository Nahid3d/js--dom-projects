function rectangleCalculateo(){
    // input length  js code 
   const inputeLength =document.getElementById('length-prosto');
   const textoutpute = inputeLength.value;
   const length = parseFloat(textoutpute);
   console.log(length);

//    rectangle-width
    const rectangleCalculateo =document.getElementById('rectangle-width');
    const rectangleText = rectangleCalculateo.value;
    const width = parseFloat(rectangleText);
    console.log(width)

    const area = length * width;
    console.log('ractangle Calculator :',area);

    // rectangle-area span
    const ractangleAreaSpan =document.getElementById('rectangle-area');
    ractangleAreaSpan.innerText = area;

}