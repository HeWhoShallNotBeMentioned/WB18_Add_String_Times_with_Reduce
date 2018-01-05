
//querySelectorAll returns a node list which can be converted to an array with Array.from or ... spread operator
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes.map(node => node.dataset.time);
