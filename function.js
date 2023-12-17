//       heading = @ using two tab to write a heading 
//       type = $ using three tab to write a type
//       type inner type = using four tab %
//       important word = ^"imp"^
//       multiple time uses line = *
//       write question solve next time = !
//       using two line condition statement = ||(or)
//       mean to write a short details near word = ()

//      @ function are they two types: 
//          $ built in function: 
//              % .push()(to adding data type in array)
//              % .toUpperCase()(string change in Upper case)
//          $ creating function: 
//      @ => this function call arrow function
//              % function name(parameter1,parameter2,....){some information}
//              % let func = (p1,p2)=>{some information}
//              @ for each not a function but creating a function with the help of for each:
//              @ for each can work only in array
//                  % for each can perform operation one by one indexing 
//                  % name.forEach((function func1(p1,p2){some information})
//                  % name.forEach((callbackFunction)=>{some information})   
//      @ return just a builtin function to fix work return a value 
//          $ but return not store value so within a function return a value 
//          $ name of function passing argument and store a variable than log variable
//              % let func = func1(4,5)
//              % console.log(func)

//      @ map function in js
//          % this is similar(work one by one indexing) like for each 
//          % syntax 
//              ^arr.map(callbackFunction(value, index, array))^ 

//      @ filter function in js
//          % to work one by one index to check condition to return value
//          % filter not creating a newarray only each index check conditon

//      ! write a function to print a user input only vowels

function vowel(str) {
    let char = 0;
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            console.log(char);
        }
        else {
            console.log("no vowel available");
        }
        char++;
    }
};

vowel("aei");// ^else run three time because cheack first letter than one by one^

let func = (str) => {
    let char = 0;
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            console.log(char);
        }
        else {
            console.log("no vowel available");
        }
        char++;
    }
};

func("aei");
let func3 = ["aei"]
func3.forEach((str) => { //      * func3 can send own value in str parameter
    let char = 0;
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            console.log(char);
        }
        else {
            console.log("no vowel available");
        }
        char++;
    }
});

array = ["aei", "aei"]

array.forEach(function vowel(str) { //      * array can send own value in str parameter
    let i = 0;
    for (let i of str) {
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
            console.log(i);
        }
        else {
            console.log("no vowel available");
        }
        i++;
    }
});


// using map print array

array = [4,5,6];

array.map((val)=>{
    console.log(val);
});


// using filter to check condition each array value

let array1 = [4,5,6,7,8,87];
let arre = array1.filter((vall)=>{
    return vall%2 === 0;
})


console.log(arre)


