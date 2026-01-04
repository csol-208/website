# Course Website - Eleventy Build System

This site uses [Eleventy](https://www.11ty.dev/) for static site generation with shared templates.

## Project Structure

```
website/
├── src/                    # Source files
│   ├── _includes/         # Reusable components (navbar, footer, etc.)
│   ├── _layouts/          # Page layouts
│   ├── index.html         # Home page
│   ├── syllabus.html      # Course syllabus
│   ├── setup.html         # Tech setup guide
│   └── policies.html      # Course policies
├── assets/                # CSS, JS, fonts (copied as-is)
├── images/                # Images (copied as-is)
├── _site/                 # Generated output (gitignored)
└── .eleventy.js          # Eleventy configuration

```

## Development

### Install Dependencies
```bash
npm install
```

### Build Commands

```bash
# Build everything (CSS + HTML)
npm run build

# Build CSS only
npm run build:css

# Build HTML only  
npm run build:html

# Build and serve with live reload
npm start
```

### Working with Templates

All HTML pages use the `base.html` layout which includes:
- `head.html` - Meta tags, CSS links
- `navbar.html` - Navigation (single source of truth!)
- `footer.html` - Footer content
- `scripts.html` - JS includes

#### To edit the navbar:
Edit `src/_includes/navbar.html` once - changes apply to all pages automatically.

#### To create a new page:
1. Create `src/newpage.html`
2. Add frontmatter:
   ```yaml
   ---
   layout: base.html
   title: Page Title
   permalink: /newpage.html
   ---
   ```
3. Add your content (no need for <html>, <head>, navbar, or footer)
4. Run `npm run build`

## Deployment

The `_site/` directory contains the built site. Deploy this folder to your web server or hosting platform.

For GitHub Pages, you can:
1. Deploy `_site/` directly, or
2. Set up GitHub Actions to build on push

## Why Eleventy?

- **Non-prescriptive:** Works with our existing HTML structure
- **Fast:** Builds in ~0.1 seconds
- **Simple:** Nunjucks templating is straightforward
- **No forced conventions:** We keep our Material Kit assets exactly as-is
- **Easy maintenance:** Edit navbar once, applies everywhere
