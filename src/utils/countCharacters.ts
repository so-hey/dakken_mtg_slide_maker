export default function countCharacters(text: string) {
  let count = 0;

  for (let char of text) {
    if (char.match(/[ -~]/)) {
      count += 3;
    } else {
      count += 5;
    }
  }

  return count;
}
