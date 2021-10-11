FROM node:16

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/
COPY tsconfig.json /app/
COPY /src /app/src
COPY /public /app/public

RUN npm ci
# This avoids an error when trying to create the node_modules/.cache 
# directory in the Docker per se. 
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

EXPOSE 3000

CMD npm start
