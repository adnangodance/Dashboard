from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parent
BASE = Path("/var/folders/_h/m6y0lhks57jdf9zc0rf6069r0000gn/T/codex-clipboard-b3a99cd1-d4cc-4e55-9da2-e022ad0795ef.png")
RENDER = Path("/Users/adnan/.codex/generated_images/019fdd5a-c518-7101-b88b-b6693cf9c1f9/exec-aacbcbe6-b9be-48e4-b031-03d6fd015dcf.png")
OUTPUT = ROOT / "product-mockups" / "005-nicotinamide-adenine-dinucleotide-nad.png"


def main():
    base = Image.open(BASE).convert("RGBA")
    rendered = Image.open(RENDER).convert("RGBA")
    label = rendered.crop((292, 551, 851, 1172))
    target_box = (579, 1110, 1668, 2324)
    target_size = (target_box[2] - target_box[0], target_box[3] - target_box[1])
    label = label.resize(target_size, Image.Resampling.LANCZOS)

    mask = Image.new("L", target_size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, target_size[0] - 1, target_size[1] - 1), radius=46, fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(0.8))

    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    layer.paste(label, (target_box[0], target_box[1]), mask)
    final = Image.alpha_composite(base, layer)
    final.save(OUTPUT, "PNG")
    print(OUTPUT)


if __name__ == "__main__":
    main()
