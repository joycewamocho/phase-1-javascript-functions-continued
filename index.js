function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;

}
console.log(saturdayFun("bathe my dog"));

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;

}

console.log(mondayWork("work from home"));

function wrapAdjective(result="*", ){
    const inner =  function(emphatic ="a hard worker"){
        return `You are ${result}${emphatic}${result}!`
    }
    return inner;
    
}
console.log(wrapAdjective("||")("a dedicated programmer"));