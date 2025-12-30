# Ollama Setup Guide for Article Content Processor

## Overview

Ollama is a local AI model runner that enables the Article Content Processor to perform advanced redundancy analysis and cross-reference generation. This guide covers installation, configuration, and optimization for the article processing workflow.

## Installation

### macOS

#### Option 1: Direct Download (Recommended)
1. Visit https://ollama.ai/download
2. Download the macOS installer
3. Run the installer and follow prompts
4. Ollama will be available in Applications

#### Option 2: Homebrew
```bash
brew install ollama
```

### Linux

#### Ubuntu/Debian
```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

#### Manual Installation
```bash
# Download binary
curl -L https://ollama.ai/download/ollama-linux-amd64 -o ollama
chmod +x ollama
sudo mv ollama /usr/local/bin/
```

### Windows

1. Visit https://ollama.ai/download
2. Download Windows installer
3. Run installer as administrator
4. Ollama will be available in Start Menu

## Initial Setup

### 1. Start Ollama Service

```bash
# Start Ollama service (runs in background)
ollama serve
```

The service will start on `http://localhost:11434` by default.

### 2. Verify Installation

```bash
# Check version
ollama --version

# Test API endpoint
curl http://localhost:11434/api/version

# Expected response:
# {"version":"0.1.x"}
```

### 3. Pull Required Models

```bash
# Pull recommended model (2-3 GB download)
ollama pull llama2

# Verify model is available
ollama list

# Expected output:
# NAME            ID              SIZE    MODIFIED
# llama2:latest   78e26419b446    3.8 GB  2 minutes ago
```

## Model Selection

### Recommended Models for Article Processing

#### llama2 (Default)
- **Size**: ~3.8 GB
- **Use Case**: General purpose, best balance of speed and quality
- **Performance**: Good for most article analysis tasks
- **Setup**: `ollama pull llama2`

#### mistral
- **Size**: ~4.1 GB  
- **Use Case**: Fast processing, efficient for large batches
- **Performance**: Faster than llama2, slightly lower quality
- **Setup**: `ollama pull mistral`

#### codellama
- **Size**: ~3.8 GB
- **Use Case**: Technical content analysis, code-heavy articles
- **Performance**: Best for technical AI governance content
- **Setup**: `ollama pull codellama`

#### llama2:13b (Advanced)
- **Size**: ~7.3 GB
- **Use Case**: High-quality analysis, slower processing
- **Performance**: Best quality, requires more memory
- **Setup**: `ollama pull llama2:13b`

### Model Comparison

| Model | Size | Speed | Quality | Memory | Best For |
|-------|------|-------|---------|---------|----------|
| llama2 | 3.8GB | Medium | High | 8GB+ | General use |
| mistral | 4.1GB | Fast | Medium | 6GB+ | Batch processing |
| codellama | 3.8GB | Medium | High | 8GB+ | Technical content |
| llama2:13b | 7.3GB | Slow | Highest | 16GB+ | Quality analysis |

## Configuration

### Article Processor Configuration

Update your `article-processor.config.json`:

```json
{
  "ollama": {
    "model": "llama2",
    "endpoint": "http://localhost:11434",
    "timeout": 30000
  }
}
```

### Configuration Options

#### model
- **Type**: string
- **Default**: "llama2"
- **Options**: Any model available in `ollama list`
- **Example**: "mistral", "codellama", "llama2:13b"

#### endpoint
- **Type**: string
- **Default**: "http://localhost:11434"
- **Use Cases**: 
  - Local: "http://localhost:11434"
  - Remote: "http://192.168.1.100:11434"
  - Custom port: "http://localhost:8080"

#### timeout
- **Type**: number (milliseconds)
- **Default**: 30000 (30 seconds)
- **Recommendations**:
  - Fast models: 15000-30000
  - Large models: 60000-120000
  - Batch processing: 300000+

### Advanced Configuration

#### Custom Model Parameters

```bash
# Create custom model with specific parameters
ollama create custom-llama2 -f Modelfile

# Example Modelfile
cat > Modelfile << 'EOF'
FROM llama2
PARAMETER temperature 0.1
PARAMETER top_p 0.9
PARAMETER top_k 40
EOF
```

#### Remote Ollama Setup

```bash
# Start Ollama on specific host/port
OLLAMA_HOST=0.0.0.0:11434 ollama serve

# Configure firewall (Linux)
sudo ufw allow 11434

# Test remote connection
curl http://remote-host:11434/api/version
```

