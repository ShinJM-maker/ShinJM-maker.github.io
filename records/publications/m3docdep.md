# M3DocDep: Multi-modal, Multi-page, Multi-document Dependency Chunking with Large Vision-Language Models

- Type: Publication
- Slug: m3docdep
- Category: Top Conferences
- Venue: CVPR 2026 (Main)
- Date: Feb 2026
- Authors: Joongmin Shin*, Jeongbae Park, Jaehyung Seo, Heuiseok Lim
- Role: First Author
- Status: Accepted
- Keywords: document structure, LVLM, chunking, retrieval
- Paper URL: https://openaccess.thecvf.com/content/CVPR2026/html/Shin_M3DocDep_Multi-modal_Multi-page_Multi-document_Dependency_Chunking_with_Large_Vision-Language_Models_CVPR_2026_paper.html
- arXiv: 2605.18774
- Figure: paper_figure/M3DocDep_architecture_preview.png
- Detail Page: publications/m3docdep.html
- Source: `publications-data.js`

## Abstract
In long, multi-page industrial documents, retrieval-augmented generation (RAG) depends heavily on whether chunk boundaries follow the document’s true structure. Existing text-centric chunkers and generative hierarchy parsers often miss cross-page parent–child relations, figure/table–caption bindings, and boundary cues, which leads to fragmented or redundant chunks and degrades both retrieval and answer quality. We propose M3DocDep, an LVLM-based pipeline that first recovers block-level dependencies and then constructs chunks along the recovered document tree. The pipeline uses SharedDet as a common DP+OCR preprocessing layer, extracts multi-modal block embeddings with boundary-aware SoftROI pooling, scores candidate parent–child edges with a biaffine head, decodes a globally valid dependency tree with MST constraints, and builds tree-guided chunks annotated with section paths and page ranges. Under a shared-block evaluation protocol, M3DocDep improves STEDS by +28.5–39.6% on DHP benchmarks, retrieval nDCG by +1.1–15.3%, and QA ANLS by +4.5–15.3% on corpus-level RAG benchmarks. These results show that recovering document dependencies before chunking yields more coherent retrieval units for long, multi-page multi-modal documents.

## Contribution
LVLM-based dependency chunking that reconstructs cross-page structure for long-document retrieval and QA.
