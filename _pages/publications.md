---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

## **Latest Papers**

---

### [NDSS'25] Provably Unlearnable Data Examples 
*Derui Wang, Minhui Xue, Bo Li, Seyit Camtepe, Liming Zhu*

<img src="../images/paper_figures/[NDSS'25]-PUE.png" alt="drawing" style="width:800px;"/>

We introduce the concept of certified learnability in this paper. Certified $(q,\eta)$-Learnability measures how learnable a dataset is by computing a probabilistic upper bound on the test performance of classifiers trained on this dataset, as long as those classifiers fall within a certified parameter set. We use certified $(q,\eta)$-Learnability as a measurement of the effectiveness and robustness of unlearnable examples, and propose Provably Unlearnable Examples (PUEs) which can lead to reduced $(q,\eta)$-Learnability when training classifiers on them.
Our source code is available at [Github](https://github.com/NeuralSec/certified-data-learnability).

---

### [USENIX Security'25] CAMP in the Odyssey: Provably Robust Reinforcement Learning with Certified Radius Maximization
*Derui Wang, Kristen Moore, Diksha Goel, Minjune Kim, Gang Li, Yang Li, Robin Doss, Minhui Xue, Bo Li, Seyit Camtepe, Liming Zhu*

<img src="../images/paper_figures/[USENIX_Sec'25]-CAMP.png" alt="drawing" style="width:800px;"/>

We introduce a novel paradigm dubbed {C}ertified-r{A}dius-{M}aximizing {P}olicy (**CAMP**) training for certifiably robust deep reinforcement learning agents. 
CAMP is designed to enhance DRL policies, achieving better utility without compromising provable robustness. 
By leveraging the insight that the global certified radius can be derived from local certified radii based on training-time statistics, CAMP formulates a surrogate loss related to the local certified radius and optimizes the policy guided by this surrogate loss. 
We also introduce *policy imitation* as a novel technique to stabilize CAMP training.
Experimental results demonstrate that CAMP significantly improves the robustness-return trade-off across various tasks. 
Based on the results, CAMP can achieve up to twice the certified expected return compared to that of baselines.
Our code is available at [Github](https://github.com/NeuralSec/camp-robust-rl) and [Zenodo](https://zenodo.org/records/14729675).


---

The full list of my publications can be found on my [Google Scholar](https://scholar.google.com.au/citations?user=uAbiaaUAAAAJ&hl=en).