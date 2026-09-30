// Publications, newest first within each category.
// After editing, run `node scripts/build.mjs` to regenerate the pages.
window.PUBLICATIONS = [
  {
    slug: "admit",
    category: "Top Conferences",
    title: "ADMIT: Support-Gated Memory-Write Admission for Document QA Agents",
    venue: "NeurIPS 2026 (Main)",
    date: "Sep 2026",
    authorsHtml: "<strong>Joongmin Shin*</strong>, Gyuho Shim, Hyeonseok Moon, Jaehyung Seo",
    abstract: "ADMIT treats memory writes by document QA agents as an admission decision rather than a default side effect. Candidate memory entries are gated by whether they are supported by the document evidence the agent actually used, reducing unsupported or unsafe content that persists into later reasoning.",
    contribution: "Support-gated admission control that decides what a document QA agent is allowed to commit to memory.",
    role: "First Author",
    status: "Accepted",
    keywords: ["agent memory", "memory-write safety", "document QA"],
    linkPlaceholders: ["Paper coming soon", "Code coming soon", "arXiv coming soon"],
    venueBadge: {
      path: "Venue/NeurIPS2026.png",
      alt: "NeurIPS 2026 venue logo"
    },
    cardImage: {
      path: "Venue/NeurIPS2026.png",
      alt: "NeurIPS 2026 venue logo"
    },
    doi: "",
    arxiv: ""
  },
  {
    slug: "pilar",
    category: "Top Conferences",
    title: "PILAR: A Page-Grounded Unified Evidence Representation via an Entity-Linked Assertion Graph for Open-Domain QA Agents over Multimodal Document Corpora",
    venue: "EMNLP 2026 (Findings)",
    date: "Aug 2026",
    authorsHtml: "<strong>Joongmin Shin*</strong>, Gyuho Shim, Jung-Hun Lee, Jaehyung Seo",
    abstract: "Open-domain question answering (ODQA) over multimodal document corpora requires linking evidence scattered across text, tables, and figures. Existing systems often store these sources separately or retrieve only coarse pages, which weakens global evidence linking. We present PILAR, a page-grounded unified evidence representation instantiated as an entity-linked assertion graph. PILAR maps sentence-, table-, and figure-derived facts into a common assertion space and uses the graph as a controlled linking layer over robust page retrieval. In a shared-reader evaluation with four agent frameworks, fourteen retrieval backends, and two benchmarks, PILAR achieves the best end-to-end EM/ANLS. Gains are largest on compositional, cross-document, and multimodal questions, with a single-shot improvement of +1.6 EM over flat retrieval, rising to +2.9 on compositional and +5.9 on 3-hop questions. Ablations show that current gains are driven mainly by the text-instantiated slice of the framework, while visual assertions help only after locality-aware filtering. We therefore position PILAR as a unified evidence representation for multimodal ODQA rather than a standalone visual-reasoning module.",
    contribution: "Entity-linked assertion graphs unify text, tables, and figures into a single page-grounded evidence representation for open-domain multimodal QA agents.",
    role: "First Author",
    status: "Accepted",
    keywords: ["evidence graphs", "multimodal QA", "entity linking"],
    legacySlugs: ["under-review-evidence-graph"],
    linkPlaceholders: ["Paper coming soon"],
    venueBadge: {
      path: "Venue/EMNLP2026.png",
      alt: "EMNLP 2026 venue logo"
    },
    cardImage: {
      path: "Venue/EMNLP2026.png",
      alt: "EMNLP 2026 venue logo"
    },
    doi: "",
    arxiv: "2609.32895",
    codeUrl: "https://github.com/ShinJM-maker/PILAR",
    figure: {
      path: "paper_figure/PILAR_architecture.png",
      caption: "PILAR overview: offline construction of the entity-linked assertion graph (left, center) and online page retrieval with controlled graph linking (right)",
      sourcePdf: "paper_figure/PILAR_architecture.pdf"
    },
    sections: [
      { heading: "Method", html: "<p>PILAR converts sentence-, table-, and figure-derived evidence into one subject-predicate-object assertion space. Text blocks are converted into assertions directly; tables, charts, and figures are processed by a VLM over cropped regions together with OCR and caption text, and the resulting assertions are kept only if they are grounded in the corresponding crop. The corpus is then organized into four connected layers:</p><ul><li><strong>Entity layer</strong>: canonical entities and cross-document aliases.</li><li><strong>Assertion layer</strong>: normalized claims in subject-predicate-object form.</li><li><strong>Support layer</strong>: the text spans, table regions, figure crops, and captions that justify each claim.</li><li><strong>Provenance layer</strong>: document ID, page number, section path, and bounding box of each support.</li></ul><p>The entity and assertion layers provide global evidence linking across documents and modalities, while the support and provenance layers preserve the page context needed to verify each claim. At query time, a hybrid BM25 and dense page retriever produces a shortlist, and the graph acts as a controlled linking layer on top of it: it follows local continuity, canonical aliases, and entity-assertion-support links, and a relevance gate suppresses weak expansions. The result is returned to the agent as a single page-grounded evidence packet, so the same backend serves single-shot prompting, iterative query reformulation, and planner-executor agents.</p><figure class=\"paper-figure\"><a href=\"../paper_figure/PILAR_running_example.png\" target=\"_blank\" rel=\"noopener noreferrer\"><img src=\"../paper_figure/PILAR_running_example.png\" alt=\"Running example\" loading=\"lazy\" /></a><figcaption>Running example. A sentence defines when cold-start mode applies, a table lists the model-specific charging settings for BatteryPack-A, and a figure caption in a second document specifies that cold-start operation uses the reduced current. PILAR links these supports through the canonical entity BatteryPack-A and returns one page-grounded evidence packet.</figcaption></figure><figure class=\"paper-figure paper-figure-narrow\"><a href=\"../paper_figure/PILAR_retrieval_trace.png\" target=\"_blank\" rel=\"noopener noreferrer\"><img src=\"../paper_figure/PILAR_retrieval_trace.png\" alt=\"Query-driven retrieval trace\" loading=\"lazy\" /></a><figcaption>Query-driven retrieval trace. A query enters the base shortlist, seeds are matched against entity and assertion fields, the query classifier selects an expansion profile, and graph traversal collects a support neighborhood. The packet builder assembles the final token-budgeted packet for the reader.</figcaption></figure>" },
      { heading: "Results", html: "<p>All text-based and graph backends share the same BM25 and dense page retriever and the same reader (Qwen3-VL-8B); page-based multimodal methods keep their native retrieval and packing pipeline under the same reader and evaluation protocol. Each cell shows EM / ANLS.</p><div class=\"table-scroll\"><table class=\"results-table\"><thead><tr><th rowspan=\"2\">Backend</th><th colspan=\"4\">M3DocVQA (EM / ANLS)</th><th colspan=\"4\">Frames (EM / ANLS)</th></tr><tr><th>Naive RAG</th><th>ReAct</th><th>PlanRAG</th><th>AutoGen</th><th>Naive RAG</th><th>ReAct</th><th>PlanRAG</th><th>AutoGen</th></tr></thead><tbody><tr class=\"group\"><td colspan=\"9\">Text chunk-based RAG</td></tr><tr><td>Flat chunk</td><td>32.0 / 34.4</td><td>31.4 / 34.1</td><td>27.4 / 29.5</td><td>31.8 / 34.5</td><td>13.8 / 16.7</td><td>11.6 / 14.5</td><td>9.1 / 11.2</td><td>13.4 / 16.6</td></tr><tr><td>LumberChunker</td><td>31.2 / 33.6</td><td>30.0 / 32.6</td><td>26.4 / 28.2</td><td>31.0 / 33.4</td><td>13.2 / 16.1</td><td>11.4 / 13.8</td><td>9.0 / 11.2</td><td>13.0 / 15.8</td></tr><tr><td>Meta Chunker</td><td>31.0 / 33.4</td><td>29.8 / 32.4</td><td>26.4 / 28.0</td><td>31.0 / 33.4</td><td>13.0 / 15.9</td><td>11.2 / 13.6</td><td>8.8 / 11.0</td><td>12.8 / 15.6</td></tr><tr><td>Structural chunking</td><td>30.4 / 32.8</td><td>29.2 / 31.8</td><td>25.8 / 27.6</td><td>30.2 / 32.6</td><td>12.6 / 15.4</td><td>10.8 / 13.4</td><td>8.6 / 10.8</td><td>12.4 / 15.0</td></tr><tr class=\"group\"><td colspan=\"9\">Hierarchical / structure-aware retrieval</td></tr><tr><td>RAPTOR</td><td>31.4 / 33.8</td><td>30.2 / 32.8</td><td>26.6 / 28.4</td><td>31.2 / 33.6</td><td>13.0 / 15.9</td><td>11.2 / 13.8</td><td>8.8 / 11.0</td><td>12.8 / 15.6</td></tr><tr><td>MultiDocFusion</td><td>31.4 / 33.9</td><td>30.0 / 32.6</td><td>27.2 / 29.1</td><td>32.0 / 33.7</td><td>12.2 / 15.6</td><td>10.8 / 13.3</td><td>8.3 / 11.0</td><td>11.6 / 14.3</td></tr><tr class=\"group\"><td colspan=\"9\">Graph-augmented chunk retrieval</td></tr><tr><td>HopRAG</td><td>31.6 / 34.0</td><td>30.4 / 33.0</td><td>26.8 / 28.6</td><td>31.4 / 33.8</td><td>13.2 / 16.1</td><td>11.4 / 14.0</td><td>9.0 / 11.2</td><td>13.0 / 15.8</td></tr><tr class=\"group\"><td colspan=\"9\">Entity-KG GraphRAG</td></tr><tr><td>MS GraphRAG</td><td>32.2 / 34.6</td><td>29.8 / 32.5</td><td>26.6 / 28.6</td><td>31.2 / 34.0</td><td>13.6 / 16.3</td><td>11.2 / 13.8</td><td>9.3 / 11.1</td><td>13.0 / 16.0</td></tr><tr><td>LightRAG</td><td>31.6 / 34.2</td><td>31.0 / 33.5</td><td>26.4 / 28.5</td><td>31.6 / 34.3</td><td>12.6 / 15.5</td><td>11.4 / 13.9</td><td>9.1 / 11.4</td><td>13.6 / 16.0</td></tr><tr class=\"group\"><td colspan=\"9\">Page-level multimodal RAG</td></tr><tr><td>M3DocRAG</td><td>19.0 / 25.2</td><td>16.0 / 16.6</td><td>10.0 / 12.7</td><td>19.0 / 25.2</td><td>12.0 / 16.5</td><td>4.0 / 5.3</td><td>1.0 / 3.2</td><td>11.0 / 15.2</td></tr><tr><td>VDocRAG</td><td>20.4 / 26.6</td><td>17.2 / 17.6</td><td>10.8 / 13.4</td><td>20.4 / 26.6</td><td>12.4 / 17.1</td><td>4.2 / 5.4</td><td>1.0 / 3.4</td><td>11.4 / 15.6</td></tr><tr class=\"group\"><td colspan=\"9\">VLM-augmented page retrieval</td></tr><tr><td>SimpleDoc</td><td>24.0 / 28.7</td><td>29.0 / 33.2</td><td>20.0 / 22.9</td><td>24.0 / 29.6</td><td>13.0 / 19.5</td><td>7.0 / 14.0</td><td>6.0 / 10.7</td><td>11.0 / 18.0</td></tr><tr class=\"group\"><td colspan=\"9\">Multimodal GraphRAG</td></tr><tr><td>MoLoRAG</td><td>19.4 / 25.6</td><td>16.4 / 17.0</td><td>10.4 / 13.0</td><td>19.4 / 25.6</td><td>12.2 / 16.8</td><td>4.2 / 5.5</td><td>1.2 / 3.4</td><td>11.2 / 15.4</td></tr><tr class=\"group\"><td colspan=\"9\">Page-grounded unified evidence representation (ours)</td></tr><tr class=\"ours\"><td>PILAR</td><td>33.6 / 36.3</td><td>31.4 / 34.5</td><td>28.0 / 29.8</td><td>32.6 / 35.3</td><td>15.0 / 17.9</td><td>12.4 / 15.2</td><td>10.5 / 12.5</td><td>14.5 / 17.5</td></tr></tbody></table></div><p class=\"table-note\">Main comparison: fourteen backends across four agent frameworks on M3DocVQA and Frames.</p><ul><li>PILAR yields the strongest overall profile, with the clearest gains on M3DocVQA. The Naive RAG gain on M3DocVQA is significant (p = 0.048, paired approximate randomization), and pooling across agents remains significant (p = 0.019).</li><li>Against the strongest competitor in each subset (Naive RAG, M3DocVQA), PILAR improves compositional (+2.9 EM), two-document (+2.2), and multimodal (+1.4) questions, where support must be linked across pages or documents.</li><li>In the strict matched-interface ablation below, the text-only slice of PILAR provides the largest single gain (+1.2 EM over page-only retrieval). Visual assertions hurt in isolation but recover +0.4 EM once locality-aware filtering is added.</li></ul><div class=\"table-scroll\"><table class=\"results-table\"><thead><tr><th>Variant</th><th>Local</th><th>Text slice</th><th>Visual</th><th>Gate</th><th>EM</th><th>ANLS</th><th>ROUGE-L</th></tr></thead><tbody><tr class=\"group\"><td colspan=\"8\">Page-level baselines</td></tr><tr><td>Page-only retrieval</td><td>✗</td><td>✗</td><td>✗</td><td>✗</td><td>32.0</td><td>34.4</td><td>37.3</td></tr><tr><td>Page-only + local prior</td><td>✓</td><td>✗</td><td>✗</td><td>✗</td><td>32.4</td><td>35.6</td><td>38.6</td></tr><tr class=\"group\"><td colspan=\"8\">+ PILAR text-only slice</td></tr><tr><td>PILAR (text-only slice)</td><td>✗</td><td>✓</td><td>✗</td><td>✗</td><td>33.2</td><td>36.1</td><td>38.9</td></tr><tr><td>PILAR (text-only) + local</td><td>✓</td><td>✓</td><td>✗</td><td>✗</td><td>33.0</td><td>36.1</td><td>39.0</td></tr><tr class=\"group\"><td colspan=\"8\">+ Visual assertions</td></tr><tr><td>PILAR (text+visual slice)</td><td>✗</td><td>✓</td><td>✓</td><td>✗</td><td>32.8</td><td>35.6</td><td>38.2</td></tr><tr><td>PILAR (text+visual) + local</td><td>✓</td><td>✓</td><td>✓</td><td>✗</td><td>33.4</td><td>36.1</td><td>38.9</td></tr><tr class=\"ours\"><td>Final (+ gate)</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>33.6</td><td>36.3</td><td>39.1</td></tr></tbody></table></div><p class=\"table-note\">Strict matched-interface ablation (Naive RAG, M3DocVQA). All rows share the same reader, prompt, packet budget, and evaluation split.</p>" }
    ],
    bibtex: "@inproceedings{shin2026pilar,\n  title     = {{PILAR}: A Page-Grounded Unified Evidence Representation via an Entity-Linked Assertion Graph for Open-Domain {QA} Agents over Multimodal Document Corpora},\n  author    = {Shin, Joongmin and Shim, Gyuho and Lee, Jung-hun and Seo, Jaehyung},\n  booktitle = {Findings of the Association for Computational Linguistics: EMNLP 2026},\n  year      = {2026},\n  eprint    = {2609.32895},\n  archivePrefix = {arXiv}\n}"
  },
  {
    slug: "hikey",
    category: "Top Conferences",
    highlight: "Oral",
    title: "HiKEY: Hierarchical Multimodal Retrieval for Open-Domain Document Question Answering",
    venue: "ACL 2026 (Main)",
    date: "Mar 2026",
    authorsHtml: "<strong>Joongmin Shin*</strong>, Gyuho Shim, Jeongbae Park, Jaehyung Seo, Heuiseok Lim",
    abstract: "Retrieval-augmented generation (RAG) for document-based open-domain question answering (ODQA) over large industrial corpora faces two core bottlenecks: routing to the correct document and combining scattered evidence. Flat text chunks and page-level images often fail to (i) identify the right document among thousands of candidates and (ii) connect multimodal evidence, such as tables and figures, within a fixed token budget. We propose HiKEY, a hierarchical tree-based multimodal retrieval framework that treats document hierarchy as a first-class retrieval signal. Rather than simply chunking text, HiKEY uses Document Hierarchical Parsing (DHP) to reconstruct a logical heterogeneous graph with explicit parent–child relations. At query time, HiKEY follows a hierarchical coarse-to-fine process: it first performs global routing with hierarchical indexes to prune the corpus, and then ranks sections with a multimodal fusion strategy that selects the most discriminative evidence. It finally builds a token-efficient evidence subgraph through hybrid structural–semantic packing. Experiments on ODQA benchmarks show that HiKEY outperforms page- and chunk-based baselines, improving retrieval recall by up to 12.9 points and end-to-end QA by up to 6.8 points.",
    contribution: "Hierarchical retrieval for multimodal document QA with structured evidence assembly.",
    role: "First Author",
    status: "Accepted",
    keywords: ["hierarchical retrieval", "multimodal QA", "evidence assembly"],
    legacySlugs: ["acl-anonymous", "under-review-hierarchical-retrieval"],
    linkPlaceholders: ["Code coming soon"],
    venueBadge: {
      path: "Venue/ACL2026.png",
      alt: "ACL 2026 Main venue badge"
    },
    paperUrl: "https://aclanthology.org/2026.acl-long.818/",
    doi: "10.18653/v1/2026.acl-long.818",
    arxiv: "2605.29606",
    figure: {
      path: "paper_figure/HiKEY_architecture.png",
      caption: "HiKEY overview: offline hierarchy-aware graph and index construction, online coarse-to-fine retrieval with Stage-1 document routing and Stage-2 section scoring, and ancestry-aware evidence subgraph assembly for the LVLM reader",
      sourcePdf: "paper_figure/HiKEY_architecture.pdf"
    },
    sections: [
      { heading: "Method", html: "<p>HiKEY follows how people search long documents: it first narrows the scope using the document structure, then reads the relevant sections together with their tables and figures. The framework has an offline phase and an online phase.</p><ul><li><strong>Offline: hierarchy-aware graph and index construction.</strong> The Document Hierarchical Parsing (DHP) module from M3DocDep recovers a logical hierarchy tree from page-level layout blocks. Each text, table, or figure block becomes a node with parent-child edges and an ancestor section path (e.g., <code>Title &gt; Section 5 &gt; 5.3</code>). HiKEY then builds two kinds of index cards: a Doc_card (title and section paths) for global routing, and a Sec_card that stores the text, table, and figure units of each section. Tables and figures without captions are enriched with the logically preceding text node found by traversing the tree.</li><li><strong>Online Stage 1: hierarchical document routing.</strong> Doc_cards are ranked with a hybrid lexical and dense score, and only the top candidate documents are kept.</li><li><strong>Online Stage 2: hierarchical section MaxSim scoring.</strong> Within the candidate documents, each unit is scored with a type-specific encoder (hybrid text scoring for text; visual similarity combined with the upper context for tables and figures). A section takes the maximum score over its units, and the final score combines document-level and section-level evidence.</li><li><strong>Hierarchical subgraph assembly.</strong> For each selected section, HiKEY inserts the anchor unit with its governing headers (ancestry-aware packing). It then fills the remaining token budget with tables and figures under the same parent section and, if budget remains, semantically similar units from other sections (hybrid evidence expansion).</li></ul><figure class=\"paper-figure\"><a href=\"../paper_figure/HiKEY_packing.png\" target=\"_blank\" rel=\"noopener noreferrer\"><img src=\"../paper_figure/HiKEY_packing.png\" alt=\"Schematic of the three packing phases\" loading=\"lazy\" /></a><figcaption>Schematic of the three packing phases. Each phase is budget-gated, and the loop iterates over the ranked Stage-2 anchors.</figcaption></figure>" },
      { heading: "Results", html: "<p>Document-level retrieval on M3DocVQA and FRAMES, averaged over K = 1, ..., 10.</p><div class=\"table-scroll\"><table class=\"results-table\"><thead><tr><th rowspan=\"2\">Method</th><th colspan=\"4\">M3DocVQA</th><th colspan=\"4\">FRAMES</th><th colspan=\"4\">Average</th></tr><tr><th>Recall</th><th>MRR</th><th>Hit</th><th>All</th><th>Recall</th><th>MRR</th><th>Hit</th><th>All</th><th>Recall</th><th>MRR</th><th>Hit</th><th>All</th></tr></thead><tbody><tr class=\"group\"><td colspan=\"13\">Text chunk-based RAG</td></tr><tr><td>Page</td><td>80.6</td><td>91.3</td><td>95.0</td><td>66.4</td><td>65.4</td><td>91.9</td><td>97.1</td><td>34.4</td><td>73.0</td><td>91.6</td><td>96.1</td><td>50.4</td></tr><tr><td>Length chunking</td><td>82.0</td><td>90.6</td><td>95.0</td><td>69.1</td><td>65.3</td><td>92.8</td><td>96.9</td><td>33.8</td><td>73.7</td><td>91.7</td><td>96.0</td><td>51.4</td></tr><tr><td>LumberChunker</td><td>81.5</td><td>90.9</td><td>95.1</td><td>68.1</td><td>64.8</td><td>92.4</td><td>96.8</td><td>33.2</td><td>73.2</td><td>91.7</td><td>95.9</td><td>50.6</td></tr><tr><td>Meta Chunker</td><td>81.2</td><td>90.8</td><td>95.0</td><td>67.7</td><td>64.9</td><td>92.4</td><td>96.8</td><td>33.3</td><td>73.1</td><td>91.6</td><td>95.9</td><td>50.5</td></tr><tr><td>Structural chunking</td><td>80.6</td><td>90.5</td><td>94.8</td><td>66.9</td><td>64.0</td><td>92.1</td><td>96.6</td><td>32.4</td><td>72.3</td><td>91.3</td><td>95.7</td><td>49.7</td></tr><tr><td>MultiDocFusion</td><td>83.0</td><td>91.5</td><td>95.4</td><td>70.5</td><td>66.2</td><td>93.0</td><td>97.2</td><td>34.8</td><td>74.6</td><td>92.2</td><td>96.3</td><td>52.6</td></tr><tr class=\"group\"><td colspan=\"13\">Text-based GraphRAG</td></tr><tr><td>RAPTOR</td><td>81.8</td><td>90.9</td><td>95.0</td><td>68.4</td><td>64.9</td><td>92.0</td><td>96.6</td><td>33.3</td><td>73.4</td><td>91.5</td><td>95.8</td><td>50.9</td></tr><tr><td>HopRAG</td><td>82.3</td><td>91.1</td><td>95.2</td><td>69.3</td><td>65.8</td><td>92.2</td><td>96.8</td><td>34.2</td><td>74.1</td><td>91.7</td><td>96.0</td><td>51.8</td></tr><tr class=\"group\"><td colspan=\"13\">Page-level multimodal RAG</td></tr><tr><td>M3DocRAG</td><td>75.6</td><td>81.8</td><td>89.9</td><td>61.4</td><td>56.8</td><td>83.2</td><td>91.9</td><td>25.0</td><td>66.2</td><td>82.5</td><td>90.9</td><td>43.2</td></tr><tr><td>VDocRAG</td><td>77.1</td><td>83.3</td><td>90.9</td><td>63.2</td><td>58.5</td><td>84.2</td><td>92.5</td><td>26.5</td><td>67.8</td><td>83.8</td><td>91.7</td><td>44.9</td></tr><tr class=\"group\"><td colspan=\"13\">Multimodal GraphRAG</td></tr><tr><td>MoLoRAG</td><td>76.0</td><td>82.4</td><td>90.2</td><td>62.0</td><td>57.4</td><td>83.5</td><td>92.1</td><td>25.5</td><td>66.7</td><td>83.0</td><td>91.2</td><td>43.8</td></tr><tr><td>SimpleDoc</td><td>77.3</td><td>83.5</td><td>91.1</td><td>63.6</td><td>60.6</td><td>85.4</td><td>93.2</td><td>28.4</td><td>69.0</td><td>84.5</td><td>92.2</td><td>46.0</td></tr><tr class=\"ours\"><td>HiKEY</td><td>84.9</td><td>91.8</td><td>96.1</td><td>73.6</td><td>73.3</td><td>94.2</td><td>97.9</td><td>46.2</td><td>79.1</td><td>93.0</td><td>97.0</td><td>59.9</td></tr></tbody></table></div><p>End-to-end QA on M3DocVQA and FRAMES.</p><div class=\"table-scroll\"><table class=\"results-table\"><thead><tr><th rowspan=\"2\">Method</th><th colspan=\"4\">M3DocVQA</th><th colspan=\"4\">FRAMES</th><th colspan=\"4\">Average</th></tr><tr><th>EM</th><th>ANLS</th><th>ROUGE-L</th><th>METEOR</th><th>EM</th><th>ANLS</th><th>ROUGE-L</th><th>METEOR</th><th>EM</th><th>ANLS</th><th>ROUGE-L</th><th>METEOR</th></tr></thead><tbody><tr class=\"group\"><td colspan=\"13\">Text chunk-based RAG</td></tr><tr><td>Page</td><td>21.1</td><td>24.0</td><td>25.0</td><td>19.0</td><td>7.0</td><td>9.8</td><td>12.7</td><td>10.6</td><td>14.1</td><td>16.9</td><td>18.9</td><td>14.8</td></tr><tr><td>Length chunking</td><td>17.5</td><td>19.9</td><td>21.4</td><td>16.7</td><td>6.9</td><td>9.6</td><td>12.9</td><td>10.4</td><td>12.2</td><td>14.8</td><td>17.2</td><td>13.6</td></tr><tr><td>LumberChunker</td><td>21.4</td><td>24.2</td><td>25.6</td><td>19.5</td><td>6.8</td><td>9.4</td><td>12.5</td><td>10.2</td><td>14.1</td><td>16.8</td><td>19.1</td><td>14.9</td></tr><tr><td>Meta Chunker</td><td>21.3</td><td>24.1</td><td>25.5</td><td>19.4</td><td>6.8</td><td>9.4</td><td>12.5</td><td>10.2</td><td>14.1</td><td>16.8</td><td>19.0</td><td>14.8</td></tr><tr><td>Structural chunking</td><td>20.6</td><td>23.3</td><td>24.6</td><td>18.8</td><td>6.4</td><td>8.9</td><td>12.0</td><td>9.7</td><td>13.5</td><td>16.1</td><td>18.3</td><td>14.3</td></tr><tr><td>MultiDocFusion</td><td>23.0</td><td>25.9</td><td>27.3</td><td>20.6</td><td>7.8</td><td>10.8</td><td>13.9</td><td>11.6</td><td>15.4</td><td>18.4</td><td>20.6</td><td>16.1</td></tr><tr class=\"group\"><td colspan=\"13\">Text-based GraphRAG</td></tr><tr><td>RAPTOR</td><td>22.5</td><td>25.3</td><td>26.7</td><td>20.2</td><td>7.5</td><td>10.4</td><td>13.5</td><td>11.2</td><td>15.0</td><td>17.9</td><td>20.1</td><td>15.7</td></tr><tr><td>HopRAG</td><td>22.8</td><td>25.7</td><td>27.1</td><td>20.5</td><td>7.7</td><td>10.7</td><td>13.8</td><td>11.5</td><td>15.3</td><td>18.2</td><td>20.5</td><td>16.0</td></tr><tr class=\"group\"><td colspan=\"13\">Page-level multimodal RAG</td></tr><tr><td>M3DocRAG</td><td>24.1</td><td>27.0</td><td>28.2</td><td>21.3</td><td>4.2</td><td>5.9</td><td>9.0</td><td>6.7</td><td>14.2</td><td>16.5</td><td>18.6</td><td>14.0</td></tr><tr><td>VDocRAG</td><td>24.4</td><td>27.4</td><td>28.8</td><td>21.6</td><td>4.5</td><td>6.3</td><td>9.4</td><td>7.1</td><td>14.5</td><td>16.8</td><td>19.1</td><td>14.4</td></tr><tr class=\"group\"><td colspan=\"13\">Multimodal GraphRAG</td></tr><tr><td>MoLoRAG</td><td>25.2</td><td>28.2</td><td>30.0</td><td>22.4</td><td>4.7</td><td>6.5</td><td>9.6</td><td>7.3</td><td>15.0</td><td>17.4</td><td>19.8</td><td>14.9</td></tr><tr><td>SimpleDoc</td><td>25.6</td><td>28.7</td><td>30.1</td><td>22.5</td><td>4.9</td><td>6.8</td><td>9.9</td><td>7.6</td><td>15.3</td><td>17.8</td><td>20.0</td><td>15.1</td></tr><tr class=\"ours\"><td>HiKEY</td><td>27.5</td><td>30.7</td><td>32.2</td><td>23.9</td><td>10.5</td><td>14.6</td><td>17.7</td><td>15.4</td><td>19.0</td><td>22.7</td><td>25.0</td><td>19.7</td></tr></tbody></table></div><ul><li>HiKEY outperforms page- and chunk-based baselines on both benchmarks, improving retrieval recall by up to 12.9 points and end-to-end QA by up to 6.8 points.</li><li>In the ablation below, field-separated hierarchy indexing raises averaged R@10 from 81.2 (body only) to 88.6, and coarse-to-fine routing outperforms document-only (87.7) and section-only (76.1) routing.</li></ul><div class=\"table-scroll\"><table class=\"results-table\"><thead><tr><th>Ablation component</th><th>Avg R@10</th></tr></thead><tbody><tr class=\"group\"><td colspan=\"2\">Stage-1: Hierarchy Indexing Strategy</td></tr><tr><td>Body-only (No hierarchy)</td><td>81.2</td></tr><tr><td>+ Concat Title/Header</td><td>84.6</td></tr><tr class=\"ours\"><td>+ Field-separated Hierarchy (Ours)</td><td>88.6</td></tr><tr class=\"group\"><td colspan=\"2\">Stage-1: Routing Strategy</td></tr><tr><td>Doc-only routing</td><td>87.7</td></tr><tr><td>Sec-only routing</td><td>76.1</td></tr><tr class=\"ours\"><td>Doc → Sec (Coarse-to-Fine) (Ours)</td><td>88.6</td></tr><tr class=\"group\"><td colspan=\"2\">Stage-2: Multimodal Fusion Strategy</td></tr><tr><td>Global Search (No routing)</td><td>81.0</td></tr><tr><td>Candidate Docs Only</td><td>87.9</td></tr><tr class=\"ours\"><td>+ Anchor Subtree (Ours)</td><td>88.6</td></tr><tr><td>BM25 only</td><td>87.6</td></tr><tr><td>+ Text dense</td><td>88.2</td></tr><tr><td>+ Visual dense (Full Fusion)</td><td>88.6</td></tr></tbody></table></div><p class=\"table-note\">Ablation of Stage-1 hierarchy indexing and routing, and of Stage-2 retrieval scope and multimodal fusion signals (averaged R@10).</p>" }
    ],
    bibtex: "@inproceedings{shin-etal-2026-hikey,\n    title = \"{H}i{KEY}: Hierarchical Multimodal Retrieval for Open-Domain Document Question Answering\",\n    author = \"Shin, Joongmin  and\n      Shim, Gyuho  and\n      Park, Jeongbae  and\n      Seo, Jaehyung  and\n      Lim, Heuiseok\",\n    editor = \"Liakata, Maria  and\n      Moreira, Viviane P.  and\n      Zhang, Jiajun  and\n      Jurgens, David\",\n    booktitle = \"Proceedings of the 64th Annual Meeting of the {A}ssociation for {C}omputational {L}inguistics (Volume 1: Long Papers)\",\n    month = jul,\n    year = \"2026\",\n    address = \"San Diego, California, United States\",\n    publisher = \"Association for Computational Linguistics\",\n    url = \"https://aclanthology.org/2026.acl-long.818/\",\n    doi = \"10.18653/v1/2026.acl-long.818\",\n    pages = \"17967--17987\",\n    ISBN = \"979-8-89176-390-6\"\n}"
  },
  {
    slug: "m3docdep",
    category: "Top Conferences",
    title: "M3DocDep: Multi-modal, Multi-page, Multi-document Dependency Chunking with Large Vision-Language Models",
    venue: "CVPR 2026 (Main)",
    date: "Feb 2026",
    authorsHtml: "<strong>Joongmin Shin*</strong>, Jeongbae Park, Jaehyung Seo, Heuiseok Lim",
    abstract: "In long, multi-page industrial documents, retrieval-augmented generation (RAG) depends heavily on whether chunk boundaries follow the document’s true structure. Existing text-centric chunkers and generative hierarchy parsers often miss cross-page parent–child relations, figure/table–caption bindings, and boundary cues, which leads to fragmented or redundant chunks and degrades both retrieval and answer quality. We propose M3DocDep, an LVLM-based pipeline that first recovers block-level dependencies and then constructs chunks along the recovered document tree. The pipeline uses SharedDet as a common DP+OCR preprocessing layer, extracts multi-modal block embeddings with boundary-aware SoftROI pooling, scores candidate parent–child edges with a biaffine head, decodes a globally valid dependency tree with MST constraints, and builds tree-guided chunks annotated with section paths and page ranges. Under a shared-block evaluation protocol, M3DocDep improves STEDS by +28.5–39.6% on DHP benchmarks, retrieval nDCG by +1.1–15.3%, and QA ANLS by +4.5–15.3% on corpus-level RAG benchmarks. These results show that recovering document dependencies before chunking yields more coherent retrieval units for long, multi-page multi-modal documents.",
    contribution: "LVLM-based dependency chunking that reconstructs cross-page structure for long-document retrieval and QA.",
    role: "First Author",
    status: "Accepted",
    keywords: ["document structure", "LVLM", "chunking", "retrieval"],
    venueBadge: {
      path: "Venue/CVPR2026.png",
      alt: "CVPR 2026 Main venue badge"
    },
    doi: "",
    arxiv: "2605.18774",
    paperUrl: "https://openaccess.thecvf.com/content/CVPR2026/html/Shin_M3DocDep_Multi-modal_Multi-page_Multi-document_Dependency_Chunking_with_Large_Vision-Language_Models_CVPR_2026_paper.html",
    figure: {
      path: "paper_figure/M3DocDep_architecture_preview.png",
      caption: "M3DocDep architecture",
      sourcePdf: "paper_figure/M3DocDep_architecture.pdf"
    },
    projectUrl: "https://shinjm-maker.github.io/M3DocDep/",
    sections: [
      { heading: "Method", html: "<p>M3DocDep treats chunking as a dependency-recovery problem: it first reconstructs a global document dependency tree with a vision-language model, then assembles chunks from coherent section subtrees of that tree.</p><ul><li><strong>(a) SharedDet (DP + OCR).</strong> Document parsing and OCR run once per document and produce a stable set of layout blocks (titles, headers, text, tables, figures, captions) in a unified coordinate frame. These global document blocks are shared by all downstream models, which keeps component-wise comparisons fair.</li><li><strong>(b) LVLM-based multi-modal block embedding.</strong> Each page passes through a frozen vision-language model to produce page multi-modal tokens. A SoftROI embedder pools the tokens inside each block with boundary-aware weighting that is robust to box jitter and OCR noise.</li><li><strong>(c) Global document dependency parsing.</strong> A biaffine head scores parent candidates for each block, with a header-centric prior that restricts candidates to plausible attachments. An MST decoder turns the edge scores into a globally valid dependency tree (single root, single parent, acyclic), including cross-page links.</li><li><strong>(d) Structure-aware dependency chunking.</strong> The tree is traversed by section subtree, figures and tables are kept with their captions, and every chunk is annotated with its section path, page range, and block IDs.</li></ul>" },
      { heading: "Qualitative Example", html: "<p>A five-page physics paper on photon trajectories around a Kerr black hole: Fig. 1 sits on page 2, and its section content is spread over pages 1 to 3.</p><figure class=\"paper-figure\"><a href=\"../paper_figure/M3DocDep_qual_hierarchy_tree.png\" target=\"_blank\" rel=\"noopener noreferrer\"><img src=\"../paper_figure/M3DocDep_qual_hierarchy_tree.png\" alt=\"Recovered dependency tree\" loading=\"lazy\" /></a><div class=\"figure-row\"><a href=\"../paper_figure/M3DocDep_qual_multipage_stack.png\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"flex: 0.211\"><img src=\"../paper_figure/M3DocDep_qual_multipage_stack.png\" alt=\"Five-page input\" loading=\"lazy\" /></a><a href=\"../paper_figure/M3DocDep_qual_chunk_card.png\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"flex: 0.642\"><img src=\"../paper_figure/M3DocDep_qual_chunk_card.png\" alt=\"Output chunk\" loading=\"lazy\" /></a></div><figcaption>End-to-end qualitative example. Top: the recovered dependency tree, where the key path 1:title → 17:section-title → 19:figure → 20:figure-caption keeps the figure bound to its caption under the governing section. Bottom: the five-page input (left) and the structure-aware chunk that M3DocDep emits, annotated with the section path and page span (right).</figcaption></figure><p>The <a href=\"https://shinjm-maker.github.io/M3DocDep/\">project page</a> includes an interactive comparison of the chunks produced by each baseline for this document.</p>" },
      { heading: "Results", html: "<p>Document hierarchical parsing on HRDS, HRDH, and DocHieNet (%). Tree-aware models and M3DocDep use the same ground-truth layout blocks.</p><div class=\"table-scroll\"><table class=\"results-table\"><thead><tr><th rowspan=\"2\">Method</th><th colspan=\"2\">HRDS</th><th colspan=\"2\">HRDH</th><th colspan=\"2\">DocHieNet</th></tr><tr><th>F1</th><th>STEDS</th><th>F1</th><th>STEDS</th><th>F1</th><th>STEDS</th></tr></thead><tbody><tr class=\"group\"><td colspan=\"7\">Image-understanding LVLMs</td></tr><tr><td>GPT-5</td><td>35.39</td><td>26.27</td><td>32.03</td><td>24.52</td><td>29.12</td><td>21.94</td></tr><tr><td>LLaVA-OneVision-1.5</td><td>27.61</td><td>12.93</td><td>26.30</td><td>18.21</td><td>17.78</td><td>8.57</td></tr><tr><td>InternVL-3.5</td><td>28.40</td><td>14.47</td><td>27.57</td><td>19.98</td><td>18.18</td><td>9.60</td></tr><tr><td>Qwen2.5-VL</td><td>28.41</td><td>14.51</td><td>27.57</td><td>19.99</td><td>18.20</td><td>9.62</td></tr><tr class=\"group\"><td colspan=\"7\">Tree-aware models (shared GT layout)</td></tr><tr><td>DocParser</td><td>47.09</td><td>31.03</td><td>35.41</td><td>27.15</td><td>10.68</td><td>4.31</td></tr><tr><td>DSG</td><td>48.43</td><td>32.13</td><td>36.42</td><td>27.69</td><td>26.71</td><td>19.45</td></tr><tr><td>DSPS</td><td>65.27</td><td>59.57</td><td>54.06</td><td>38.41</td><td>35.61</td><td>23.81</td></tr><tr><td>DSHP-LLM</td><td>44.90</td><td>29.52</td><td>61.29</td><td>51.34</td><td>64.29</td><td>53.49</td></tr><tr><td>Qwen2.5-VL–DHP–SFT</td><td>50.97</td><td>46.75</td><td>43.05</td><td>41.02</td><td>42.85</td><td>40.39</td></tr><tr class=\"ours\"><td>M3DocDep</td><td>82.87</td><td>76.52</td><td>77.75</td><td>71.65</td><td>76.01</td><td>70.83</td></tr></tbody></table></div><p>Retrieval by chunking method (%), macro-averaged over top-k ∈ {1, 2, 3, 4} and over BGE, E5, BM25, and MM-Embed retrievers.</p><div class=\"table-scroll\"><table class=\"results-table\"><thead><tr><th rowspan=\"2\">Chunking method</th><th colspan=\"3\">DUDE</th><th colspan=\"3\">MP-DocVQA</th><th colspan=\"3\">CUAD</th><th colspan=\"3\">MOAMOB</th></tr><tr><th>R</th><th>P</th><th>nDCG</th><th>R</th><th>P</th><th>nDCG</th><th>R</th><th>P</th><th>nDCG</th><th>R</th><th>P</th><th>nDCG</th></tr></thead><tbody><tr><td>Length chunking</td><td>26.28</td><td>16.86</td><td>21.66</td><td>25.23</td><td>15.87</td><td>19.33</td><td>90.11</td><td>85.37</td><td>87.76</td><td>64.62</td><td>56.76</td><td>62.09</td></tr><tr><td>Semantic chunking</td><td>9.56</td><td>5.49</td><td>7.75</td><td>9.39</td><td>5.24</td><td>6.80</td><td>76.84</td><td>67.19</td><td>71.81</td><td>27.37</td><td>19.50</td><td>24.53</td></tr><tr><td>LumberChunker</td><td>23.95</td><td>15.33</td><td>19.86</td><td>21.52</td><td>12.98</td><td>16.09</td><td>90.31</td><td>85.76</td><td>88.00</td><td>61.30</td><td>52.05</td><td>56.92</td></tr><tr><td>Perplexity chunking</td><td>24.28</td><td>15.59</td><td>20.20</td><td>21.59</td><td>13.18</td><td>16.29</td><td>88.69</td><td>83.95</td><td>86.03</td><td>61.73</td><td>52.41</td><td>57.85</td></tr><tr><td>Structure-based chunking</td><td>22.19</td><td>14.50</td><td>18.62</td><td>20.36</td><td>12.30</td><td>15.24</td><td>88.44</td><td>83.11</td><td>85.81</td><td>55.44</td><td>46.62</td><td>51.49</td></tr><tr><td>MultiDocFusion</td><td>29.27</td><td>20.01</td><td>25.05</td><td>27.05</td><td>17.59</td><td>21.31</td><td>90.21</td><td>86.51</td><td>88.19</td><td>67.58</td><td>61.84</td><td>65.54</td></tr><tr class=\"ours\"><td>M3DocDep</td><td>35.12</td><td>24.91</td><td>27.81</td><td>31.28</td><td>19.76</td><td>24.52</td><td>91.25</td><td>87.23</td><td>89.12</td><td>76.97</td><td>72.83</td><td>75.54</td></tr></tbody></table></div><p>QA performance by chunking method (%), averaged over LLaVA-OneVision-1.5, InternVL-3.5, and Qwen2.5-VL readers. R-L = ROUGE-L, MTR = METEOR.</p><div class=\"table-scroll\"><table class=\"results-table\"><thead><tr><th rowspan=\"2\">Chunking method</th><th colspan=\"3\">DUDE</th><th colspan=\"3\">MP-DocVQA</th><th colspan=\"3\">CUAD</th><th colspan=\"3\">MOAMOB</th></tr><tr><th>ANLS</th><th>R-L</th><th>MTR</th><th>ANLS</th><th>R-L</th><th>MTR</th><th>ANLS</th><th>R-L</th><th>MTR</th><th>ANLS</th><th>R-L</th><th>MTR</th></tr></thead><tbody><tr><td>Length chunking</td><td>16.11</td><td>14.44</td><td>19.88</td><td>13.98</td><td>9.66</td><td>14.08</td><td>25.85</td><td>16.77</td><td>16.62</td><td>24.97</td><td>8.23</td><td>11.15</td></tr><tr><td>Semantic chunking</td><td>15.48</td><td>12.61</td><td>16.57</td><td>13.32</td><td>8.05</td><td>9.78</td><td>25.93</td><td>14.91</td><td>14.68</td><td>24.55</td><td>8.46</td><td>10.43</td></tr><tr><td>LumberChunker</td><td>15.31</td><td>12.84</td><td>17.52</td><td>13.07</td><td>7.69</td><td>9.93</td><td>26.57</td><td>16.30</td><td>16.50</td><td>25.36</td><td>8.48</td><td>11.67</td></tr><tr><td>Perplexity chunking</td><td>16.53</td><td>13.90</td><td>18.55</td><td>13.44</td><td>7.51</td><td>9.50</td><td>26.41</td><td>16.46</td><td>15.24</td><td>25.32</td><td>8.94</td><td>11.90</td></tr><tr><td>Structure-based chunking</td><td>17.51</td><td>14.89</td><td>19.21</td><td>15.37</td><td>9.80</td><td>12.78</td><td>24.98</td><td>15.56</td><td>15.91</td><td>25.01</td><td>9.79</td><td>11.14</td></tr><tr><td>MultiDocFusion</td><td>18.59</td><td>16.92</td><td>22.85</td><td>16.15</td><td>13.16</td><td>18.50</td><td>27.38</td><td>17.62</td><td>16.50</td><td>25.96</td><td>9.16</td><td>12.57</td></tr><tr class=\"ours\"><td>M3DocDep</td><td>21.43</td><td>18.21</td><td>25.12</td><td>18.17</td><td>15.29</td><td>20.14</td><td>29.25</td><td>19.78</td><td>18.23</td><td>27.14</td><td>10.22</td><td>14.68</td></tr></tbody></table></div><ul><li>M3DocDep improves STEDS by +28.5–39.6% on DHP benchmarks, retrieval nDCG by +1.1–15.3%, and QA ANLS by +4.5–15.3% on corpus-level RAG benchmarks.</li><li>Disabling cross-page edges or replacing MST decoding with local argmax reduces macro-averaged F1/STEDS by 7.15/9.26 and 5.19/6.70 points, respectively.</li></ul><div class=\"table-scroll\"><table class=\"results-table\"><thead><tr><th>Variant</th><th>Avg F1</th><th>Avg STEDS</th></tr></thead><tbody><tr class=\"ours\"><td>Full</td><td>78.88</td><td>73.00</td></tr><tr><td>MST → local argmax</td><td>73.68 (−5.19)</td><td>66.30 (−6.70)</td></tr><tr><td>Disallow cross-page edges</td><td>71.73 (−7.15)</td><td>63.74 (−9.26)</td></tr></tbody></table></div><p class=\"table-note\">Condensed ablation (%), macro-averaged over HRDS, HRDH, and DocHieNet.</p>" }
    ],
    bibtex: "@InProceedings{Shin_2026_CVPR,\n    author    = {Shin, Joongmin and Park, Jeongbae and Seo, Jaehyung and Lim, Heuiseok},\n    title     = {M3DocDep: Multi-modal, Multi-page, Multi-document Dependency Chunking with Large Vision-Language Models},\n    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},\n    month     = {June},\n    year      = {2026},\n    pages     = {16603-16613}\n}"
  },
  {
    slug: "multidocfusion",
    category: "Top Conferences",
    title: "MultiDocFusion: Hierarchical and Multimodal Chunking Pipeline for Enhanced RAG on Long Industrial Documents",
    venue: "EMNLP 2025 (Main)",
    date: "Aug 2025",
    authorsHtml: "<strong>Joongmin Shin*</strong>, Chanjun Park, Jeongbae Park, Jaehyung Seo, Heuiseok Lim",
    abstract: "RAG-based QA has emerged as a powerful method for processing long industrial documents. However, conventional text chunking approaches often neglect the complex structures of long industrial documents, causing information loss and reduced answer quality. To address this, we introduce MultiDocFusion, a multimodal chunking pipeline that integrates: (i) detection of document regions using vision-based document parsing, (ii) text extraction from these regions via OCR, (iii) reconstruction of document structure into a hierarchical tree using large language model (LLM)-based document section hierarchical parsing (DSHP-LLM), and (iv) construction of hierarchical chunks through DFS-based Grouping. Extensive experiments across industrial benchmarks demonstrate that MultiDocFusion improves retrieval precision by 8–15% and ANLS QA scores by 2–3% compared to baselines, emphasizing the critical role of explicitly leveraging document hierarchy for multimodal document-based QA. These significant performance gains underscore the necessity of structure-aware chunking in enhancing the fidelity of RAG-based QA systems.",
    contribution: "A hierarchical multimodal chunking pipeline that preserves layout and improves evidence composition in industrial RAG.",
    role: "First Author",
    status: "Published",
    keywords: ["hierarchical chunking", "multimodal", "RAG", "industrial"],
    venueBadge: {
      path: "Venue/EMNLP2025.png",
      alt: "EMNLP 2025 venue badge"
    },
    paperUrl: "https://aclanthology.org/2025.emnlp-main.1062/",
    doi: "10.18653/v1/2025.emnlp-main.1062",
    arxiv: "2604.12352",
    figure: {
      path: "paper_figure/MultiDocFusion_architecture.png",
      caption: "MultiDocFusion pipeline: (a) document parsing, (b) OCR, (c) DSHP-LLM hierarchy reconstruction, and (d) DFS-based grouping into hierarchical chunks"
    },
    sections: [
      { heading: "Method", html: "<p>MultiDocFusion (Multimodal Document Structure Fusion) combines the visual layout and the hierarchical section structure of long industrial documents to build better retrieval units. It works on PDFs, scanned images, and documents with complex layouts, and supports corpus-level multi-document RAG. The pipeline has four stages:</p><ul><li><strong>(a) Document parsing (DP).</strong> Vision models detect titles, section headers, text blocks, tables, and figures on each page and assign each segment a type and bounding box, producing a page-by-page layout structure.</li><li><strong>(b) OCR.</strong> Each segment is sent to an OCR engine, and the recognized text is linked back to its bounding box to form an annotated layout.</li><li><strong>(c) DSHP-LLM.</strong> An LLM instruction-tuned with LoRA on public document-hierarchy datasets reads the list of candidate section headers and assigns each header a parent (e.g., <code>ID:3 Parent:2</code>), forming a header tree. It then scans the spatially sorted list of all segments and attaches tables, figures, and text blocks to the current header, which yields a full document hierarchical tree.</li><li><strong>(d) DFS-based grouping.</strong> A depth-first traversal of the tree aggregates each node's text with its descendants and splits a chunk when it exceeds a maximum length. Each chunk keeps its hierarchy as Markdown headers, so a subsection is retrieved together with its enclosing sections.</li></ul><figure class=\"paper-figure\"><a href=\"../paper_figure/MultiDocFusion_pipeline_example.png\" target=\"_blank\" rel=\"noopener noreferrer\"><img src=\"../paper_figure/MultiDocFusion_pipeline_example.png\" alt=\"Step-by-step example on a long industrial document: (a) layout regions detected by document parsing, (b) OCR text linked to bounding boxes, (c) section headers parsed into a hierarchical tree with general nodes attached by spatial order, and (d) hierarchy-aware chunks produced by DFS-based grouping\" loading=\"lazy\" /></a><figcaption>Step-by-step example on a long industrial document: (a) layout regions detected by document parsing, (b) OCR text linked to bounding boxes, (c) section headers parsed into a hierarchical tree with general nodes attached by spatial order, and (d) hierarchy-aware chunks produced by DFS-based grouping.</figcaption></figure>" },
      { heading: "Results", html: "<p>Section-header hierarchy parsing on DocHieNet and HRDH. ↳ marks DSHP-LLM applied to the backbone above; bold marks an improvement over that backbone.</p><div class=\"table-scroll\"><table class=\"results-table\"><thead><tr><th rowspan=\"2\">Model</th><th colspan=\"2\">DocHieNet</th><th colspan=\"2\">HRDH</th></tr><tr><th>F1</th><th>TEDS</th><th>F1</th><th>TEDS</th></tr></thead><tbody><tr><td>GPT-4</td><td>0.5139</td><td>0.6961</td><td>0.2594</td><td>0.3342</td></tr><tr><td>Llama-3.2-3B</td><td>0.2558</td><td>0.5464</td><td>0.4389</td><td>0.4904</td></tr><tr class=\"hl\"><td>↳ DSHP-LLM</td><td><strong>0.4894</strong></td><td><strong>0.7549</strong></td><td><strong>0.8664</strong></td><td><strong>0.8459</strong></td></tr><tr><td>Qwen-2.5-3B</td><td>0.4122</td><td>0.6995</td><td>0.3299</td><td>0.3734</td></tr><tr class=\"hl\"><td>↳ DSHP-LLM</td><td><strong>0.4808</strong></td><td>0.6957</td><td><strong>0.8856</strong></td><td><strong>0.8658</strong></td></tr><tr><td>Mistral-8B</td><td>0.3907</td><td>0.6559</td><td>0.3445</td><td>0.3974</td></tr><tr class=\"hl\"><td>↳ DSHP-LLM</td><td><strong>0.6291</strong></td><td><strong>0.8230</strong></td><td><strong>0.9321</strong></td><td><strong>0.9199</strong></td></tr><tr><td>Qwen-2.5-7B</td><td>0.5230</td><td>0.7356</td><td>0.2962</td><td>0.3807</td></tr><tr class=\"hl\"><td>↳ DSHP-LLM</td><td><strong>0.5565</strong></td><td><strong>0.8104</strong></td><td><strong>0.6330</strong></td><td><strong>0.6381</strong></td></tr></tbody></table></div><p>Retrieval by chunking method, averaged over top-k = 1 to 4. Bold marks the best score in each column.</p><div class=\"table-scroll\"><table class=\"results-table\"><thead><tr><th rowspan=\"2\">Chunking method</th><th colspan=\"3\">DUDE</th><th colspan=\"3\">MPVQA</th><th colspan=\"3\">CUAD</th><th colspan=\"3\">MOAMOB</th></tr><tr><th>Recall</th><th>Precision</th><th>nDCG</th><th>Recall</th><th>Precision</th><th>nDCG</th><th>Recall</th><th>Precision</th><th>nDCG</th><th>Recall</th><th>Precision</th><th>nDCG</th></tr></thead><tbody><tr><td>Length chunking</td><td>0.2628</td><td>0.1686</td><td>0.2166</td><td>0.2523</td><td>0.1587</td><td>0.1933</td><td>0.9011</td><td>0.8537</td><td>0.8776</td><td>0.6462</td><td>0.5676</td><td>0.6209</td></tr><tr><td>Semantic chunking</td><td>0.0956</td><td>0.0549</td><td>0.0775</td><td>0.0939</td><td>0.0524</td><td>0.0680</td><td>0.7684</td><td>0.6719</td><td>0.7181</td><td>0.2737</td><td>0.1950</td><td>0.2453</td></tr><tr><td>LumberChunker</td><td>0.2395</td><td>0.1533</td><td>0.1986</td><td>0.2152</td><td>0.1298</td><td>0.1609</td><td><strong>0.9031</strong></td><td>0.8576</td><td>0.8800</td><td>0.6130</td><td>0.5205</td><td>0.5692</td></tr><tr><td>Perplexity chunking</td><td>0.2428</td><td>0.1559</td><td>0.2020</td><td>0.2159</td><td>0.1318</td><td>0.1629</td><td>0.8869</td><td>0.8395</td><td>0.8603</td><td>0.6173</td><td>0.5241</td><td>0.5785</td></tr><tr><td>Structure-based chunking</td><td>0.2219</td><td>0.1450</td><td>0.1862</td><td>0.2036</td><td>0.1230</td><td>0.1524</td><td>0.8844</td><td>0.8311</td><td>0.8581</td><td>0.5544</td><td>0.4662</td><td>0.5149</td></tr><tr class=\"hl\"><td>MultiDocFusion</td><td><strong>0.2927</strong></td><td><strong>0.2001</strong></td><td><strong>0.2505</strong></td><td><strong>0.2705</strong></td><td><strong>0.1759</strong></td><td><strong>0.2131</strong></td><td>0.9021</td><td><strong>0.8651</strong></td><td><strong>0.8819</strong></td><td><strong>0.6758</strong></td><td><strong>0.6184</strong></td><td><strong>0.6554</strong></td></tr></tbody></table></div><p>QA performance by chunking method, averaged over Llama-3.2-3B, Mistral-8B, and Qwen-2.5-7B readers. Bold marks the best score in each column.</p><div class=\"table-scroll\"><table class=\"results-table\"><thead><tr><th rowspan=\"2\">Chunking method</th><th colspan=\"3\">DUDE</th><th colspan=\"3\">MPVQA</th><th colspan=\"3\">CUAD</th><th colspan=\"3\">MOAMOB</th></tr><tr><th>ANLS</th><th>ROUGE-L</th><th>METEOR</th><th>ANLS</th><th>ROUGE-L</th><th>METEOR</th><th>ANLS</th><th>ROUGE-L</th><th>METEOR</th><th>ANLS</th><th>ROUGE-L</th><th>METEOR</th></tr></thead><tbody><tr><td>Length chunking</td><td>0.1611</td><td>0.1444</td><td>0.1988</td><td>0.1398</td><td>0.0966</td><td>0.1408</td><td>0.2585</td><td>0.1677</td><td><strong>0.1662</strong></td><td>0.2497</td><td>0.0823</td><td>0.1115</td></tr><tr><td>Semantic chunking</td><td>0.1548</td><td>0.1261</td><td>0.1657</td><td>0.1332</td><td>0.0805</td><td>0.0978</td><td>0.2593</td><td>0.1491</td><td>0.1468</td><td>0.2455</td><td>0.0846</td><td>0.1043</td></tr><tr><td>LumberChunker</td><td>0.1531</td><td>0.1284</td><td>0.1752</td><td>0.1307</td><td>0.0769</td><td>0.0993</td><td>0.2657</td><td>0.1630</td><td>0.1650</td><td>0.2536</td><td>0.0848</td><td>0.1167</td></tr><tr><td>Perplexity chunking</td><td>0.1653</td><td>0.1390</td><td>0.1855</td><td>0.1344</td><td>0.0751</td><td>0.0950</td><td>0.2641</td><td>0.1646</td><td>0.1524</td><td>0.2532</td><td>0.0894</td><td>0.1190</td></tr><tr><td>Structure-based chunking</td><td>0.1751</td><td>0.1489</td><td>0.1921</td><td>0.1537</td><td>0.0980</td><td>0.1278</td><td>0.2498</td><td>0.1556</td><td>0.1591</td><td>0.2501</td><td><strong>0.0979</strong></td><td>0.1114</td></tr><tr class=\"hl\"><td>MultiDocFusion</td><td><strong>0.1859</strong></td><td><strong>0.1692</strong></td><td><strong>0.2285</strong></td><td><strong>0.1615</strong></td><td><strong>0.1316</strong></td><td><strong>0.1850</strong></td><td><strong>0.2738</strong></td><td><strong>0.1762</strong></td><td>0.1650</td><td><strong>0.2596</strong></td><td>0.0916</td><td><strong>0.1257</strong></td></tr></tbody></table></div><ul><li>MultiDocFusion improves retrieval precision by 8–15% and ANLS by 2–3% over the chunking baselines.</li><li>Instruction tuning with DSHP-LLM raises HRDH F1 from 0.2962–0.4389 for the base backbones to 0.6330–0.9321.</li></ul>" }
    ],
    bibtex: "@inproceedings{shin-etal-2025-multidocfusion,\n    title = \"{M}ulti{D}oc{F}usion : Hierarchical and Multimodal Chunking Pipeline for Enhanced {RAG} on Long Industrial Documents\",\n    author = \"Shin, Joongmin  and\n      Park, Chanjun  and\n      Park, Jeongbae  and\n      Seo, Jaehyung  and\n      Lim, Heuiseok\",\n    editor = \"Christodoulopoulos, Christos  and\n      Chakraborty, Tanmoy  and\n      Rose, Carolyn  and\n      Peng, Violet\",\n    booktitle = \"Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing\",\n    month = nov,\n    year = \"2025\",\n    address = \"Suzhou, China\",\n    publisher = \"Association for Computational Linguistics\",\n    url = \"https://aclanthology.org/2025.emnlp-main.1062/\",\n    doi = \"10.18653/v1/2025.emnlp-main.1062\",\n    pages = \"20985--21004\",\n    ISBN = \"979-8-89176-332-6\"\n}"
  },
  {
    slug: "styledfs",
    category: "Top Conferences",
    shortName: "StyleDFS",
    title: "Intelligent Predictive Maintenance RAG Framework for Power Plants: Enhancing QA with StyleDFS and Domain Specific Instruction Tuning",
    venue: "EMNLP 2024 (Industry Track)",
    date: "Oct 2024",
    authorsHtml: "Seongtae Hong*, <strong>Joongmin Shin*</strong>, Jaehyung Seo, Taemin Lee, Jeongbae Park, Cho Man Young, Byeongho Choi, Heuiseok Lim",
    abstract: "Process plants are complex large-scale industrial facilities that convert raw materials or intermediate products into final products, requiring continuous processes with high safety and efficiency standards. In particular, in nuclear process plants, Predictive Maintenance System (PMS) plays a critical role in predicting equipment anomalies and performing preventive maintenance. However, current PMS relies heavily on the experience of a few experts, leading to knowledge loss upon their retirement and difficulty in swift response. Existing off-premise Question-Answering (QA) systems based on Large Language Models (LLM) face issues such as data leakage and challenges in domain-specific tuning. To address these problems, this study proposes an on-premise intelligent PMS framework utilizing a new chunking method, StyleDFS, which effectively reflects the structural information of documents. Additionally, we demonstrate that Instruction tuning using relevant domain-specific data improves LLM performance even under limited data conditions.",
    contribution: "Domain-specific RAG framework for scientific and industrial QA; led to two technology transfers.",
    role: "Co-First Author",
    status: "Accepted",
    keywords: ["domain RAG", "industrial QA", "technology transfer"],
    venueBadge: {
      path: "Venue/EMNLP2024.png",
      alt: "EMNLP 2024 venue badge"
    },
    paperUrl: "https://aclanthology.org/2024.emnlp-industry.61/",
    doi: "10.18653/v1/2024.emnlp-industry.61",
    arxiv: "",
    figure: {
      path: "paper_figure/StyleDFS_architecture_preview.png",
      caption: "Framework for an intelligent predictive maintenance system: documents are converted to HTML, chunked with StyleDFS, and stored in a database; the instruction-tuned model uses the retrieved chunks to answer user queries",
      sourcePdf: "paper_figure/StyleDFS_architecture.pdf"
    },
    sections: [
      { heading: "Method", html: "<p>The framework targets predictive maintenance in nuclear process plants, where maintenance knowledge lives in long structured documents (mainly HWP and DOCX) and must stay on-premise.</p><ul><li><strong>StyleDFS chunking.</strong> Documents are converted to HTML while preserving their structure. The style classes that the converter assigns to each HTML element define a tree in which titles, body text, subsections, and lists become separate nodes. A preorder depth-first search then accumulates text from leaf nodes and their parents; when the accumulated text exceeds the maximum length, the chunk is closed and a new one starts from the right sibling, keeping the parent node's text so that each chunk retains its section context.</li><li><strong>Retrieval.</strong> Among Korean-capable embedding models from the MTEB leaderboard, multilingual-e5-large gives the best nDCG@3 on Ko-StrategyQA, Ko-mrtydi, and Ko-miracl and is used for retrieval. Chunk embeddings are stored in PostgreSQL and served with Text Embedding Inference (TEI) so that a single GPU can handle multiple users.</li><li><strong>Domain-specific instruction tuning.</strong> MRC data from science and technology documents is rewritten into descriptive answers with GPT-4 and used to instruction-tune Llama-3-8B, Llama-3-Open-Ko-8B, gemma-7b, and gemma-ko-7b.</li></ul>" },
      { heading: "Results", html: "<p>Embedding model selection (nDCG@3).</p><div class=\"table-scroll\"><table class=\"results-table\"><thead><tr><th>Model</th><th>Ko-StrategyQA</th><th>Ko-mrtydi</th><th>Ko-miracl</th><th>Average</th></tr></thead><tbody><tr class=\"hl\"><td>multilingual-e5-large</td><td><strong>0.764</strong></td><td><strong>0.527</strong></td><td><strong>0.623</strong></td><td><strong>0.638</strong></td></tr><tr><td>multilingual-e5-base</td><td>0.718</td><td>0.498</td><td>0.585</td><td>0.600</td></tr><tr><td>multilingual-e5-small</td><td>0.698</td><td>0.496</td><td>0.574</td><td>0.589</td></tr><tr><td>ko-sroberta-multitask</td><td>0.583</td><td>0.226</td><td>0.297</td><td>0.369</td></tr><tr><td>UAE-Large-V1</td><td>0.061</td><td>0.050</td><td>0.057</td><td>0.056</td></tr><tr><td>bge-large-en-v1.5</td><td>0.054</td><td>0.038</td><td>0.047</td><td>0.046</td></tr></tbody></table></div><p>Retrieval recall by chunking method across n-gram lengths, at top-1 and top-3.</p><div class=\"table-scroll\"><table class=\"results-table\"><thead><tr><th>Chunking</th><th>Top-k</th><th>1-gram</th><th>2-gram</th><th>3-gram</th></tr></thead><tbody><tr><td>Length</td><td>1</td><td>0.2023</td><td>0.1358</td><td>0.1066</td></tr><tr><td>Length</td><td>3</td><td>0.3668</td><td>0.2404</td><td>0.1862</td></tr><tr><td>Semantic</td><td>1</td><td>0.2464</td><td>0.1642</td><td>0.1281</td></tr><tr><td>Semantic</td><td>3</td><td>0.4363</td><td>0.2935</td><td>0.2294</td></tr><tr class=\"hl\"><td>StyleDFS</td><td>1</td><td><strong>0.3595</strong></td><td><strong>0.2975</strong></td><td><strong>0.2727</strong></td></tr><tr class=\"hl\"><td>StyleDFS</td><td>3</td><td><strong>0.5710</strong></td><td><strong>0.4716</strong></td><td><strong>0.4326</strong></td></tr></tbody></table></div><p>Answer generation (BLEU and ROUGE-L) for base and instruction-tuned models. Gold uses chunks that contain the correct answer.</p><div class=\"table-scroll\"><table class=\"results-table\"><thead><tr><th rowspan=\"2\">Chunking</th><th rowspan=\"2\">Top-k</th><th rowspan=\"2\">Metric</th><th colspan=\"2\">Llama-3-8B</th><th colspan=\"2\">Llama-3-Open-Ko-8B</th><th colspan=\"2\">gemma-7b</th><th colspan=\"2\">gemma-ko-7b</th><th rowspan=\"2\">Average</th></tr><tr><th>base</th><th>tune</th><th>base</th><th>tune</th><th>base</th><th>tune</th><th>base</th><th>tune</th></tr></thead><tbody><tr><td>Length</td><td>1</td><td>BLEU</td><td>4.080</td><td>10.999</td><td>2.242</td><td>15.203</td><td>5.905</td><td>10.689</td><td>1.792</td><td>13.796</td><td>8.088</td></tr><tr><td>Length</td><td>1</td><td>ROUGE-L</td><td>8.433</td><td>6.700</td><td>3.332</td><td>12.065</td><td>6.118</td><td>7.886</td><td>2.177</td><td>10.370</td><td>7.259</td></tr><tr><td>Length</td><td>3</td><td>BLEU</td><td>5.665</td><td>16.235</td><td>3.598</td><td>18.973</td><td>4.942</td><td>10.330</td><td>3.263</td><td>20.449</td><td>10.556</td></tr><tr><td>Length</td><td>3</td><td>ROUGE-L</td><td>9.345</td><td>12.417</td><td>7.015</td><td>17.966</td><td>7.669</td><td>6.393</td><td>5.041</td><td>14.124</td><td>9.746</td></tr><tr><td>Semantic</td><td>1</td><td>BLEU</td><td>6.219</td><td>11.704</td><td>3.038</td><td>16.993</td><td>4.005</td><td>10.077</td><td>1.409</td><td>15.239</td><td>8.085</td></tr><tr><td>Semantic</td><td>1</td><td>ROUGE-L</td><td>7.551</td><td>7.305</td><td>4.356</td><td>13.710</td><td>7.841</td><td>7.672</td><td>2.074</td><td>8.821</td><td>7.041</td></tr><tr><td>Semantic</td><td>3</td><td>BLEU</td><td>5.913</td><td>17.703</td><td>4.425</td><td>20.646</td><td>4.075</td><td>10.954</td><td>3.000</td><td>19.976</td><td>10.961</td></tr><tr><td>Semantic</td><td>3</td><td>ROUGE-L</td><td>8.049</td><td>9.423</td><td>5.940</td><td>13.806</td><td>7.587</td><td>9.694</td><td>4.026</td><td>13.245</td><td>8.971</td></tr><tr class=\"hl\"><td>StyleDFS</td><td>1</td><td>BLEU</td><td>3.356</td><td>13.671</td><td>3.120</td><td>19.072</td><td>5.924</td><td>16.514</td><td>5.397</td><td>17.510</td><td>10.070</td></tr><tr class=\"hl\"><td>StyleDFS</td><td>1</td><td>ROUGE-L</td><td>6.235</td><td>13.746</td><td>6.012</td><td>13.046</td><td>11.005</td><td>14.773</td><td>7.102</td><td>13.818</td><td>10.216</td></tr><tr class=\"hl\"><td>StyleDFS</td><td>3</td><td>BLEU</td><td>3.479</td><td>19.579</td><td>2.705</td><td>23.138</td><td>6.626</td><td>17.595</td><td>8.401</td><td>20.486</td><td>12.500</td></tr><tr class=\"hl\"><td>StyleDFS</td><td>3</td><td>ROUGE-L</td><td>5.098</td><td>18.245</td><td>5.405</td><td>16.949</td><td>8.547</td><td>13.084</td><td>9.242</td><td>16.447</td><td>11.377</td></tr><tr class=\"group-ref\"><td>Gold</td><td>-</td><td>BLEU</td><td>10.049</td><td>24.103</td><td>4.267</td><td>31.612</td><td>11.798</td><td>21.479</td><td>8.030</td><td>29.486</td><td>17.478</td></tr><tr class=\"group-ref\"><td>Gold</td><td>-</td><td>ROUGE-L</td><td>9.939</td><td>21.200</td><td>7.947</td><td>22.930</td><td>16.409</td><td>13.676</td><td>10.027</td><td>15.436</td><td>14.945</td></tr></tbody></table></div><ul><li>StyleDFS gives the highest retrieval recall in every setting, for example 0.3595 (top-1) and 0.5710 (top-3) for 1-gram, compared with 0.2464 and 0.4363 for semantic chunking.</li><li>Averaged over the four models, StyleDFS gives the highest BLEU and ROUGE-L among the three chunking methods in both the top-1 and top-3 settings; answers generated from gold chunks remain higher.</li><li>The instruction-tuned model scores higher than its base model in 51 of the 56 base/tune pairs in the generation table.</li></ul>" }
    ],
    bibtex: "@inproceedings{hong-etal-2024-intelligent,\n    title = \"Intelligent Predictive Maintenance {RAG} framework for Power Plants: Enhancing {QA} with {S}tyle{DFS} and Domain Specific Instruction Tuning\",\n    author = \"Hong, Seongtae  and\n      Shin, Joong Min  and\n      Seo, Jaehyung  and\n      Lee, Taemin  and\n      Park, Jeongbae  and\n      Young, Cho Man  and\n      Choi, Byeongho  and\n      Lim, Heuiseok\",\n    editor = \"Dernoncourt, Franck  and\n      Preo{\\c{t}}iuc-Pietro, Daniel  and\n      Shimorina, Anastasia\",\n    booktitle = \"Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing: Industry Track\",\n    month = nov,\n    year = \"2024\",\n    address = \"Miami, Florida, US\",\n    publisher = \"Association for Computational Linguistics\",\n    url = \"https://aclanthology.org/2024.emnlp-industry.61/\",\n    doi = \"10.18653/v1/2024.emnlp-industry.61\",\n    pages = \"805--820\"\n}"
  },
  {
    slug: "ur-iclr-agentic-memory-utility",
    category: "Under Review",
    title: "Evaluating the Practical Utility of Agentic Memory",
    venue: "ICLR 2027",
    date: "",
    authorsHtml: "Anonymous (Under review)",
    role: "First Author",
    status: "Under Review",
    noDetail: true,
    doi: "",
    arxiv: ""
  },
  {
    slug: "ur-iclr-video-citation",
    category: "Under Review",
    title: "Citation Grounding for Video Question Answering",
    venue: "ICLR 2027",
    date: "",
    authorsHtml: "Anonymous (Under review)",
    role: "First Author",
    status: "Under Review",
    noDetail: true,
    doi: "",
    arxiv: ""
  },
  {
    slug: "under-review-consumed-evidence-audit",
    detailTitle: "Project PRISM",
    category: "Under Review",
    title: "Evidence Auditing and Support-Sensitive Evaluation for Multimodal QA",
    venue: "TACL",
    date: "",
    authorsHtml: "Anonymous (Under review)",
    abstract: "Anonymous manuscript on consumed-evidence auditing for multimodal QA.",
    contribution: "A matched-reader audit framework separates real evidence use from evaluation illusions in multimodal QA.",
    role: "First Author",
    status: "Under Review",
    keywords: ["evidence auditing", "multimodal QA", "evaluation"],
    doi: "",
    arxiv: ""
  },
  {
    slug: "under-review-error-propagation",
    detailTitle: "Project CASCADE",
    category: "Under Review",
    title: "Error Propagation Diagnostics for PDF-to-RAG Pipelines Across Representation Families",
    venue: "IEEE TPAMI",
    date: "",
    authorsHtml: "Anonymous (Under review)",
    abstract: "Anonymous manuscript on error propagation and recoverability in PDF-to-RAG pipelines.",
    contribution: "A matched-intervention diagnostic framework analyzing how upstream parsing uncertainty propagates across PDF-to-RAG representation families.",
    role: "First Author",
    status: "Under Review",
    keywords: ["error propagation", "PDF-to-RAG", "diagnostics"],
    doi: "",
    arxiv: ""
  },
  {
    slug: "korlex-embeddings",
    category: "Journals",
    title: "Distance Based Korean WordNet (alias. KorLex) Embedding Model",
    venue: "Applied Artificial Intelligence 38(1), Taylor & Francis",
    date: "Sep 2024",
    authorsHtml: "SeongReol Park*, Joongmin Shin, Sanghyun Cho, Hyuk-Chul Kwon, Jung-Hun Lee",
    abstract: "This paper maps KorLex lexical knowledge into vector space to inject graph-aware semantics into representation learning. The approach improves lexical similarity behavior compared with purely distributional baselines.",
    contribution: "Graph-aware lexical embedding model that injects structured knowledge into vector representations.",
    role: "Co-Author",
    status: "Published",
    keywords: ["knowledge graph", "embedding", "Korean NLP"],
    paperUrl: "https://www.tandfonline.com/doi/full/10.1080/08839514.2024.2398920",
    doi: "",
    arxiv: "",
    figure: {
      path: "paper_figure/Distance Based Korean WordNet(alias. KorLex) Embedding Model_architecture.png",
      caption: "KorLex embedding model architecture"
    }
  },
  {
    slug: "hybrid-reader-tables-text",
    category: "Journals",
    title: "Multi-Paragraph Machine Reading Comprehension with Hybrid Reader over Tables and Text",
    venue: "Applied Artificial Intelligence 38(1), Taylor & Francis",
    date: "Jun 2024",
    authorsHtml: "Sanghyun Cho*, SeongReol Park, Hye-Lynn Kim, Jung-Hun Lee, Joongmin Shin, Hyuk-Chul Kwon",
    abstract: "Research on a hybrid reader model capable of processing both text and tables, enabling effective handling of both types of data while maintaining the performance of existing pre-trained models.",
    contribution: "Hybrid reader model that jointly processes text and tables for multi-paragraph machine reading comprehension.",
    role: "Co-Author",
    status: "Published",
    keywords: ["table QA", "reading comprehension", "hybrid model"],
    paperUrl: "https://www.tandfonline.com/doi/full/10.1080/08839514.2024.2367820",
    doi: "",
    arxiv: "",
    figure: {
      path: "paper_figure/Multi-Paragraph Machine Reading Comprehension_architecture.png",
      caption: "Multi-Paragraph Machine Reading Comprehension architecture"
    }
  },
  {
    slug: "retrieval-generation-techniques-llms",
    category: "Domestic Conferences & Theses",
    title: "Search-Based Generation Techniques for Improving LLM Responses: A Comparative Study of Zero-shot and RAG on GPT-3.5 and GPT-4",
    venue: "KIICE 2023",
    award: "Outstanding Paper Award",
    date: "Oct 2023",
    authorsHtml: "<strong>Joongmin Shin*</strong>, SeongReol Park, Jung-Hun Lee",
    abstract: "A comparative study on zero-shot versus retrieval-augmented generation setups for GPT-3.5 and GPT-4. The analysis outlines reliability and practical implementation benefits of evidence-grounded generation.",
    contribution: "Comparative analysis of zero-shot vs. RAG for GPT models, demonstrating benefits of evidence-grounded generation.",
    role: "First Author",
    status: "Published",
    keywords: ["RAG", "LLM", "comparative study"],
    doi: "",
    arxiv: ""
  },
  {
    slug: "comparative-korean-llm-quality",
    category: "Domestic Conferences & Theses",
    title: "Comparative Analysis of Korean Quality in Large-Scale Language Models Based on Zero-Shot Learning",
    venue: "HCLT 2023",
    date: "Oct 2023",
    authorsHtml: "Yunah Huh, Aram So, Taemin Lee, Joongmin Shin, Heuiseok Lim",
    abstract: "Compared the performance of Korean-based LLMs and English-based LLMs on four KoBEST tasks to investigate whether language influences LLM performance. The results confirmed that adding prior knowledge about Korean affects LLM performance.",
    contribution: "Investigated language-specific influences on LLM performance across Korean benchmarks.",
    role: "Co-Author",
    status: "Published",
    keywords: ["Korean LLM", "zero-shot", "evaluation"],
    doi: "",
    arxiv: ""
  },
  {
    slug: "qa-pair-passage-rag",
    category: "Domestic Conferences & Theses",
    title: "QA Pair Passage RAG-based LLM Korean Chatbot Service",
    venue: "HCLT 2023",
    date: "Oct 2023",
    authorsHtml: "<strong>Joongmin Shin*</strong>, Jaewwok Lee, Kyungmin Kim, Heuiseok Lim",
    abstract: "This work introduces QA-pair passage construction for Korean retrieval-augmented chatbot systems. The method improves retrieval relevance and reduces hallucination in domain-specific conversational settings.",
    contribution: "QA-pair passage construction method for Korean RAG chatbots, reducing hallucination in domain-specific settings.",
    role: "First Author",
    status: "Published",
    keywords: ["RAG", "chatbot", "Korean NLP"],
    doi: "",
    arxiv: ""
  },
  {
    slug: "neural-symbolic-korean-dependency-parsing",
    shortName: "M.S. Thesis",
    shortVenue: "PNU 2023",
    category: "Domestic Conferences & Theses",
    title: "A Neural-Symbolic Model for Overcoming Deep Learning Limitations in Korean Dependency Parsing",
    venue: "Master's Thesis, Pusan National University",
    date: "Feb 2023",
    authorsHtml: "<strong>Joongmin Shin*</strong>, Hyuk-Chul Kwon",
    abstract: "Proposed and analyzed a novel neural-symbolic model that controls final probability values based on additional linguistic knowledge to overcome the limitations of overfitting and data scarcity issues arising from deep learning's dependence on datasets.",
    contribution: "Neural-symbolic parser integrating linguistic constraints to overcome deep learning limitations in dependency parsing.",
    role: "First Author",
    status: "Published",
    keywords: ["dependency parsing", "neural-symbolic", "Korean NLP"],
    doi: "",
    arxiv: ""
  },
  {
    slug: "edt5-embeddings",
    category: "Domestic Conferences & Theses",
    title: "EDT5: Proposed Embedding Model of T5 Encoder-Decoder Structure",
    venue: "KSC 2022",
    award: "Outstanding Paper Award",
    date: "Dec 2022",
    authorsHtml: "<strong>Joongmin Shin*</strong>, Jugyung Jung, Jung-Hun Lee, Sanghyun Cho, Minho Kim, Miyeon Kim, Hyuk-Chul Kwon",
    abstract: "Analyzed the structure of T5 and proposed a model architecture that uses both the encoder and decoder for embedding, moving beyond the previous approach that only utilized the encoder for embedding and fine-tuning.",
    contribution: "Proposed encoder-decoder embedding architecture for T5, improving upon encoder-only approaches.",
    role: "First Author",
    status: "Published",
    keywords: ["T5", "embedding", "encoder-decoder"],
    doi: "",
    arxiv: ""
  },
  {
    slug: "korean-table-mrc-generalization",
    category: "Domestic Conferences & Theses",
    title: "Evaluation of Generalization Performance in Korean Table Machine Reading Comprehension across Domain-Specific Datasets",
    venue: "KSC 2022",
    date: "Dec 2022",
    authorsHtml: "Hyelin Kim*, Sanghyun Cho, Joongmin Shin, Hyuk-Chul Kwon",
    abstract: "Identified the limitations of existing tabular machine reading comprehension models in domain generalization through cross-validation, highlighting the importance of constructing tabular datasets across diverse domains.",
    contribution: "Identified domain generalization limitations in tabular MRC models through cross-validation analysis.",
    role: "Co-Author",
    status: "Published",
    keywords: ["table QA", "generalization", "evaluation"],
    doi: "",
    arxiv: ""
  },
  {
    slug: "constraint-enhanced-dependency-parsing",
    shortName: "Neural-Symbolic Parsing",
    shortVenue: "HCLT 2022",
    category: "Domestic Conferences & Theses",
    title: "A Dependency Parsing Model with Reinforced Head-Dependent Constraint Rules: Combining Deep Learning and Linguistic Knowledge",
    venue: "HCLT 2022",
    award: "Outstanding Research Award",
    date: "Oct 2022",
    authorsHtml: "<strong>Joongmin Shin*</strong>, Hyuk-Chul Kwon",
    abstract: "Through data and error case analysis, expanded the neural symbolic model from two applied rules to 24, developing a state-of-the-art model.",
    contribution: "Expanded neural-symbolic constraint rules from 2 to 24, achieving state-of-the-art dependency parsing.",
    role: "First Author",
    status: "Published",
    keywords: ["dependency parsing", "linguistic constraints", "neural-symbolic"],
    doi: "",
    arxiv: ""
  },
  {
    slug: "ann-dependency-parsing-rules",
    category: "Domestic Conferences & Theses",
    title: "Rule-Augmented Neural Network-Based Dependency Parsing",
    venue: "KCC 2022",
    date: "Jun 2022",
    authorsHtml: "<strong>Joongmin Shin*</strong>, Sanghyun Cho, Bongwoo Nam, Hyuk-Chul Kwon",
    abstract: "Added a transformer layer to existing graph-based dependency parsing models to incorporate additional feature embeddings and address gradient vanishing issues. Proposed a method that controls the final classification probability values according to predefined rules.",
    contribution: "Transformer-augmented dependency parser with rule-based probability control for improved parsing accuracy.",
    role: "First Author",
    status: "Published",
    keywords: ["dependency parsing", "transformer", "rule-based"],
    doi: "",
    arxiv: ""
  },
  {
    slug: "continual-learning-korean-mrc",
    category: "Domestic Conferences & Theses",
    title: "Korean Machine Reading Comprehension Using Continual Learning",
    venue: "HCLT 2021",
    date: "Oct 2021",
    authorsHtml: "<strong>Joongmin Shin*</strong>, Sanghyun Cho, Hyuk-Chul Kwon",
    abstract: "Applied Continual Learning to Korean machine reading comprehension to address the issue of deep learning models losing information from previously learned models.",
    contribution: "Applied continual learning to Korean MRC, addressing catastrophic forgetting in sequential model training.",
    role: "First Author",
    status: "Published",
    keywords: ["continual learning", "reading comprehension", "Korean NLP"],
    doi: "",
    arxiv: ""
  }
];
