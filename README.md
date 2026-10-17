# Wei Chen @ SZTU

Static academic website for Wei Chen and the research group at Shenzhen Technology University.

## Pages

- `index.html`: profile, research interests, news, and activities.
- `research.html`: research directions.
- `team.html`: team members; update the date when changing the roster.
- `publication.html`: publications in reverse chronological order.
- `cv.html`: contact information and academic CV.

## Maintenance

Edit the HTML files directly. Shared typography, spacing, navigation, and responsive styles are in `styles.css`. Keep the existing Georgia font, font sizes, and page structure when adding content. No build step is required.

Store images in `image/` and match filename capitalization exactly: GitHub Pages paths are case-sensitive. Include descriptive `alt` text. For publications, retain the author list and use a complete `https://doi.org/10.…` link. Verify publication metadata against the publisher before making factual changes.

Each page includes its own title, description, canonical URL, and social sharing metadata. The social preview uses the existing portrait. If the domain changes, update these URLs on all five pages.

The publication page has year headings (`year-YYYY`), a year index, and return links to `publication-top`. When adding papers, keep the year index synchronized with the headings and place each paper under its publication year. Preserve existing titles and author lists. Every page has a keyboard-accessible skip link and one visually hidden page-level heading; keep these when editing layouts.

To publish on GitHub Pages, place these site files at the root of the configured publishing source, or configure the selected source folder accordingly. Preview locally and check all five pages on desktop and mobile before publishing.
