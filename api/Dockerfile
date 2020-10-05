# For the building env
FROM node:14 as builder

RUN mkdir -p /app
WORKDIR /app

COPY ./package*.json /app/

WORKDIR /app/
RUN npm install

COPY . /app/
RUN npm i -g typescript
# RUN npm install
RUN npm run build

# For building the prod container with the transpalied js
FROM node:14 
WORKDIR /usr/src/app
COPY --from=builder /app/node_modules /usr/src/app/node_modules
COPY --from=builder /app/dist /usr/src/app


EXPOSE 3000
CMD [ "node", "main.js" ]