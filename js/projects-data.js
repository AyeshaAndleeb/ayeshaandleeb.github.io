/* ──────────────────────────────────────────────
   projects-data.js  –  Project definitions
   Rendered by script.js into #projects-research,
   #projects-hackathon, and #projects-additional.
   ────────────────────────────────────────────── */

// eslint-disable-next-line no-unused-vars
const PROJECTS = [
  /* ── RESEARCH / ACADEMIC ────────────────────── */
  {
    id:       "p-fyp-brain-tumor",
    section:  "research",
    featured: true,
    title:    "Brain Tumor Classification Using Deep Learning",
    area:     "Medical AI · Computer Vision · Deep Learning",
    overview: "Final Year Project — A deep learning system that classifies brain MRI scans into four categories (glioma, meningioma, pituitary tumor, and no tumor) using transfer learning with VGG16.",
    problem:  "Manual reading of brain MRI scans is time-intensive and subject to inter-observer variability. An automated, accurate classifier can assist radiologists in early detection and triage.",
    approach: "Pre-trained VGG16 convolutional network fine-tuned on a labelled brain MRI dataset. Images were preprocessed and augmented before training with TensorFlow/Keras. The trained model was served through a Flask web application for real-time inference.",
    tech:     ["Python", "TensorFlow", "Keras", "VGG16", "Flask", "OpenCV"],
    results:  [
      "94% validated accuracy on the held-out set.",
      "Four-class classification: glioma, meningioma, pituitary, no tumor.",
      "Deployed as a Flask web app for real-time MRI upload and prediction."
    ],
    links:    {}
  },
  {
    id:       "p-mediscan",
    section:  "research",
    featured: false,
    title:    "MediScan — Smart Medical Report Analyzer",
    area:     "NLP · LLMs · Retrieval-Augmented Generation",
    overview: "A multi-agent RAG system that lets users upload medical reports and ask clinical questions in natural language, with answers grounded in the uploaded documents.",
    problem:  "Patients and caregivers often struggle to interpret medical lab reports. A grounded Q&A system can surface relevant findings without hallucinating.",
    approach: "Built a multi-agent pipeline using LangChain, FAISS vector search and LLaMA-3.3 (via Groq API). Uploaded PDFs are chunked, embedded and indexed; a retrieval agent fetches relevant passages before the LLM generates an answer. Deployed with Flask.",
    tech:     ["Python", "LangChain", "FAISS", "LLaMA-3.3", "Groq API", "Flask"],
    results:  [
      "End-to-end RAG pipeline for medical PDF analysis.",
      "Multi-agent architecture for retrieval and generation.",
      "Deployed as a Flask web app with PDF upload."
    ],
    links:    { github: "@@mediscan@@" }
  },
  {
    id:       "p-phishing",
    section:  "research",
    featured: false,
    title:    "Phishing Website Detection System",
    area:     "NLP · Machine Learning · Cybersecurity",
    overview: "An ML-based system that classifies URLs as legitimate or phishing using lexical and host-based features.",
    problem:  "Phishing URLs trick users into revealing credentials. An automated detector that works on the URL string alone provides a fast first line of defence.",
    approach: "Extracted lexical features (URL length, special-character counts, token analysis) and trained multiple classifiers. Compared Logistic Regression, Naive Bayes and other models using scikit-learn and NLTK. Deployed via Streamlit.",
    tech:     ["Python", "scikit-learn", "NLTK", "Streamlit"],
    results:  [
      "96.5% accuracy with Logistic Regression.",
      "Model comparison across multiple classifiers.",
      "Interactive Streamlit demo for URL classification."
    ],
    links:    { github: "@@phishing@@" }
  },
  {
    id:       "p-traffic-sign",
    section:  "research",
    featured: false,
    title:    "Traffic Sign Recognition System",
    area:     "Computer Vision · Deep Learning",
    overview: "A CNN-based classifier that recognises 43 categories of traffic signs from camera images.",
    problem:  "Autonomous driving and driver-assistance systems need reliable, real-time traffic sign recognition across varying conditions.",
    approach: "Trained a convolutional neural network on the German Traffic Sign Recognition Benchmark (GTSRB) dataset using Keras. Applied data augmentation and early stopping. Served predictions through a Flask interface.",
    tech:     ["Python", "Keras", "OpenCV", "Flask"],
    results:  [
      "~94% test accuracy across 43 sign categories.",
      "Robust to variations in lighting and orientation.",
      "Flask deployment for image upload and prediction."
    ],
    links:    { github: "@@traffic@@" }
  },

  /* ── HACKATHON ──────────────────────────────── */
  {
    id:       "p-smartlearn",
    section:  "hackathon",
    featured: false,
    title:    "SmartLearn — AI-Powered Study Assistant",
    area:     "LLMs · RAG · EdTech",
    overview: "International hackathon project — An AI study assistant that generates personalised learning material from uploaded documents using GPT-5 and vector search.",
    problem:  "Students often lack adaptive study tools that work with their own course material.",
    approach: "Used LangChain with FAISS for document retrieval and GPT-5 for generation. Built a Streamlit front-end for document upload, question asking and quiz generation.",
    tech:     ["Python", "GPT-5", "LangChain", "FAISS", "Streamlit"],
    results:  [
      "Personalised Q&A and quiz generation from uploaded notes.",
      "Built and demoed during an international hackathon."
    ],
    links:    { demo: "@@smartlearn@@" }
  },
  {
    id:       "p-genegazer",
    section:  "hackathon",
    featured: false,
    title:    "GeneGazer — Single-Cell RNA-seq Analysis Tool",
    area:     "Bioinformatics · Data Science · AI",
    overview: "International hackathon project — A tool for exploratory analysis of single-cell RNA sequencing data, augmented with Gemini AI for natural-language interpretation.",
    problem:  "Single-cell RNA-seq datasets are complex and require domain expertise to interpret. An AI-guided front-end can lower the barrier.",
    approach: "Integrated Scanpy for standard preprocessing and clustering with Google Gemini for AI-generated summaries of gene-expression patterns. Streamlit interface for interactive exploration.",
    tech:     ["Python", "Streamlit", "Scanpy", "Google Gemini AI"],
    results:  [
      "Interactive single-cell analysis with dimensionality reduction and clustering.",
      "AI-generated natural-language interpretation of results.",
      "Built and demoed during an international hackathon."
    ],
    links:    { demo: "@@genegazer@@" }
  }
];
