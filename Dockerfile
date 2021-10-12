FROM node:16

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/

RUN npm ci

# This avoids an error when trying to create the node_modules/.cache 
# directory in the Docker per se. 
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . ./

EXPOSE 3000

CMD npm start
