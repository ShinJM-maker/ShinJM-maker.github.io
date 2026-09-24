# Publications

Total items: 28

## ADMIT: Support-Gated Memory-Write Admission for Document QA Agents

- Slug: admit
- Category: Top Conferences
- Venue: NeurIPS 2026 (Main)
- Date: Sep 2026
- Authors: Joongmin Shin*, Gyuho Shim, Hyeonseok Moon, Jaehyung Seo
- Role: First Author
- Status: Accepted
- Keywords: agent memory, memory-write safety, document QA
- Detail Page: publications/admit.html
- Per-item Markdown: publications/admit.md
- Source: `publications-data.js`

## Abstract
ADMIT treats memory writes by document QA agents as an admission decision rather than a default side effect. Candidate memory entries are gated by whether they are supported by the document evidence the agent actually used, reducing unsupported or unsafe content that persists into later reasoning.

## Contribution
Support-gated admission control that decides what a document QA agent is allowed to commit to memory.

## PILAR: A Page-Grounded Unified Evidence Representation via an Entity-Linked Assertion Graph for Open-Domain QA Agents over Multimodal Document Corpora

- Slug: pilar
- Category: Top Conferences
- Venue: EMNLP 2026 (Findings)
- Date: Aug 2026
- Authors: Joongmin Shin*, Gyuho Shim, Jung-Hun Lee, Jaehyung Seo
- Role: First Author
- Status: Accepted
- Keywords: evidence graphs, multimodal QA, entity linking
- Detail Page: publications/pilar.html
- Per-item Markdown: publications/pilar.md
- Source: `publications-data.js`

## Abstract
PILAR unifies text, tables, and figures from multimodal document corpora into a single page-grounded evidence representation. Assertions are linked through shared entities into a graph, giving open-domain QA agents structured, traceable evidence across pages and documents.

## Contribution
Entity-linked assertion graphs unify text, tables, and figures into a single page-grounded evidence representation for open-domain multimodal QA agents.

## HiKEY: Hierarchical Multimodal Retrieval for Open-Domain Document Question Answering

- Slug: hikey
- Category: Top Conferences
- Venue: ACL 2026 (Main)
- Date: Mar 2026
- Authors: Joongmin Shin*, Gyuho Shim, Jeongbae Park, Jaehyung Seo, Heuiseok Lim
- Role: First Author
- Status: Accepted
- Keywords: hierarchical retrieval, multimodal QA, evidence assembly
- Figure: paper_figure/HiKEY_architecture.png
- Detail Page: publications/hikey.html
- Per-item Markdown: publications/hikey.md
- Source: `publications-data.js`

## Abstract
HiKEY introduces a hierarchical multimodal retrieval framework for open-domain document question answering. The system combines global routing, local ranking, and structured evidence assembly to improve retrieval quality across long and visually complex documents.

## Contribution
Hierarchical retrieval for multimodal document QA with structured evidence assembly.

## M3DocDep: Multi-modal, Multi-page, Multi-document Dependency Chunking with Large Vision-Language Models

- Slug: m3docdep
- Category: Top Conferences
- Venue: CVPR 2026 (Main)
- Date: Feb 2026
- Authors: Joongmin Shin*, Jeongbae Park, Jaehyung Seo, Heuiseok Lim
- Role: First Author
- Status: Accepted
- Keywords: document structure, LVLM, chunking, retrieval
- Figure: paper_figure/M3DocDep_architecture_preview.png
- Detail Page: publications/m3docdep.html
- Per-item Markdown: publications/m3docdep.md
- Source: `publications-data.js`

## Abstract
This work uses large vision-language models to infer cross-page and cross-document dependency structures in complex unstructured inputs. The resulting structure-aware multimodal chunks improve evidence retrieval quality and downstream QA performance for retrieval-augmented pipelines.

## Contribution
LVLM-based dependency chunking that reconstructs cross-page structure for long-document retrieval and QA.

