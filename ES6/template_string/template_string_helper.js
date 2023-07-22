function getMessage()
{
    const year = new Date().getFullYear
    return 'The New Year is ' + year
}


function getMessageWithTemplateString()
{
    const year = new Date().getFullYear
    return `The New Year is ${year-1}`
}