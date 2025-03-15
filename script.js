import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

async function getMMD() {
  try {
    // from file
    const response = await fetch("game.elk.mmd");
    if (!response.ok) throw new Error(`error http ${response.status} https://http.cat/${response.status}`);
  } catch (error) {
    console.error("Error loading Mermaid diagram:", error);
    return "Failed to load diagram."
  }
  return TODOOOO
}


async function main() {

  // from file get mmd
  const response = await fetch(filePath);
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

  const mmd = await response.text();
  document.getElementById("diagram-container").textContent = mmd;

  // render
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'loose',
  });
  await mermaid.run({
    querySelector: '.mermaid',
  });
}

main();

document.getElementById("diagram-container").textContent = "Failed to load diagram.";