/**
 * Structure validation tests
 * Ensures all required directories and files are in place
 */

import { existsSync } from 'fs';
import { join } from 'path';

describe('Article Processor Structure', () => {
  const basePath = 'lib/article-processor';

  describe('Core Files', () => {
    it('should have main index file', () => {
      expect(existsSync(join(basePath, 'index.ts'))).toBe(true);
    });

    it('should have types definition', () => {
      expect(existsSync(join(basePath, 'types/index.ts'))).toBe(true);
    });

    it('should have interfaces definition', () => {
      expect(existsSync(join(basePath, 'interfaces/index.ts'))).toBe(true);
    });

    it('should have constants file', () => {
      expect(existsSync(join(basePath, 'utils/constants.ts'))).toBe(true);
    });

    it('should have Ollama client', () => {
      expect(existsSync(join(basePath, 'clients/ollama-client.ts'))).toBe(true);
    });

    it('should have README', () => {
      expect(existsSync(join(basePath, 'README.md'))).toBe(true);
    });

    it('should have config example', () => {
      expect(existsSync(join(basePath, 'config.example.ts'))).toBe(true);
    });
  });

  describe('Directory Structure', () => {
    it('should have processors directory', () => {
      expect(existsSync(join(basePath, 'processors'))).toBe(true);
    });

    it('should have analyzers directory', () => {
      expect(existsSync(join(basePath, 'analyzers'))).toBe(true);
    });

    it('should have generators directory', () => {
      expect(existsSync(join(basePath, 'generators'))).toBe(true);
    });

    it('should have utils directory', () => {
      expect(existsSync(join(basePath, 'utils'))).toBe(true);
    });

    it('should have clients directory', () => {
      expect(existsSync(join(basePath, 'clients'))).toBe(true);
    });

    it('should have tests directory', () => {
      expect(existsSync(join(basePath, '__tests__'))).toBe(true);
    });
  });

  describe('Test Infrastructure', () => {
    it('should have test setup file', () => {
      expect(existsSync(join(basePath, '__tests__/setup.ts'))).toBe(true);
    });

    it('should have types test', () => {
      expect(existsSync(join(basePath, '__tests__/types.test.ts'))).toBe(true);
    });

    it('should have Ollama client test', () => {
      expect(existsSync(join(basePath, '__tests__/ollama-client.test.ts'))).toBe(true);
    });
  });
});

describe('Imports', () => {
  it('should import types successfully', async () => {
    const types = await import('../types');
    expect(types).toBeDefined();
    expect(types.DEFAULT_DIRECTORIES).toBeDefined();
  });

  it('should import interfaces successfully', async () => {
    const interfaces = await import('../interfaces');
    expect(interfaces).toBeDefined();
  });

  it('should import constants successfully', async () => {
    const constants = await import('../utils/constants');
    expect(constants).toBeDefined();
    expect(constants.DIRECTORIES).toBeDefined();
    expect(constants.CATEGORY_MOTIF_MAP).toBeDefined();
  });

  it('should import Ollama client successfully', async () => {
    const { OllamaClient, ollamaClient } = await import('../clients/ollama-client');
    expect(OllamaClient).toBeDefined();
    expect(ollamaClient).toBeDefined();
  });

  it('should import from main index successfully', async () => {
    const articleProcessor = await import('../index');
    expect(articleProcessor).toBeDefined();
  });
});
