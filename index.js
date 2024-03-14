const inquirer = require("inquirer")
const fs = require(`fs`)

let html

inquirer
    .prompt([
        {
            type: `input`,
            messgae: `What is your name?`,
            name: `name`,
        },
        {
            type:`input`,
            message: `What is your location`,
            name: `location`,
        },
        {
            type:`input`,
            message:`Please enter your bio?`,
            name:`bio`,
        },
        {
            type:`input`,
            message:`What is your LinkedIn URL?`,
            name: `linkedin`,
        },
        {
            type:`input`,
            message:`What is your GitHub URL?`,
            name:`github`,
        },
    ])
    .then((response) => {
        html = `<!DOCTYPE html>

        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        
        <body>
            <header> 
                <h1>${response.name}</h1>
                <p> ${response.location}</p>
            </header>

            <main>
                <section>
                    <h2>About Me</h2>
                    <p> ${response.bio}</p>
                </section>
                <section>
                    <h2> Get in touch </h2>
                    <div> <a href="${response.linkedin}">${response.linkedin}</a></div>
                    <div> <a href="${response.github}">${response.github}</a></div>
                </section>
            </main>
        </body>
        
        </html>`

        fs.writeFile(`index.html`, html, (err) => {
            err ? console.error(err) : console.log(`File Created!`)
        })
    })