## MultiDocFusion: Hierarchical and Multimodal Chunking Pipeline for Enhanced RAG on Long Industrial Documents

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
- Figure: paper_figure/MultiDocFusion_architecture.png
- Detail Page: publications/multidocfusion.html
- Per-item Markdown: publications/multidocfusion.md
- Source: `publications-data.js`

## Abstract
MultiDocFusion combines vision parsing, OCR, and hierarchy reconstruction to preserve document structure during chunking. It improves retrieval quality for long and noisy inputs and provides stronger evidence composition for downstream QA.

## Contribution
A hierarchical multimodal chunking pipeline that preserves layout and improves evidence composition in industrial RAG.

## Intelligent Predictive Maintenance RAG Framework for Power Plants: Enhancing QA with StyleDFS and Domain Specific Instruction Tuning

- Slug: styledfs
- Category: Top Conferences
- Venue: EMNLP 2024 (Industry Track)
- Date: Oct 2024
- Authors: Seongtae Hong*, Joongmin Shin*, Jaehyung Seo, Taemin Lee, Jeongbae Park, Heuiseok Lim
- Role: Co-First Author
- Status: Accepted
- Keywords: domain RAG, industrial QA, technology transfer
- Paper URL: https://aclanthology.org/2024.emnlp-industry.61/
- DOI: https://doi.org/10.18653/v1/2024.emnlp-industry.61
- Figure: paper_figure/StyleDFS_architecture_preview.png
- Detail Page: publications/styledfs.html
- Per-item Markdown: publications/styledfs.md
- Source: `publications-data.js`

## Abstract
StyleDFS proposes structure-aware chunking for high-stakes industrial QA. The framework improves answer quality while meeting on-premise and privacy constraints in real deployment environments.

## Contribution
Domain-specific RAG framework for scientific and industrial QA; led to two technology transfers.

## Unified Evaluation Framework for RAG Chunking

- Slug: ur-rag-chunking-eval
- Category: Under Review
- Venue: EMNLP 2026
- Authors: Anonymous (Under review)
- Role: First Author
- Status: Under Review
- Keywords: RAG evaluation, chunking, benchmark
- Detail Page: publications/ur-rag-chunking-eval.html
- Per-item Markdown: publications/ur-rag-chunking-eval.md
- Source: `publications-data.js`

## Contribution
Joint measurement of retrieval relevance, evidence breadth, faithfulness, latency, memory, and cost for fair chunker comparison.

## Delivered-Pack Sensitivity Diagnostics for Document-Agent Memory Commits

- Slug: ur-delivered-pack-sensitivity
- Category: Under Review
- Venue: EMNLP 2026
- Authors: Anonymous (Under review)
- Role: First Author
- Status: Under Review
- Keywords: agent memory, grounding diagnostics, document agents
- Detail Page: publications/ur-delivered-pack-sensitivity.html
- Per-item Markdown: publications/ur-delivered-pack-sensitivity.md
- Source: `publications-data.js`

## Contribution
Demonstrates that final-answer correctness alone is not evidence of grounding; proposes diagnostics on what an agent commits to memory.

## Timestamp-Grounded Evidence Consumption Auditing for Long-Video QA/RAG

- Slug: ur-video-evidence-audit
- Category: Under Review
- Venue: EMNLP 2026
- Authors: Anonymous (Under review)
- Role: First Author
- Status: Under Review
- Keywords: long-video QA, evidence auditing, temporal grounding
- Detail Page: publications/ur-video-evidence-audit.html
- Per-item Markdown: publications/ur-video-evidence-audit.md
- Source: `publications-data.js`

## Contribution
Shifts video QA/RAG evaluation beyond final-answer accuracy by auditing which timestamped segments were actually consumed.

## Evidence Auditing and Support-Sensitive Evaluation for Multimodal QA

