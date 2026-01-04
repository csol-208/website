# Berkeley Color Scheme Integration

The Material Kit SASS source has been updated to use Berkeley's official color palette:

## Berkeley Colors
- **Berkeley Blue** (#003262) - Primary color
- **California Gold** (#FDB515) - Secondary color  
- **Founders Rock** (#3B7EA1) - Info color
- **Medalist** (#C4820E) - Warning color

## What Changed

### SASS Variables (`assets/scss/material-kit/_variables.scss`)
- Updated `$primary` to Berkeley Blue
- Updated `$secondary` to California Gold
- Updated `$info` to Founders Rock
- Updated `$warning` to Medalist
- Added Berkeley colors to `$colors` map
- Added Berkeley colors to `$theme-colors` map
- Updated gradient colors to use Berkeley color variations

### Available CSS Classes
The compiled CSS now includes Berkeley-branded classes:
- `.bg-berkeley-blue`, `.text-berkeley-blue`
- `.bg-california-gold`, `.text-california-gold`
- `.bg-founders-rock`, `.text-founders-rock`
- `.bg-medalist`, `.text-medalist`
- `.btn-primary` (now Berkeley Blue)
- `.btn-secondary` (now California Gold)
- `.btn-info` (now Founders Rock)

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
