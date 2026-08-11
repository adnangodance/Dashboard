from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parent
SOURCE = Path("/var/folders/_h/m6y0lhks57jdf9zc0rf6069r0000gn/T/codex-clipboard-9b858dcb-1433-41a3-ae59-57c29ea10e25.png")
PALETTE = Path("/var/folders/_h/m6y0lhks57jdf9zc0rf6069r0000gn/T/codex-clipboard-c05e0675-bf59-489f-bfec-6338477e5de2.png")
OUTPUT = ROOT / "product-mockups" / "001-tirzepatide-pyridoxine-b6.png"
FONT = "/System/Library/Fonts/Supplemental/DIN Condensed Bold.ttf"


def main():
    image = Image.open(SOURCE).convert("RGBA")
    palette = Image.open(PALETTE).convert("RGB")

    # First supplied swatch: sample its center to avoid rounded-edge antialiasing.
    target = palette.getpixel((369, 305))
    source = image.copy()
    source_pixels = source.load()
    pixels = image.load()

    def purple(pixel):
        r, g, b, _ = pixel
        return b > r * 1.10 and b > g * 1.04 and b > 85

    # Rebuild the original main-band silhouette column by column. Filling the
    # silhouette also removes the old dosage without creating a rectangular patch.
    for x in range(592, 1481):
        ys = [y for y in range(1895, 2190) if purple(source_pixels[x, y])]
        if ys:
            for y in range(min(ys), max(ys) + 1):
                pixels[x, y] = target + (255,)

    # Recolor the separate geometric mark while preserving all intentional gaps.
    for y in range(1895, 2190):
        for x in range(1481, 1665):
            if purple(source_pixels[x, y]):
                pixels[x, y] = target + (source_pixels[x, y][3],)

    draw = ImageDraw.Draw(image)

    strength = "10MG/2MG/ML"
    font = ImageFont.truetype(FONT, 112)
    bbox = draw.textbbox((0, 0), strength, font=font)
    y = 2050 - (bbox[3] - bbox[1]) // 2 - bbox[1]
    draw.text((656, y), strength, font=font, fill=(255, 255, 255, 255))

    OUTPUT.parent.mkdir(exist_ok=True)
    image.save(OUTPUT, "PNG")
    print(OUTPUT)


if __name__ == "__main__":
    main()