- Slug: under-review-consumed-evidence-audit
- Category: Under Review
- Venue: TACL
- Authors: Anonymous (Under review)
- Role: First Author
- Status: Under Review
- Keywords: evidence auditing, multimodal QA, evaluation
- Detail Page: publications/under-review-consumed-evidence-audit.html
- Per-item Markdown: publications/under-review-consumed-evidence-audit.md
- Source: `publications-data.js`

## Abstract
Anonymous manuscript on consumed-evidence auditing for multimodal QA.

## Contribution
A matched-reader audit framework separates real evidence use from evaluation illusions in multimodal QA.

## Error Propagation Diagnostics for PDF-to-RAG Pipelines Across Representation Families

- Slug: under-review-error-propagation
- Category: Under Review
- Venue: IEEE TPAMI
- Authors: Anonymous (Under review)
- Role: First Author
- Status: Under Review
- Keywords: error propagation, PDF-to-RAG, diagnostics
- Detail Page: publications/under-review-error-propagation.html
- Per-item Markdown: publications/under-review-error-propagation.md
- Source: `publications-data.js`

## Abstract
Anonymous manuscript on error propagation and recoverability in PDF-to-RAG pipelines.

## Contribution
A matched-intervention diagnostic framework analyzing how upstream parsing uncertainty propagates across PDF-to-RAG representation families.

## Evidence-State Control for Repairing, Recalibrating, and Materializing Retrieved Candidates

- Slug: ur-evidence-state-control
- Category: Under Review
- Venue: ML Conference
- Authors: Anonymous (Under review)
- Role: First Author
- Status: Under Review
- Keywords: evidence control, RAG, candidate repair
- Detail Page: publications/ur-evidence-state-control.html
- Per-item Markdown: publications/ur-evidence-state-control.md
- Source: `publications-data.js`

## Contribution
Controllable repair, recalibration, and materialization of retrieved candidates before reader-context packing.

## Answer-Side Attribution Analysis of OCR, Evidence Placement, Answer Policy, and Reader Family

- Slug: ur-answer-attribution-analysis
- Category: Under Review
- Venue: ML Conference
- Authors: Anonymous (Under review)
- Role: First Author
- Status: Under Review
- Keywords: attribution analysis, OCR, reader analysis
- Detail Page: publications/ur-answer-attribution-analysis.html
- Per-item Markdown: publications/ur-answer-attribution-analysis.md
- Source: `publications-data.js`

## Contribution
Attribution analysis of how OCR quality, evidence placement, answer policy, and reader family interact to affect answer-quality gains.

## Multimodal, Multi-Document, Page-Annotated Benchmark Dataset for Open-Domain Document QA

- Slug: ur-multimodal-document-benchmark
- Category: Under Review
- Venue: EMNLP 2026
- Authors: Anonymous (Under review)
- Role: Co-Author
- Status: Under Review
- Keywords: benchmark dataset, multimodal QA, page annotation
- Detail Page: publications/ur-multimodal-document-benchmark.html
- Per-item Markdown: publications/ur-multimodal-document-benchmark.md
- Source: `publications-data.js`

## Contribution
A multimodal multi-document benchmark with page-level annotations for open-domain document QA.

## Comprehensive Survey of Visual Question Answering: Methods, Benchmarks, and Evaluation Paradigms

- Slug: ur-vqa-survey
- Category: Under Review
- Venue: EMNLP 2026
- Authors: Anonymous (Under review)
- Role: Co-Author
- Status: Under Review
- Keywords: VQA, survey, benchmarks
- Detail Page: publications/ur-vqa-survey.html
- Per-item Markdown: publications/ur-vqa-survey.md
- Source: `publications-data.js`

## Contribution
Comprehensive survey of VQA methods, benchmarks, and evaluation paradigms.

## Survey and Audit Framework for Reliability and Safety of Multimodal Agent Systems

