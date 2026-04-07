from pathlib import Path

import fitz


ROOT = Path(__file__).resolve().parent.parent
CV_PATH = ROOT / "CV" / "Curriculum_Vitae_Joongmin_Shin.pdf"
TMP_PATH = CV_PATH.with_suffix(".tmp.pdf")

HEADER_ROLE_RECT = fitz.Rect(72, 52, 523, 66.5)
SUMMARY_RECT = fitz.Rect(39.5, 121.5, 555.6, 189)
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


def replace_textbox(page, rect, text, font_size, color=(0.18, 0.18, 0.18), align=fitz.TEXT_ALIGN_LEFT):
    page.draw_rect(rect, color=None, fill=(1, 1, 1), overlay=True)
    page.insert_textbox(
        rect,
        text,
        fontsize=font_size,
        fontname="helv",
        color=color,
        align=align,
        lineheight=1.18,
        overlay=True,
    )


def main():
    pdf = fitz.open(CV_PATH)
    page = pdf[0]

    replace_textbox(
        page,
        HEADER_ROLE_RECT,
        "Senior Researcher / Research Scientist, Korea University  ·  Founder & Lead, KUDoc",
        8.2,
        color=(0.55, 0.17, 0.17),
        align=fitz.TEXT_ALIGN_CENTER,
    )

    replace_textbox(
        page,
        SUMMARY_RECT,
        (
            "AI researcher with 5+ years of experience in multimodal LLM/LVLMs, structure-aware parsing, and "
            "retrieval-augmented generation for document-heavy settings. My current work focuses on structured "
            "evidence and reliable long-context reasoning over heterogeneous unstructured inputs. In addition to my "
            "individual research, I founded and lead KUDoc, the Document AI research team at Korea University, "
            "where I help shape collaborative directions across document understanding, multimodal RAG, evaluation, "
            "and applied AI. I aim to pursue a Ph.D. to extend this foundation toward structured memory, world models, "
            "and planning for future agents."
        ),
        8.15,
        color=(0.22, 0.22, 0.22),
    )

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
