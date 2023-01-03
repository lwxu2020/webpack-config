#FROM node:lts-alpine
FROM node:16.17.0 as build

# ENV NODE_ENV=production
WORKDIR /usr/src/app

COPY package*.json ./
#ENV PATH="/usr/src/app/node_modules/.bin:$PATH"
#COPY ["package.json", "package-lock.json*", "webpack.config.js*", "babel.config.js*", "npm-shrinkwrap.json*", "./"]
#RUN npm install --production --silent && mv node_modules ../

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

#RUN chown -R node /usr/src/app
#USER node
RUN npm run build
#CMD ["npm", "start"]


FROM nginx:1.12-alpine as prod

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
