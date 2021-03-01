export const generateRandomId = (
  alphaSize: number,
  numericSize: number,
) => {
  var text = " ";
  var numSet = "0123456789";
  var alphaSet = "abcdefghijklmnopqrstuvwxyz";

  for( var i=0; i < alphaSize; i++) {
    text += alphaSet.charAt(Math.floor(Math.random() * alphaSet.length));
  }

  for( var i=0; i < numericSize; i++) {
    text += numSet.charAt(Math.floor(Math.random() * numSet.length));
  }

  return text;
}
