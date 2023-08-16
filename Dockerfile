FROM node:18-alpine

WORKDIR /app

COPY . ./

RUN npm ci --only=production

RUN npm install -g @nestjs/cli
RUN npm install -g prisma-nestjs-graphql
RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "start:prod" ]
