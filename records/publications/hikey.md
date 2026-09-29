# HiKEY: Hierarchical Multimodal Retrieval for Open-Domain Document Question Answering

- Type: Publication
- Slug: hikey
- Category: Top Conferences
- Venue: ACL 2026 (Main)
- Date: Mar 2026
- Authors: Joongmin Shin*, Gyuho Shim, Jeongbae Park, Jaehyung Seo, Heuiseok Lim
- Role: First Author
- Status: Accepted
- Keywords: hierarchical retrieval, multimodal QA, evidence assembly
- Paper URL: https://aclanthology.org/2026.acl-long.818/
- DOI: https://doi.org/10.18653/v1/2026.acl-long.818
- arXiv: 2605.29606
- Figure: paper_figure/HiKEY_architecture.png
- Detail Page: publications/hikey.html
- Source: `publications-data.js`

## Abstract
Retrieval-augmented generation (RAG) for document-based open-domain question answering (ODQA) over large industrial corpora faces two core bottlenecks: routing to the correct document and combining scattered evidence. Flat text chunks and page-level images often fail to (i) identify the right document among thousands of candidates and (ii) connect multimodal evidence, such as tables and figures, within a fixed token budget. We propose HiKEY, a hierarchical tree-based multimodal retrieval framework that treats document hierarchy as a first-class retrieval signal. Rather than simply chunking text, HiKEY uses Document Hierarchical Parsing (DHP) to reconstruct a logical heterogeneous graph with explicit parent–child relations. At query time, HiKEY follows a hierarchical coarse-to-fine process: it first performs global routing with hierarchical indexes to prune the corpus, and then ranks sections with a multimodal fusion strategy that selects the most discriminative evidence. It finally builds a token-efficient evidence subgraph through hybrid structural–semantic packing. Experiments on ODQA benchmarks show that HiKEY outperforms page- and chunk-based baselines, improving retrieval recall by up to 12.9 points and end-to-end QA by up to 6.8 points.

## Contribution
Hierarchical retrieval for multimodal document QA with structured evidence assembly.
