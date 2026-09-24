// Projects shown on projects.html and projects/*.html, in display order.
// After editing, run `node scripts/build.mjs` to regenerate the pages.
window.PROJECT_GROUPS = [
  {
    name: "Multimodal Reasoning & Document AI"
  },
  {
    name: "Foundation Models and Adaptation",
    intro: "In parallel with my research on multimodal evidence systems, I contributed to Korean and multilingual foundation models across academic, industrial, and consortium settings, including the Adapter-based architecture introduced in Exobrain WiseQA that grounded my later work on structured evidence."
  },
  {
    name: "Additional Projects",
    intro: "Earlier applied AI collaborations spanning Korean speech, education, and geoscience."
  }
];

window.PROJECTS = [
  {
    slug: "video-curation-system",
    title: "Video Curation System",
    period: "Jul 2025 - Present",
    affiliation: "Korea University",
    group: "Multimodal Reasoning & Document AI",
    cardSummary: "Video QA and RAG system for structured curation and grounded retrieval over long multimodal content.",
    cardChips: [
      { tone: "scope", text: "Video QA" },
      { tone: "output", text: "EMNLP 2026 Under Review" }
    ],
    description: "Developing a system that performs curation based on Video QA and RAG."
  },
  {
    slug: "docgraph-copilot",
    title: "DocGraph Copilot",
    period: "Jan 2025 - Present",
    affiliation: "Korea University",
    group: "Multimodal Reasoning & Document AI",
    cardSummary: "Structure-aware multimodal chunking pipeline for grounded retrieval and long-document QA.",
    cardChips: [
      { tone: "output", text: "EMNLP 2025" },
      { tone: "output", text: "CVPR 2026" }
    ],
    description: "Developed a novel multimodal chunking methodology for real-world industrial data. It is designed to chunk documents by converting their layout information into a hierarchical structure.",
    role: "Research, Design, Development",
    achievements: "Accepted to EMNLP 2025 (Main) and CVPR 2026."
  },
  {
    slug: "korean-llm-rag-science-domain",
    title: "Development of a Korean LLM & RAG Pipeline Specialized for the Science Domain",
    cardTitle: "Science-Domain Korean LLM & RAG Pipeline",
    period: "Feb 2024 - Dec 2024",
    affiliation: "Korea University",
    group: "Multimodal Reasoning & Document AI",
    cardSummary: "Science-domain Korean LLM and RAG pipeline for document-grounded industrial QA.",
    cardChips: [
      { tone: "output", text: "EMNLP 2024 Industry" },
      { tone: "recognition", text: "2 Transfers" }
    ],
    description: "Developed a science domain-specialized Korean LLM & RAG pipeline.",
    role: "Data preprocessing and chunking methodology development.",
    achievements: "Publication at EMNLP 2024 (Industry Track) and 2 technology transfers."
  },
  {
    slug: "synerpeace-pilot",
    title: "LLM-Based Insurance Assistant 'Synerpeace' Pilot Project",
    cardTitle: "Synerpeace Pilot",
    period: "Jul 2023 - Jan 2024",
    affiliation: "Korea University",
    group: "Multimodal Reasoning & Document AI",
    cardSummary: "Insurance document QA pilot combining LLM-based retrieval with production-oriented application development.",
    cardChips: [
      { tone: "partner", text: "Samsung Fire & Marine" },
      { tone: "recognition", text: "~40% Search Time Reduction" }
    ],
    description: "Developed 'Synerpeace', an LLM model-based application in collaboration with Samsung Fire & Marine Insurance.",
    role: "AI model design and development.",
    achievements: "Awarded in Samsung Fire & Marine Insurance's Pilot Project and secured investment."
  },
  {
    slug: "multilingual-medical-synapse",
    title: "Development of an LLM-Based Multilingual Medical Consultation Service (Synapse)",
    cardTitle: "Synapse",
    period: "Jun 2023 - Present",
    affiliation: "Korea University",
    group: "Multimodal Reasoning & Document AI",
    cardSummary: "Multilingual medical consultation system with LLM chatbot and production-facing admin workflows.",
    cardChips: [
      { tone: "scope", text: "Medical AI" },
      { tone: "recognition", text: "KU-Grant Track" }
    ],
    description: "Developed an LLM-based multilingual medical consultation chatbot and admin page.",
    role: "LLM-based AI chatbot development, admin page implementation.",
    tools: "LangChain (AI), React (Frontend), Express (Backend), PostgreSQL (DB).",
    achievements: "Selected for the KU-Grant Program's Excellent Technology Track."
  },
  {
    slug: "national-representative-k-ai-research-team",
    title: "National Representative K-AI Research Team (National Foundation Model Project)",
    cardTitle: "National Representative K-AI Research Team",
    period: "Aug 2025 - Jan 2026",
    affiliation: "Korea University (NC AI Consortium)",
    cardAffiliation: "Korea University",
    group: "Foundation Models and Adaptation",
    cardSummary: "Consortium-scale multilingual foundation model contribution spanning data pipelines and evaluation.",
    cardChips: [
      { tone: "partner", text: "NC AI Consortium" },
      { tone: "recognition", text: "National Project" }
    ],
    description: "Selected for the National Foundation Model Project (K-AI Project / National Representative LLM Project). Participated as part of the NC AI Consortium in consortium-scale multilingual large language model development with major academic institutions, ETRI, and corporate partners.",
    role: "Construction of the raw data processing pipeline, preprocessing, and evaluation.",
    achievements: "Consortium-scale multilingual foundation model contribution."
  },
  {
    slug: "ko-gemma",
    title: "Ko-Gemma",
    period: "Feb 2024 - Mar 2024",
    affiliation: "Korea University",
    group: "Foundation Models and Adaptation",
    cardSummary: "Korean-adapted Gemma development with Korean-focused data and evaluation.",
    cardChips: [
      { tone: "scope", text: "Gemma Adaptation" },
      { tone: "scope", text: "Evaluation" }
    ],
    description: "Contributed to the development of Ko-Gemma, a Korean Gemma variant improved with Korean-focused data and evaluation.",
    role: "Korean-focused adaptation and evaluation.",
    tools: "Model adaptation and Korean benchmark analysis.",
    achievements: "Korean-adapted Gemma contribution."
  },
  {
    slug: "kullm",
    title: "KULLM",
    period: "Dec 2023 - Feb 2024",
    affiliation: "Korea University",
    group: "Foundation Models and Adaptation",
    cardSummary: "Academic Korean LLM development through post-training and benchmark evaluation.",
    cardChips: [
      { tone: "scope", text: "Academic LLM" },
      { tone: "scope", text: "Benchmarking" }
    ],
    description: "Contributed to KULLM, a Korean large language model initiative developed through Korea University.",
    role: "Post-training and benchmarking.",
    tools: "Instruction-following tuning and benchmark evaluation.",
    achievements: "Academic Korean LLM contribution."
  },
  {
    slug: "plc-assistant-hyundai-mobis",
    title: "GPT-Based PLC Programming Assistant Technology POC Development (Hyundai Mobis)",
    cardTitle: "PLC Programming Assistant (Hyundai Mobis)",
    period: "Sep 2023 - Feb 2024",
    affiliation: "Korea University",
    group: "Foundation Models and Adaptation",
    cardSummary: "GPT-based code-generation assistant for smart-factory PLC workflows in collaboration with Hyundai Mobis.",
    cardChips: [
      { tone: "partner", text: "Hyundai Mobis" },
      { tone: "scope", text: "Smart Factory" }
    ],
    description: "Established an LLM-based smart factory system for process automation in collaboration with Hyundai Mobis.",
    role: "Development of a code auto-generation model based on Code Llama."
  },
  {
    slug: "mideum-k-1-0",
    title: "Mi:deum K 1.0",
    period: "Dec 2021 - Dec 2022",
    affiliation: "KT",
    group: "Foundation Models and Adaptation",
    cardSummary: "Enterprise Korean LLM adaptation and evaluation for generative AI applications.",
    cardChips: [
      { tone: "scope", text: "Enterprise LLM" },
      { tone: "scope", text: "Evaluation" }
    ],
    description: "Contributed to KT's Korean language model ecosystem for enterprise generative AI applications.",
    role: "Model adaptation and evaluation.",
    tools: "Korean-focused post-training and evaluation workflows.",
    achievements: "Enterprise Korean LLM contribution."
  },
  {
    slug: "exobrain-wiseqa-etri",
    title: "Exobrain Division 1 - Development of the Intelligent Evolutionary WiseQA Platform Technology for Human Knowledge Augmentation Services (ETRI)",
    cardTitle: "Exobrain WiseQA (ETRI)",
    period: "Sep 2020 - Nov 2022",
    affiliation: "Pusan National University (AI Lab)",
    cardAffiliation: "Pusan National University",
    group: "Foundation Models and Adaptation",
    cardSummary: "Adapter-based architecture for Table QA and neural-symbolic Korean sentence analysis; reduced QA model count by 50% and grounded later work on structured evidence.",
    cardChips: [
      { tone: "partner", text: "ETRI" },
      { tone: "scope", text: "Adapter Architecture" }
    ],
    description: "Developed a table-based question-answering system and a neural-symbolic model for Korean sentence analysis in collaboration with ETRI as part of the national Exobrain research project."
  },
  {
    slug: "tts-prosodic-boundary-kt",
    title: "Research and Development of Deep Learning-Based TTS Prosodic Boundary Prediction (KT)",
    cardTitle: "TTS Prosodic Boundary Prediction (KT)",
    period: "Dec 2021 - Dec 2022",
    affiliation: "Pusan National University (AI Lab)",
    cardAffiliation: "Pusan National University",
    group: "Additional Projects",
    cardSummary: "Sentence analysis and prosodic boundary prediction for Korean TTS quality improvement (92.13%).",
    cardChips: [
      { tone: "partner", text: "KT" },
      { tone: "scope", text: "TTS" }
    ],
    description: "Developed a Korean sentence analysis system and a prosodic phrase boundary prediction system for KT AIX2L Research Institute to improve the quality of their TTS systems."
  },
  {
    slug: "tts-pronunciation-sequence-kt",
    title: "Deep Learning-Based TTS Pronunciation Sequence Development (KT)",
    cardTitle: "TTS Pronunciation Sequence (KT)",
    period: "Dec 2022 - Mar 2023",
    affiliation: "Pusan National University (AI Lab)",
    cardAffiliation: "Pusan National University",
    group: "Additional Projects",
    cardSummary: "Korean phoneme sequence generation for higher-quality TTS systems, deployed in KT GiGA Genie.",
    cardChips: [
      { tone: "partner", text: "KT" },
      { tone: "scope", text: "TTS" }
    ],
    description: "Developed a Korean phoneme sequence generation system for KT AIX2L Lab to improve the quality of their TTS systems."
  },
  {
    slug: "tts-navigation-navice",
    title: "Development of a TTS System for Navigation Pronunciation Systems (Navice)",
    cardTitle: "Navigation TTS System (Navice)",
    period: "Feb 2021 - Dec 2021",
    affiliation: "Pusan National University (AI Lab)",
    cardAffiliation: "Pusan National University",
    group: "Additional Projects",
    cardSummary: "Korean phoneme-based navigation TTS system developed with Navice, deployed in BMW and Mercedes-Benz vehicles.",
    cardChips: [
      { tone: "partner", text: "Navice" },
      { tone: "scope", text: "BMW / Mercedes-Benz" }
    ],
    description: "Developed a Korean phoneme-based TTS system for navigation in collaboration with Navice."
  },
  {
    slug: "ai-online-judge-coding-education",
    title: "Development of an AI-Based Online Judge Program for Software Coding Education",
    cardTitle: "AI Online Judge for Coding Education",
    period: "Apr 2020 - Sep 2020",
    affiliation: "Pusan National University",
    group: "Additional Projects",
    cardSummary: "AI-based online judge system deployed in the PNU SW curriculum with NextStage.",
    cardChips: [
      { tone: "partner", text: "NextStage" },
      { tone: "scope", text: "Education AI" }
    ],
    description: "Developed an online judge program for AI-based software coding education in collaboration with NextStage and the Pusan National University Software Education Center."
  },
  {
    slug: "mineral-location-kigam",
    title: "Establishment of an AI-Based Mineral Location Prediction System (KIGAM)",
    cardTitle: "AI Mineral Location Prediction (KIGAM)",
    period: "Jun 2023 - Jan 2024",
    affiliation: "Korea University",
    group: "Additional Projects",
    cardSummary: "Geoscience AI system for mineral location prediction and domain-specific feature engineering.",
    cardChips: [
      { tone: "partner", text: "KIGAM" },
      { tone: "scope", text: "Geoscience AI" }
    ],
    description: "Established an AI-based mineral location prediction system in collaboration with the Korea Institute of Geoscience and Mineral Resources (KIGAM).",
    role: "Proposal planning and drafting, mineral resource data EDA (Exploratory Data Analysis), and feature engineering."
  }
];
