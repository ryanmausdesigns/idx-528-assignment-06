var first_name = prompt("what is your first name?");


var last_name = prompt("what is your last name?");


function full_name(first_name, last_name) {
    var full_name = first_name + " " + last_name; 
    return full_name;
};

var print = full_name(first_name, last_name);

console.log(print);

function last_first(first_name, last_name) {
    var last_first2  = last_name +", " + first_name;
    return last_first2;
}

var print2 = last_first(first_name, last_name); 

console.log (print2);

var age = prompt("what is your age?")
age = parseInt(age, 10);

function over18(age) {
    if (isNaN(age)) {
        return 'Not a Number!';}
    else if (age < 18) {
    return false; 
 }  else {
    return true    
    }}

var print3 = over18(age)
console.log (print3);

var fahrenheit = prompt ("what is the temperature in farhenheit?")
fahrenheit = parseFloat( fahrenheit)

function to_celcius (fahrenheit) {
    answer = (fahrenheit - 32) *.55555
    return answer; 
}
print4 = to_celcius(fahrenheit) 
console.log (print4)

var celcius = prompt ("what is the temperature in celcius?")
celcius = parseFloat(celcius);

function to_farhrenheit (celcius) {
    answer2 = (celcius * 9/5) + 32
    return answer2; 
}
print5 = to_farhrenheit(celcius) 
console.log (print5)

   
