function coagulate(){
    // base code 
   const inputeBaseId =document.getElementById('inpute-base');
   const inputeText = inputeBaseId.value;
   const base = parseFloat(inputeText);
   console.log('this is base value:',base)
  
//    inpute height code 

    const inputHeight = document.getElementById('input-height');
    const inputeHeightText = inputHeight.value;
    const height = parseFloat(inputeHeightText);
    console.log( 'this is a height value:',height)

    // calauter 
  const area = 0.5 * base * height ;
    console.log('atea is calculate :',area);

}