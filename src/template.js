const clientTeam = team => {


    const clientManager = manager => {
        return `
        ${manager.managerId}
        
        `
    }
    const clientEngineer = engineer => {
        return `
        ${engineer.engineerId}
        
        `
    }

    const clientIntern = intern => {
        return `
        
        
        `
    }


}


module.exports = team => {
    return `

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link> 
    <title>Document</title>
</head>
<body>

${clientTeam(team)}
    
</body>
</html>
    
    `
}