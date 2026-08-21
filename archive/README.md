# Archived course sites

Each subdirectory here is a static snapshot of the CSOL-208 site as it stood at the
end of a given offering. Eleventy copies `archive/` to `_site/previous/`, so
`archive/spring-2026/` is served at `/previous/spring-2026/`.

Snapshots are mostly HTML. They reference the shared `../../assets/` and
`../../images/` directories rather than carrying their own copies, and each page
carries an "Archived" banner plus `robots: noindex`.

The exception is an image that belongs only to a past offering, such as a former
GSI's headshot: move the file into the snapshot directory and repoint that page at
it locally, so the live site stops shipping it.

The matching source tree for each snapshot is available under the git tag of the
same name (e.g. `git show spring-2026`).

## Creating a new snapshot

Before editing the site for a new term, from a clean checkout of the outgoing term:

```bash
git tag -a <term>-<year> -m "CSOL-208 course site as delivered, <Term> <Year>"
npm run build
mkdir -p archive/<term>-<year>
cp _site/*.html archive/<term>-<year>/
```

Then, in the copied files: rewrite `./assets/` and `./images/` to `../../assets/`
and `../../images/`, add the archived banner after `<body>`, and add
`<meta name="robots" content="noindex, follow">` plus an `[<Term> <Year> archive]`
title prefix. Finally, point the footer's "Previous years" link at the new snapshot.
