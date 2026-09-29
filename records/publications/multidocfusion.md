# MultiDocFusion: Hierarchical and Multimodal Chunking Pipeline for Enhanced RAG on Long Industrial Documents

- Type: Publication
- Slug: multidocfusion
- Category: Top Conferences
- Venue: EMNLP 2025 (Main)
- Date: Aug 2025
- Authors: Joongmin Shin*, Chanjun Park, Jeongbae Park, Jaehyung Seo, Heuiseok Lim
- Role: First Author
- Status: Published
- Keywords: hierarchical chunking, multimodal, RAG, industrial
- Paper URL: https://aclanthology.org/2025.emnlp-main.1062/
- DOI: https://doi.org/10.18653/v1/2025.emnlp-main.1062
- arXiv: 2604.12352
- Figure: paper_figure/MultiDocFusion_architecture.png
- Detail Page: publications/multidocfusion.html
- Source: `publications-data.js`

## Abstract
RAG-based QA has emerged as a powerful method for processing long industrial documents. However, conventional text chunking approaches often neglect the complex structures of long industrial documents, causing information loss and reduced answer quality. To address this, we introduce MultiDocFusion, a multimodal chunking pipeline that integrates: (i) detection of document regions using vision-based document parsing, (ii) text extraction from these regions via OCR, (iii) reconstruction of document structure into a hierarchical tree using large language model (LLM)-based document section hierarchical parsing (DSHP-LLM), and (iv) construction of hierarchical chunks through DFS-based Grouping. Extensive experiments across industrial benchmarks demonstrate that MultiDocFusion improves retrieval precision by 8–15% and ANLS QA scores by 2–3% compared to baselines, emphasizing the critical role of explicitly leveraging document hierarchy for multimodal document-based QA. These significant performance gains underscore the necessity of structure-aware chunking in enhancing the fidelity of RAG-based QA systems.

## Contribution
A hierarchical multimodal chunking pipeline that preserves layout and improves evidence composition in industrial RAG.
