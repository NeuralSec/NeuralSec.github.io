---
layout: project
title: "CAMP in the Odyssey: Provably Robust Reinforcement Learning with Certified Radius Maximization"
permalink: /projects/camp-robust-rl/
excerpt: "Project page for CAMP in the Odyssey: Provably Robust Reinforcement Learning with Certified Radius Maximization."
venue: "USENIX Security 2025"
subtitle: "Certified-radius-maximizing policy training for robust deep reinforcement learning agents."
authors: "**Derui Wang**<sup>1,2</sup>, Kristen Moore<sup>1,2</sup>, Diksha Goel<sup>1,2</sup>, Minjune Kim<sup>1,2</sup>, Gang Li<sup>3</sup>, Yang Li<sup>3</sup>, Robin Doss<sup>3</sup>, Minhui Xue<sup>1,2</sup>, Bo Li<sup>4</sup>, Seyit Camtepe<sup>1,2</sup>, Liming Zhu<sup>1</sup>"
affiliations:
  - "<sup>1</sup>CSIRO's Data61, Australia"
  - "<sup>2</sup>Cyber Security Cooperative Research Centre, Australia"
  - "<sup>3</sup>Deakin University, Australia"
  - "<sup>4</sup>University of Chicago, USA"
hero_image: "/images/paper_figures/[USENIX_Sec'25]-CAMP.png"
hero_alt: "CAMP robust reinforcement learning overview"
hero_caption: "CAMP optimizes policies with certified-radius-aware objectives to improve the robustness-return trade-off."
links:
  - label: "Paper"
    url: "https://arxiv.org/pdf/2501.17667"
  - label: "Code"
    url: "https://github.com/NeuralSec/camp-robust-rl"
  - label: "Zenodo"
    url: "https://zenodo.org/records/14729675"
---

<section class="project-section">
  <h2>Highlights</h2>
  <p class="project-lead">CAMP improves certified robustness for deep reinforcement learning by directly optimizing a training objective connected to certified radius.</p>
  <div class="project-highlight-grid">
    <div class="project-highlight">
      <strong>Certified-radius maximization</strong>
      <span>Trains policies with a surrogate loss derived from local certified radii.</span>
    </div>
    <div class="project-highlight">
      <strong>Policy imitation</strong>
      <span>Stabilizes certified-radius-aware optimization during reinforcement learning training.</span>
    </div>
    <div class="project-highlight">
      <strong>Better trade-off</strong>
      <span>Improves certified expected return, reaching up to twice the certified return of baselines.</span>
    </div>
  </div>
</section>

<section class="project-section project-section--narrow">
  <h2>Abstract</h2>
  <p>We introduce Certified-rAdius-Maximizing Policy (<strong>CAMP</strong>) training for certifiably robust deep reinforcement learning agents. CAMP improves the robustness-return trade-off by optimizing policies with a surrogate loss derived from certified-radius maximization.</p>
  <p>The key insight is that the global certified radius can be derived from local certified radii based on training-time statistics. CAMP uses this relationship during training and introduces policy imitation to stabilize optimization.</p>
</section>

<section class="project-section">
  <h2>Method</h2>
  <div class="project-two-column">
    <div class="project-panel">
      <h3>Local-to-global certification</h3>
      <p>CAMP links local certified radii observed during training to the global certified radius, allowing robustness to be optimized through a tractable policy-training objective.</p>
    </div>
    <div class="project-panel">
      <h3>Stable robust policy learning</h3>
      <p>Policy imitation provides a stabilizing signal, helping CAMP train agents that preserve utility while improving provable robustness.</p>
    </div>
  </div>
</section>

<section class="project-section project-section--narrow">
  <h2>Resources</h2>
  <div class="project-resource-list">
    <a href="https://www.usenix.org/conference/usenixsecurity25/presentation/wang-derui">Paper</a>
    <a href="https://github.com/NeuralSec/camp-robust-rl">Code</a>
    <a href="https://zenodo.org/records/14729675">Zenodo Artifact</a>
  </div>
</section>

<section class="project-section project-section--narrow">
  <h2>BibTeX</h2>
  <pre class="project-bibtex"><code>@inproceedings{wang2025camp,
  title={CAMP in the Odyssey: Provably Robust Reinforcement Learning with Certified Radius Maximization},
  author={Wang, Derui and Moore, Kristen and Goel, Diksha and Kim, Minjune and Li, Gang and Li, Yang and Doss, Robin and Xue, Minhui and Li, Bo and Camtepe, Seyit and Zhu, Liming},
  booktitle={USENIX Security Symposium},
  year={2025}
}</code></pre>
</section>
