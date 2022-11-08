function saturdayFun(activity = `roller-skate`) {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = `go to the office`) {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(exclam = `*`) {
    const compliment = function (emphatic = `special`) {
        return `You are ${exclam}${emphatic}${exclam}!`;
    }
    return compliment;
}