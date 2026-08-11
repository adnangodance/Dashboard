from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parent
SOURCE = Path("/var/folders/_h/m6y0lhks57jdf9zc0rf6069r0000gn/T/codex-clipboard-e8813d85-c4de-4a52-aab3-b26ce5193722.png")
OUTPUT = ROOT / "product-mockups" / "003-retatrutide.png"
FONT = "/System/Library/Fonts/Supplemental/DIN Condensed Bold.ttf"


def compressed_text(text, size, target_width, color):
    font = ImageFont.truetype(FONT, size)
    box = font.getbbox(text)
    mask = Image.new("L", (box[2] + 6, box[3] - box[1] + 6), 0)
    ImageDraw.Draw(mask).text((2, 2 - box[1]), text, font=font, fill=255)
    mask = mask.resize((target_width, mask.height), Image.Resampling.LANCZOS)
    ink = Image.new("RGBA", mask.size, color)
    ink.putalpha(mask)
    return ink


def main():
    image = Image.open(SOURCE).convert("RGBA")
    source = image.copy()
    src = source.load()
    dst = image.load()

    # Add pale-yellow liquid only in the visible glass above and below the label.
    liquid = Image.new("RGBA", image.size, (0, 0, 0, 0))
    ld = ImageDraw.Draw(liquid)
    ld.rounded_rectangle((103, 181, 340, 215), radius=15, fill=(224, 202, 128, 46))
    ld.ellipse((104, 178, 339, 194), fill=(235, 218, 158, 56), outline=(155, 132, 68, 55), width=1)
    ld.rounded_rectangle((103, 456, 340, 507), radius=18, fill=(224, 202, 128, 42))
    image = Image.alpha_composite(image, liquid)
    dst = image.load()

    # Clean the original one-line product name with the label's own horizontal tone.
    for x in range(105, 337):
        samples = [src[x, y][:3] for y in range(346, 358)]
        base = tuple(sum(p[i] for p in samples) // len(samples) for i in range(3))
        for y in range(271, 350):
            dst[x, y] = base + (src[x, y][3],)

    # Clean the original strength while preserving the existing mint gradient.
    for x in range(111, 211):
        base = src[x, 414][:3]
        for y in range(379, 410):
            dst[x, y] = base + (src[x, y][3],)

    del dst
    text_layer = Image.new("RGBA", image.size, (0, 0, 0, 0))
    name_art = compressed_text("RETATRUTIDE", 68, 204, (5, 5, 5, 255))
    text_layer.alpha_composite(name_art, (114, 286))

    strength_art = compressed_text("16MG/ML", 31, 78, (206, 255, 208, 255))
    text_layer.alpha_composite(strength_art, (116, 384))
    image = Image.alpha_composite(image, text_layer)

    image.save(OUTPUT, "PNG")
    print(OUTPUT)


if __name__ == "__main__":
    main()
