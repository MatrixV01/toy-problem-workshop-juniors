function abbreviate(string) {
  var insideWordCount = string.length - 2;
  var array = string.split("")
  var last = array.pop()
  var first = array.shift()
  return first + insideWordCount + last;
}

var string = "testiclesfaceshaedafdf"

abbreviate(string);


////////////
////////////
// Worked //
////////////
////////////
