function parallelgraminput(){
    const parainput =document.getElementById('parallelogram-base');
    const inputpara = parainput.value;
    const widthp =parseFloat(inputpara)
    console.log(widthp);

    // height 

      const baseL = document.getElementById('parallelogram-height');
      const text = baseL.value;
      const heightp = parseFloat(text);
      console.log(heightp)

      const area  = widthp * heightp;
      console.log('total calculate :', area)

      // span 
      const paralle =document.getElementById('parallelogram-area');
      paralle.innerText = area;
}
