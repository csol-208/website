# Berkeley Color Scheme Integration

This site uses Berkeley's complete official color palette from [identity.berkeley.edu](https://identity.berkeley.edu/visual-identity/color-palette/).

## Implementation Architecture

All Berkeley colors are defined in `assets/scss/material-kit/_variables.scss` and mapped to both:
1. **Direct color classes** (e.g., `.bg-berkeley-blue`, `.text-soybean`)
2. **Bootstrap theme mappings** (e.g., `$primary` → `$berkeley-blue`)

This provides the full Berkeley palette while maintaining Bootstrap compatibility.

## Available Berkeley Colors

### Primary Palette
- **Berkeley Blue** (#003262) → `$primary`, `.bg-berkeley-blue`
- **California Gold** (#FDB515) → `$secondary`, `.bg-california-gold`

### Secondary Palette
- **Founders Rock** (#4F758B) → `$info`, `.bg-founders-rock`
- **Medalist** (#C4820E) → `$warning`, `.bg-medalist`
- **Ion** (#C4D600) → `.bg-ion`
- **Soybean** (#D7D182) → `.bg-soybean`
- **South Hall** (#6C3302) → `.bg-south-hall`
- **Bay Fog** (#DDD5C7) → `.bg-bay-fog`
- **Lawrence** (#00B0DA) → `.bg-lawrence`
- **Lap Lane** (#00A598) → `.bg-lap-lane`
- **Sather Gate** (#B9D3B6) → `$success`, `.bg-sather-gate`
- **Pacific** (#46535E) → `.bg-pacific`
- **Stone Pine** (#584F29) → `.bg-stone-pine`
- **Grey** (#888B8D) → `.bg-grey`
- **Web Grey** (#EEEEEE) → `.bg-web-grey`

### Tertiary Palette (Future Games)
- **Rose Garden** (#EE1F60) → `.bg-rose-garden`
- **Golden Gate** (#ED4E33) → `$danger`, `.bg-golden-gate`
- **South Gate** (#FFB500) → `.bg-south-gate`
- **Blue and Gold** (#00416C) → `.bg-blue-and-gold`

### Module Colors (Course-Specific)
- **Oski Gold** (#A57327) - Module 1: The AI-Data Analyst
- **Tilden** (#005F61) - Module 2: The Climate Mapper  
- **Soybean** (#D7D182) - Module 3: The AI Researcher
- **Wellman Tile** (#D9661F) - Module 4: The Capstone Studio

## Berkeley Colors

### Primary Palette (Brand Foundation)
- **Berkeley Blue** (#003262) - Primary brand color
- **California Gold** (#FDB515) - Secondary brand color

### Secondary Palette (Module Colors)
The four course modules use Berkeley's secondary palette for visual distinction:

- **Oski Gold** (#A57327) - Module 1: The AI-Data Analyst
- **Tilden** (#005F61) - Module 2: The Climate Mapper  
- **Soybean** (#859438) - Module 3: The AI Researcher
- **Wellman Tile** (#D9661F) - Module 4: The Capstone Studio (named after 311 Wellman Hall!)

## Color Accessibility

Following Berkeley's [accessibility guidelines](https://identity.berkeley.edu/visual-identity/color-palette/), we ensure WCAG 2.0 Level AA compliance:

- **Contrast Ratio Requirements:**
  - Normal text: minimum 4.5:1
  - Large text (18px+ or 14px+ bold): minimum 3:1
  - UI components: minimum 3:1

- **Text Color Usage:**
  - **White text** (`text-white`) on dark backgrounds: Berkeley Blue, Oski Gold, Tilden, Soybean, Wellman Tile
  - **Dark text** on light backgrounds only
  - Test with [WebAim Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

All module colors (Oski Gold, Tilden, Soybean, Wellman Tile) require white text for proper accessibility.

### Additional Secondary Colors
- **Founders Rock** (#4F758B) - Blue-gray accent
- **Medalist** (#C4820E) - Bronze-gold accent

## What Changed

### SASS Variables (`assets/scss/material-kit/_variables.scss`)
- Updated `$primary` to Berkeley Blue (#003262)
- Updated `$secondary` to California Gold (#FDB515)
- Added module colors from Berkeley's secondary palette:
  - `$oski-gold` (#A57327) for Module 1
  - `$tilden` (#005F61) for Module 2
  - `$soybean` (#D7D182) for Module 3  
  - `$wellman-tile` (#D9661F) for Module 4
- Added all Berkeley colors to `$colors` map
- Added all Berkeley colors to `$theme-colors` map
- Updated gradient colors to use Berkeley color variations

### Available CSS Classes
The compiled CSS now includes Berkeley-branded classes:
- **Primary palette**: `.bg-berkeley-blue`, `.text-berkeley-blue`, `.bg-california-gold`, `.text-california-gold`
- **Module colors**: 
  - `.bg-oski-gold`, `.text-oski-gold` (Module 1)
  - `.bg-tilden`, `.text-tilden` (Module 2)
  - `.bg-soybean`, `.text-soybean` (Module 3)
  - `.bg-wellman-tile`, `.text-wellman-tile` (Module 4)
- **Additional**: `.bg-founders-rock`, `.text-founders-rock`, `.bg-medalist`, `.text-medalist`
- Standard theme colors: `.btn-primary` (Berkeley Blue), `.btn-secondary` (California Gold)

### Build Process
To recompile the SASS after making changes:

```bash
npm run build:css
```

Or watch for changes:
```bash
npm run watch:css
```

## HTML Files Updated
- `index.html` - Inline CSS removed, using compiled Berkeley colors
- `setup.html` - Inline CSS removed, using compiled Berkeley colors
- `policies.html` - Inline CSS removed, using compiled Berkeley colors
- `syllabus.html` - Should be updated to match

All HTML pages now use the Berkeley color scheme automatically through the compiled Material Kit CSS.
