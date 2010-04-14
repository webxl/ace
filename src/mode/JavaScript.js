ace.provide("ace.mode.JavaScript");

ace.mode.JavaScript = function() {
    this.$tokenizer = new ace.Tokenizer(new ace.mode.JavaScriptHighlightRules().getRules());
};
ace.inherits(ace.mode.JavaScript, ace.mode.Text);

ace.mode.JavaScript.prototype.toggleCommentLines = function(doc, range) {
    var addedRows = doc.outdentRows(range, "//");
    if (addedRows == 0) {
        var addedRows = doc.indentRows(range, "//");
    };
    return addedRows;
};