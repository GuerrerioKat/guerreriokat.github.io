// Content for the homepage (index.html). Edit here; the page renders from it.
window.SITE = {
  name: "Katherine M. Guerrerio",
  email: "kguerre6@jh.edu",
  photo: "/assets/home/profile.jpg",
  links: [
    { label: "Email", icon: "fa-solid fa-envelope", href: "mailto:kguerre6@jh.edu" },
    { label: "Google Scholar", icon: "fa-brands fa-google-scholar", href: "https://scholar.google.com/citations?user=M6RsVygAAAAJ" },
    { label: "GitHub", icon: "fa-brands fa-github", href: "https://github.com/GuerrerioKat" },
    { label: "LinkedIn", icon: "fa-brands fa-linkedin", href: "https://www.linkedin.com/in/katherine-guerrerio/" },
    { label: "CV", icon: "fa-solid fa-file-lines", href: "/cv/" }
  ],

  bio: [
    `I'm a senior at <a href="https://www.jhu.edu">Johns Hopkins University</a> majoring in Computer Science and Applied Mathematics &amp; Statistics, and I'm continuing into the combined BS/MSE program in Computer Science (AI track). I work with <a href="https://www.cs.jhu.edu/~vandurme/">Benjamin Van Durme</a> in BLab and with <a href="https://www.tshu.io">Tianmin Shu</a> in the Social Cognitive AI Lab, with support from a Joseph C. Pistritto Research Fellowship.`,
    `My research focuses on interpretable, evidence-centered multimodal reasoning. I want models that work over video, speech, and text to explain not only what they conclude but why the evidence warrants it, to recognize when information is missing, and to work with people without losing faithfulness to the evidence.`
  ],

  umbrella: {
    title: "Interpretable Multimodal Reasoning",
    text: "Multimodal models can now turn video, speech, and text into fluent accounts of events, but a convincing account is not necessarily a trustworthy one. A model can answer correctly without finding the observation that supports it, cite a relevant clip that doesn't prove its claim, or keep speaking confidently when the record is incomplete. I want to build evidence-centered multimodal models that can explain not only what they conclude, but why the available evidence warrants that conclusion. Three connected capabilities organize my work:"
  },
  pillars: [
    { title: "Faithful grounding", icon: "fa-solid fa-crosshairs", text: "Establishing whether a claim is supported by sufficient, inspectable evidence.", points: ["Verifying conclusions against the specific clips, frames, or passages that support them", "Incorporating contradictory information across sources and over time"] },
    { title: "Calibrated reasoning", icon: "fa-solid fa-gauge-high", text: "Recognizing when information is missing and deciding what to do about it.", points: ["Deciding whether to reason further, retrieve more evidence, or abstain", "Confidence that reflects how complete the evidence actually is"] },
    { title: "Reliable human collaboration", icon: "fa-solid fa-handshake", text: "Adapting to a human partner while keeping the account faithful to evidence.", points: ["Letting people refine an investigation through their feedback", "Guarding against unsupported assumptions introduced along the way"] }
  ],

  human: {
    title: "Human–AI interaction & machine social intelligence",
    text: `Beyond reasoning itself, I'm interested in how AI systems understand the people they interact with. That means modeling human behavior, intentions, and social cues so that AI can communicate and collaborate in ways that feel natural and genuinely helpful.`
  },


  // News: internships and positions from summer 2024 on, awards, talks, and papers.
  news: [
    { date: "Oct 2026", text: `<a href="#pub-rss">CaPE</a> is accepted at the LEAP Workshop @ <b>CoRL 2026</b>.` },
    { date: "Jul 2026", text: `<a href="#pub-magmar2026">MARQUIS</a> is accepted at the MAGMaR Workshop @ ACL 2026 as an <b>oral presentation</b>.` },
    { date: "Jun 2026", text: `Started the SCALE 2026 summer research program at the JHU HLTCOE.` },
    { date: "Feb 2026", text: `New preprint: <a href="#pub-rss">CaPE</a>, code as a path editor for grounding language communication in multi-agent cooperation.` },
    { date: "Spring 2026", text: `Awarded the Joseph C. Pistritto Research Fellowship (Computer Science, JHU).` },
    { date: "Spring 2026", text: `Named an NCWIT Aspirations in Computing Collegiate Award finalist.` },
    { date: "Dec 2025", text: `New preprint: <a href="#pub-trec2025">HLTCOE at TREC 2025: VQA Track</a>.` },
    { date: "Oct 2025", text: `<a href="#pub-icmi2025">Causal Explanation of Parent-Child Interaction Quality</a> is accepted at <b>ICMI 2025</b>.` },
    { date: "Sep 2025", text: `Invited talk at the HARC Data Sharing Special Interest Group.` },
    { date: "Sep 2025", text: `Joined the Social Cognitive AI Lab at JHU.` },
    { date: "Jun 2025", text: `Joined BLab at JHU.` },
    { date: "May 2025", text: `Started research at the Institute for Research in Technology, Universidad Pontificia Comillas (Madrid).` },
    { date: "May 2025", text: `Started an internship at Frenalytics.` },
    { date: "Feb 2025", text: `Gave an oral presentation at <b>AAAI 2025</b> in Philadelphia.` },
    { date: "Feb 2025", text: `Started an internship at Nyla Technology Solutions.` },
    { date: "Jun 2024", text: `Returned to the NIH Technology and Translational Research Unit.` },
    { date: "2024", text: `<a href="#pub-jcss2024">Quantifying the Quality of Parent-Child Interaction</a> is published in ACM JCSS.` }
  ],

  // `fig` is an image in assets/home/figs/; `me` marks Katherine in the author list.
  publications: [
    { key: "hydra", fig: "hydra.jpg",
      title: "HYDRA: A Hierarchical Dataset for Multi-Video Question Answering",
      authors: "<me>Katherine Guerrerio*</me>, Alexander Martin*, Tyler Skow, Pengyu Yan, Mahesh Bhosale, Debashish Chakraborty, Dengjia Zhang, Hanxiang Qin, Naren Sivakumar, Kiera McCormick, Sourajit Saha, Reihaneh Iranmanesh, Hannah Recknor, Tejas Gokhale, Benjamin Van Durme, William Walden, Reno Kriz",
      venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition", short: "CVPR 2027", year: "Under review", links: [] },
    { key: "hri", fig: "hri.jpg",
      title: "Sync or Sink: Conversational Pace Matching for Human-Robot Collaboration",
      authors: "Yifan Yin*, Binze Li*, Shiye Cao*, <me>Katherine Guerrerio</me>, Seokhyun Baek, Tianmin Shu, Chien-Ming Huang",
      venue: "ACM/IEEE International Conference on Human-Robot Interaction", short: "HRI 2027", year: "Under review", links: [] },
    { key: "rss", fig: "rss.jpg",
      title: "CaPE: Code as Path Editor for Grounding Language Communication in Multi-Agent Cooperation",
      authors: "Haojun Shi, Suyu Ye, <me>Katherine M. Guerrerio</me>, Jianzhi Shen, Yifan Yin, Daniel Khashabi, Chien-Ming Huang, Tianmin Shu",
      venue: "LEAP Workshop at CoRL", short: "CoRL LEAP", year: "2026", note: "Also under review at ICRA 2027",
      links: [{ label: "arXiv", href: "https://arxiv.org/abs/2602.19304" }, { label: "Project", href: "https://scai.cs.jhu.edu/projects/CaPE" }] },
    { key: "magmar2026", fig: "magmar2026.jpg",
      title: "MARQUIS: A Three-Stage Pipeline for Video Retrieval-Augmented Generation",
      authors: "Debashish Chakraborty, Dengjia Zhang, Jialiang Jin, <me>Katherine Guerrerio*</me>, Hanting Liu, Hanxiang Qin, Tyler Skow, Alexander Martin, Reno Kriz, Benjamin Van Durme",
      venue: "MAGMaR Workshop at ACL", short: "MAGMaR", year: "2026", oral: true,
      links: [{ label: "PDF", href: "https://aclanthology.org/2026.magmar-main.13.pdf" }, { label: "Code", href: "https://github.com/debashishc/marquis" }] },
    { key: "trec2025", fig: "trec2025.jpg",
      title: "HLTCOE Evaluation Team at TREC 2025: VQA Track",
      authors: "Dengjia Zhang, Charles Weng, <me>Katherine Guerrerio</me>, Yi Lu, Kenton Murray, Alexander Martin, Reno Kriz, Benjamin Van Durme",
      venue: "Text REtrieval Conference (TREC)", short: "TREC", year: "2025",
      links: [{ label: "arXiv", href: "https://arxiv.org/abs/2512.07738" }, { label: "Code", href: "https://github.com/Louis-26/2025-VQA-AG" }] },
    { key: "icmi2025", fig: "icmi2025.jpg",
      title: "Causal Explanation of the Quality of Parent-Child Interactions with Multimodal Behavioral Features",
      authors: "<me>Katherine M. Guerrerio</me>, Lujie Karen Chen, Lisa J. Berlin, Brenda Jones Harden",
      venue: "International Conference on Multimodal Interaction", short: "ICMI", year: "2025",
      links: [{ label: "PDF", href: "https://dl.acm.org/doi/10.1145/3716553.3750816" }] },
    { key: "jcss2024", fig: "jcss2024-stacked.jpg",
      title: "Quantifying the Quality of Parent-Child Interaction Through Machine-Learning Based Audio and Video Analysis: Towards a Vision of AI-assisted Coaching Support for Social Workers",
      authors: "Atefeh Jebeli, Lujie Karen Chen, <me>Katherine Guerrerio</me>, Sophia Papparotto, Lisa Berlin, Brenda Jones Harden",
      venue: "ACM Journal on Computing and Sustainable Societies", short: "ACM JCSS", year: "2024", oral: true,
      links: [{ label: "PDF", href: "https://dl.acm.org/doi/10.1145/3617693" }] }
  ],

  inProgress: [
    { title: "Fine-Grained Multi-Video Grounding for Verifiable Multimodal Article Generation", authors: "<me>Katherine Guerrerio*</me>, Hexuan Wang*, Alexander Martin, Jaemin Cho, Benjamin Van Durme" },
    { title: "Calibrating Evidence Sufficiency for Reliable Multi-Video Question Answering", authors: "<me>Katherine Guerrerio</me>, Alexander Martin, Liaoyaqi Wang, Anqi Liu, Benjamin Van Durme" },
    { title: "GradCAM-NeuroGuide: Clinically Aligned Visual Explanations for AI-Based Alzheimer's Evaluation", authors: "<me>Katherine M. Guerrerio</me>, Elena Capilla, Samhith Bhrugubanda, Celia Jung, Christian Byun, Sanjay Manohar, Sara Lumbreras Sancho" },
    { title: "Modeling Help Seeking and Supportive Communication in Substance Use Disorder Recovery Subreddits", authors: "<me>Katherine Guerrerio</me>, Salvatore Giorgi, Tingting Liu, Emily Senko, Kelsey Isman, Brenda Curtis" }
  ],

  talks: [
    { date: "Oct 2025", venue: "International Conference on Multimodal Interaction (ICMI), virtual", title: "Causal Explanation of the Quality of Parent-Child Interactions with Multimodal Behavioral Features" },
    { date: "Sep 2025", venue: "HARC Data Sharing Special Interest Group, invited talk", title: "Multimodal Models of Parent-Child Interactions: Exploring Explainability and Actionability" },
    { date: "Feb 2025", venue: "AAAI Conference on Artificial Intelligence, Philadelphia", title: "Causal Explanation of Quality of Parent-Child Interactions (Student Abstract)" }
  ],

  awards: [
    { year: "2026", title: "Joseph C. Pistritto Research Fellowship", text: "Supports intensive undergraduate research with a CS faculty mentor" },
    { year: "2026", title: "NCWIT Aspirations in Computing Collegiate Award, Finalist", text: "One of 63 students recognized nationally" },
    { year: "2023–", title: "Dean's List", text: "Every semester at Johns Hopkins" }
  ],

  communityReads: {
    href: "https://www.ourcommunityreads.org",
    role: "Founder & Board President, 2021–present",
    text: "A 501(c)(3) nonprofit promoting representation in children's literature. Volunteers lead reading lessons with diverse books in Baltimore schools and public libraries.",
    stats: [
      { n: "3,400+", label: "children taught" },
      { n: "200+", label: "lessons" },
      { n: "15", label: "schools & libraries" },
      { n: "45+", label: "volunteers" }
    ]
  },
  beyond: [
    { title: "Frenalytics", icon: "fa-solid fa-book-open-reader", role: "AI System Design & Integration Intern", when: "May – Aug 2025 · New York, NY",
      text: "Built an LLM-powered reading assistant for students with special needs, in partnership with Readeezy. It supports voice, text, and button-based input and ships as a WordPress plugin." },
    { title: "Nyla Technology Solutions", icon: "fa-solid fa-comments", role: "AI and Automation Intern", when: "Feb – May 2025 · Baltimore, MD",
      text: "Evaluated AI meeting assistants with the CEO and gave a live demo to the executive team, which led to company-wide adoption. Wrote the user guides for the rollout." },
    { title: "JHU Brain–Computer Interface Society", icon: "fa-solid fa-brain", role: "Decoding Subteam Member", when: "Feb 2025 – May 2026",
      text: "Reconstructed images from EEG by aligning EEG embeddings with CLIP in a shared latent space, and mentored first-year members." }
  ],

  updated: "October 2026"
};

window.fmtAuthors = (s) => s.replace(/<me>(.*?)<\/me>/g, '<span class="me">$1</span>');
window.render = (id, items, fn) => { const el = document.getElementById(id); if (el) el.innerHTML = items.map(fn).join(""); };
