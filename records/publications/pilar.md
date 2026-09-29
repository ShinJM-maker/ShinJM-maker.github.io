# PILAR: A Page-Grounded Unified Evidence Representation via an Entity-Linked Assertion Graph for Open-Domain QA Agents over Multimodal Document Corpora

- Type: Publication
- Slug: pilar
- Category: Top Conferences
- Venue: EMNLP 2026 (Findings)
- Date: Aug 2026
- Authors: Joongmin Shin*, Gyuho Shim, Jung-Hun Lee, Jaehyung Seo
- Role: First Author
- Status: Accepted
- Keywords: evidence graphs, multimodal QA, entity linking
- arXiv: 2609.32895
- Figure: paper_figure/PILAR_architecture.png
- Detail Page: publications/pilar.html
- Source: `publications-data.js`

## Abstract
Open-domain question answering (ODQA) over multimodal document corpora requires linking evidence scattered across text, tables, and figures. Existing systems often store these sources separately or retrieve only coarse pages, which weakens global evidence linking. We present PILAR, a page-grounded unified evidence representation instantiated as an entity-linked assertion graph. PILAR maps sentence-, table-, and figure-derived facts into a common assertion space and uses the graph as a controlled linking layer over robust page retrieval. In a shared-reader evaluation with four agent frameworks, fourteen retrieval backends, and two benchmarks, PILAR achieves the best end-to-end EM/ANLS. Gains are largest on compositional, cross-document, and multimodal questions, with a single-shot improvement of +1.6 EM over flat retrieval, rising to +2.9 on compositional and +5.9 on 3-hop questions. Ablations show that current gains are driven mainly by the text-instantiated slice of the framework, while visual assertions help only after locality-aware filtering. We therefore position PILAR as a unified evidence representation for multimodal ODQA rather than a standalone visual-reasoning module.

## Contribution
Entity-linked assertion graphs unify text, tables, and figures into a single page-grounded evidence representation for open-domain multimodal QA agents.
