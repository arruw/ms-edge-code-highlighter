function isCode() {
    var childNodes = document.body.childNodes;
    var pre = childNodes[0];
    if(childNodes.length === 1 && pre.tagName.toLowerCase() === 'pre' ) return true;
    return false;
}

function renderCode() {
    if(isCode()) {
        $('pre').addClass('prettyprint linenums');
        prettyPrint();
    }
}

renderCode();