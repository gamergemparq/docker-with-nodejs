FROM node:16

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY ./src .

CMD ["npm", "run", "dev"]