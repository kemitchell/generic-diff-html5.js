module.exports = genericDiffToHTML5

var escape = require('html-escaping').escape

function genericDiffToHTML5(diff) {
  return combine(diff)
    .reduce(
      function(result, element) {
        if (element.added) {
          return ( result + wrap('ins', element.string) ) }
        else if (element.removed) {
          return ( result + wrap('del', element.string) ) }
        else {
          return ( result + escape(element.string) ) } },
      '') }

function wrap(tag, string) {
  return (
    '<' + tag + '>' +
    escape(string) +
    '</' + tag + '>' ) }

function combine(diff) {
  return diff
    .map(function(element) {
      return {
        string: element.items.join(''),
        added: element.added,
        removed: element.removed } }) }
