from pathlib import Path
from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
MASTER = ROOT / "injection-vial-blank-golden.png"
OUT = ROOT / "injection-vials-uniform-palette-v2"
FONT = "/System/Library/Fonts/Supplemental/DIN Condensed Bold.ttf"

# Locked design tokens. These values never change between products.
NAME_SIZE = 56
DOSE_SIZE = 28
LINE_STEP = 54
NAME_X = 318
NAME_AREA_TOP = 624
NAME_AREA_BOTTOM = 925
BAND = (299, 953, 751, 1087)

PRODUCTS = [
    ("tesamorelin-ipamorelin", ["TESAMORELIN/", "IPAMORELIN"], "2.4MG/1.2MG/ML", "#2E6870", "white"),
    ("tirzepatide-pyridoxine-b6", ["TIRZEPATIDE/", "PYRIDOXINE (B6)"], "20MG/25MG/ML", "#40318B", "white"),
    ("semaglutide-pyridoxine-b6", ["SEMAGLUTIDE/", "PYRIDOXINE (B6)"], "2.5MG/2MG/ML", "#D98572", "white"),
    ("nicotinamide-adenine-dinucleotide", ["NICOTINAMIDE", "ADENINE", "DINUCLEOTIDE"], "200MG/ML", "#57965E", "white"),
    ("semaglutide-cyanocobalamin-b12", ["SEMAGLUTIDE/", "CYANOCOBALAMIN", "(B12)"], "5MG/1MG/ML", "#74A64D", "white"),
    ("bpc-157", ["BPC-157"], "3MG/ML", "#741B3D", "white"),
    ("oxytocin", ["OXYTOCIN"], "100IU/ML", "#E87500", "white"),
    ("aminoblend", ["AMINOBLEND"], "100/50/50/50/100 MG/ML", "#355A3B", "white"),
    ("tb-500", ["TB-500"], "10MG/3ML", "#213A60", "white"),
    ("sermorelin-acetate", ["SERMORELIN", "ACETATE"], "2MG/ML", "#C6DEDA", "#23395D"),
    ("glutathione", ["GLUTATHIONE"], "200MG/ML", "#C8C3E7", "#30357D"),
    ("semaglutide-nad", ["SEMAGLUTIDE/", "NAD+"], "1MG/20MG/ML", "#E9F0A5", "#303020"),
    ("bpc-157-tb-500-wolverine", ["BPC-157/", "TB-500", "(WOLVERINE)"], "3MG/3MG/ML", "#B8D79E", "#35754A"),
    ("testosterone-cypionate", ["TESTOSTERONE", "CYPIONATE", "(SESAME SEED", "OIL)"], "200MG/ML", "#C7B5DE", "#34295A"),
    ("tirzepatide-nad-l-carnitine", ["TIRZEPATIDE/", "NAD+/", "L-CARNITINE"], "15MG/40MG/250MG/ML", "#CC6654", "white"),
    ("vitamin-b12", ["VITAMIN B12"], "1MG/ML", "#233D63", "white"),
    ("arginine", ["ARGININE"], "[7500MG] 200MG/ML", "#1C806F", "white"),
    ("bimix-papa-phen", ["BIMIX", "(PAPA/PHEN)"], "[150MG/5MG] 30MG/1MG/ML", "#744C35", "white"),
    ("coenzyme-q10", ["COENZYME Q10"], "25MG/ML", "#F1AD13", "white"),
    ("levocarnitine", ["LEVOCARNITINE"], "500MG/ML", "#6A8197", "white"),
    ("lipoden-skinny-shot", ["LIPODEN", "SKINNY SHOT"], "MULTI-COMPONENT", "#DF8875", "white"),
    ("myers-cocktail", ["MYER'S", "COCKTAIL"], "100MG/10MG/0.5MG/ML", "#A45D69", "white"),
    ("n-acetyl-l-cysteine", ["N-ACETYL-", "L-CYSTEINE"], "200MG/ML", "#526A49", "white"),
    ("nandrolone-decanoate", ["NANDROLONE", "DECANOATE"], "200MG/ML", "#53213B", "white"),
    ("quadmix", ["QUADMIX", "(PAPA/PHEN/", "ATRO/PGE)"], "9MG/1MG/10MCG/10MCG/ML", "#455B85", "white"),
    ("retatrutide", ["RETATRUTIDE"], "16MG/ML", "#6F4B83", "white"),
    ("sodium-ascorbate", ["SODIUM", "ASCORBATE"], "500MG/ML", "#A8B88E", "#33472E"),
    ("sodium-ascorbate-pf", ["SODIUM", "ASCORBATE", "(PF)"], "500MG/ML", "#D1B7A0", "#4B3729"),
    ("taurine", ["TAURINE"], "50MG/ML", "#95B1C7", "#213A60"),
    ("theanine", ["THEANINE"], "50MG/ML", "#D1C34B", "#4A3A12"),
    ("tri-mix", ["TRI-MIX", "(PGE/PAPA/", "PHEN)"], "10MCG/30MG/1MG/ML", "#4F315D", "white"),
    ("zinc-chloride", ["ZINC", "CHLORIDE"], "10MG/ML", "#2E6670", "white"),
]

