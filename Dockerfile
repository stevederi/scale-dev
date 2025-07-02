FROM node:20-alpine
COPY index.js .
CMD ["node", "index.js"]
