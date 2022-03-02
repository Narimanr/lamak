FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install --only=prod

# RUN mkdir -p uploads/images
COPY . .

CMD ["npm", "start"]