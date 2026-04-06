from pathlib import Path

import fitz


ROOT = Path(__file__).resolve().parent.parent
CV_PATH = ROOT / "CV" / "Curriculum_Vitae_Joongmin_Shin.pdf"
TMP_PATH = CV_PATH.with_suffix(".tmp.pdf")

STATUS_RECT = fitz.Rect(49, 521, 317, 537)


def replace_text(page, rect, text, font_size, color=(0.18, 0.18, 0.18)):
    page.draw_rect(rect, color=None, fill=(1, 1, 1), overlay=True)
    page.insert_text(
        fitz.Point(rect.x0, rect.y1 - 2.5),
        text,
        fontsize=font_size,
        fontname="helv",
        color=color,
        overlay=True,
    )


def main():
    pdf = fitz.open(CV_PATH)
    page = pdf[0]

    replace_text(
        page,
        STATUS_RECT,
        "ACL 2026 - Association for Computational Linguistics Conference: Accepted",
        7.4,
        color=(0.22, 0.28, 0.42),
    )

    pdf.save(TMP_PATH, incremental=False, deflate=True)
    pdf.close()
    TMP_PATH.replace(CV_PATH)


if __name__ == "__main__":
    main()
