function rhombusf(){
    // rhombus input b1 
    const romboshinput =document.getElementById('Rhombus-base');
    const inputrombosh = romboshinput.value;
    const base = parseFloat(inputrombosh)
    console.log(base);

    // height 

    const rombheight =document.getElementById('Rhombus-height');
    const rombinput =rombheight.value;
    const height = parseFloat(rombinput)
    console.log(height);
    
    // calculate 
    const area = .5 * base * height;
    console.log('this is a total calculate value:', area);

    // span 

    const rhombus =document.getElementById('Rhombus-area')
    rhombus.innerText = area;



   

}