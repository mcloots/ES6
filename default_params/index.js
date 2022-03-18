//Prevent null reference errors by giving function parameters a default value 
//This way the function can be called without passing the parameter
function add(numArray = []) {
    let total = 0;
    numArray.forEach(element => {
        total += element;
    });
    console.log(total);
}

add();