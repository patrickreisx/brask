FROM node:16-bullseye-slim as builder

WORKDIR /app

# export PATH=/app/node_modules/.bin:$PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
COPY . ./

RUN npm install --force 

RUN npm cache clear --force \
 && npm cache verify 

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
