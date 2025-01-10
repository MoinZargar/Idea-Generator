# Stage 1: build stage
FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install 


COPY . ./
RUN npm run build

# Stage 2: development environment
FROM node:18-alpine AS development
WORKDIR /app


COPY package*.json ./
RUN npm install 


COPY . ./

EXPOSE 5173
CMD ["npm", "run", "dev"]

# Stage 3: Production environment
FROM nginx:alpine AS production


COPY --from=build /app/dist /usr/share/nginx/html


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]