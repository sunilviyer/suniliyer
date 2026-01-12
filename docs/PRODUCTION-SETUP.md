# Production Setup for Database Integration

## Required Environment Variables

For the article cards to work in production (Vercel), you need to add the following environment variable:

### DATABASE_URL

Add this to your Vercel project settings:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new environment variable:
   - **Name:** `DATABASE_URL`
   - **Value:** `postgresql://neondb_owner:npg_vdmRx15MBUND@ep-weathered-shadow-ahqptvcp-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`
   - **Environments:** Check all (Production, Preview, Development)

4. Click **Save**
5. Redeploy your application for the changes to take effect

## How It Works

- Articles use the `getCardsByArticle()` function from `/lib/db.ts` to fetch card data
- Cards are stored in the Neon PostgreSQL database
- The `ArticlePageWrapper` component provides cards via React Context
- `InlineContextCard` components access cards using the `useCard()` hook

## Database Status Requirements

Cards must have `status = 'published'` to appear in articles. To check/update card status:

```bash
# Check card status
psql $DATABASE_URL -c "SELECT card_id, title, status FROM cards WHERE card_id = 'your-card-id';"

# Update card to published
psql $DATABASE_URL -c "UPDATE cards SET status = 'published' WHERE card_id = 'your-card-id';"
```

## Troubleshooting

### Cards not appearing in production

1. **Check environment variable is set:**
   - Go to Vercel Settings → Environment Variables
   - Verify `DATABASE_URL` is present and correct

2. **Check card status in database:**
   - Use the SQL queries above to verify cards have `status = 'published'`

3. **Check browser console:**
   - Look for "Card not found" errors
   - This indicates cards aren't in database or have wrong status

### Database connection issues

If you see connection errors in production:
- Verify the DATABASE_URL is correct
- Check Neon database is accessible from Vercel (it should be by default)
- Ensure no IP restrictions on the Neon database

## Migration Status

Currently migrated articles using database cards:
- ✅ ai-family-tree (2 cards: ex-deep-blue, fw-eu-ai-act)

Remaining articles to migrate: 11
