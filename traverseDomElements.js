'use strict';

function traverseDom(element, callback) {
  var allElements = element.children;
  if(!allElements) { return; }
  for(var i=0; i < allElements.length; i++) {
    traverseDom(allElements[i], callback);
    callback(allElements[i]);
  }
}

function traverse(element, callback) {
  callback(element);
  const children = element.children;
  if (!children) return;
  for(var i=0; i < children.length; i++) {
    traverse(children[i], callback);
  }
}
