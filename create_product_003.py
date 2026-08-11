from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parent
SOURCE = Path("/var/folders/_h/m6y0lhks57jdf9zc0rf6069r0000gn/T/codex-clipboard-9b858dcb-1433-41a3-ae59-57c29ea10e25.png")
OUTPUT = ROOT / "product-mockups" / "003-retatrutide.png"
FONT = "/System/Library/Fonts/Supplemental/DIN Condensed Bold.ttf"
LEFT = (89, 167, 164)
RIGHT = (181, 244, 184)


def mix(a, b, t):
    return tuple(round(a[i] * (1 - t) + b[i] * t) for i in range(3))


def main():
    image = Image.open(SOURCE).convert("RGBA")
    source = image.copy()
    src = source.load()

    # Rebuild the complete label face inside its original rounded boundary.
    # This removes the prior copy without introducing an inset rectangle or seam.
    label_layer = Image.new("RGBA", image.size, (0, 0, 0, 0))
    label_pixels = label_layer.load()
    for x in range(578, 1668):
        distance = abs(x - 1123) / 545
        shade = round(250 - 6 * distance * distance)
        for y in range(1108, 2332):
            vertical = 1 if y < 1160 or y > 2280 else 0
            label_pixels[x, y] = (shade - vertical, shade - vertical, shade - vertical, 255)
    label_mask = Image.new("L", image.size, 0)
    ImageDraw.Draw(label_mask).rounded_rectangle((578, 1108, 1668, 2332), radius=48, fill=255)
    label_mask = label_mask.filter(ImageFilter.GaussianBlur(1.2))
    label_layer.putalpha(label_mask)
    image = Image.alpha_composite(image, label_layer)

    def purple(pixel):
        r, g, b, _ = pixel
        return b > r * 1.10 and b > g * 1.04 and b > 85

    # Rebuild the band with a supersampled curved mask for clean antialiased edges.
    scale = 4
    mask_large = Image.new("L", image.size, 0).resize((image.width * scale, image.height * scale))
    md = ImageDraw.Draw(mask_large)
    points = [
        (592, 1909), (650, 1917), (750, 1928), (900, 1936),
        (1060, 1940), (1220, 1938), (1380, 1935), (1480, 1928),
        (1480, 2167), (1380, 2174), (1220, 2178), (1060, 2180),
        (900, 2176), (750, 2167), (650, 2158), (592, 2151),
    ]
    md.polygon([(x * scale, y * scale) for x, y in points], fill=255)
    mask = mask_large.resize(image.size, Image.Resampling.LANCZOS)
    band_layer = Image.new("RGBA", image.size, (0, 0, 0, 0))
    band_pixels = band_layer.load()
    for x in range(588, 1485):
        color = mix(LEFT, RIGHT, max(0, min(1, (x - 592) / (1480 - 592))))
        for y in range(1890, 2195):
            alpha = mask.getpixel((x, y))
            if alpha:
                band_pixels[x, y] = color + (alpha,)
    image = Image.alpha_composite(image, band_layer)
    dst = image.load()

    for y in range(1895, 2190):
        for x in range(1481, 1665):
            if purple(src[x, y]):
                dst[x, y] = RIGHT + (src[x, y][3],)

    draw = ImageDraw.Draw(image)
    product = "RETATRUTIDE"
    product_font = ImageFont.truetype(FONT, 218)
    while draw.textbbox((0, 0), product, font=product_font)[2] > 960:
        product_font = ImageFont.truetype(FONT, product_font.size - 2)
    box = draw.textbbox((0, 0), product, font=product_font)
    product_y = 1580 - (box[3] - box[1]) // 2 - box[1]
    draw.text((650, product_y), product, font=product_font, fill=(0, 0, 0, 255))

    strength = "16MG/ML"
    strength_font = ImageFont.truetype(FONT, 112)
    box = draw.textbbox((0, 0), strength, font=strength_font)
    strength_y = 2050 - (box[3] - box[1]) // 2 - box[1]
    draw.text((656, strength_y), strength, font=strength_font, fill=(255, 255, 255, 255))

    OUTPUT.parent.mkdir(exist_ok=True)
    image.save(OUTPUT, "PNG")
    print(OUTPUT)


if __name__ == "__main__":
    main()
