var uppercase = "HELLO!"
 
function shout(string) {
  string.toUpperCase() === uppercase;
  return string.toUpperCase();
}

var lowercase = "hello!"

function whisper(string) {
  string.toLowerCase() === lowercase;
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

