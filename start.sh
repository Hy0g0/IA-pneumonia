docker-compose up --build -d
sleep 30
docker-compose exec -T engine ollama run llama2-uncensored:7b-chat-fp16