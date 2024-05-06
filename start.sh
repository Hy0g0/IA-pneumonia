docker-compose up --build -d
sleep 30
docker-compose exec -T engine ollama run wizardlm-uncensored