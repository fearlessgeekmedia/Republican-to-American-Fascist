function replaceText(node) {
  const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
  let textNode;
  while ((textNode = walker.nextNode())) {
    textNode.nodeValue = textNode.nodeValue
      .replace(/\bRepublicans\b/g, 'American Fascists')
      .replace(/\bRepublican\b/g, 'American Fascist')
      .replace(/\brepublicans\b/g, 'american fascists')
      .replace(/\brepublican\b/g, 'american fascist')
      .replace(/\bGOP\b/g, 'American Fascist')
      .replace(/\bG\.O\.P\./g, 'American Fascist');
  }
}

replaceText(document.body);

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        replaceText(node);
      } else if (node.nodeType === Node.TEXT_NODE) {
        node.nodeValue = node.nodeValue
          .replace(/\bRepublicans\b/g, 'American Fascists')
          .replace(/\bRepublican\b/g, 'American Fascist')
          .replace(/\brepublicans\b/g, 'american fascists')
          .replace(/\brepublican\b/g, 'american fascist')
          .replace(/\bGOP\b/g, 'American Fascist')
          .replace(/\bG\.O\.P\./g, 'American Fascist');
      }
    });
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
