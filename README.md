# Climate Solutions Course Website

This repository contains the course website for **AI-Augmented Data Science for Climate Leadership** at UC Berkeley.

## Overview

This site is built using [Eleventy (11ty)](https://www.11ty.dev/) static site generator with [Material Kit 3](https://www.creative-tim.com/product/material-kit) by Creative Tim. It uses the official [UC Berkeley Brand Colors](https://identity.berkeley.edu/visual-identity/color-palette/) for consistent branding and accessibility.

## Quick Start

### Installation

```bash
npm install
```

### Development

Build and serve the site locally with hot-reload:

```bash
npm start
```

Then navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

This compiles SASS and builds the static site to `_site/`

## Making Changes

### Editing Content

All page content is in the `src/` directory:

- **Homepage**: Edit [`src/index.html`](src/index.html)
- **Syllabus**: Edit [`src/syllabus.html`](src/syllabus.html)
- **Tech Setup**: Edit [`src/setup.html`](src/setup.html)
- **Policies**: Edit [`src/policies.html`](src/policies.html)

Each file has frontmatter at the top (between `---` markers) that specifies the layout and metadata. The content below the frontmatter is pure HTML.

### Editing Shared Components

The following components are shared across all pages in `src/_includes/`:

- **Navigation Bar**: Edit [`src/_includes/navbar.html`](src/_includes/navbar.html) - To add/remove nav items or change navigation
- **Footer**: Edit [`src/_includes/footer.html`](src/_includes/footer.html) - To update copyright or footer links
- **HTML Head**: Edit [`src/_includes/head.html`](src/_includes/head.html) - To add meta tags, fonts, or CSS
- **Scripts**: Edit [`src/_includes/scripts.html`](src/_includes/scripts.html) - To add JavaScript libraries

**Important**: Changes to these files will automatically apply to all pages that use the base layout.

### Editing Styles

Berkeley brand colors and styles are defined in:

- **SASS Variables**: [`assets/scss/material-kit/_variables.scss`](assets/scss/material-kit/_variables.scss) - Berkeley color palette, theme mappings
- **Color Documentation**: [`BERKELEY_COLORS.md`](BERKELEY_COLORS.md) - Complete color reference with accessibility guidelines

After editing SASS files, rebuild CSS:

```bash
npm run build:css
```

### Adding New Pages

1. Create a new file in `src/` (e.g., `src/newpage.html`)
2. Add frontmatter:
   ```yaml
   ---
   layout: base.html
   title: Page Title
   permalink: /newpage.html
   ---
   ```
3. Add your content below the frontmatter
4. Add a link to the page in [`src/_includes/navbar.html`](src/_includes/navbar.html)
5. Run `npm run build` to generate the page

### Adding Images

Place images in the `images/` directory and reference them as `./images/filename.jpg` in your HTML.

## Project Structure

```
.
├── src/                    # Source files (edit these)
│   ├── _includes/          # Reusable components
│   │   ├── navbar.html     # Navigation bar (shared)
│   │   ├── footer.html     # Footer (shared)
│   │   ├── head.html       # <head> section (shared)
│   │   └── scripts.html    # JavaScript includes (shared)
│   ├── _layouts/           # Page layouts
│   │   └── base.html       # Base layout template
│   ├── index.html          # Homepage content
│   ├── syllabus.html       # Syllabus content
│   ├── setup.html          # Tech setup content
│   └── policies.html       # Policies content
├── assets/                 # Styles and scripts
│   ├── css/                # Compiled CSS (auto-generated)
│   ├── scss/               # SASS source files
│   └── js/                 # JavaScript files
├── images/                 # Image assets
├── _site/                  # Built site (auto-generated, ignored by git)
├── .eleventy.js            # Eleventy configuration
├── package.json            # Node.js dependencies and scripts
└── README.md               # This file
```

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch. The GitHub Actions workflow (`.github/workflows/static.yml`) handles:

1. Installing Node.js and dependencies
2. Building CSS from SASS
3. Building HTML with Eleventy
4. Deploying the `_site/` directory to GitHub Pages

## Color Palette

This site uses the official UC Berkeley brand colors for consistency and accessibility:

- **Berkeley Blue** (#003262) - Primary brand color
- **California Gold** (#FDB515) - Secondary brand color
- **Module Colors**: Oski Gold, Tilden, Soybean, Wellman Tile (from Berkeley secondary palette)

See [`BERKELEY_COLORS.md`](BERKELEY_COLORS.md) for complete color documentation and accessibility guidelines.

## Version History

- **v1.0-pre-eleventy**: Last version before Eleventy migration (tagged for reference)
- **Current**: Eleventy-based templated site with modular components

## Credits

- Built with [Eleventy](https://www.11ty.dev/) static site generator
- Design based on [Material Kit 3](https://www.creative-tim.com/product/material-kit) by Creative Tim
- Styled with [UC Berkeley Brand Colors](https://identity.berkeley.edu/visual-identity/color-palette/)
- Course designed by UC Berkeley
