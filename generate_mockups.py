from pathlib import Path
import csv
import io
import re

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parent
TEMPLATE = Path("/var/folders/_h/m6y0lhks57jdf9zc0rf6069r0000gn/T/codex-clipboard-9b858dcb-1433-41a3-ae59-57c29ea10e25.png")
PALETTE = Path("/var/folders/_h/m6y0lhks57jdf9zc0rf6069r0000gn/T/codex-clipboard-c05e0675-bf59-489f-bfec-6338477e5de2.png")
OUT = ROOT / "product-mockups"
FONT = "/System/Library/Fonts/Supplemental/DIN Condensed Bold.ttf"


DATA = r'''1|Tirzepatide/Pyridoxine (B6)|10mg/2mg/mL
2|Semaglutide/Pyridoxine (B6)|2.5mg/2mg/mL
3|Retatrutide|16mg/mL
4|Tirzepatide/Cyanocobalamin (B12)|15mg/1mg/0.5mL
5|Nicotinamide Adenine Dinucleotide (NAD+)|200mg/mL
6|Sermorelin Acetate|2mg/mL
7|Semaglutide/Cyanocobalamin (B12)|2.5mg/1.25mg/mL
8|Glutathione|200mg/mL
9|Tirzepatide/L-Carnitine|12.5mg/100mg/mL
10|BPC-157|3mg/mL
11|BPC-157/TB-500 (Wolverine)|1.66mg/3.33mg/mL
12|CJC-1295/Ipamorelin|1.5mg/2.5mg/mL
13|TB-500|10mg/3mL
14|GHK-Cu (Copper Peptide)|10mg/mL
15|Tirzepatide/NAD+/L-Carnitine|15mg/40mg/250mg/mL
16|Tirzepatide (sic)|10mg/mL
17|Ascorbic Acid (Tapioca Base) Vitamin C|500mg/mL
18|Ascorbic Acid (Vitamin C)|[5500mg] 550mg/mL
19|Semaglutide/Glycine|2.5mg/7.5mg/mL
20|Testosterone Cypionate (Commercial)|200mg/mL
21|GHK-Cu/BPC-157/TB-500 (Glow)|9mg/1.66mg/3.33mg/mL
22|N-Acetyl-L-Cysteine|200mg/mL
23|Semaglutide/NAD+|1mg/20mg/mL
24|Sermorelin|3mg/mL
25|Tesamorelin/Ipamorelin|2.4mg/1.2mg/mL
26|Testosterone Cypionate in Sesame Seed Oil|200mg
27|Testosterone Cypionate Miglyol 812N Oil|200mg/mL
28|Vitamin B12|1mg/mL
29|Aminoblend|100/50/50/50/100 mg/mL
30|BPC/157/TB500/KPV/GHK/CU|3/3/3/10 mg/mL
31|Magnesium Sulfate|500mg/mL
32|Tesamorelin|2mg/mL
33|Tirzepatide/Niacinamide|20mg/25mg/mL
34|Alpha Lipoic Acid|25mg/mL
35|Glycine|50mg/mL
36|Gonadorelin Acetate|1mg
37|Levocarnitine|500mg/mL
38|Mots-C|10mg/mL
39|Tirzepatide/Glycine|16.6mg/7.5mg/mL
40|Zinc Chloride|10mg/mL
41|Biotin (Vitamin B7)|10mg/mL
42|Melanotan II|2mg/mL
43|Methylcobalamin|5mg/mL
44|MIC|25mg/50mg/50mg/mL
45|Semaglutide/L-Carnitine|2.5mg/100mg/mL
46|Sodium Ascorbate|500mg/mL
47|Sodium Ascorbate (PF)|500mg/mL
48|Taurine|50mg/mL
49|Testosterone Cypionate (Sesame Seed Oil)|200mg/mL
50|Tri-Mix (PGE/PAPA/PHEN)|10mcg/30mg/1mg/mL
51|BPC/157/TB500/KPV (NO COPPER)|3/3/3 mg/mL
52|Elamipretide (SS31)|15mg/mL
53|Hydrogen Peroxide|3%
54|Lipoden Skinny Shot|50/5/50/5/5/1/12.5/25/50/10/50 mg/mL
55|Methionine/Inositol/Choline Chloride/Methylcobalamin|15mg/50mg/100mg/1mg/mL
56|MIC/B12|25/100/50/1 mg/mL
57|Phosphatidylcholine/Deoxycholic Acid (PCDC)|100mg/47.5mg/mL
58|Pregnyl HCG (Commercial)|10000IU/vial
59|Theanine|50mg/mL
60|Tripeptide-1 (GHK-Cu)|10mg/mL
61|5-Amino-1MQ|5mg/mL
62|Alprostadil/Papaverine HCl/Phentolamine Mesylate|10mcg/30mg/1mg/mL
63|Amino Acid #1|75/25/15/30/15/30/50/5/10/25 mg/mL
64|Amino Acid #3|25/5/5/2.5/4/5/1/5/10/25 mg/mL
65|AOD-9604|1.2mg/mL
66|AOD-9604/MOTS-C/Tesamorelin/Ipamorelin|1.2/2/2/2 mg/mL
67|ARA 290|6mg/mL
68|Arginine|[7500mg] 200mg/mL
69|Ascorbic Acid|500mg/mL
70|B-Complex|25/25/25/2/2 mg/mL
71|Bimix (PAPA/PHEN)|[150mg/5mg] 30mg/1mg/mL
72|Branched Chain Amino Acids (BCAA) (ILE/L/V)|0.4/0.3/1.2 gm/mL
73|Bremelanotide Acetate (PT-141)|10mg/mL
74|Calcium Gluconate|10%
75|Cartalax (AED, T-31)|4mg/mL
76|Coenzyme Q10|25mg/mL
77|Dexpanthenol|250mg/mL
78|DSIP|2mg/mL
79|Dutasteride|100mcg/mL
80|Epithalon|2mg/mL
81|Folic Acid|10mg/mL
82|FOXO4-DRI|2mg/mL
83|GHK/CU/Epithalon|10/2 mg/mL
84|Glycerin|72%
85|Gonadorelin|200mcg/mL
86|IGF-LR3|200mcg/mL
87|Kisspeptin|1mg/mL
88|L-Carnitine|500mg/mL
89|Lidocaine|2% (20mg/mL)
90|LIPO-B (Cyanocobalamin/MIC)|25mg/50mg/50mg/1mg/mL
91|Lipo-C|25/25/50/100/1 mg/mL
92|LIPO-C (Cyanocobalamin/MIC/L-Carnitine)|15mg/50mg/50mg/mL
93|Liraglutide|12mg/mL
94|Liraglutide/Methionine|6mg/2mg/mL
95|LL-37|1mg/mL
96|L-Leucine/L-Isoleucine/L-Valine|10mg/10mg/5mg/mL
97|Lysine|200mg/mL
98|Myer's Cocktail|100mg/10mg/0.5mg/mL
99|Nandrolone|200mg/mL
100|Nandrolone Decanoate|200mg/mL
101|Nandrolone Decanoate (Sesame Oil)|200mg/mL
102|Nandrolone Grape Seed Oil|200mg/mL
103|Oxytocin|100IU/mL
104|PEG-MGF|0.4mg/mL
105|Pentadecapeptide Arginate (PDA)|10mg/mL
106|Phenylephrine|10mg/mL
107|Procaine|2%
108|Proline|50mg/mL
109|PT/141|2mg/mL
110|Pyridoxine (Vitamin B6)|100mg/mL
111|Quadmix (PAPA/PHEN/ATRO/PGE)|9mg/1mg/10mcg/10mcg/mL
112|Semaglutide/Glycine/B12|1mg/1mg/10mg/mL
113|Sermorelin/Ipamorelin|3mg/3.6mg/mL
114|Sodium Deoxycholate|1.67%
115|Testosterone Cyp Grape Seed Oil|200mg/mL
116|Testosterone Ent Grape Seed Oil|200mg/mL
117|Testosterone Pro Grape Seed Oil|100mg/mL
118|Testosterone (Various Female Esters & Blends)|Cypionate/Propionate 175mg/25mg/mL
119|Test Product 2|10mg/2.5mg/mL
120|Thymosin Alpha-1|3mg/mL
121|Tirzepatide/Glycine/B12|10mg/5mg/500mcg/mL
122|Vitamin B-12 (Cyanocobalamin)|1200mg/mL
123|Vitamin D3|50,000IU/mL'''


