//get arguments out of function and we don't know how many inputs
function add(...nums) {
    console.log(nums);
    //console.log(arguments); --> deprecated
}

add(4, 5, 7, 8, 12);