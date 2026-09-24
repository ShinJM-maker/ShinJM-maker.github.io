(function () {
  const details = document.getElementById("advanced-map-details");
  const panel = document.querySelector(".map-panel");
  const mermaidNode = document.getElementById("advanced-mermaid");
  const toolbar = document.querySelector(".map-toolbar");
  const zoomInBtn = document.getElementById("zoom-in");
  const zoomOutBtn = document.getElementById("zoom-out");
  const zoomResetBtn = document.getElementById("zoom-reset");
  const zoomLevelEl = document.getElementById("zoom-level");

  let rendered = false;
  let scale = 1;
  let fitScale = 1;
  let baseWidth = 0;
  let baseHeight = 0;
  let mermaidLoader;

  const loadMermaid = () => {
    if (window.mermaid) return Promise.resolve(window.mermaid);
    if (mermaidLoader) return mermaidLoader;

    mermaidLoader = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js";
      script.onload = () => resolve(window.mermaid);
      script.onerror = () => reject(new Error("Failed to load Mermaid."));
      document.head.appendChild(script);
    });

    return mermaidLoader;
  };

  const getSvg = () => panel?.querySelector("svg");

  const applyZoom = () => {
    const svg = getSvg();
    if (!svg || !baseWidth || !baseHeight) return;
    svg.style.maxWidth = "none";
    svg.style.width = `${Math.round(baseWidth * scale)}px`;
    svg.style.height = `${Math.round(baseHeight * scale)}px`;
    if (zoomLevelEl) zoomLevelEl.textContent = `${Math.round(scale * 100)}%`;
  };

  const initializeZoom = () => {
    const svg = getSvg();
    if (!svg) return false;

    const viewBox = svg.viewBox?.baseVal;
    if (viewBox && viewBox.width && viewBox.height) {
      baseWidth = viewBox.width;
      baseHeight = viewBox.height;
    } else {
      const bbox = svg.getBBox?.();
      baseWidth = bbox?.width || svg.clientWidth || 1200;
      baseHeight = bbox?.height || svg.clientHeight || 900;
    }

    const panelWidth = panel?.clientWidth || baseWidth;
    const rawFitScale = panelWidth > 0 ? (panelWidth - 28) / baseWidth : 1;
    fitScale = Math.max(0.5, Math.min(1.05, rawFitScale));
    scale = fitScale;
    applyZoom();
    return true;
  };

  const renderMermaid = async () => {
    if (rendered || !mermaidNode) return;
    mermaidNode.innerHTML = '<p class="map-placeholder">Loading interactive diagram...</p>';

    try {
      const [mermaidLib, response] = await Promise.all([
        loadMermaid(),
        fetch("research-map-diagram.mmd")
      ]);

      if (!response.ok) {
        throw new Error("Failed to fetch Mermaid source.");
      }

      const mermaidSource = (await response.text()).trim();
      mermaidLib.initialize({
        startOnLoad: false,
        theme: "base",
        themeVariables: {
          primaryColor: "#fcf8f6",
          primaryTextColor: "#2e2d29",
          lineColor: "#8c1515",
          edgeLabelBackground: "#fffaf8",
          tertiaryColor: "#f8f3f1",
          fontSize: "13px"
        },
        flowchart: {
          curve: "basis",
          rankSpacing: 62,
          nodeSpacing: 40,
          diagramPadding: 4,
          padding: 8
        }
      });

      const renderId = `advanced-mermaid-${Date.now()}`;
      const renderedDiagram = await mermaidLib.render(renderId, mermaidSource);
      mermaidNode.innerHTML = renderedDiagram.svg;
      renderedDiagram.bindFunctions?.(mermaidNode);
      toolbar?.removeAttribute("hidden");
      rendered = true;
      initializeZoom();
    } catch (error) {
      console.error(error);
      mermaidNode.innerHTML = '<p class="map-placeholder">Interactive diagram could not be loaded. The static preview above remains available.</p>';
      toolbar?.setAttribute("hidden", "hidden");
    }
  };

  zoomInBtn?.addEventListener("click", () => {
    scale = Math.min(2.4, scale + 0.15);
    applyZoom();
  });

  zoomOutBtn?.addEventListener("click", () => {
    scale = Math.max(0.5, scale - 0.15);
    applyZoom();
  });

  zoomResetBtn?.addEventListener("click", () => {
    scale = fitScale;
    applyZoom();
  });

  details?.addEventListener("toggle", () => {
    if (details.open) {
      renderMermaid().then(() => {
        setTimeout(initializeZoom, 120);
      });
    }
  });

  window.addEventListener("resize", () => {
    if (rendered && details?.open) {
      initializeZoom();
    }
  });
})();
