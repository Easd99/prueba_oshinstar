FROM node:14 AS build
ARG node_prune="true"

WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run tsc

# remove development dependencies
RUN npm prune --production

## this is stage two , where the app actually runs
FROM node:14

WORKDIR /usr/src/app
COPY package*.json ./
COPY doc.yaml ./
RUN npm install --only=production
COPY --from=build /usr/src/app/dist ./dist
EXPOSE 5000
CMD ["npm", "run", "start"]