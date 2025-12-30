# Article Content Processor - Troubleshooting Guide

## Quick Diagnosis

### System Check Commands

```bash
# Check Node.js version (requires 20+)
node --version

# Check TypeScript version (requires 5.9+)
npx tsc --version

# Check Ollama status
curl http://localhost:11434/api/version

# List available Ollama models
ollama list

# Validate configuration
npm run article-processor config --validate

# Check directory structure
npm run article-processor structure
```

## Common Issues and Solutions

### 1. "No markdown files found in drafts directory"

**Symptoms:**
- Processing completes immediately with 0 articles processed
- Message: "No markdown files found"

**Causes:**
- Empty drafts directory
- Files don't have `.md` extension
- Incorrect directory path
- Permission issues

**Solutions:**

```bash
# Check if files exist
ls -la content/articles/drafts/

# Verify file extensions
find content/articles/drafts/ -name "*.md"

# Check directory configuration
npm run article-processor config --show

# Create test article
echo "# Test Article\n\nThis is a test." > content/articles/drafts/test.md

# Fix permissions
chmod -R 755 content/articles/
```

### 2. "Ollama service not reachable"

**Symptoms:**
- Error: "Failed to connect to Ollama"
- Timeout errors during AI analysis
- Processing completes but no redundancy analysis

**Causes:**
- Ollama service not running
- Wrong endpoint configuration
- Firewall blocking connection
- Model not available

**Solutions:**

```bash
# Start Ollama service
ollama serve

# Test connection
curl http://localhost:11434/api/version

# Check if model exists
ollama list

# Pull required model
ollama pull llama2

# Test with different endpoint
npm run article-processor process --verbose

# Check firewall (macOS)
sudo pfctl -sr | grep 11434

# Alternative: Use different model
npm run article-processor process --model mistral
```

### 3. "Permission denied" errors

**Symptoms:**
- Error: "EACCES: permission denied"
- Cannot create output directories
- Cannot write files

**Causes:**
- Insufficient file permissions
- Directory ownership issues
- Read-only file system

**Solutions:**

```bash
# Check current permissions
ls -la content/articles/

# Fix directory permissions
chmod -R 755 content/articles/

# Create directories manually
mkdir -p content/articles/{drafts,articleprocessing,review,clean}

# Fix ownership (if needed)
sudo chown -R $USER:$USER content/articles/

# Check disk space
df -h .
```

### 4. "Configuration validation failed"

**Symptoms:**
- Error: "Invalid configuration"
- Processing won't start
- Missing configuration fields

**Causes:**
- Malformed JSON syntax
- Missing required fields
- Invalid values

**Solutions:**

```bash
# Validate JSON syntax
cat article-processor.config.json | jq .

# Initialize default configuration
npm run article-processor config --init

# Show current configuration
npm run article-processor config --show

# Validate configuration
npm run article-processor config --validate

# Example valid configuration
cat > article-processor.config.json << 'EOF'
{
  "ollama": {
    "model": "llama2",
    "endpoint": "http://localhost:11434",
    "timeout": 30000
  },
  "directories": {
    "drafts": "content/articles/drafts",
    "processing": "content/articles/articleprocessing",
    "review": "content/articles/review",
    "clean": "content/articles/clean"
  },
  "logging": {
    "verbose": false,
    "showProgress": true
  }
}
EOF
```

### 5. "Processing failed for multiple articles"

**Symptoms:**
- Some articles process successfully, others fail
- Error messages for specific files
- Incomplete processing results

**Causes:**
- Malformed markdown syntax
- Encoding issues
- Very large files
- Missing frontmatter

**Solutions:**

```bash
# Process with verbose logging
npm run article-processor process --verbose

# Test single article
npm run article-processor single content/articles/drafts/problematic-article.md --verbose

# Check file encoding
file content/articles/drafts/*.md

# Validate markdown syntax
npx markdownlint content/articles/drafts/

# Check file sizes
ls -lah content/articles/drafts/

# Fix common markdown issues
# Remove BOM (Byte Order Mark)
sed -i '1s/^\xEF\xBB\xBF//' content/articles/drafts/*.md

# Fix line endings
dos2unix content/articles/drafts/*.md
```

### 6. "Memory issues with large articles"

**Symptoms:**
- Process crashes with "out of memory"
- Very slow processing
- System becomes unresponsive

**Causes:**
- Very large articles (>10MB)
- Processing many articles simultaneously
- Memory leaks
- Insufficient system memory

**Solutions:**

```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run article-processor process

# Process articles in batches
# Move some articles temporarily
mkdir temp-articles
mv content/articles/drafts/large-*.md temp-articles/

# Check article sizes
du -sh content/articles/drafts/*.md | sort -hr

# Monitor memory usage
top -p $(pgrep -f "article-processor")

# Split large articles
split -l 1000 large-article.md split-article-
```

### 7. "TypeScript compilation errors"

**Symptoms:**
- Error: "Cannot find module"
- Type errors during processing
- Import/export issues

**Causes:**
- Missing dependencies
- TypeScript version mismatch
- Incorrect type definitions

**Solutions:**

```bash
# Check TypeScript version
npx tsc --version

# Install missing dependencies
npm install

# Check for type errors
npx tsc --noEmit

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Update TypeScript
npm install -D typescript@latest
```

### 8. "YAML/JSON output validation errors"

**Symptoms:**
- Error: "Invalid YAML format"
- Error: "JSON parse error"
- Malformed output files

**Causes:**
- Special characters in content
- Encoding issues
- Template rendering problems

**Solutions:**

