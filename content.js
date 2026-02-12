function handleTextNode(textNode) {
  textNode.nodeValue = textNode.nodeValue
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
}

function replaceText(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    handleTextNode(node);
  } else {
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
    let textNode;
    while ((textNode = walker.nextNode())) {
      handleTextNode(textNode);
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
