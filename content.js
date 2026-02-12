function handleTextNode(textNode) {
  if (!textNode.nodeValue) return;

  const originalValue = textNode.nodeValue;
  const newValue = originalValue
    .replace(/\bRepublicans\b/g, 'American Fascists')
    .replace(/\bRepublican\b/g, 'American Fascist')
    .replace(/\brepublicans\b/g, 'american fascists')
    .replace(/\brepublican\b/g, 'american fascist')
    .replace(/\bGOP\b/g, 'American Fascist')
    .replace(/\bG\.O\.P\./g, 'American Fascist')
    .replace(/\bI\.C\.E\./g, 'Gestapo')
    .replace(/\bICE\b/g, 'Gestapo')
    .replace(/\bImmigration and Customs Enforcement\b/g, 'Gestapo')
    .replace(/\bimmigration and customs enforcement\b/g, 'Gestapo');

  if (originalValue !== newValue) {
    textNode.nodeValue = newValue;
  }
}

function replaceText(node) {
  // Skip editable elements and all their children
  if (
    node.nodeType === Node.ELEMENT_NODE &&
    (node.tagName === "INPUT" ||
      node.tagName === "TEXTAREA" ||
      node.isContentEditable)
  ) {
    return;
  }

  if (node.nodeType === Node.TEXT_NODE) {
    handleTextNode(node);
  } else {
    for (let i = 0; i < node.childNodes.length; i++) {
      replaceText(node.childNodes[i]);
    }
  }
}

replaceText(document.body);

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      replaceText(node);
    });
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});