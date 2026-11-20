# Feastly

## Local setup

Install Node.js and run RabbitMQ locally. In each app folder, install dependencies and create `.env` from `.env.example` with your own credentials:

```sh
cd frontend && npm install
cd ../services/auth && npm install
cd ../restaurant && npm install
cd ../utils && npm install
cd ../realtime && npm install
cd ../rider && npm install
cd ../admin && npm install
```

Start each app in a separate terminal with `npm run dev` (frontend and services). Set the Google, MongoDB, JWT, RabbitMQ, payment, Cloudinary, and service URL values required by each `.env.example`.
