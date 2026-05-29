# Deployment Guide - BlockchainExchange

## 🚀 Prerequisites

- Docker & Docker Compose
- Node.js 18+
- PostgreSQL 14+
- Redis 7+
- Git

## 📋 Development Setup

### 1. Clone Repository
```bash
git clone https://github.com/Breitjoda/BlockchainExchange.git
cd BlockchainExchange
```

### 2. Install Dependencies
```bash
npm install:all
```

### 3. Setup Environment
```bash
cp .env.example .env
# Edit .env with your configuration
```

### 4. Start Services
```bash
docker-compose up -d
npm run dev
```

Services will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001
- Postgres: localhost:5432
- Redis: localhost:6379

## 🔄 Smart Contract Deployment

### Deploy to Flow Testnet

```bash
# Setup Flow account
flow keys generate
flow accounts create --network testnet

# Configure flow.json
cd smart-contracts
# Edit flow.json with your account address & keys

# Deploy contracts
flow project deploy --network testnet
```

### Deploy to Flow Mainnet

```bash
# Setup mainnet account
flow keys generate
flow accounts create --network mainnet

# Deploy
flow project deploy --network mainnet
```

## 🐳 Docker Deployment

### Build Images
```bash
# Build all images
docker-compose build

# Build specific service
docker-compose build backend
docker-compose build frontend
```

### Deploy Locally
```bash
docker-compose up -d
docker-compose ps
```

### Check Logs
```bash
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f postgres
```

## ☁️ Cloud Deployment

### AWS ECS

```bash
# Build and push to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account>.dkr.ecr.us-east-1.amazonaws.com

docker tag blockchain-exchange:latest <account>.dkr.ecr.us-east-1.amazonaws.com/blockchain-exchange:latest
docker push <account>.dkr.ecr.us-east-1.amazonaws.com/blockchain-exchange:latest
```

### Heroku

```bash
# Login
heroku login

# Create app
heroku create blockchain-exchange

# Set environment
heroku config:set FLOW_NETWORK=testnet
heroku config:set DATABASE_URL=<postgres-url>
heroku config:set REDIS_URL=<redis-url>

# Deploy
git push heroku main
```

### Railway

```bash
# Connect to Railway
railway link

# Deploy
railway up
```

## 🔒 Production Configuration

### Environment Variables

```env
# Network
NODE_ENV=production
FLOW_NETWORK=mainnet

# Database
DATABASE_URL=postgresql://user:password@prod-db.example.com:5432/blockchain_exchange
DB_POOL_MIN=5
DB_POOL_MAX=20

# Redis
REDIS_URL=redis://prod-redis.example.com:6379
REDIS_PASSWORD=<strong-password>

# JWT
JWT_SECRET=<very-long-random-string>

# Security
CORS_ORIGIN=https://blockchain-exchange.com
API_RATE_LIMIT=100

# Monitoring
SENTRY_DSN=<sentry-dsn>
LOG_LEVEL=info
```

### Database Migrations

```bash
# Run migrations
npm run db:migrate

# Rollback
npm run db:rollback
```

### SSL/TLS

```bash
# Get certificate (Let's Encrypt)
certbot certonly --standalone -d blockchain-exchange.com

# Configure in nginx
server {
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/blockchain-exchange.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/blockchain-exchange.com/privkey.pem;
}
```

## 📊 Monitoring & Logging

### Application Monitoring
```bash
# Monitor resources
docker stats

# View logs
docker logs -f <container-id>

# Real-time monitoring
npm run monitor
```

### Database Monitoring
```sql
-- Check active connections
SELECT count(*) FROM pg_stat_activity;

-- Check slow queries
SELECT query, calls, mean_time FROM pg_stat_statements ORDER BY mean_time DESC;
```

## 🔄 CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Login to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      
      - name: Build and push
        uses: docker/build-push-action@v4
        with:
          push: true
          tags: blockchain-exchange:latest
      
      - name: Deploy to production
        run: |
          ssh ${{ secrets.PROD_SERVER }} 'cd blockchain-exchange && docker-compose pull && docker-compose up -d'
```

## ✅ Post-Deployment Checklist

- [ ] Database migrations completed
- [ ] Smart contracts deployed
- [ ] Environment variables configured
- [ ] SSL certificates installed
- [ ] Database backups enabled
- [ ] Monitoring configured
- [ ] Error tracking enabled
- [ ] API endpoints tested
- [ ] WebSocket connections verified
- [ ] Analytics dashboard working
- [ ] Security audit completed

## 🔧 Troubleshooting

### Database Connection Issues
```bash
# Test connection
psql $DATABASE_URL

# Check connection string
echo $DATABASE_URL
```

### Redis Connection Issues
```bash
# Test Redis
redis-cli ping

# Check Redis memory
redis-cli info memory
```

### Container Issues
```bash
# Restart services
docker-compose restart

# Rebuild containers
docker-compose up -d --build

# Remove and restart
docker-compose down
docker-compose up -d
```

## 📈 Scaling

### Horizontal Scaling

```yaml
# docker-compose.yml
services:
  backend:
    deploy:
      replicas: 3
    load_balancer:
      - nginx
```

### Database Replication

```bash
# Setup read replicas
# Follow PostgreSQL replication documentation
```

## 🔐 Security Hardening

1. **Firewall Rules**
   - Only expose ports 443 (HTTPS) and 80 (HTTP)
   - Restrict database access to application servers

2. **Secret Management**
   - Use AWS Secrets Manager or HashiCorp Vault
   - Rotate secrets regularly

3. **API Security**
   - Enable rate limiting
   - Implement DDoS protection (Cloudflare)
   - Use API keys for external services

4. **Smart Contracts**
   - Get security audit
   - Use testnet for testing
   - Deploy with multi-sig approval

## 📞 Support

For deployment issues:
- Check logs: `docker-compose logs`
- Review environment variables
- Verify blockchain network connectivity
- Contact team or open GitHub issue

---

Last Updated: 2024