## Performance Optimization

### System Requirements

#### Minimum Requirements
- **RAM**: 8 GB
- **Storage**: 10 GB free space
- **CPU**: 4 cores
- **Network**: Stable internet for model downloads

#### Recommended Requirements
- **RAM**: 16 GB+
- **Storage**: 50 GB+ SSD
- **CPU**: 8+ cores
- **GPU**: Optional, CUDA-compatible for acceleration

### Memory Optimization

```bash
# Check available memory
free -h

# Monitor Ollama memory usage
top -p $(pgrep ollama)

# Adjust model concurrency
export OLLAMA_NUM_PARALLEL=1
ollama serve
```

### GPU Acceleration (Optional)

#### NVIDIA GPU Setup
```bash
# Install NVIDIA Container Toolkit
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg

# Verify GPU is available
nvidia-smi

# Ollama will automatically use GPU if available
ollama pull llama2
```

#### Apple Silicon (M1/M2/M3)
- Ollama automatically uses Metal Performance Shaders
- No additional configuration required
- Significantly faster than CPU-only processing

### Performance Tuning

#### Environment Variables

```bash
# Increase parallel processing
export OLLAMA_NUM_PARALLEL=2

# Adjust memory usage
export OLLAMA_MAX_LOADED_MODELS=1

# Set custom data directory
export OLLAMA_MODELS=/path/to/models

# Start with optimizations
ollama serve
```

#### Model-Specific Optimizations

```bash
# For batch processing (faster, less memory)
ollama pull mistral
npm run article-processor process --model mistral

# For quality analysis (slower, more memory)
ollama pull llama2:13b
npm run article-processor process --model llama2:13b --timeout 120000
```

## Testing and Validation

### Connection Testing

```bash
# Test basic connectivity
curl http://localhost:11434/api/version

# Test model availability
curl http://localhost:11434/api/tags

# Test text generation
curl http://localhost:11434/api/generate -d '{
  "model": "llama2",
  "prompt": "Analyze this text for redundancy:",
  "stream": false
}'
```

### Article Processor Integration Testing

```bash
# Test with single article
npm run article-processor single test-article.md --verbose

# Test with verbose Ollama logging
DEBUG=ollama npm run article-processor process --verbose

# Validate redundancy analysis
npm run article-processor process --verbose | grep -A 10 "redundancy_analysis"
```

### Performance Benchmarking

```bash
# Time model loading
time ollama run llama2 "Hello"

# Benchmark processing speed
time npm run article-processor process --model llama2
time npm run article-processor process --model mistral

# Memory usage monitoring
/usr/bin/time -v npm run article-processor process
```

## Troubleshooting

### Common Issues

#### "Ollama service not running"

```bash
# Check if service is running
ps aux | grep ollama

# Start service
ollama serve

# Check logs
journalctl -u ollama -f  # Linux
tail -f /var/log/ollama.log  # macOS
```

#### "Model not found"

```bash
# List available models
ollama list

# Pull missing model
ollama pull llama2

# Verify model files
ls ~/.ollama/models/  # Linux/macOS
```

#### "Connection refused"

```bash
# Check port availability
netstat -an | grep 11434

# Test with different port
OLLAMA_HOST=localhost:8080 ollama serve

# Update configuration
npm run article-processor config --show
```

#### "Out of memory"

```bash
# Check memory usage
free -h
top -p $(pgrep ollama)

# Use smaller model
ollama pull mistral
npm run article-processor process --model mistral

# Reduce parallel processing
export OLLAMA_NUM_PARALLEL=1
ollama serve
```

#### "Slow processing"

```bash
# Check CPU usage
top -p $(pgrep ollama)

# Use faster model
ollama pull mistral

# Increase timeout
npm run article-processor process --timeout 60000

# Monitor I/O
iostat -x 1
```

### Debug Mode

```bash
# Enable Ollama debug logging
OLLAMA_DEBUG=1 ollama serve

# Enable article processor debug
DEBUG=* npm run article-processor process --verbose

# Monitor network traffic
tcpdump -i lo port 11434
```

## Advanced Usage

### Custom Models

#### Creating Custom Models

```bash
# Create Modelfile
cat > AIGovernanceModel << 'EOF'
FROM llama2
PARAMETER temperature 0.1
PARAMETER top_p 0.9
SYSTEM You are an expert in AI governance and policy analysis. Focus on identifying content overlap, regulatory references, and cross-reference opportunities in AI governance documents.
EOF

# Build custom model
ollama create ai-governance -f AIGovernanceModel

# Use custom model
npm run article-processor process --model ai-governance
```

