#!/bin/bash
# Lighthouse Testing Script
# Run Lighthouse audits on specified URL

set -e

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default URL
URL=${1:-http://localhost:3000}

echo -e "${BLUE}🔍 AIDefence Lighthouse Audit${NC}"
echo "=================================="
echo "URL: $URL"
echo ""

# Check if lighthouse is available
if ! command -v npx &> /dev/null; then
    echo -e "${RED}✗ npx not found. Please install Node.js${NC}"
    exit 1
fi

# Create reports directory if it doesn't exist
mkdir -p lighthouse-reports

# Generate filename with timestamp
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
REPORT_NAME="lighthouse-report-$TIMESTAMP"

echo "Running Lighthouse audit..."
echo "(This may take 30-60 seconds)"
echo ""

# Run Lighthouse
npx lighthouse "$URL" \
  --only-categories=performance,accessibility,best-practices,seo \
  --output=json \
  --output=html \
  --output-path="./lighthouse-reports/$REPORT_NAME" \
  --quiet

# Check if report was generated
if [ -f "./lighthouse-reports/$REPORT_NAME.json" ]; then
    # Extract scores from JSON report
    PERF_SCORE=$(node -p "Math.round(require('./lighthouse-reports/$REPORT_NAME.json').categories.performance.score * 100)")
    A11Y_SCORE=$(node -p "Math.round(require('./lighthouse-reports/$REPORT_NAME.json').categories.accessibility.score * 100)")
    BP_SCORE=$(node -p "Math.round(require('./lighthouse-reports/$REPORT_NAME.json').categories['best-practices'].score * 100)")
    SEO_SCORE=$(node -p "Math.round(require('./lighthouse-reports/$REPORT_NAME.json').categories.seo.score * 100)")

    echo "=================================="
    echo -e "${BLUE}Lighthouse Results:${NC}"
    echo ""

    # Performance
    if [ "$PERF_SCORE" -ge 90 ]; then
        echo -e "Performance:     ${GREEN}$PERF_SCORE/100 ✓${NC}"
    else
        echo -e "Performance:     ${RED}$PERF_SCORE/100 ✗${NC}"
    fi

    # Accessibility
    if [ "$A11Y_SCORE" -ge 90 ]; then
        echo -e "Accessibility:   ${GREEN}$A11Y_SCORE/100 ✓${NC}"
    else
        echo -e "Accessibility:   ${RED}$A11Y_SCORE/100 ✗${NC}"
    fi

    # Best Practices
    if [ "$BP_SCORE" -ge 90 ]; then
        echo -e "Best Practices:  ${GREEN}$BP_SCORE/100 ✓${NC}"
    else
        echo -e "Best Practices:  ${RED}$BP_SCORE/100 ✗${NC}"
    fi

    # SEO
    if [ "$SEO_SCORE" -ge 90 ]; then
        echo -e "SEO:             ${GREEN}$SEO_SCORE/100 ✓${NC}"
    else
        echo -e "SEO:             ${RED}$SEO_SCORE/100 ✗${NC}"
    fi

    echo ""
    echo "=================================="

    # Overall result
    if [ "$PERF_SCORE" -ge 90 ] && [ "$A11Y_SCORE" -ge 90 ] && [ "$BP_SCORE" -ge 90 ] && [ "$SEO_SCORE" -ge 90 ]; then
        echo -e "${GREEN}✅ All Lighthouse targets met!${NC}"
    else
        echo -e "${YELLOW}⚠️  Some targets not met. Review report for details.${NC}"
    fi

    echo ""
    echo "Report saved to: ./lighthouse-reports/$REPORT_NAME.html"
    echo "Opening report in browser..."

    # Open report (cross-platform)
    if [[ "$OSTYPE" == "darwin"* ]]; then
        open "./lighthouse-reports/$REPORT_NAME.html"
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        xdg-open "./lighthouse-reports/$REPORT_NAME.html"
    elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "win32" ]]; then
        start "./lighthouse-reports/$REPORT_NAME.html"
    fi

else
    echo -e "${RED}✗ Lighthouse report not generated${NC}"
    exit 1
fi

echo ""
echo "Usage examples:"
echo "  ./scripts/lighthouse-test.sh                              # Test localhost"
echo "  ./scripts/lighthouse-test.sh <preview-url>                # Test preview"
echo "  ./scripts/lighthouse-test.sh https://www.suniliyer.ca     # Test production"
echo ""
