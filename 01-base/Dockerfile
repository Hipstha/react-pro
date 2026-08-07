# developer dependencies installation
FROM node:26.7.0 AS dev-deps
WORKDIR /app
COPY package.json ./
RUN npm install

# Running app as dev env
FROM node:26.7.0 AS dev
WORKDIR /app
COPY --from=dev-deps /app/node_modules /app/node_modules
COPY . .
CMD ["npm", "run", "dev"]

# Production build
FROM node:26.7.0 AS builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules /app/node_modules
COPY . .
RUN npm run build

# Production server
FROM nginx:1.30.4 AS prod
# exponer el puerto 80
EXPOSE 80
# Removing default server html content
RUN rm -rf /usr/share/nginx/html/*
# Removing default.conf
RUN rm /etc/nginx/conf.d/default.conf
# Copy build insider nginx server
COPY --from=builder /app/dist /usr/share/nginx/html
# Copy custom conf
COPY nginx/nginx.conf /etc/nginx/conf.d
# Correr la app
CMD ["nginx", "-g", "daemon off;"]