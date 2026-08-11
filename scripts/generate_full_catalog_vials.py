from pathlib import Path
import re
from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
MASTER = ROOT / "injection-vial-blank-golden.png"
PALETTE_IMAGE = ROOT / "product-accent-palette.png"
OUT = ROOT / "injection-vials-full-catalog"
FONT = "/System/Library/Fonts/Supplemental/DIN Condensed Bold.ttf"

# Global locked typography/layout tokens: never vary by product.
NAME_SIZE = 48
DOSE_SIZE = 20
LINE_STEP = 47
NAME_X = 318
NAME_TOP = 584
NAME_BOTTOM = 935
NAME_MAX_WIDTH = 510
BAND = (299, 953, 751, 1087)

CATALOG = [
    ("Tirzepatide/Pyridoxine (B6)", "10mg/2mg/mL"),
    ("Semaglutide/Pyridoxine (B6)", "2.5mg/2mg/mL"),
    ("Retatrutide", "16mg/mL"),
    ("Tirzepatide/Cyanocobalamin (B12)", "15mg/1mg/0.5mL"),
    ("Nicotinamide Adenine Dinucleotide (NAD+)", "200mg/mL"),
    ("Sermorelin Acetate", "2mg/mL"),
    ("Semaglutide/Cyanocobalamin (B12)", "2.5mg/1.25mg/mL"),
    ("Glutathione", "200mg/mL"),
    ("Tirzepatide/L-Carnitine", "12.5mg/100mg/mL"),
    ("BPC-157", "3mg/mL"),
    ("BPC-157/TB-500 (Wolverine)", "1.66mg/3.33mg/mL"),
    ("CJC-1295/Ipamorelin", "1.5mg/2.5mg/mL"),
    ("TB-500", "10mg/3mL"),
    ("GHK-Cu (Copper Peptide)", "10mg/mL"),
    ("Tirzepatide/NAD+/L-Carnitine", "15mg/40mg/250mg/mL"),
    ("Tirzepatide (sic)", "10mg/mL"),
    ("Ascorbic Acid (Tapioca Base) Vitamin C", "500mg/mL"),
    ("Ascorbic Acid (Vitamin C)", "[5500mg] 550mg/mL"),
    ("Semaglutide/Glycine", "2.5mg/7.5mg/mL"),
    ("Testosterone Cypionate (Commercial)", "200mg/mL"),
    ("GHK-Cu/BPC-157/TB-500 (Glow)", "9mg/1.66mg/3.33mg/mL"),
    ("N-Acetyl-L-Cysteine", "200mg/mL"),
    ("Semaglutide/NAD+", "1mg/20mg/mL"),
    ("Sermorelin", "3mg/mL"),
    ("Tesamorelin/Ipamorelin", "2.4mg/1.2mg/mL"),
    ("Testosterone Cypionate in Sesame Seed Oil", "200mg"),
    ("Testosterone Cypionate Miglyol 812N Oil", "200mg/mL"),
    ("Vitamin B12", "1mg/mL"),
    ("Aminoblend", "100/50/50/50/100 mg/mL"),
    ("BPC/157/TB500/KPV/GHK/CU", "3/3/3/10 mg/mL"),
    ("Magnesium Sulfate", "500mg/mL"),
    ("Tesamorelin", "2mg/mL"),
    ("Tirzepatide/Niacinamide", "20mg/25mg/mL"),
    ("Alpha Lipoic Acid", "25mg/mL"),
    ("Glycine", "50mg/mL"),
    ("Gonadorelin Acetate", "1mg"),
    ("Levocarnitine", "500mg/mL"),
    ("Mots-C", "10mg/mL"),
    ("Tirzepatide/Glycine", "16.6mg/7.5mg/mL"),
    ("Zinc Chloride", "10mg/mL"),
    ("Biotin (Vitamin B7)", "10mg/mL"),
    ("Melanotan II", "2mg/mL"),
    ("Methylcobalamin", "5mg/mL"),
    ("MIC", "25mg/50mg/50mg/mL"),
    ("Semaglutide/L-Carnitine", "2.5mg/100mg/mL"),
    ("Sodium Ascorbate", "500mg/mL"),
    ("Sodium Ascorbate (PF)", "500mg/mL"),
    ("Taurine", "50mg/mL"),
    ("Testosterone Cypionate (Sesame Seed Oil)", "200mg/mL"),
    ("Tri-Mix (PGE/PAPA/PHEN)", "10mcg/30mg/1mg/mL"),
    ("BPC/157/TB500/KPV (NO COPPER)", "3/3/3 mg/mL"),
    ("Elamipretide (SS31)", "15mg/mL"),
    ("Hydrogen Peroxide", "3%"),
    ("Lipoden Skinny Shot", "50/5/50/5/5/1/12.5/25/50/10/50 mg/mL"),
    ("Methionine/Inositol/Choline Chloride/Methylcobalamin", "15mg/50mg/100mg/1mg/mL"),
    ("MIC/B12", "25/100/50/1 mg/mL"),
    ("Phosphatidylcholine/Deoxycholic Acid (PCDC)", "100mg/47.5mg/mL"),
    ("Pregnyl HCG (Commercial)", "10000IU/vial"),
    ("Theanine", "50mg/mL"),
    ("Tripeptide-1 (GHK-Cu)", "10mg/mL"),
    ("5-Amino-1MQ", "5mg/mL"),
    ("Alprostadil/Papaverine HCl/Phentolamine Mesylate", "10mcg/30mg/1mg/mL"),
    ("Amino Acid #1", "75/25/15/30/15/30/50/5/10/25 mg/mL"),
    ("Amino Acid #3", "25/5/5/2.5/4/5/1/5/10/25 mg/mL"),
    ("AOD-9604", "1.2mg/mL"),
    ("AOD-9604/MOTS-C/Tesamorelin/Ipamorelin", "1.2/2/2/2 mg/mL"),
    ("ARA 290", "6mg/mL"),
    ("Arginine", "[7500mg] 200mg/mL"),
    ("Ascorbic Acid", "500mg/mL"),
    ("B-Complex", "25/25/25/2/2 mg/mL"),
    ("Bimix (PAPA/PHEN)", "[150mg/5mg] 30mg/1mg/mL"),
    ("Branched Chain Amino Acids (BCAA) (ILE/L/V)", "0.4/0.3/1.2 gm/mL"),
    ("Bremelanotide Acetate (PT-141)", "10mg/mL"),
    ("Calcium Gluconate", "10%"),
    ("Cartalax (AED, T-31)", "4mg/mL"),
    ("Coenzyme Q10", "25mg/mL"),
    ("Dexpanthenol", "250mg/mL"),
    ("DSIP", "2mg/mL"),
    ("Dutasteride", "100mcg/mL"),
    ("Epithalon", "2mg/mL"),
    ("Folic Acid", "10mg/mL"),
    ("FOXO4-DRI", "2mg/mL"),
    ("GHK/CU/Epithalon", "10/2 mg/mL"),
    ("Glycerin", "72%"),
    ("Gonadorelin", "200mcg/mL"),
    ("IGF-LR3", "200mcg/mL"),
    ("Kisspeptin", "1mg/mL"),
    ("L-Carnitine", "500mg/mL"),
    ("Lidocaine", "2% (20mg/mL)"),
    ("LIPO-B (Cyanocobalamin/MIC)", "25mg/50mg/50mg/1mg/mL"),
    ("Lipo-C", "25/25/50/100/1 mg/mL"),
    ("LIPO-C (Cyanocobalamin/MIC/L-Carnitine)", "15mg/50mg/50mg/mL"),
    ("Liraglutide", "12mg/mL"),
    ("Liraglutide/Methionine", "6mg/2mg/mL"),
    ("LL-37", "1mg/mL"),
    ("L-Leucine/L-Isoleucine/L-Valine", "10mg/10mg/5mg/mL"),
    ("Lysine", "200mg/mL"),
    ("Myer's Cocktail", "100mg/10mg/0.5mg/mL"),
    ("Nandrolone", "200mg/mL"),
    ("Nandrolone Decanoate", "200mg/mL"),
    ("Nandrolone Decanoate (Sesame Oil)", "200mg/mL"),
    ("Nandrolone Grape Seed Oil", "200mg/mL"),
    ("Oxytocin", "100IU/mL"),
    ("PEG-MGF", "0.4mg/mL"),
    ("Pentadecapeptide Arginate (PDA)", "10mg/mL"),
    ("Phenylephrine", "10mg/mL"),
    ("Procaine", "2%"),
    ("Proline", "50mg/mL"),
    ("PT/141", "2mg/mL"),
    ("Pyridoxine (Vitamin B6)", "100mg/mL"),
    ("Quadmix (PAPA/PHEN/ATRO/PGE)", "9mg/1mg/10mcg/10mcg/mL"),
    ("Semaglutide/Glycine/B12", "1mg/1mg/10mg/mL"),
    ("Sermorelin/Ipamorelin", "3mg/3.6mg/mL"),
    ("Sodium Deoxycholate", "1.67%"),
    ("Testosterone Cyp Grape Seed Oil", "200mg/mL"),
    ("Testosterone Ent Grape Seed Oil", "200mg/mL"),
    ("Testosterone Pro Grape Seed Oil", "100mg/mL"),
    ("Testosterone (Various Female Esters & Blends)", "Cypionate/Propionate 175mg/25mg/mL"),
    ("Test Product 2", "10mg/2.5mg/mL"),
    ("Thymosin Alpha-1", "3mg/mL"),
    ("Tirzepatide/Glycine/B12", "10mg/5mg/500mcg/mL"),
    ("Vitamin B-12 (Cyanocobalamin)", "1200mg/mL"),
    ("Vitamin D3", "50,000IU/mL"),
]


