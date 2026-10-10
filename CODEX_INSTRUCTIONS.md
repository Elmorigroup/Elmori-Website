# Elmori Website — Codex Instructions

## Status
This document is the persistent implementation brief for the Elmori website.

The current visual reference is **not a pixel-perfect final design**. It is a layout/composition direction that must be refined while preserving the approved Elmori visual language.

---

## 1. Locked brand assets

### Official Elmori logo
The official Elmori logo supplied by the owner is LOCKED.

Use the exact supplied artwork everywhere the logo appears.

Never:
- redraw or retype the logo;
- approximate it with a font;
- change letterforms, stroke weight, spacing, proportions, curves or internal geometry;
- stretch, squash, skew, trace, simplify or reconstruct it;
- invent alternate Elmori marks;
- scatter decorative or fake Elmori wordmarks across images.

If the exact logo asset is not available for a placement, use a neutral placeholder until the official file is supplied. Do not fake the logo.

### Primary Elmori character
Use the supplied **Elmori character reference sheet** as the primary identity reference.

Keep:
- the same face identity;
- long warm-brown wavy hair;
- professional black tailored blazer/skirt styling;
- simple black or ivory top;
- subtle gold accessories;
- natural, confident, approachable expression;
- realistic premium appearance.

Do not replace her with a generic AI woman and do not significantly alter facial identity.

---

## 2. Global visual direction

Palette:
- black;
- white / ivory;
- warm gold / bronze.

Tone:
- premium;
- modern;
- minimal;
- refined;
- professional;
- natural, not synthetic.

All normal website headings, paragraphs, navigation labels, service names, buttons and footer copy must be LIVE HTML TEXT whenever possible.

Do not rasterize normal UI text into images.

---

## 3. Reusable top hero system — IMPORTANT

The large top content block must become a **reusable fixed-shape hero component** across the website.

The geometry, proportions, clipping contour, text area and image area should remain consistent from page to page.

Only the CONTENT changes.

Examples:
- Home: Elmori brand/character image + Home headline/copy.
- Business Cards: business-card image + business-card headline/copy.
- Flyers: flyer image + flyer headline/copy.
- Roll-Ups: roll-up image + roll-up headline/copy.
- Logo Design: logo-design relevant image + related copy.
- Motion: motion/creative-video relevant visual + related copy.
- Print: print-production relevant visual + related copy.

### Hero shape correction
The current reference has a lower-left image cut/protrusion that feels accidental and visually meaningless.

Fix it:
- clean the contour;
- keep the image inside the intended clipping shape;
- remove the awkward outward bump;
- make the transition into the page clean, intentional and elegant;
- no image fragment should stick outside the shape without a clear design reason.

The component should look designed, not like a rough mask.

---

## 4. Home page structure

Use the current reference as the main composition direction and refine it rather than copying defects.

Target structure:
1. Header / navigation
2. Reusable Home hero
3. Our Services
   - Business Cards
   - Flyers
   - Roll-Ups
   - Logo Design
4. Our Process
5. Selected Work
6. Ready Templates & Custom Design
7. Footer ribbon

Improve:
- spacing;
- visual rhythm;
- section proportions;
- typography hierarchy;
- alignment;
- consistency between cards and sections;
- image cropping;
- responsive behavior.

Do not redesign the entire page into a different visual system.

---

## 5. Mockups and imagery

The reference image contains several inaccurate / fake Elmori marks.

Correct them.

Rules:
- remove stray Elmori words floating inside the hero scene;
- replace incorrect visible Elmori marks on products/mockups with the exact official logo when practical;
- do not generate fake Chinese-like, distorted or unreadable brand text;
- mockups should look realistic and premium;
- avoid low-resolution text and artifacts.

---

## 6. Footer ribbon

The footer is an Elmori signature element.

Requirements:
- fixed to the bottom of the viewport when appropriate;
- slim and refined, not bulky;
- ribbon-like, not a generic rectangle;
- asymmetric / angled silhouette;
- approximately 20-degree visual diagonal character based on the approved direction;
- clean clipped edges;
- no accidental protrusions outside the intended contour;
- black primary body with restrained warm-gold / ivory accents;
- all normal footer copy must remain live HTML text;
- CTA is a real button/link, not baked into an image.

Do not flatten the footer into a plain horizontal bar.

---

## 7. Content integrity

Do not invent:
- phone numbers;
- emails;
- addresses;
- prices;
- testimonials;
- client names;
- awards;
- statistics;
- claims.

Use `TBD` for anything not confirmed by the owner.

Brand line:
**From Design to Print.**

Primary domain:
**elmori.ca**

---

## 8. Implementation rules

- Build a lightweight responsive website.
- Prefer reusable components.
- The hero must be one reusable component with page-specific content/data.
- Fix only the areas that need refinement; do not change locked brand assets.
- Desktop, tablet and mobile must preserve the design character.
- Keep the site maintainable so future service pages can reuse the same system.

---

## 9. Reference priority

When references conflict, use this priority:

1. Official Elmori logo file — absolute source of truth for logo geometry.
2. Elmori primary character reference sheet — source of truth for character identity.
3. Owner-marked correction image — source of truth for specific corrections.
4. Current Home layout reference — composition/layout direction only.
5. Older V11 material — secondary reference, not a final pixel-perfect target.

Do not infer brand geometry from AI-generated mockups.
