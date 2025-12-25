#!/bin/bash
set -euo pipefail

# Only run in Claude Code on the web
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Install npm dependencies
# Using npm install (not npm ci) to take advantage of container caching
cd "$CLAUDE_PROJECT_DIR"
npm install