def products():
    for line in DATA.splitlines():
        number, name, strength = line.split("|", 2)
        yield int(number), name.upper(), strength.upper()


def palette_swatches():
    image = Image.open(PALETTE).convert("RGB")
    # The supplied palette is a regular 4 x 19 grid. Sample both sides so
    # gradient swatches remain gradients rather than becoming flat colors.
    centers_x = [369, 675, 981, 1287]
    centers_y = [305 + 155 * row for row in range(19)]
    result = []
    for y in centers_y:
        for x in centers_x:
            result.append((image.getpixel((x - 90, y)), image.getpixel((x + 90, y))))
    return result


def tokens(text):
    parts = re.split(r"(?<=/)|\s+", text)
    return [part.strip() for part in parts if part.strip()]


def wrap_text(text, draw, font, max_width, max_lines=4):
    words = tokens(text)
    lines = []
    current = ""
    for word in words:
        candidate = word if not current else current + " " + word
        if draw.textbbox((0, 0), candidate, font=font)[2] <= max_width or not current:
            current = candidate
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def fit_product(text, draw, max_width=1030, max_height=590):
    for size in range(175, 64, -2):
        font = ImageFont.truetype(FONT, size)
        lines = wrap_text(text, draw, font, max_width)
        spacing = max(4, int(size * 0.02))
        boxes = [draw.textbbox((0, 0), line, font=font) for line in lines]
        height = sum(box[3] - box[1] for box in boxes) + spacing * (len(lines) - 1)
        if len(lines) <= 4 and height <= max_height and all(box[2] - box[0] <= max_width for box in boxes):
            return font, lines, spacing, height
    font = ImageFont.truetype(FONT, 64)
    lines = wrap_text(text, draw, font, max_width)
    return font, lines[:4], 4, max_height