- Slug: ur-multimodal-agent-safety-survey
- Category: Under Review
- Venue: EMNLP 2026
- Authors: Anonymous (Under review)
- Role: Co-Author
- Status: Under Review
- Keywords: multimodal agents, safety, audit framework
- Detail Page: publications/ur-multimodal-agent-safety-survey.html
- Per-item Markdown: publications/ur-multimodal-agent-safety-survey.md
- Source: `publications-data.js`

## Contribution
Survey and unified audit framework for the reliability and safety of multimodal agent systems.

## Guiding Retrieval and Reasoning for Reasoning-Efficient Agentic RAG Systems

- Slug: ur-agentic-rag-guidance
- Category: Under Review
- Venue: EMNLP 2026
- Authors: Anonymous (Under review)
- Role: Co-Author
- Status: Under Review
- Keywords: agentic RAG, retrieval guidance, reasoning efficiency
- Detail Page: publications/ur-agentic-rag-guidance.html
- Per-item Markdown: publications/ur-agentic-rag-guidance.md
- Source: `publications-data.js`

## Contribution
Retrieval- and reasoning-guidance methods for reasoning-efficient agentic RAG systems.

## Distance Based Korean WordNet (alias. KorLex) Embedding Model

- Slug: korlex-embeddings
- Category: Journals
- Venue: Applied Artificial Intelligence 38(1), Taylor & Francis
- Date: Sep 2024
- Authors: SeongReol Park*, Joongmin Shin, Sanghyun Cho, Hyuk-Chul Kwon, Jung-Hun Lee
- Role: Co-Author
- Status: Published
- Keywords: knowledge graph, embedding, Korean NLP
- Paper URL: https://www.tandfonline.com/doi/full/10.1080/08839514.2024.2398920
- Figure: paper_figure/Distance Based Korean WordNet(alias. KorLex) Embedding Model_architecture.png
- Detail Page: publications/korlex-embeddings.html
- Per-item Markdown: publications/korlex-embeddings.md
- Source: `publications-data.js`

## Abstract
This paper maps KorLex lexical knowledge into vector space to inject graph-aware semantics into representation learning. The approach improves lexical similarity behavior compared with purely distributional baselines.

## Contribution
Graph-aware lexical embedding model that injects structured knowledge into vector representations.

## Multi-Paragraph Machine Reading Comprehension with Hybrid Reader over Tables and Text

- Slug: hybrid-reader-tables-text
- Category: Journals
- Venue: Applied Artificial Intelligence 38(1), Taylor & Francis
- Date: Jun 2024
- Authors: Sanghyun Cho*, SeongReol Park, Hye-Lynn Kim, Jung-Hun Lee, Joongmin Shin, Hyuk-Chul Kwon
- Role: Co-Author
- Status: Published
- Keywords: table QA, reading comprehension, hybrid model
- Paper URL: https://www.tandfonline.com/doi/full/10.1080/08839514.2024.2367820
- Figure: paper_figure/Multi-Paragraph Machine Reading Comprehension_architecture.png
- Detail Page: publications/hybrid-reader-tables-text.html
- Per-item Markdown: publications/hybrid-reader-tables-text.md
- Source: `publications-data.js`

## Abstract
Research on a hybrid reader model capable of processing both text and tables, enabling effective handling of both types of data while maintaining the performance of existing pre-trained models.

## Contribution
Hybrid reader model that jointly processes text and tables for multi-paragraph machine reading comprehension.

## Search-Based Generation Techniques for Improving LLM Responses: A Comparative Study of Zero-shot and RAG on GPT-3.5 and GPT-4

- Slug: retrieval-generation-techniques-llms
- Category: Domestic Conferences & Theses
- Venue: KIICE 2023
- Date: Oct 2023
- Authors: Joongmin Shin*, SeongReol Park, Jung-Hun Lee
- Role: First Author
- Status: Published
- Keywords: RAG, LLM, comparative study
- Detail Page: publications/retrieval-generation-techniques-llms.html
- Per-item Markdown: publications/retrieval-generation-techniques-llms.md
- Source: `publications-data.js`

