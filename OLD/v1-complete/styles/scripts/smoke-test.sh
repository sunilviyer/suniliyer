#!/bin/bash
# Post-Deployment Smoke Test
# Verify critical functionality after production deployment

set -e

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default URL (production)
BASE_URL=${1:-https://www.suniliyer.ca}

echo -e "${BLUE}🔥 AIDefence Smoke Test${NC}"
echo "=================================="
echo "Testing: $BASE_URL"
echo ""

PASS_COUNT=0
FAIL_COUNT=0

# Test function
test_url() {
    local url=$1
    local expected_code=$2
    local test_name=$3

    echo -n "Testing $test_name... "

    HTTP_CODE=$(curl -o /dev/null -s -w "%{http_code}" "$url")

    if [ "$HTTP_CODE" -eq "$expected_code" ]; then
        echo -e "${GREEN}✓ ($HTTP_CODE)${NC}"
        ((PASS_COUNT++))
    else
        echo -e "${RED}✗ (Expected $expected_code, got $HTTP_CODE)${NC}"
        ((FAIL_COUNT++))
    fi
}

# Test 1: Homepage
test_url "$BASE_URL/" 200 "Homepage"

# Test 2: Articles Page
test_url "$BASE_URL/articles" 200 "Articles Page"

# Test 3: Sitemap
test_url "$BASE_URL/sitemap.xml" 200 "Sitemap"

# Test 4: Robots.txt
test_url "$BASE_URL/robots.txt" 200 "Robots.txt"

# Test 5: Favicon
test_url "$BASE_URL/favicon.ico" 200 "Favicon"

# Test 6: 404 Page
test_url "$BASE_URL/invalid-page-xyz" 404 "404 Page"

# Test 7: Invalid Article
test_url "$BASE_URL/articles/does-not-exist" 404 "Invalid Article"

echo ""
echo "=================================="
echo "Results: $PASS_COUNT passed, $FAIL_COUNT failed"

if [ "$FAIL_COUNT" -eq 0 ]; then
    echo -e "${GREEN}✅ All smoke tests passed!${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Visual verification in browser"
    echo "2. Run Lighthouse: ./scripts/lighthouse-test.sh $BASE_URL"
    echo "3. Monitor logs for errors"
    exit 0
else
    echo -e "${RED}✗ Some tests failed. Investigate immediately.${NC}"
    echo ""
    echo "Rollback if necessary:"
    echo "1. Go to Vercel Dashboard"
    echo "2. Find previous deployment"
    echo "3. Promote to Production"
    exit 1
fi

echo ""
