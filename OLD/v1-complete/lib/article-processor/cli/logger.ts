/**
 * CLI Logger for Article Processor
 * 
 * Provides structured logging with different levels and formatting:
 * - Info, success, warning, error levels
 * - Verbose logging support
 * - Progress reporting
 * - Colored output for better readability
 * 
 * Requirements: All requirements
 */

/**
 * Log levels
 */
export enum LogLevel {
  ERROR = 0,
  WARN = 1,
  INFO = 2,
  VERBOSE = 3
}

/**
 * CLI Logger implementation
 */
export class CLILogger {
  private verboseMode: boolean = false;
  private showProgress: boolean = true;

  constructor(verbose: boolean = false, showProgress: boolean = true) {
    this.verboseMode = verbose;
    this.showProgress = showProgress;
  }

  /**
   * Set verbose mode
   */
  setVerbose(verbose: boolean): void {
    this.verboseMode = verbose;
  }

  /**
   * Set progress display
   */
  setShowProgress(showProgress: boolean): void {
    this.showProgress = showProgress;
  }

  /**
   * Log info message
   */
  info(message: string): void {
    this.log(LogLevel.INFO, message, '💡');
  }

  /**
   * Log success message
   */
  success(message: string): void {
    this.log(LogLevel.INFO, message, '✅');
  }

  /**
   * Log warning message
   */
  warn(message: string): void {
    this.log(LogLevel.WARN, message, '⚠️');
  }

  /**
   * Log error message
   */
  error(message: string): void {
    this.log(LogLevel.ERROR, message, '❌');
  }

  /**
   * Log verbose message (only shown in verbose mode)
   */
  verbose(message: string): void {
    if (this.verboseMode) {
      this.log(LogLevel.VERBOSE, message, '🔍');
    }
  }

  /**
   * Log progress message (only shown if progress is enabled)
   */
  progress(message: string): void {
    if (this.showProgress) {
      this.log(LogLevel.INFO, message, '🔄');
    }
  }

  /**
   * Log a separator line
   */
  separator(): void {
    console.log('─'.repeat(60));
  }

  /**
   * Log a blank line
   */
  blank(): void {
    console.log('');
  }

  /**
   * Log a table of data
   */
  table(data: Record<string, any>[]): void {
    if (data.length === 0) {
      this.info('No data to display');
      return;
    }

    // Get all unique keys
    const keys = Array.from(new Set(data.flatMap(item => Object.keys(item))));
    
    // Calculate column widths
    const widths = keys.map(key => {
      const values = data.map(item => String(item[key] || ''));
      return Math.max(key.length, ...values.map(v => v.length));
    });

    // Print header
    const header = keys.map((key, i) => key.padEnd(widths[i])).join(' | ');
    console.log(header);
    console.log(keys.map((_, i) => '─'.repeat(widths[i])).join('─┼─'));

    // Print rows
    data.forEach(item => {
      const row = keys.map((key, i) => String(item[key] || '').padEnd(widths[i])).join(' | ');
      console.log(row);
    });
  }

  /**
   * Log processing statistics
   */
  stats(stats: {
    total: number;
    successful: number;
    failed: number;
    processingTime: number;
  }): void {
    this.blank();
    this.separator();
    this.info('📊 Processing Statistics');
    this.separator();
    
    const successRate = stats.total > 0 ? ((stats.successful / stats.total) * 100).toFixed(1) : '0.0';
    const avgTime = stats.total > 0 ? (stats.processingTime / stats.total).toFixed(0) : '0';
    
    console.log(`   Total articles:     ${stats.total}`);
    console.log(`   Successfully processed: ${stats.successful}`);
    console.log(`   Failed:             ${stats.failed}`);
    console.log(`   Success rate:       ${successRate}%`);
    console.log(`   Total time:         ${stats.processingTime}ms`);
    console.log(`   Average per article: ${avgTime}ms`);
    
    this.separator();
  }

  /**
   * Log directory structure
   */
  directoryStructure(directories: Record<string, string>): void {
    this.blank();
    this.info('📁 Directory Structure:');
    this.blank();
    
    const maxKeyLength = Math.max(...Object.keys(directories).map(k => k.length));
    
    Object.entries(directories).forEach(([key, path]) => {
      const paddedKey = key.padEnd(maxKeyLength);
      console.log(`   ${paddedKey} → ${path}`);
    });
    
    this.blank();
  }

  /**
   * Log configuration
   */
  configuration(config: any): void {
    this.blank();
    this.info('⚙️  Configuration:');
    this.blank();
    
    // Pretty print configuration
    const configStr = JSON.stringify(config, null, 2);
    configStr.split('\n').forEach(line => {
      console.log(`   ${line}`);
    });
    
    this.blank();
  }

  /**
   * Core logging method
   */
  private log(level: LogLevel, message: string, icon?: string): void {
    const timestamp = new Date().toISOString().substring(11, 19); // HH:MM:SS
    const prefix = icon ? `${icon} ` : '';
    
    // Add timestamp in verbose mode
    if (this.verboseMode) {
      console.log(`[${timestamp}] ${prefix}${message}`);
    } else {
      console.log(`${prefix}${message}`);
    }
  }

  /**
   * Create a progress bar
   */
  createProgressBar(total: number): ProgressBar {
    return new ProgressBar(total, this.showProgress);
  }
}

/**
 * Simple progress bar implementation
 */
export class ProgressBar {
  private current: number = 0;
  private total: number;
  private showProgress: boolean;
  private lastUpdate: number = 0;

  constructor(total: number, showProgress: boolean = true) {
    this.total = total;
    this.showProgress = showProgress;
  }

  /**
   * Update progress
   */
  update(current: number, message?: string): void {
    if (!this.showProgress) return;

    this.current = current;
    const now = Date.now();
    
    // Throttle updates to avoid spam
    if (now - this.lastUpdate < 100 && current < this.total) {
      return;
    }
    
    this.lastUpdate = now;
    
    const percentage = Math.round((current / this.total) * 100);
    const barLength = 30;
    const filledLength = Math.round((current / this.total) * barLength);
    const bar = '█'.repeat(filledLength) + '░'.repeat(barLength - filledLength);
    
    const progressText = `[${current}/${this.total}] ${percentage}% ${bar}`;
    const fullMessage = message ? `${progressText} ${message}` : progressText;
    
    // Clear line and write progress
    process.stdout.write(`\r${fullMessage}`);
    
    // Add newline when complete
    if (current >= this.total) {
      process.stdout.write('\n');
    }
  }

  /**
   * Increment progress by 1
   */
  increment(message?: string): void {
    this.update(this.current + 1, message);
  }

  /**
   * Complete the progress bar
   */
  complete(message?: string): void {
    this.update(this.total, message);
  }
}

/**
 * Create a default logger instance
 */
export const logger = new CLILogger();