def slugify(value: str) -> str:
    value = value.lower().replace("+", "-plus-")
    return re.sub(r"[^a-z0-9]+", "-", value).strip("-")


def palette_colors(count: int) -> list[str]:
    im = Image.open(PALETTE_IMAGE).convert("RGB")
    # Exact center samples from the supplied 19 x 4 palette grid.
    xs = [366, 671, 976, 1281]
    ys = [306 + 154 * row for row in range(19)]
    base = [im.getpixel((x, y)) for y in ys for x in xs]
    colors = base[:]
    # The catalog exceeds 76 swatches. Derive unique variants from the same palette.
    variant = 0
    while len(colors) < count:
        r, g, b = base[variant % len(base)]
        factor = 0.82 if (variant // len(base)) % 2 == 0 else 1.12
        colors.append(tuple(max(0, min(255, round(c * factor))) for c in (r, g, b)))
        variant += 1
    return ["#%02X%02X%02X" % color for color in colors[:count]]


def contrast_text(color: str) -> str:
    r, g, b = (int(color[i:i + 2], 16) for i in (1, 3, 5))
    return "#171717" if 0.2126 * r + 0.7152 * g + 0.0722 * b >= 155 else "white"


def tokenize(name: str) -> list[str]:
    # Preserve slashes as visual break opportunities, matching the user's examples.
    pieces = re.findall(r"[^/\s]+/?", name.upper())
    return pieces


def wrap_name(draw: ImageDraw.ImageDraw, name: str, font: ImageFont.FreeTypeFont) -> list[str]:
    lines: list[str] = []
    current = ""
    for token in tokenize(name):
        candidate = token if not current else f"{current} {token}"
        if draw.textbbox((0, 0), candidate, font=font)[2] <= NAME_MAX_WIDTH:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = token
    if current:
        lines.append(current)
    return lines


def draw_motif(draw: ImageDraw.ImageDraw, color: str) -> None:
    for box in [(765, 953, 788, 1087), (796, 953, 819, 1087), (827, 953, 840, 1087)]:
        draw.rectangle(box, fill=color)
    for box in [(751, 1017, 779, 1033), (788, 1017, 807, 1033), (819, 1017, 833, 1033)]:
        draw.rectangle(box, fill="white")


def main() -> None:
    OUT.mkdir(exist_ok=True)
    master = Image.open(MASTER).convert("RGB")
    name_font = ImageFont.truetype(FONT, NAME_SIZE)
    dose_font = ImageFont.truetype(FONT, DOSE_SIZE)
    colors = palette_colors(len(CATALOG))
    failures: list[str] = []

    for index, ((name, dose), color) in enumerate(zip(CATALOG, colors), start=1):
        image = master.copy()
        draw = ImageDraw.Draw(image)
        lines = wrap_name(draw, name, name_font)
        if len(lines) * LINE_STEP > NAME_BOTTOM - NAME_TOP:
            failures.append(f"{index}: too many lines: {name} -> {lines}")

        block_height = len(lines) * LINE_STEP
        y = int((NAME_TOP + NAME_BOTTOM - block_height) / 2)
        for line in lines:
            draw.text((NAME_X, y), line, font=name_font, fill="black")
            y += LINE_STEP

        draw.rectangle(BAND, fill=color)
        draw_motif(draw, color)
        dose_text = dose.upper()
        dose_box = draw.textbbox((0, 0), dose_text, font=dose_font)
        if dose_box[2] > 405:
            failures.append(f"{index}: dose overflow: {dose_text} ({dose_box[2]}px)")
        dose_y = BAND[1] + ((BAND[3] - BAND[1] - (dose_box[3] - dose_box[1])) // 2) - dose_box[1]
        draw.text((331, dose_y), dose_text, font=dose_font, fill=contrast_text(color))

        filename = f"{index:03d}-{slugify(name)}-vial.png"
        image.save(OUT / filename, quality=95)

    print(f"generated {len(CATALOG)} mockups in {OUT}")
    if failures:
        print("QA WARNINGS")
        print("\n".join(failures))


if __name__ == "__main__":
    main()
