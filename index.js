module.exports = genericDiffToHTML5

var escape = require('html-escaping').escape

function genericDiffToHTML5(diff) {
  return diff
    .reduce(
      function(result, element) {
        var string = element.items.join('')
        if (element.added) {
          return ( result + wrap('ins', string) ) }
        else if (element.removed) {
          return ( result + wrap('del', string) ) }
        else {
          return ( result + escape(string) ) } },
      '') }

function wrap(tag, string) {
  return (
    '<' + tag + '>' +
    escape(string) +
    '</' + tag + '>' ) }