## Abstract
A comparative study on zero-shot versus retrieval-augmented generation setups for GPT-3.5 and GPT-4. The analysis outlines reliability and practical implementation benefits of evidence-grounded generation.

## Contribution
Comparative analysis of zero-shot vs. RAG for GPT models, demonstrating benefits of evidence-grounded generation.

## Comparative Analysis of Korean Quality in Large-Scale Language Models Based on Zero-Shot Learning

- Slug: comparative-korean-llm-quality
- Category: Domestic Conferences & Theses
- Venue: HCLT 2023
- Date: Oct 2023
- Authors: Yunah Huh, Aram So, Taemin Lee, Joongmin Shin, Heuiseok Lim
- Role: Co-Author
- Status: Published
- Keywords: Korean LLM, zero-shot, evaluation
- Detail Page: publications/comparative-korean-llm-quality.html
- Per-item Markdown: publications/comparative-korean-llm-quality.md
- Source: `publications-data.js`

## Abstract
Compared the performance of Korean-based LLMs and English-based LLMs on four KoBEST tasks to investigate whether language influences LLM performance. The results confirmed that adding prior knowledge about Korean affects LLM performance.

## Contribution
Investigated language-specific influences on LLM performance across Korean benchmarks.

## QA Pair Passage RAG-based LLM Korean Chatbot Service

- Slug: qa-pair-passage-rag
- Category: Domestic Conferences & Theses
- Venue: HCLT 2023
- Date: Oct 2023
- Authors: Joongmin Shin*, Jaewwok Lee, Kyungmin Kim, Heuiseok Lim
- Role: First Author
- Status: Published
- Keywords: RAG, chatbot, Korean NLP
- Detail Page: publications/qa-pair-passage-rag.html
- Per-item Markdown: publications/qa-pair-passage-rag.md
- Source: `publications-data.js`

## Abstract
This work introduces QA-pair passage construction for Korean retrieval-augmented chatbot systems. The method improves retrieval relevance and reduces hallucination in domain-specific conversational settings.

## Contribution
QA-pair passage construction method for Korean RAG chatbots, reducing hallucination in domain-specific settings.

## A Neural-Symbolic Model for Overcoming Deep Learning Limitations in Korean Dependency Parsing

- Slug: neural-symbolic-korean-dependency-parsing
- Category: Domestic Conferences & Theses
- Venue: Master's Thesis, Pusan National University
- Date: Feb 2023
- Authors: Joongmin Shin*, Hyuk-Chul Kwon
- Role: First Author
- Status: Published
- Keywords: dependency parsing, neural-symbolic, Korean NLP
- Detail Page: publications/neural-symbolic-korean-dependency-parsing.html
- Per-item Markdown: publications/neural-symbolic-korean-dependency-parsing.md
- Source: `publications-data.js`

## Abstract
Proposed and analyzed a novel neural-symbolic model that controls final probability values based on additional linguistic knowledge to overcome the limitations of overfitting and data scarcity issues arising from deep learning's dependence on datasets.

## Contribution
Neural-symbolic parser integrating linguistic constraints to overcome deep learning limitations in dependency parsing.

## EDT5: Proposed Embedding Model of T5 Encoder-Decoder Structure

- Slug: edt5-embeddings
- Category: Domestic Conferences & Theses
- Venue: KSC 2022
- Date: Dec 2022
- Authors: Joongmin Shin*, Jugyung Jung, Jung-Hun Lee, Sanghyun Cho, Minho Kim, Miyeon Kim, Hyuk-Chul Kwon
- Role: First Author
- Status: Published
- Keywords: T5, embedding, encoder-decoder
- Detail Page: publications/edt5-embeddings.html
- Per-item Markdown: publications/edt5-embeddings.md
- Source: `publications-data.js`

