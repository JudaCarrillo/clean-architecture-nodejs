# Network Operation Center (NOC)

## Run locally

### Clone the repository

```bash
git clone https://github.com/JudaCarrillo/clean-architecture-nodejs.git
```

### Install dependencies

```bash
cd clean-architecture-nodejs/noc
npm install
```

### Create .env file and set environment variables

```bash
PORT=3000

MAILER_EMAIL=noreply@example.com
MAILER_SECRET_EMAIL=secret

PROD=false
```

### Run the application

```bash
npm run dev
```

## Topics

- Introduction to Clean Architecture
- Abstract Classes
- Repository Pattern
- Data Sources: It's a data origin like a database
- Introduction to DI (Dependency Injection)
- JSON-Server
- Use Cases
- CRON task
