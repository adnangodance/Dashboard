from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parent
SOURCE = Path("/var/folders/_h/m6y0lhks57jdf9zc0rf6069r0000gn/T/codex-clipboard-9b858dcb-1433-41a3-ae59-57c29ea10e25.png")
PALETTE = Path("/var/folders/_h/m6y0lhks57jdf9zc0rf6069r0000gn/T/codex-clipboard-c05e0675-bf59-489f-bfec-6338477e5de2.png")
OUTPUT = ROOT / "product-mockups" / "004-tirzepatide-cyanocobalamin-b12.png"
FONT = "/System/Library/Fonts/Supplemental/DIN Condensed Bold.ttf"


def compressed_text(text, size, target_width, color):
    font = ImageFont.truetype(FONT, size)
    box = font.getbbox(text)
    mask = Image.new("L", (box[2] + 12, box[3] - box[1] + 12), 0)
    ImageDraw.Draw(mask).text((6, 6 - box[1]), text, font=font, fill=255)
    mask = mask.resize((target_width, mask.height), Image.Resampling.LANCZOS)
    ink = Image.new("RGBA", mask.size, color)
    ink.putalpha(mask)
    return ink


def main():
    image = Image.open(SOURCE).convert("RGBA")
    source = image.copy()
    src = source.load()
    dst = image.load()

    # Remove only the second product-name line; the exact original first line stays.
    for x in range(615, 1655):
        samples = [src[x, y][:3] for y in range(1835, 1892)]
        base = tuple(sum(p[i] for p in samples) // len(samples) for i in range(3))
        for y in range(1538, 1835):
            edge = min(1.0, (y - 1538) / 18, (1835 - y) / 18)
            old = src[x, y]
            color = tuple(round(old[i] * (1 - edge) + base[i] * edge) for i in range(3))
            dst[x, y] = color + (old[3],)

    # Orange from the uploaded palette.
    palette = Image.open(PALETTE).convert("RGB")
    orange = palette.getpixel((1287, 305))

    def purple(pixel):
        r, g, b, _ = pixel
        return b > r * 1.10 and b > g * 1.04 and b > 85

    # Rebuild the original curved band silhouette and remove the former dosage.
    for x in range(592, 1481):
        ys = [y for y in range(1895, 2190) if purple(src[x, y])]
        if ys:
            for y in range(min(ys), max(ys) + 1):
                dst[x, y] = orange + (255,)

    # Recolor the fixed geometric mark without changing its shape.
    for y in range(1895, 2190):
        for x in range(1481, 1665):
            if purple(src[x, y]):
                dst[x, y] = orange + (src[x, y][3],)

    del dst
    text_layer = Image.new("RGBA", image.size, (0, 0, 0, 0))

    second_line = compressed_text("CYANOCOBALAMIN (B12)", 280, 1000, (5, 5, 5, 255))
    text_layer.alpha_composite(second_line, (630, 1570))

    strength = compressed_text("15MG/1MG/0.5ML", 112, 510, (255, 255, 255, 255))
    text_layer.alpha_composite(strength, (656, 1997))

    image = Image.alpha_composite(image, text_layer)
    image.save(OUTPUT, "PNG")
    print(OUTPUT)


if __name__ == "__main__":
    main()
