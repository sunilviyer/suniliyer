#!/bin/bash

echo "Broken References Mapping"
echo "========================"
echo ""

echo "HISTORY:"
echo "history-1: what-ai-actually-is"
echo "history-6: machine-learning-explained"
echo ""

echo "TERMINOLOGY (all 14):"
grep -A 3 "id: term-" /Volumes/External/aidefence/content/knowledge-graph.yaml | grep -E "(id:|slug:)" | paste - - | head -14
echo ""

echo "RISK:"
echo "risk-8: job-displacement"
echo "risk-9: autonomous-weapons"
echo "risk-13: fairness-definitions"
echo "risk-16: ethics-landscape"
echo "risk-17: oecd-ai-principles"
echo "risk-18: ai-bill-of-rights"
echo "risk-19: unesco-ai-ethics"
echo "risk-20: responsible-ai-practice"
