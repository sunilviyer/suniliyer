# AI Crawler Compatibility

**Site**: https://www.suniliyer.ca
**Last verified**: 5 September 2026
**Method**: third-party scan plus first-party checks against the live site

Every number below came from a command or a scan that is reproducible from
section 6. Nothing here is estimated. If a claim cannot be re-derived from
those commands, it does not belong in this file.

---

## 1. Third-party baseline

Source: [AI Website Readiness](https://michalspace.com/tools/ai-website-readiness),
report `7830165d-03ad-453f-acca-eb93d58d8564`, scanning `https://www.suniliyer.ca/`.

**Score at time of scan: 91/100** (86 of 94 raw points).

| Category | Raw score |
|---|---|
| Crawl access | 30 / 30 |
| Content identity | 15 / 20 |
| Content clarity | 17 / 17 |
| Discovery | 9 / 12 |
| Sharing and trust | 15 / 15 |

Three checks failed, all of them about how the site *declares* itself rather
than what it publishes:

1. **Author or organization identity is discoverable** - no `meta author` tag.
2. **Structured data identifies site, person, or organization** - see below.
3. **RSS or Atom feed is discoverable** - no feed existed.

---

## 2. The structured-data finding was a false negative

The same report passed *"JSON-LD parses successfully"* and failed
*"structured data identifies site, person, or organization"* on the same page.

The site was already emitting correct `Organization`, `Person` and `WebSite`
nodes in `<head>`. They were wrapped in a single `@graph` document:

```json
{ "@context": "https://schema.org", "@graph": [ { "@type": "Organization", ... } ] }
```

That is valid JSON-LD and Google consumes it happily, but a checker that only
inspects the document's top-level `@type` sees nothing. `components/seo/JsonLd.tsx`
now renders one `<script>` per node with the type at the top level. Consumers
that merge nodes by `@id` are unaffected; naive top-level readers now succeed.

**Takeaway for future changes**: `@graph` is not wrong, but it is invisible to
a meaningful share of automated readers. Keep nodes flat.

---

## 3. Current state

| Surface | Verified value |
|---|---|
| HTTPS + HSTS | yes, `max-age=63072000` |
| Apex to www | single 308 redirect, one hop |
| robots.txt | reachable, wildcard `Allow: /`, sitemap declared |
| AI crawlers named in robots.txt | 14 tokens, section 4 |
| sitemap.xml | 89 URLs |
| rss.xml | 73 items |
| JSON-LD on `/` | 3 flat nodes: Organization, Person, WebSite |
| JSON-LD on `/articles` | 5 flat nodes, adds CreativeWork + BreadcrumbList |
| JSON-LD on `/history` | 5 flat nodes, adds Course + BreadcrumbList |
| Author attribution | `meta author`, `meta creator`, `meta publisher`, `link rel=author` |
| Feed discovery | `<link rel="alternate" type="application/rss+xml">` on every page |
| Security headers | `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` (set in `vercel.json`) |
| Rendering | Next.js App Router, server-rendered; article prose is in the initial HTML |
| Article dates | weekly, 2024-02-01 to 2024-10-31, one shared source read by schema, metadata and feed |

### Content inventory

| Body of work | Pages | In sitemap | In feed |
|---|---|---|---|
| AGI Constitution articles | 33 | yes | yes |
| Constitution index + context page | 2 | yes | no |
| Learning-path articles | 40 | yes | yes |
| Learning-path index pages | 5 | yes | no |
| Main pages | 5 | yes | no |
| Portfolio / other | 4 | yes | no |
| **Total** | **89** | **89** | **73** |

`lib/data/learning-path-articles.ts` is the single source of truth for the 40
articles, and `app/constitution/data/reading-order.ts` for the 33 constitution
parts. `app/sitemap.ts` and `lib/feed.ts` both read those, so the sitemap and
the feed cannot list different content.

---

## 4. AI crawlers named in robots.txt

The wildcard rule already grants these access; naming them is an explicit
statement of intent. Tokens verified against each operator's own documentation
on 5 September 2026.

| Operator | Tokens | Source |
|---|---|---|
| OpenAI | `GPTBot`, `OAI-SearchBot`, `ChatGPT-User` | developers.openai.com/api/docs/bots |
| Anthropic | `ClaudeBot`, `Claude-User`, `Claude-SearchBot` | support.claude.com/en/articles/8896518 |
| Anthropic (legacy) | `anthropic-ai`, `Claude-Web` | retired tokens, kept so stale crawler configs still match |
| Google | `Google-Extended` | Gemini / Vertex AI training token |
| Microsoft | `Bingbot` | Bing and Copilot |
| Perplexity | `PerplexityBot`, `Perplexity-User` | docs.perplexity.ai/guides/bots |
| Common Crawl | `CCBot` | corpus behind many open models |
| Apple | `Applebot-Extended` | Apple Intelligence training token |

`Claude-Web` was the previous version of this file's only Anthropic entry and
is no longer an active token. It is retained deliberately, not by neglect.

---

## 5. Known gaps

Honest list of what is still missing or unverified.

- **Per-article publication dates are assigned, not recovered.** The 40
  learning-path articles run weekly from 1 February 2024 to 31 October 2024 in
  reading order, held in `lib/data/learning-path-articles.ts`. The Article
  schema, `og:published_time` and the feed all read that one field, so they
  agree, but the specific days are a stand-in for records the site never kept.
  The 33 constitution parts keep the declared 2026-03-01 date, spaced a day
  apart; weekly spacing there would date items past today, and feed readers
  hide those.
- **No performance numbers in this document.** The previous version of this
  file quoted TTFB, FCP and LCP figures that were never measured. Use Vercel
  Speed Insights or a Lighthouse run for those; do not restate them here
  without a linked run.
- **`/ai.txt` is not implemented.** It is a proposed convention with no
  meaningful adoption; skip it until a crawler actually reads it.
- **FAQ and HowTo schema** are not used anywhere, and could suit the
  terminology and learning-path pages.

---

## 6. How to re-verify

```bash
# redirect chain and security headers
curl -sSI https://suniliyer.ca | head -20
curl -sSI https://www.suniliyer.ca | head -20

# robots and sitemap
curl -sS https://www.suniliyer.ca/robots.txt
curl -sS https://www.suniliyer.ca/sitemap.xml | grep -c '<loc>'

# feed: item count and XML validity
curl -sS https://www.suniliyer.ca/rss.xml -o /tmp/rss.xml
grep -c '<item>' /tmp/rss.xml
python3 -c "import xml.dom.minidom; xml.dom.minidom.parse('/tmp/rss.xml'); print('valid')"

# what a crawler sees without running JavaScript
curl -sS https://www.suniliyer.ca/ -o /tmp/home.html
grep -o '<meta name="author"[^>]*>' /tmp/home.html
grep -o '<link[^>]*rel="alternate"[^>]*>' /tmp/home.html
python3 - <<'PY'
import re, json
h = open('/tmp/home.html', encoding='utf-8').read()
for b in re.findall(r'<script type="application/ld\+json"[^>]*>(.*?)</script>', h, re.S):
    d = json.loads(b)
    print(d.get('@type'), '| @graph present:', '@graph' in d)
PY
```

Every value in section 3 comes from those commands. Re-run them before editing
this file, and delete any claim you cannot reproduce.
