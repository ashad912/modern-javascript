//for loop
//making html template in the loop

//while loop

//do while loop
//do even condition is not met

let i = 5;

do{
    console.log('val of i is:', i)
    i++;
}
while(i < 5)

//if/else/elseif statements

console.log("that's a lot of ninjas") // singlequote in doublequotes to avoid closing string

//if/elseif/else - only one case can be run
//or/and/not logic

//for break/continue
const scores = [50, 0, 30, 100, 25]

for(let i=0; i<scores.length; i++){
    if(scores[i] === 0){
       continue; //continue the loop, ignore content below, return to loop (next iteration)
    }
    console.log('your score:', scores[i])
    if(scores[i] === 100){
        console.log('wow!')
        break; //break the loop, ignore content below, do not return to loop
    }
    console.log('loop end')
}

//switch - sample
let grade = 'A'
//switch uses STRICT EQUALITY - cannot mix types inside
switch(grade){
    case 'A':
        console.log('got A!')
        break;
    case 'B':
        console.log('got B!')
        break;
    default:
        console.log('too low')
}

//variables and block scope

//let
let age = 30; //access same and lower level
//cannot redeclare let at the same level!

if(true){
    //age = 40
    let age = 40; //able to redeclare let at lower level! IT IS NOT VISIBLE AT HIGHER LEVELS
    //let visible only at scope level
    console.log('inside 1st code block', age)
    if(true){
        //let age = 50;
        console.log('inside 2nd code block:', age)
        //last declared let visible here
    }
}

console.log('ouside code block', age)


//const/var
const age1 = 30; //access same and lower level
//cannot redeclare const at the same level!

if(true){
    //age1 = 40 //<- cannot redeclare const
    const age1 = 40; //able to redeclare const at lower level! IT IS NOT VISIBLE AT HIGHER LEVELS
    //const visible only at scope level
    console.log('inside 1st code block', age1)
    if(true){
        //const age1 = 50;
        console.log('inside 2nd code block:', age1)
        //last declared const visible here

        var test = 'hello' //for var scope is ignored
    }
}

console.log('ouside code block', age, test) //test is visible :<
