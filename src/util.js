function numberToLetters(num) {
  let letters = "";
  while (num >= 0) {
    letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[num % 26] + letters;
    num = Math.floor(num / 26) - 1;
  }
  return letters;
}

function getNextId(draggables) {
  let nextIdNumber = draggables.length;
  while (
    draggables.some(
      (draggable) => draggable.id === numberToLetters(nextIdNumber)
    )
  ) {
    nextIdNumber++;
  }
  return numberToLetters(nextIdNumber);
}

export default { numberToLetters, getNextId };
