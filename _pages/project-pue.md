---
layout: project
title: "Provably Unlearnable Data Examples"
permalink: /projects/provably-unlearnable-data-examples/
sitemap: true
excerpt: "Project page for Provably Unlearnable Data Examples, NDSS 2025 Distinguished Paper Award."
venue: "NDSS 2025"
subtitle: "Certified learnability for understanding and controlling how much a dataset can support model training."
authors: "**Derui Wang**<sup>1,2</sup>, Minhui Xue<sup>1,2</sup>, Bo Li<sup>3</sup>, Seyit Camtepe<sup>1,2</sup>, Liming Zhu<sup>1</sup>"
affiliations:
  - "<sup>1</sup>CSIRO's Data61, Australia"
  - "<sup>2</sup>Cyber Security Cooperative Research Centre, Australia"
  - "<sup>3</sup>University of Chicago, USA"
award: "Distinguished Paper Award"
hero_image: "/images/paper_figures/[NDSS'25]-PUE.png"
hero_alt: "Certified learnability of unlearnable datasets"
hero_caption: "Certified learnability provides a principled way to measure and reduce the learnability of protected datasets."
links:
  - label: "Paper"
    url: "https://www.ndss-symposium.org/wp-content/uploads/2025-886-paper.pdf"
  - label: "Code"
    url: "https://github.com/NeuralSec/certified-data-learnability"
---

<section class="project-section">
  <h2>Highlights</h2>
  <p class="project-lead">PUEs turn data learnability into a certified quantity, giving data owners a formal tool for reasoning about whether protected data can still be used to train accurate models.</p>
  <div class="project-highlight-grid">
    <div class="project-highlight">
      <strong>Certified learnability</strong>
      <span>Computes probabilistic upper bounds on classifier performance over a certified parameter set.</span>
    </div>
    <div class="project-highlight">
      <strong>Provable protection</strong>
      <span>Uses learnability certification to evaluate and construct unlearnable examples with formal guarantees.</span>
    </div>
    <div class="project-highlight">
      <strong>Robust evaluation</strong>
      <span>Measures how effective and robust unlearnable examples remain under different training settings.</span>
    </div>
  </div>
</section>

<section class="project-section project-section--narrow">
  <h2>Abstract</h2>
  <p>We introduce the theory of certified learnability. Certified $(q,\eta)$-Learnability measures how learnable a dataset is by computing a probabilistic upper bound on the test performance of classifiers trained on this dataset, as long as those classifiers fall within a certified parameter set.</p>
  <p>Using certified $(q,\eta)$-Learnability, we measure the effectiveness and robustness of unlearnable examples and propose Provably Unlearnable Examples (PUEs), which can reduce the learnability of protected training data.</p>
</section>

<section class="project-section">
  <h2>Motivation</h2>
  <div class="project-two-column">
    <div class="project-panel">
      <h3>Challenge</h3>
      <p>Unlearnable examples are designed to prevent unauthorized model training, but their protection strength needs to be measured beyond empirical attack-and-defense benchmarks.</p>
    </div>
    <div class="project-panel">
      <h3>Solution</h3>
      <p>PUE connects data protection to certified learnability, giving a principled measurement for how learnable a protected dataset can be under certified training conditions.</p>
    </div>
  </div>
</section>

<section class="project-section project-section--narrow">
  <h2>BibTeX</h2>
  <pre class="project-bibtex"><code>@inproceedings{wang2025provably,
  title={Provably Unlearnable Data Examples},
  author={Wang, Derui and Xue, Minhui and Li, Bo and Camtepe, Seyit and Zhu, Liming},
  booktitle={Network and Distributed System Security Symposium},
  year={2025}
}</code></pre>
</section>
