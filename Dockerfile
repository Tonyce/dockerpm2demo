FROM node

WORKDIR /app

RUN npm install pm2 -g

# COPY package.json /code/package.json

# RUN npm install && npm ls

# CMD ["pm2-docker", "--json", "--watch", "app.js"]
CMD ["pm2-docker", "--format", "app.json", "--only", "APP"]
