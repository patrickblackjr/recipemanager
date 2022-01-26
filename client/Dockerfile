FROM node:16.13-alpine3.15
WORKDIR /client
COPY package.json ./client
COPY . /client
RUN npm install --force
EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000