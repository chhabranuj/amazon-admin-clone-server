import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();

app.use(cors());
app.use(bodyParser.json())

let data = [];

app.post('/uploadData', (request, response) => {
    try {
        data.push(request.body)
        response.send({data: data})
    }
    catch(error) {
        console.log(error);
    }
})

app.get('/getData', (request, response) => {
    try {
        response.send({data: data})
    }
    catch(error) {
        console.log(error);
    }
})

app.listen(process.env.PORT || 8000, () => {
    console.log("Server started.")
})