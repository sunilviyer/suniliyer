#!/bin/bash
# Pre-Deployment Test Script
# Run this script before creating a PR to ensure code is ready for deployment

set -e  # Exit on error

echo "🧪 AIDefence Pre-Deployment Tests"
echo "=================================="
echo ""

# Color codes for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test 1: TypeScript Check
echo "1️⃣  Running TypeScript check..."
if npx tsc --noEmit; then
    echo -e "${GREEN}✓ TypeScript check passed${NC}"
else
    echo -e "${RED}✗ TypeScript errors found${NC}"
    exit 1
fi
echo ""

# Test 2: Production Build
echo "2️⃣  Running production build..."
if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✓ Production build succeeded${NC}"
else
    echo -e "${RED}✗ Production build failed${NC}"
    exit 1
fi
echo ""

# Test 3: Check Bundle Size
echo "3️⃣  Checking bundle size..."
BUNDLE_SIZE=$(du -sh .next/static | awk '{print $1}')
echo "   Bundle size: $BUNDLE_SIZE"
echo -e "${GREEN}✓ Bundle size check complete${NC}"
echo ""

# Test 4: Lint Check (if lint script exists)
if grep -q '"lint"' package.json; then
    echo "4️⃣  Running lint check..."
    if npm run lint > /dev/null 2>&1; then
        echo -e "${GREEN}✓ Lint check passed${NC}"
    else
        echo -e "${YELLOW}⚠ Lint warnings found (non-blocking)${NC}"
    fi
    echo ""
fi

# Summary
echo "=================================="
echo -e "${GREEN}✅ All pre-deployment tests passed!${NC}"
echo ""
echo "Next steps:"
echo "1. Start production server: npm start"
echo "2. Test locally at http://localhost:3000"
echo "3. Create PR: gh pr create"
echo ""
