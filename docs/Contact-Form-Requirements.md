# AIDefence Contact Form — Requirements Document

## Overview

Add a functional "Contact Me" form to suniliyer.ca that sends an email to Sunil's inbox. The form must validate email addresses, prevent spam, and provide a smooth user experience.

---

## Platform & Stack

- **Frontend / Hosting:** Next.js on Vercel
- **Email Delivery Service:** Resend (already set up)
- **Bot Protection:** Cloudflare Turnstile (free tier)
- **Domain:** suniliyer.ca

---

## Form Fields

| Field   | Type     | Required | Notes                          |
|---------|----------|----------|--------------------------------|
| Name    | Text     | Yes      | Min 2 characters               |
| Email   | Email    | Yes      | Full validation (see below)    |
| Subject | Text     | Yes      | Min 5 characters               |
| Message | Textarea | Yes      | Min 20 characters              |

---

## Email Validation (3 Levels)

### Level 1 — Format Check
- Must follow the pattern: `something@something.something`
- Reject anything missing `@` or a valid domain suffix
- Reject emails with spaces, special characters in wrong places, or double dots

### Level 2 — Domain Blocklist
- Maintain a blocklist of known throwaway/fake domains, including but not limited to:
  - `test.com`, `example.com`, `fake.com`, `xxx.com`, `temp-mail.org`, `mailinator.com`, `guerrillamail.com`, `throwaway.email`, `yopmail.com`
- Reject any email whose domain matches the blocklist
- Display a user-friendly error: *"Please use a valid, non-disposable email address."*

### Level 3 — Domain Existence Check (Server-Side)
- On form submission, verify that the email domain has valid MX (mail exchange) DNS records
- If the domain has no MX records, reject the submission
- This check happens server-side in the Next.js API route, not in the browser

---

## Spam Prevention (4 Layers)

### Layer 1 — Honeypot Field
- Add a hidden form field (e.g., named "website" or "company") that is invisible to human users via CSS
- If this field contains any value on submission, silently reject the form
- Do not show an error — just pretend it succeeded (so bots don't adapt)

### Layer 2 — Rate Limiting
- Limit submissions to **3 per IP address per 15-minute window**
- Use Vercel's built-in edge middleware or headers (`x-forwarded-for`) to identify IP
- If rate limit is exceeded, show message: *"Too many submissions. Please try again later."*

### Layer 3 — Cloudflare Turnstile
- Embed Cloudflare Turnstile widget on the contact form page
- Requires signing up at Cloudflare dashboard and getting a site key + secret key
- Turnstile runs invisibly for most users (no puzzles)
- On form submission, send the Turnstile token to the API route for server-side verification
- If verification fails, reject the submission

### Layer 4 — Time-Based Check
- Record a timestamp when the form page loads
- On submission, check the elapsed time
- If the form was submitted in **under 3 seconds**, silently reject it (bots submit instantly)

---

## Email Delivery (Resend)

- The API route sends the email via Resend's API using the existing API key
- **From address:** `contact@suniliyer.ca` (or `noreply@suniliyer.ca`) — domain must be verified in Resend
- **To address:** Sunil's personal inbox
- **Email content should include:** sender's name, sender's email (as reply-to), subject, and message body
- **Reply-To header:** Set to the visitor's email so Sunil can reply directly from his inbox

---

## User Experience

### On Successful Submission
- Show a success message: *"Thanks for reaching out! I'll get back to you soon."*
- Clear/reset the form fields
- Disable the submit button briefly to prevent double-clicks

### On Validation Errors
- Display inline error messages beneath each field (not a single alert at the top)
- Validate on blur (when the user clicks away from a field) for instant feedback
- Validate again on submit as a safety net

### On Server/Delivery Error
- Show a friendly fallback message: *"Something went wrong. Please try again, or email me directly at [email]."*
- Log the error server-side for debugging

### Loading State
- Show a spinner or "Sending..." text on the submit button while the request is in progress
- Disable the button during submission to prevent duplicate sends

---

## Environment Variables Needed (Vercel Dashboard)

| Variable                    | Purpose                              |
|-----------------------------|--------------------------------------|
| `TURNSTILE_SITE_KEY`        | Cloudflare Turnstile (client-side)   |
| `TURNSTILE_SECRET_KEY`      | Cloudflare Turnstile (server-side)   |
| `RESEND_API_KEY`            | Authenticate with Resend API         |
| `CONTACT_EMAIL_TO`          | Sunil's inbox address                |
| `CONTACT_EMAIL_FROM`        | Verified sender address on Resend    |

> ✅ All environment variables have been added to the Vercel project dashboard.

---

## Pre-Implementation Checklist

- [ ] Verify `suniliyer.ca` domain in Resend dashboard (add DNS records)
- [ ] Sign up for Cloudflare Turnstile and get site key + secret key
- [x] ~~Add all environment variables to Vercel project settings~~ — Done
- [x] ~~Confirm which page the contact form will live on~~ — Homepage, under the **"Contact Me"** section

---

## Out of Scope (For Now)

- Email confirmation/auto-reply to the sender
- Storing form submissions in a database
- File attachments
- Multi-language support for form labels/errors
