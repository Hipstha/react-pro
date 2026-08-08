# installing dev dependencies
FROM node:22.12.0 AS dev-deps
WORKDIR /app
COPY package.json ./
RUN npm install

# Running as Dev
FROM node:22.12.0 AS dev
WORKDIR /app
COPY --from=dev-deps /app/node_modules /app/node_modules/
COPY . .
RUN ["npm", "run", "dev"]

FROM node:22.12.0 AS prod-builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules /app/node_modules
COPY . .
RUN npm run build

# RUNING ON PROD
FROM nginx:1.30.4 AS prod
WORKDIR /app
EXPOSE 80
RUN rm /usr/share/nginx/html/index.html
RUN rm /etc/nginx/conf.d/default.conf
COPY /nginx/nginx.conf /etc/nginx/conf.d
COPY --from=prod-builder /app/dist /usr/share/nginx/html




