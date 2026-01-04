# Berkeley Color Scheme Integration

The Material Kit SASS source has been updated to use Berkeley's official color palette from the primary and secondary palettes.

## Berkeley Colors

### Primary Palette (Brand Foundation)
- **Berkeley Blue** (#003262) - Primary brand color
- **California Gold** (#FDB515) - Secondary brand color

### Secondary Palette (Module Colors)
The four course modules use Berkeley's secondary palette for visual distinction:

- **Oski Gold** (#A57327) - Module 1: The AI-Data Analyst
- **Tilden** (#005F61) - Module 2: The Climate Mapper  
- **Stone Pine** (#584F29) - Module 3: The AI Researcher
- **Wellman Tile** (#D9661F) - Module 4: The Capstone Studio (named after 311 Wellman Hall!)

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
  - `$stone-pine` (#584F29) for Module 3  
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
  - `.bg-stone-pine`, `.text-stone-pine` (Module 3)
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
