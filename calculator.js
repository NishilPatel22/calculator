const http = require("http")
const port = 3000;
const valuesArray = []
http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("1. Enter Values : /entervalues\n2. Addition : /add\n3. Subtraction : /sub\n4. Multiplication : /mul\n5. Division : /div")
    }
    else if (req.method == "POST" && req.url == "/entervalues") {
        req.on("data", (values) => {
            const [a, b] = JSON.parse(values)
            if(typeof a === "number" && typeof b === "number"){
                valuesArray.push(a, b)
            } else{
                res.writeHead(400, { "Content-type": "text" })
                res.end("Enter two numbers")
            }
            
        })
        req.on("end", () => {
            res.end("values are stored!")
        })
    }
    else if (req.method == "GET" && req.url == "/add") {
        const [a, b] = valuesArray
        const sum = a + b
        req.on("data", () => {
            if (valuesArray.length === 0) {
                res.writeHead(400, { "Content-type": "text" })
                res.end("Enter the values (hint : /entervalues)")
            }
        })
        req.on("end", () => {
            res.end("Addition : "+JSON.stringify(sum))
        })

    }
    else if (req.method == "GET" && req.url == "/sub") {
        const [a, b] = valuesArray
        const sub = a - b
        req.on("data", () => {
            if (valuesArray.length === 0) {
                res.writeHead(400, { "Content-type": "text" })
                res.end("Enter the values (hint : /entervalues)")
            }
        })
        req.on("end", () => {
            res.end("Subtraction : "+JSON.stringify(sub))
        })

    }
    else if (req.method == "GET" && req.url == "/mul") {
        const [a, b] = valuesArray
        const mul = a * b
        req.on("data", () => {
            if (valuesArray.length === 0) {
                res.writeHead(400, { "Content-type": "text" })
                res.end("Enter the values (hint : /entervalues)")
            }
        })
        req.on("end", () => {
            res.end("Multiplication : "+JSON.stringify(mul))
        })

    }
    else if (req.method == "GET" && req.url == "/div") {
        const [a, b] = valuesArray
        const div = a / b
        req.on("data", () => {
            if (valuesArray.length === 0) {
                res.writeHead(400, { "Content-type": "text" })
                res.end("Enter the values (hint : /entervalues)")
            }
        })
        req.on("end", () => {
            res.end("Division : "+JSON.stringify(div))
        })

    }
}).listen(port, () => {
    console.log(`Server Started! http://localhost:${port}`)
})