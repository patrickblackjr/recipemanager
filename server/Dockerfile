FROM node:alpine3.15
WORKDIR /usr/app
COPY package.json .
RUN npm install --quiet --force
COPY . .
