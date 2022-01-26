FROM node:16.13-alpine3.15
WORKDIR /server
COPY package.json ./server
COPY . /server
RUN npm install --force
RUN npx prisma generate
EXPOSE 4000