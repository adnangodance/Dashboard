from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parent
SOURCE = Path("/var/folders/_h/m6y0lhks57jdf9zc0rf6069r0000gn/T/codex-clipboard-e8813d85-c4de-4a52-aab3-b26ce5193722.png")
PALETTE = Path("/var/folders/_h/m6y0lhks57jdf9zc0rf6069r0000gn/T/codex-clipboard-c05e0675-bf59-489f-bfec-6338477e5de2.png")
OUTPUT = ROOT / "product-mockups" / "004-tirzepatide-cyanocobalamin-b12.png"
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

    # Same pale-yellow liquid treatment as the approved compact mockup.
    liquid = Image.new("RGBA", image.size, (0, 0, 0, 0))
    ld = ImageDraw.Draw(liquid)
    ld.rounded_rectangle((103, 181, 340, 215), radius=15, fill=(224, 202, 128, 46))
    ld.ellipse((104, 178, 339, 194), fill=(235, 218, 158, 56), outline=(155, 132, 68, 55), width=1)
    ld.rounded_rectangle((103, 456, 340, 507), radius=18, fill=(224, 202, 128, 42))
    image = Image.alpha_composite(image, liquid)
    dst = image.load()

    # Clear the original product name using the label's own blank tone.
    for x in range(105, 337):
        samples = [src[x, y][:3] for y in range(346, 358)]
        base = tuple(sum(p[i] for p in samples) // len(samples) for i in range(3))
        for y in range(238, 356):
            dst[x, y] = base + (src[x, y][3],)

    # Orange swatch from the supplied palette.
    palette = Image.open(PALETTE).convert("RGB")
    orange = palette.getpixel((1287, 305))

    # Rebuild the original compact band silhouette, then preserve its fixed mark.
    draw = ImageDraw.Draw(image)
    draw.polygon([(104, 364), (315, 369), (315, 432), (104, 428)], fill=orange + (255,))
    draw.rectangle((318, 367, 324, 398), fill=orange + (255,))
    draw.rectangle((318, 405, 324, 424), fill=orange + (255,))
    draw.rectangle((327, 366, 333, 405), fill=orange + (255,))
    draw.rectangle((327, 412, 333, 424), fill=orange + (255,))
    draw.rectangle((336, 366, 340, 397), fill=orange + (255,))
    draw.rectangle((336, 404, 340, 423), fill=orange + (255,))

    del dst
    text_layer = Image.new("RGBA", image.size, (0, 0, 0, 0))
    line_1 = compressed_text("TIRZEPATIDE/", 68, 205, (5, 5, 5, 255))
    line_2 = compressed_text("CYANOCOBALAMIN (B12)", 68, 220, (5, 5, 5, 255))
    text_layer.alpha_composite(line_1, (113, 244))
    text_layer.alpha_composite(line_2, (108, 299))

    strength = compressed_text("15MG/1MG/0.5ML", 31, 137, (255, 255, 255, 255))
    text_layer.alpha_composite(strength, (116, 384))
    image = Image.alpha_composite(image, text_layer)

    image.save(OUTPUT, "PNG")
    print(OUTPUT)


if __name__ == "__main__":
    main()
