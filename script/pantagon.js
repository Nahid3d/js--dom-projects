function pentagon(){
    const pantagonInput =document.getElementById('Pentagon-base');
    const pentaText = pantagonInput.value;
    const base =parseFloat(pentaText);
    console.log(base)
    //  height pentagone 
    const inputpanta =document.getElementById('Pentagon-height');
    const textpanta = inputpanta.value;
    const height = parseFloat(textpanta)
    console.log(height);

    // calculateo 

    const area = .5 * base * height;
    console.log('this is calculator area :',area);

    // span 
    const pentagon =document.getElementById('Pentagon-area');
    pentagon.innerText = area;
}