#### Model Management

```bash
# List all models
ollama list

# Remove unused models
ollama rm old-model

# Copy model
ollama cp llama2 llama2-backup

# Show model info
ollama show llama2
```

### API Integration

#### Direct API Usage

```bash
# Generate text
curl http://localhost:11434/api/generate -d '{
  "model": "llama2",
  "prompt": "Analyze these articles for content overlap: [article data]",
  "stream": false,
  "options": {
    "temperature": 0.1,
    "top_p": 0.9
  }
}'

# Chat interface
curl http://localhost:11434/api/chat -d '{
  "model": "llama2",
  "messages": [
    {
      "role": "user",
      "content": "Find redundant content in these AI governance articles"
    }
  ]
}'
```

#### Programmatic Usage

```typescript
// Custom Ollama client usage
import { OllamaClient } from './lib/article-processor/clients/ollama-client';

const client = new OllamaClient({
  model: 'llama2',
  endpoint: 'http://localhost:11434',
  timeout: 60000
});

// Test connection
const connected = await client.testConnection();
console.log('Connected:', connected);

// Generate analysis
const analysis = await client.generate(`
  Analyze these articles for content overlap:
  Article 1: [content]
  Article 2: [content]
`);

console.log('Analysis:', analysis);
```

### Production Deployment

#### Docker Setup

```dockerfile
# Dockerfile for Ollama service
FROM ollama/ollama:latest

# Copy models
COPY models/ /root/.ollama/models/

# Expose port
EXPOSE 11434

# Start service
CMD ["ollama", "serve"]
```

```bash
# Build and run
docker build -t ollama-service .
docker run -d -p 11434:11434 --name ollama ollama-service

# Pull models in container
docker exec ollama ollama pull llama2
```

#### Service Configuration

```bash
# Create systemd service (Linux)
sudo tee /etc/systemd/system/ollama.service << 'EOF'
[Unit]
Description=Ollama Service
After=network.target

[Service]
Type=simple
User=ollama
ExecStart=/usr/local/bin/ollama serve
Restart=always
RestartSec=3
Environment=OLLAMA_HOST=0.0.0.0:11434

[Install]
WantedBy=multi-user.target
EOF

# Enable and start service
sudo systemctl enable ollama
sudo systemctl start ollama
```

## Security Considerations

### Network Security

```bash
# Restrict to localhost only (default)
OLLAMA_HOST=127.0.0.1:11434 ollama serve

# Enable authentication (if available)
export OLLAMA_API_KEY=your-secret-key

# Use HTTPS proxy
nginx -c nginx-ollama-ssl.conf
```

### Data Privacy

- **Local Processing**: All AI analysis happens locally
- **No Data Transmission**: Article content never leaves your system
- **Model Storage**: Models stored locally in `~/.ollama/models/`
- **Temporary Files**: Clean up temporary processing files

### Access Control

```bash
# Create dedicated user
sudo useradd -r -s /bin/false ollama

# Set file permissions
sudo chown -R ollama:ollama ~/.ollama/
sudo chmod 750 ~/.ollama/

# Run as non-root user
sudo -u ollama ollama serve
```

## Monitoring and Maintenance

### Health Monitoring

```bash
# Check service status
curl -f http://localhost:11434/api/version || echo "Service down"

# Monitor resource usage
watch -n 5 'ps aux | grep ollama'

# Log monitoring
tail -f /var/log/ollama.log
```

### Maintenance Tasks

```bash
# Update Ollama
curl -fsSL https://ollama.ai/install.sh | sh

# Update models
ollama pull llama2

# Clean up old models
ollama rm old-model-version

# Backup models
tar -czf ollama-models-backup.tar.gz ~/.ollama/models/
```

### Performance Monitoring

```bash
# Monitor API response times
curl -w "@curl-format.txt" -o /dev/null -s http://localhost:11434/api/version

# Track memory usage over time
while true; do
  echo "$(date): $(ps -o pid,vsz,rss,comm -p $(pgrep ollama))"
  sleep 60
done > ollama-memory.log

# Monitor disk usage
du -sh ~/.ollama/models/
```

This comprehensive Ollama setup guide covers installation, configuration, optimization, and troubleshooting for use with the Article Content Processor. Follow the recommendations based on your system specifications and processing requirements.