## Abstract
Analyzed the structure of T5 and proposed a model architecture that uses both the encoder and decoder for embedding, moving beyond the previous approach that only utilized the encoder for embedding and fine-tuning.

## Contribution
Proposed encoder-decoder embedding architecture for T5, improving upon encoder-only approaches.

## Evaluation of Generalization Performance in Korean Table Machine Reading Comprehension across Domain-Specific Datasets

- Slug: korean-table-mrc-generalization
- Category: Domestic Conferences & Theses
- Venue: KSC 2022
- Date: Dec 2022
- Authors: Hyelin Kim*, Sanghyun Cho, Joongmin Shin, Hyuk-Chul Kwon
- Role: Co-Author
- Status: Published
- Keywords: table QA, generalization, evaluation
- Detail Page: publications/korean-table-mrc-generalization.html
- Per-item Markdown: publications/korean-table-mrc-generalization.md
- Source: `publications-data.js`

## Abstract
Identified the limitations of existing tabular machine reading comprehension models in domain generalization through cross-validation, highlighting the importance of constructing tabular datasets across diverse domains.

## Contribution
Identified domain generalization limitations in tabular MRC models through cross-validation analysis.

## A Dependency Parsing Model with Reinforced Head-Dependent Constraint Rules: Combining Deep Learning and Linguistic Knowledge

- Slug: constraint-enhanced-dependency-parsing
- Category: Domestic Conferences & Theses
- Venue: HCLT 2022
- Date: Oct 2022
- Authors: Joongmin Shin*, Hyuk-Chul Kwon
- Role: First Author
- Status: Published
- Keywords: dependency parsing, linguistic constraints, neural-symbolic
- Detail Page: publications/constraint-enhanced-dependency-parsing.html
- Per-item Markdown: publications/constraint-enhanced-dependency-parsing.md
- Source: `publications-data.js`

## Abstract
Through data and error case analysis, expanded the neural symbolic model from two applied rules to 24, developing a state-of-the-art model.

## Contribution
Expanded neural-symbolic constraint rules from 2 to 24, achieving state-of-the-art dependency parsing.

## Rule-Augmented Neural Network-Based Dependency Parsing

- Slug: ann-dependency-parsing-rules
- Category: Domestic Conferences & Theses
- Venue: KCC 2022
- Date: Jun 2022
- Authors: Joongmin Shin*, Sanghyun Cho, Bongwoo Nam, Hyuk-Chul Kwon
- Role: First Author
- Status: Published
- Keywords: dependency parsing, transformer, rule-based
- Detail Page: publications/ann-dependency-parsing-rules.html
- Per-item Markdown: publications/ann-dependency-parsing-rules.md
- Source: `publications-data.js`

## Abstract
Added a transformer layer to existing graph-based dependency parsing models to incorporate additional feature embeddings and address gradient vanishing issues. Proposed a method that controls the final classification probability values according to predefined rules.

## Contribution
Transformer-augmented dependency parser with rule-based probability control for improved parsing accuracy.

## Korean Machine Reading Comprehension Using Continual Learning

- Slug: continual-learning-korean-mrc
- Category: Domestic Conferences & Theses
- Venue: HCLT 2021
- Date: Oct 2021
- Authors: Joongmin Shin*, Sanghyun Cho, Hyuk-Chul Kwon
- Role: First Author
- Status: Published
- Keywords: continual learning, reading comprehension, Korean NLP
- Detail Page: publications/continual-learning-korean-mrc.html
- Per-item Markdown: publications/continual-learning-korean-mrc.md
- Source: `publications-data.js`

## Abstract
Applied Continual Learning to Korean machine reading comprehension to address the issue of deep learning models losing information from previously learned models.

## Contribution
Applied continual learning to Korean MRC, addressing catastrophic forgetting in sequential model training.
