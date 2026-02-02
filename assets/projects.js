window.PROJECTS = [
  {
    title: "Molecular Counter: Automated Counting & Clustering in STM images",
    desc: "Jupyter notebook pipeline for scanning tunneling microscopy (STM) image analysis: reads Nanonis .sxm scans, performs background/mean correction and binarization (incl. Otsu thresholding), then detects molecules via blob detection / connected-component labeling, extracts region-based features (“molecular fingerprints”), and groups molecular species using PCA + K-Means clustering to automate counting and categorisation.",
    stack: "Python • Jupyter • nanoispy •  NumPy • SciPy • pandas • scikit-image • scikit-learn • matplotlib",
    repo: "https://github.com/Stephaniew1/Counting-Molecules",
    demo: "" // optional, e.g. "https://..."
  },
  {
    title: "Project Two",
    desc: "One sentence: problem → approach → result.",
    stack: "React • Node • Postgres",
    repo: "https://github.com/stephaniew1/REPO2",
    demo: ""
  },
  {
    title: "Project Three",
    desc: "Short description with measurable outcome if possible.",
    stack: "Data • Pandas • Matplotlib",
    repo: "https://github.com/stephaniew1/REPO3",
    demo: ""
  }
];

window.renderProjects = function renderProjects(containerId, limit){
  const el = document.getElementById(containerId);
  if(!el) return;

  const items = (window.PROJECTS || []).slice(0, limit || 999);

  el.innerHTML = items.map(p => `
    <div class="card project">
      <h3><a href="${p.repo}" target="_blank" rel="noopener">${p.title}</a></h3>
      <p>${p.desc}</p>
      <div class="meta">
        <span class="stack">${p.stack}</span>
        <span>
          ${p.demo ? `<a class="btn" href="${p.demo}" target="_blank" rel="noopener">Live</a>` : ``}
          <a class="btn" href="${p.repo}" target="_blank" rel="noopener">Code</a>
        </span>
      </div>
    </div>
  `).join("");
};
