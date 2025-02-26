FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build && npm prune --production
EXPOSE 3000/tcp
ENTRYPOINT ["node", "--enable-source-maps", "dist/main.js"]