# Exact center-point samples from the user's revised palette, in reading order.
PALETTE = [
    "#4C1F36", "#CBDED7", "#FDEA8A", "#EB7A00",
    "#DEE0C0", "#354F3B", "#E4DAD1", "#A59E1F",
    "#CAFBDD", "#E7F5A6", "#FFFF01", "#680031",
    "#FFEBED", "#CBDED7", "#F2B08A", "#232975",
    "#F1C9A4", "#D2EBD5", "#C9AFF6", "#EA4F34",
    "#004101", "#00AB44", "#F5FFD7", "#B5F100",
    "#DCE6D2", "#F1E4D4", "#E6D2E1", "#C8E6DC",
    "#C83C28", "#E6AA14", "#FFA35A", "#147864",
]


def draw_motif(draw: ImageDraw.ImageDraw, color: str) -> None:
    # Fixed three-bar motif derived from the supplied reference.
    bars = [(765, 953, 788, 1087), (796, 953, 819, 1087), (827, 953, 840, 1087)]
    for box in bars:
        draw.rectangle(box, fill=color)
    draw.rectangle((751, 1017, 779, 1033), fill="white")
    draw.rectangle((788, 1017, 807, 1033), fill="white")
    draw.rectangle((819, 1017, 833, 1033), fill="white")


def contrast_text(color: str) -> str:
    r, g, b = (int(color[i:i + 2], 16) for i in (1, 3, 5))
    luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
    return "#171717" if luminance >= 155 else "white"


def main() -> None:
    OUT.mkdir(exist_ok=True)
    master = Image.open(MASTER).convert("RGB")
    name_font = ImageFont.truetype(FONT, NAME_SIZE)
    dose_font = ImageFont.truetype(FONT, DOSE_SIZE)

    for index, (slug, lines, dose, _old_color, _old_dose_color) in enumerate(PRODUCTS):
        color = PALETTE[index]
        dose_color = contrast_text(color)
        image = master.copy()
        draw = ImageDraw.Draw(image)

        block_height = len(lines) * LINE_STEP
        y = int((NAME_AREA_TOP + NAME_AREA_BOTTOM - block_height) / 2)
        for line in lines:
            draw.text((NAME_X, y), line, font=name_font, fill="black")
            y += LINE_STEP

        draw.rectangle(BAND, fill=color)
        draw_motif(draw, color)
        dose_box = draw.textbbox((0, 0), dose, font=dose_font)
        dose_height = dose_box[3] - dose_box[1]
        dose_y = BAND[1] + ((BAND[3] - BAND[1] - dose_height) // 2) - dose_box[1]
        draw.text((331, dose_y), dose, font=dose_font, fill=dose_color)

        image.save(OUT / f"{slug}-vial-liquid-uniform.png", quality=95)

    print(f"generated {len(PRODUCTS)} files in {OUT}")


if __name__ == "__main__":
    main()
