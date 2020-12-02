export function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export function haveMatchedElements(arr1, arr2) {
  return arr1.filter(element => arr2.includes(element)).length;
}
