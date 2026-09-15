import express, { response } from "express"
import { Ollama } from "ollama"

const app = express();

const ollama = new Ollama();

app.get('/', async(request, response) => {
    response.type('text/plain');

    const modelResponse = await ollama.generate({
        model: 'gemma4:12b',
        prompt: "What is the capital of the Philippines?" 
    });

    response.send(modelResponse.response);

});

app.listen(8000, () => {
    console.log(`Server is running on port 8000`)
})