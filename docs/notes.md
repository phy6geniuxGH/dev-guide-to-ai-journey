# Learning Notes: 
### Initializing:
1. ollama run <model> - initialize and run the local LLM
2. node <mjs file> -  to run the server at described port
3. use the curl command to sent a POST request to the model and do a query.

### Shell Commands:
1. powershell: curl.exe -N -X POST -H "Content-Type: application/json" -d '{"question": "Can you tell me about the planets of the Solar System in 350 words or less?"}' http://localhost:8000
2. bash: curl -N -X POST -H "Content-Type: application/json" -d \ '{"question": "Can you tell me about the planets of the Solar System in 350 words or less?"}' \ http://localhost:8000