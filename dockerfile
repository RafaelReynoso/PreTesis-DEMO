FROM node:latest

LABEL maintainer rafael.reynoso@tecsup.edu.pe

RUN git clone https://github.com/RafaelReynoso/PreTesis-DEMO.git

WORKDIR PreTesis-DEMO

RUN npm install

EXPOSE 5000

CMD ["npm", "start"]
