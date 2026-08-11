from argparse import ArgumentParser
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter


BASE = Path(__file__).resolve().parent / "product-mockups" / "_approved-vial-base.png"


def main():
    parser = ArgumentParser()
    parser.add_argument("render", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()

    base = Image.open(BASE).convert("RGBA")
    rendered = Image.open(args.render).convert("RGBA")
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
    args.output.parent.mkdir(exist_ok=True)
    final.save(args.output, "PNG")
    print(args.output)


if __name__ == "__main__":
    main()
