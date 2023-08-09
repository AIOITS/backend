FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

RUN npm run start:build
COPY dist/ ./dist/

EXPOSE 8080

CMD [ "npm", "run", "start:prod"]