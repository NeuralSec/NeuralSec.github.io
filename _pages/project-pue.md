---
layout: single
title: "Provably Unlearnable Data Examples"
permalink: /projects/provably-unlearnable-data-examples/
author_profile: true
excerpt: "Project page for Provably Unlearnable Data Examples, NDSS 2025 Distinguished Paper Award."
---

<p>
  <a class="btn" href="https://www.ndss-symposium.org/wp-content/uploads/2025-886-paper.pdf">Paper</a>
  <a class="btn" href="https://github.com/NeuralSec/certified-data-learnability">Code</a>
</p>

**NDSS 2025 Distinguished Paper Award**  
**Derui Wang**, Minhui Xue, Bo Li, Seyit Camtepe, Liming Zhu

<img src="/images/paper_figures/[NDSS'25]-PUE.png" alt="Certified learnability of unlearnable datasets" class="center" style="width:800px; max-width:100%; display:block; margin:auto;"/>

## Overview

We introduce the theory of certified learnability. Certified $(q,\eta)$-Learnability measures how learnable a dataset is by computing a probabilistic upper bound on the test performance of classifiers trained on this dataset, as long as those classifiers fall within a certified parameter set.

Using certified $(q,\eta)$-Learnability, we measure the effectiveness and robustness of unlearnable examples and propose Provably Unlearnable Examples (PUEs), which can reduce the learnability of protected training data.

## Highlights

- Formalizes certified data learnability as a tool for reasoning about how much a dataset can support model training.
- Uses certified learnability to quantify the effectiveness and robustness of unlearnable examples.
- Introduces Provably Unlearnable Examples for learnability control with provable guarantees.

## Resources

- [Paper](https://www.ndss-symposium.org/wp-content/uploads/2025-886-paper.pdf)
- [Code](https://github.com/NeuralSec/certified-data-learnability)
