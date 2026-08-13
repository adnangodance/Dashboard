# Vial preview `<canvas>`: functions and rendering flow

The `<canvas className="manual-vial-art" />` shown in DevTools belongs to the `ManualVialPreview` React component in `src/app/App.tsx`. It is not using a charting, 3D, or canvas library. It uses React lifecycle hooks plus the browser's native **Canvas 2D API** to draw a dynamic medicine label over a blank vial PNG.

## What is layered on screen

1. `blank-vial-reference.png` (or the `baseImage` prop) supplies the vial photograph.
2. `.manual-vial-label` positions and clips a transparent label region over the vial.
3. `.manual-vial-art` fills that region and contains the generated product name, strength, color band, and geometric mark.

The relevant layout styles are in `src/styles/index.css` under `.manual-vial-preview`, `.manual-vial-label`, `.manual-vial-art`, and `.manual-vial-preview-compact`.

## Component inputs

`ManualVialPreview` accepts:

| Prop | Purpose |
| --- | --- |
| `name` | Product name drawn in uppercase; long names may be split over two lines. |
| `strength` | Dosage text drawn inside the colored band. |
| `size` | Used in the accessible label on the wrapper; it is not painted onto the canvas. |
| `palette.primary` | Band and geometric-mark color; defaults to `#8E7AD9`. |
| `palette.foreground` | Strength text color; defaults to white. |
| `baseImage` | Vial image beneath the canvas; defaults to `blankVialReference`. |
| `compact` | Changes pixel density, typography sizing, and small stroke/scale adjustments. |

## Functions behind the canvas

### `ManualVialPreview(...)`

The React component that prepares line breaks, owns the canvas ref, installs redraw listeners, and renders the vial/image/canvas layers.

Before drawing, it finds spaces or `/` characters in names longer than 16 characters. A small scoring calculation selects the most balanced two-line break and produces `firstLine` and `secondLine`.

### `useRef<HTMLCanvasElement>(null)`

Stores the actual canvas DOM node in `labelCanvasRef`, allowing the drawing effect to access it after React renders.

### `useEffect(...)`

Owns the complete drawing lifecycle. It redraws when `firstLine`, `secondLine`, `strength`, `palette`, or `compact` changes, and removes observers/listeners during cleanup.

### `drawLabel()`

The main renderer. It performs these steps:

1. Reads the canvas's CSS size with `getBoundingClientRect()`.
2. Multiplies that size by `window.devicePixelRatio` (with compact/non-compact limits) for a sharp high-density bitmap.
3. Creates a temporary off-screen canvas with `document.createElement("canvas")`.
4. Draws the flat label artwork onto the temporary canvas.
5. Copies narrow vertical slices to the visible canvas with a sine-based horizontal transform and a slight vertical curve, making the label look wrapped around a cylindrical vial.

### `fitFont(text, maxWidth, maximum, minimum)`

A helper nested inside `drawLabel`. It uses `measureText()` to find the width of uppercase text, scales the requested font size down until it fits, and clamps the result to the supplied minimum and maximum.

### `scheduleDraw()`

Cancels any queued animation frame and schedules one new `drawLabel` call with `requestAnimationFrame()`. This coalesces rapid resize/font/density events into a single browser paint cycle.

### `handleDensityChange()`

Rebuilds a `matchMedia("(resolution: ...dppx)")` listener whenever display density changes, then schedules a redraw. This keeps the result sharp when the browser window moves between monitors with different pixel densities.

## Canvas 2D APIs being used

| API | Role |
| --- | --- |
| `getContext("2d")` | Obtains drawing contexts for the temporary and visible canvases. |
| `clearRect()` | Clears old pixels before every redraw. |
| `measureText()` | Measures the name and strength so each fits its allotted width. |
| `fillText()` | Paints uppercase name and strength text. |
| `strokeText()` | Used with compositing to lightly cut into text edges for the printed-label appearance. |
| `fillRect()` | Paints the colored dosage band and its six-piece geometric end mark. |
| `save()` / `restore()` | Contains temporary transforms and compositing settings. |
| `translate()` / `scale()` | Positions and vertically stretches the condensed display type. |
| `globalAlpha` | Slightly softens the product-name ink. |
| `globalCompositeOperation` | Switches to `destination-out` for the text-edge cutout, then back to `source-over`. |
| `drawImage()` | Warps the temporary flat label onto the visible canvas one vertical slice at a time. |
| `imageSmoothingEnabled` / `imageSmoothingQuality` | Requests high-quality resampling during the curved slice copy. |

The curvature is created using `Math.sin()` rather than a WebGL shader. Each source x-coordinate is normalized from `-1` to `1`; its destination x-coordinate follows a sine curve. `centerAmount = 1 - normalizedX²` supplies the small vertical offset and scale change toward the label center.

## What causes a redraw

- A product name, strength, palette, or compact-mode change.
- A size change detected by `ResizeObserver`.
- A browser/window resize.
- A device-pixel-ratio change detected by `matchMedia`.
- Completion of `document.fonts.load(...)` for **Bebas Neue**.

## Related browser and React features

- `ResizeObserver` watches the rendered canvas dimensions.
- `requestAnimationFrame` schedules rendering efficiently.
- `matchMedia` watches display-density changes.
- `document.fonts.load` ensures the intended font is available before the final redraw.
- The wrapper has `role="img"` and an `aria-label`; the decorative image and canvas are hidden from assistive technology to avoid duplicate announcements.

## Source locations

- Component and renderer: `src/app/App.tsx`, function `ManualVialPreview`
- Palette type: `src/app/App.tsx`, type `VialPalette`
- Canvas positioning and sizing: `src/styles/index.css`
- Font declaration: `src/styles/fonts.css`
- Default vial image: `src/assets/blank-vial-reference.png`