```bash
# Validate YAML files
find content/articles/articleprocessing/ -name "*.yaml" -exec yamllint {} \;

# Validate JSON files
find content/articles/articleprocessing/ -name "*.json" -exec jq . {} \;

# Check for special characters
grep -P '[^\x00-\x7F]' content/articles/drafts/*.md

# Process with verbose logging to see validation details
npm run article-processor process --verbose

# Test with simple article
echo "# Simple Test\n\nBasic content." > content/articles/drafts/simple-test.md
npm run article-processor single content/articles/drafts/simple-test.md --verbose
```

## Advanced Troubleshooting

### Debug Mode

Enable maximum verbosity for detailed troubleshooting:

```bash
# Enable all logging
DEBUG=* npm run article-processor process --verbose

# Log to file
npm run article-processor process --verbose > processing.log 2>&1

# Monitor in real-time
npm run article-processor process --verbose | tee processing.log
```

### Performance Analysis

```bash
# Time the processing
time npm run article-processor process

# Profile memory usage
node --inspect npm run article-processor process

# Monitor system resources
iostat -x 1 & npm run article-processor process

# Check disk I/O
iotop -p $(pgrep -f "article-processor")
```

### Network Troubleshooting

```bash
# Test Ollama connectivity
curl -v http://localhost:11434/api/version

# Check network latency
ping localhost

# Test with different timeout
npm run article-processor process --verbose

# Monitor network connections
netstat -an | grep 11434

# Test with remote Ollama
curl -v http://remote-host:11434/api/version
```

### File System Analysis

```bash
# Check disk space
df -h

# Check inode usage
df -i

# Find large files
find content/articles/ -type f -size +10M

# Check file permissions recursively
find content/articles/ -type f ! -perm 644

# Monitor file operations
lsof +D content/articles/
```

## Error Code Reference

### Exit Codes

- **0**: Success
- **1**: General error
- **2**: Configuration error
- **3**: File system error
- **4**: Network error (Ollama)
- **5**: Processing error
- **6**: Validation error

### Common Error Messages

#### "ENOENT: no such file or directory"
- **Cause**: Missing file or directory
- **Solution**: Check file paths, create missing directories

#### "EACCES: permission denied"
- **Cause**: Insufficient permissions
- **Solution**: Fix file permissions with `chmod`

#### "EMFILE: too many open files"
- **Cause**: System file descriptor limit reached
- **Solution**: Increase ulimit or process fewer files

#### "ENOMEM: not enough memory"
- **Cause**: Insufficient system memory
- **Solution**: Increase Node.js memory limit or add more RAM

#### "ETIMEDOUT: connection timed out"
- **Cause**: Network timeout (usually Ollama)
- **Solution**: Check Ollama service, increase timeout

#### "SyntaxError: Unexpected token"
- **Cause**: Invalid JSON in configuration
- **Solution**: Validate JSON syntax

## Recovery Procedures

### Partial Processing Recovery

If processing fails partway through:

```bash
# Check what was processed
ls -la content/articles/articleprocessing/
ls -la content/articles/review/
ls -la content/articles/clean/

# Move processed articles back to drafts if needed
mv content/articles/review/*.md content/articles/drafts/

# Clean up partial outputs
rm -f content/articles/articleprocessing/master.json
rm -f content/articles/articleprocessing/master.yaml

# Resume processing
npm run article-processor process --verbose
```

### Configuration Recovery

If configuration is corrupted:

```bash
# Backup current config
cp article-processor.config.json article-processor.config.json.backup

# Reset to defaults
npm run article-processor config --init

# Restore custom settings manually
nano article-processor.config.json
```

### Directory Structure Recovery

If directories are corrupted:

```bash
# Recreate directory structure
mkdir -p content/articles/{drafts,articleprocessing,review,clean}

# Set proper permissions
chmod -R 755 content/articles/

# Verify structure
npm run article-processor structure
```

## Getting Help

### Information to Collect

When reporting issues, include:

1. **System Information**:
   ```bash
   node --version
   npm --version
   npx tsc --version
   uname -a
   ```

2. **Configuration**:
   ```bash
   npm run article-processor config --show
   ```

3. **Error Logs**:
   ```bash
   npm run article-processor process --verbose > error.log 2>&1
   ```

4. **Directory Structure**:
   ```bash
   npm run article-processor structure
   ```

5. **Sample Files**: Provide problematic markdown files (sanitized)

### Self-Help Checklist

Before seeking help:

- [ ] Verified Node.js version (20+)
- [ ] Verified TypeScript version (5.9+)
- [ ] Checked Ollama service status
- [ ] Validated configuration
- [ ] Tested with simple article
- [ ] Checked file permissions
- [ ] Reviewed error logs
- [ ] Tried with verbose logging
- [ ] Checked system resources (disk, memory)
- [ ] Tested individual components

### Support Resources

1. **Documentation**: Review complete documentation
2. **Configuration Validation**: Use built-in validation tools
3. **Verbose Logging**: Enable detailed logging for diagnosis
4. **Test Cases**: Use simple test articles to isolate issues
5. **System Monitoring**: Check system resources and performance

## Prevention

### Best Practices

1. **Regular Validation**:
   ```bash
   npm run article-processor config --validate
   ```

2. **Test Processing**:
   ```bash
   # Test with single article first
   npm run article-processor single test-article.md --verbose
   ```

3. **Monitor Resources**:
   ```bash
   # Check disk space regularly
   df -h
   
   # Monitor memory usage
   free -h
   ```

4. **Backup Configuration**:
   ```bash
   cp article-processor.config.json config.backup
   ```

5. **Version Control**: Keep configuration and articles in version control

6. **Regular Updates**: Keep dependencies updated
   ```bash
   npm audit
   npm update
   ```

This troubleshooting guide covers the most common issues and their solutions. For complex problems, use the diagnostic commands and information collection procedures to gather detailed information for further analysis.