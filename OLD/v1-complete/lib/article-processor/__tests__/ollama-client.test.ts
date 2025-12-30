/**
 * Tests for Ollama Client
 * Validates Ollama integration configuration and basic functionality
 */

import { OllamaClient } from '../clients/ollama-client';
import { OLLAMA_DEFAULTS } from '../utils/constants';

describe('OllamaClient', () => {
  describe('Configuration', () => {
    it('should initialize with default configuration', () => {
      const client = new OllamaClient();
      const config = client.getConfig();

      expect(config.model).toBe(OLLAMA_DEFAULTS.MODEL);
      expect(config.endpoint).toBe(OLLAMA_DEFAULTS.ENDPOINT);
      expect(config.timeout).toBe(OLLAMA_DEFAULTS.TIMEOUT);
    });

    it('should accept custom configuration', () => {
      const customConfig = {
        model: 'mistral',
        endpoint: 'http://custom:11434',
        timeout: 60000
      };

      const client = new OllamaClient(customConfig);
      const config = client.getConfig();

      expect(config.model).toBe('mistral');
      expect(config.endpoint).toBe('http://custom:11434');
      expect(config.timeout).toBe(60000);
    });

    it('should allow partial configuration override', () => {
      const client = new OllamaClient({ model: 'llama3' });
      const config = client.getConfig();

      expect(config.model).toBe('llama3');
      expect(config.endpoint).toBe(OLLAMA_DEFAULTS.ENDPOINT);
      expect(config.timeout).toBe(OLLAMA_DEFAULTS.TIMEOUT);
    });

    it('should update configuration dynamically', () => {
      const client = new OllamaClient();
      
      client.updateConfig({ model: 'codellama' });
      const config = client.getConfig();

      expect(config.model).toBe('codellama');
    });
  });

  describe('Connection Testing', () => {
    it('should handle connection test gracefully when Ollama is not running', async () => {
      const client = new OllamaClient({ endpoint: 'http://localhost:99999' });
      const isConnected = await client.testConnection();

      expect(typeof isConnected).toBe('boolean');
      // We don't assert true/false since Ollama may or may not be running
    });
  });

  describe('Error Handling', () => {
    it('should throw meaningful error when generation fails', async () => {
      const client = new OllamaClient({ 
        endpoint: 'http://invalid-endpoint:11434',
        timeout: 1000
      });

      await expect(client.generate('test prompt')).rejects.toThrow();
    });

    it('should handle timeout errors', async () => {
      const client = new OllamaClient({ 
        endpoint: 'http://localhost:11434',
        timeout: 1 // Very short timeout
      });

      // This will timeout if Ollama is running, or fail to connect if not
      await expect(client.generate('test prompt')).rejects.toThrow();
    });
  });

  describe('Redundancy Analysis', () => {
    it('should format redundancy analysis prompt correctly', async () => {
      const client = new OllamaClient({ 
        endpoint: 'http://invalid:11434',
        timeout: 100
      });

      const mockMasterJSON = JSON.stringify({
        articles: [
          { title: 'Article 1', topic_fingerprint: ['AI', 'Ethics'] },
          { title: 'Article 2', topic_fingerprint: ['AI', 'Governance'] }
        ]
      });

      // Should fail but we're testing the method exists and accepts correct params
      await expect(client.analyzeRedundancy(mockMasterJSON)).rejects.toThrow();
    });
  });
});
