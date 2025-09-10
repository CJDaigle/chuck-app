# Chuck Norris Joke App

A modern React web application that fetches and displays random Chuck Norris jokes using the [Chuck Norris API](https://api.chucknorris.io/). The app features a beautiful glassmorphism UI design and is fully containerized for easy deployment.

## Features

- 🎭 Random Chuck Norris jokes on demand
- 🎨 Modern glassmorphism UI with gradient backgrounds
- 📱 Fully responsive design for all devices
- ⚡ Fast loading with optimized React components
- 🔒 Security headers and CSP protection
- 🐳 Docker containerization with multi-stage builds
- ☸️ Kubernetes deployment ready
- 🏥 Health check endpoints for monitoring

## Tech Stack

- **Frontend**: React 18, CSS3 with glassmorphism effects
- **HTTP Client**: Axios for API requests
- **Web Server**: Nginx (production)
- **Containerization**: Docker with multi-stage builds
- **Orchestration**: Kubernetes deployment

## Project Structure

```
chuck-app/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js              # Main React component
│   ├── App.css             # Component styling
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── Dockerfile              # Multi-stage Docker build
├── docker-compose.yml      # Docker Compose configuration
├── nginx.conf              # Production Nginx configuration
├── k8s-deployment.yaml     # Kubernetes deployment
├── package.json            # Node.js dependencies
└── chuck-app-api.py        # Standalone Python version
```

## Local Development

### Prerequisites
- Node.js 18+ and npm
- Docker (optional)
- Kubernetes cluster (for K8s deployment)

### Run Locally
```bash
# Install dependencies
npm install

# Start development server
npm start

# Open http://localhost:3000
```

## Docker Deployment

### Using Docker Compose (Recommended)
```bash
# Build and run the container
docker-compose up --build

# Access the app at http://localhost:3000
```

### Using Docker Commands
```bash
# Build the image
docker build -t chuck-app .

# Run the container
docker run -p 3000:80 chuck-app

# Access the app at http://localhost:3000
```

## Kubernetes Deployment

### Prerequisites
- Kubernetes cluster (local or cloud)
- kubectl configured to access your cluster
- Docker image available at `docker.io/library/chuck-app-chuck-norris-app:latest`

### Deploy to Kubernetes
```bash
# Apply the deployment and service
kubectl apply -f k8s-deployment.yaml

# Check deployment status
kubectl get deployments
kubectl get pods
kubectl get services
```

### Access the Application
```bash
# Get the NodePort service details
kubectl get service chuck-app-service

# Access the app at http://<node-ip>:30080
# For local clusters (minikube/kind):
kubectl get nodes -o wide  # Get node IP
```

### Kubernetes Configuration Details
- **Deployment**: 1 replica with resource limits (128Mi memory, 100m CPU)
- **Service**: NodePort type exposing port 30080
- **Health Checks**: Liveness and readiness probes on `/health` endpoint
- **Image**: `docker.io/library/chuck-app-chuck-norris-app:latest`

### Monitoring and Troubleshooting
```bash
# Check pod logs
kubectl logs -l app=chuck-app

# Check pod status
kubectl describe pod -l app=chuck-app

# Test health endpoint
curl http://<node-ip>:30080/health
```

## API Information

The app uses the free Chuck Norris API:
- **Endpoint**: `https://api.chucknorris.io/jokes/random`
- **Rate Limits**: None specified
- **Authentication**: Not required

## Security Features

- Content Security Policy (CSP) headers
- X-Frame-Options protection
- XSS protection headers
- Secure asset caching
- HTTPS-ready configuration

## Performance Optimizations

- Gzip compression for all text assets
- Static asset caching with immutable headers
- Optimized Docker multi-stage builds
- Nginx performance tuning
- Resource limits in Kubernetes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally and with Docker
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For issues and questions:
- Check the health endpoint: `/health`
- Review container logs
- Ensure API connectivity to `api.chucknorris.io`
