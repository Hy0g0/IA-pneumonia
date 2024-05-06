# Étape de construction
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon
COPY . .
EXPOSE 5000
CMD ["npm", "run", "start"]