def gradient(draw_image, box, left, right):
    x0, y0, x1, y1 = box
    width, height = x1 - x0, y1 - y0
    strip = Image.new("RGBA", (width, 1))
    strip.putdata([
        tuple(round(left[i] * (1 - x / max(1, width - 1)) + right[i] * (x / max(1, width - 1))) for i in range(3)) + (255,)
        for x in range(width)
    ])
    pixels = strip.resize((width, height))
    draw_image.alpha_composite(pixels, (x0, y0))


def contrast_color(left, right):
    rgb = tuple((left[i] + right[i]) / 2 for i in range(3))
    luminance = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]
    return (255, 255, 255, 255) if luminance < 145 else (35, 25, 60, 255)


def safe_name(number, name):
    slug = re.sub(r"[^A-Z0-9]+", "-", name).strip("-").lower()
    return f"{number:03d}-{slug}.png"


def render(number, name, strength, swatch, template):
    image = template.copy()
    layer = Image.new("RGBA", image.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)

    # Rebuild only the front label while leaving the original glass and liquid intact.
    label_box = (555, 1135, 1720, 2405)
    draw.rounded_rectangle(label_box, radius=45, fill=(248, 248, 246, 255))

    product_font, lines, spacing, total_h = fit_product(name, draw)
    text_x = 625
    text_y = 1355 + max(0, (560 - total_h) // 2)
    for line in lines:
        bbox = draw.textbbox((0, 0), line, font=product_font)
        draw.text((text_x, text_y), line, font=product_font, fill=(5, 5, 5, 255))
        text_y += bbox[3] - bbox[1] + spacing

    band = (595, 1995, 1585, 2225)
    gradient(layer, band, swatch[0], swatch[1])

    # Fixed right-side geometric brand mark.
    mark_color = swatch[1] + (255,)
    draw.rectangle((1605, 1995, 1643, 2108), fill=mark_color)
    draw.rectangle((1605, 2132, 1643, 2225), fill=mark_color)
    draw.rectangle((1657, 1995, 1695, 2138), fill=mark_color)
    draw.rectangle((1657, 2162, 1695, 2225), fill=mark_color)
    draw.rectangle((1707, 1995, 1720, 2108), fill=mark_color)
    draw.rectangle((1707, 2132, 1720, 2225), fill=mark_color)

    strength_font = ImageFont.truetype(FONT, 84)
    while draw.textbbox((0, 0), strength, font=strength_font)[2] > 900 and strength_font.size > 48:
        strength_font = ImageFont.truetype(FONT, strength_font.size - 2)
    strength_box = draw.textbbox((0, 0), strength, font=strength_font)
    strength_y = 1995 + (230 - (strength_box[3] - strength_box[1])) // 2 - strength_box[1]
    draw.text((650, strength_y), strength, font=strength_font, fill=contrast_color(*swatch))

    image = Image.alpha_composite(image, layer)
    image.save(OUT / safe_name(number, name), "PNG")


def main():
    OUT.mkdir(exist_ok=True)
    template = Image.open(TEMPLATE).convert("RGBA")
    swatches = palette_swatches()
    manifest = []
    for number, name, strength in products():
        render(number, name, strength, swatches[(number - 1) % len(swatches)], template)
        manifest.append((number, name, strength, safe_name(number, name)))
    with (OUT / "manifest.csv").open("w", newline="", encoding="utf-8") as handle:
        writer = csv.writer(handle)
        writer.writerow(("number", "product", "strength", "file"))
        writer.writerows(manifest)
    print(f"Created {len(manifest)} mockups in {OUT}")


if __name__ == "__main__":
    main()
