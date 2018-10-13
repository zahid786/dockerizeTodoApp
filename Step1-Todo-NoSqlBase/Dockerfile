FROM node:latest
WORKDIR /todo/src/app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 8208
CMD [ "npm", "run", "nodemon" ]