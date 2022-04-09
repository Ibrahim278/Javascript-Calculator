function addValue(){
    var val1 = document.getElementById("input_a").value;
    var val2 = document.getElementById("input_b").value;
    parseInt(val1, val2);
    // var val2 = parseInt(val2);
 
   

    var sumVal;

    // console.log(val1);
    // console.log(val2);
    sumVal = eval(val1) + eval(val2);

    output = val1 + " + " + val2 + " = " + sumVal;

    console.log(output);

    // get the operands value

    // parse to integer. You can use: parseInt(input, 10);

    // perform operation

    // creating the text output

    // (if you want to check) print out in console
    

    // change the text area
    document.mycalculator.output.value = output;


    if (isNaN(val1) || isNaN(val2)) {

        alert('Please enter both operands');

        return;

    }
   
}


function mulValue(){
    var val1 = document.getElementById("input_a").value;
    var val2 = document.getElementById("input_b").value;
    // var val1 = parseInt(val1);
    // var val2 = parseInt(val2);
    parseInt(val1, val2);

    var mulVal;
    mulVal = eval(val1) * eval(val2);

    output = val1 + " x " + val2 + " = " + mulVal;

    console.log(output);


    document.mycalculator.output.value = output;

    if (isNaN(val1) || isNaN(val2)) {

        alert('Please enter both operands');

        return;

    }

}

function divValue(){
    var val1 = document.getElementById("input_a").value;
    var val2 = document.getElementById("input_b").value;
    // var val1 = parseInt(val1);
    // var val2 = parseInt(val2);

    parseInt(val1, val2);

    var divVal;
    divVal = eval(val1) / eval(val2);

    output = val1 + " / " + val2 + " = " + divVal;

    console.log(output);


    document.mycalculator.output.value = output;

    if (isNaN(val1) || isNaN(val2)) {

        alert('Please enter both operands');

        return;

    }
    
}
