const fs = require("fs");
const { parse } = require("csv-parse");
const buffer = require("buffer");
let categories = [];
let productsJson = [];
parseCsv = () =>{
    fs.createReadStream("./static/Cenovnici/cenovnik.csv")
        .pipe(parse({delimiter: ",", from_line: 2}))
        .on("data", function (row) {
            let product = {
                category: row[0],
                brand: row[1],
                name: row[2],
                akcija: row[3],
                price: row[4],
                description: row[5],
                warranty: row[6],
                tax: row[7],
                lager: row[8]
            };
            productsJson.push(product)

            if(!categories.find(c => c.name == product.category)){
                categories.push({
                    name:product.category,
                    count:1
                });
            }
            else if(categories.find(c => c.name == product.category)){
                categories.find(c => c.name == product.category).count++;
            }

        }).on("end", () =>{
        writeProducts(new Buffer.from(JSON.stringify(productsJson)));
        writeCategories(new Buffer.from(JSON.stringify(categories)));
    })
}
async function readCsv(bufferString) {
    let buffer = new Buffer.from(bufferString);
    writeJson(buffer)
}
let writeProducts = (buffer) =>{
    if (fs.existsSync("static/Cenovnici/cenovnik.json")) {
        fs.truncateSync("static/Cenovnici/cenovnik.json", 0);
    }
    else {
        fs.writeFile("static/Cenovnici/cenovnik.json", "", function (err, fd) {
            if (err) {
                console.log('Cant write new file');
            }
            writeJson(buffer);
        });
    }
    fs.open("static/Cenovnici/cenovnik.json", 'a', function (err, fd) {
        if (err) {
            console.log('Cant open file');
        }
        else {
            fs.writeFile("static/Cenovnici/cenovnik.json",buffer, function (err, writtenbytes) {
                if (err) {
                    console.log('Cant write to file');
                }
            })
        }

    });
}
let writeCategories= (buffer) =>{
    if (fs.existsSync("static/Cenovnici/category.json")) {
        fs.truncateSync("static/Cenovnici/category.json", 0);
    }
    else {
        fs.writeFile("static/Cenovnici/cenovnik.json", "", function (err, fd) {
            if (err) {
                console.log('Cant write new file');
            }
            writeJson(buffer);
        });
    }
    fs.open("static/Cenovnici/category.json", 'a', function (err, fd) {
        if (err) {
            console.log('Cant open file');
        }
        else {
            fs.writeFile("static/Cenovnici/category.json",buffer, function (err, writtenbytes) {
                if (err) {
                    console.log('Cant write to file');
                }
            })
        }

    });
}

parseCsv();
