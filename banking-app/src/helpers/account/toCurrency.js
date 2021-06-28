export default function toCurrency(number) {
  var n = number.toFixed(2);
  const reversed = reverse(String(n));
  const replaced = reversed.replace(/(\d{3})(?=\d)/g, "$1,");
  return reverse(replaced);
}

function reverse(string) {
  return string.split("").reverse().join("");
}
