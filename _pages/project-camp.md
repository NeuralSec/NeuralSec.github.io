---
layout: single
title: "CAMP in the Odyssey"
permalink: /projects/camp-robust-rl/
author_profile: true
excerpt: "Project page for CAMP in the Odyssey: Provably Robust Reinforcement Learning with Certified Radius Maximization."
---

<p>
  <a class="btn" href="https://arxiv.org/pdf/2501.17667">Paper</a>
  <a class="btn" href="https://github.com/NeuralSec/camp-robust-rl">Code</a>
  <a class="btn" href="https://zenodo.org/records/14729675">Zenodo</a>
</p>

**USENIX Security 2025**  
**Derui Wang**, Kristen Moore, Diksha Goel, Minjune Kim, Gang Li, Yang Li, Robin Doss, Minhui Xue, Bo Li, Seyit Camtepe, Liming Zhu

<img src="/images/paper_figures/[USENIX_Sec'25]-CAMP.png" alt="CAMP robust reinforcement learning overview" class="center" style="width:700px; max-width:100%; display:block; margin:auto;"/>

## Overview

We introduce Certified-rAdius-Maximizing Policy (**CAMP**) training for certifiably robust deep reinforcement learning agents. CAMP improves the robustness-return trade-off by optimizing policies with a surrogate loss derived from certified-radius maximization.

The key insight is that the global certified radius can be derived from local certified radii based on training-time statistics. CAMP uses this relationship during training and introduces policy imitation to stabilize optimization.

## Highlights

- Proposes CAMP, a certified-radius-maximizing training paradigm for robust deep reinforcement learning.
- Connects global certified robustness with local certified radii estimated from training-time statistics.
- Uses policy imitation to stabilize CAMP training and improve robustness-return trade-offs.
- Achieves up to twice the certified expected return compared with baseline methods.

## Resources

- [Paper](https://arxiv.org/pdf/2501.17667)
- [Code](https://github.com/NeuralSec/camp-robust-rl)
- [Zenodo Artifact](https://zenodo.org/records/14729675)
