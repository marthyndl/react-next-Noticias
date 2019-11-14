
export const sanitizeText = (text) => {
  if (text == null || text === false || text == undefined) { return ""; }
  return text.toString().toLowerCase()
    .replace(/[àáâãäå]/g,"a")  //ADD UTF8 SUPPORT
    .replace(/[èéêë]/g,"e")
    .replace(/[ìíîï]/g,"i")
    .replace(/[òóôõö]/g,"o")
    .replace(/[ñ]/g,"n")
    .replace(/[ùúûü]/g,"u").trim()
    .replace(/[^\w\s+]+/g, '')       // Remove all non-word chars
    .replace(/\s\s+/g, ' ')         // Replace multiple spaces with single spaces
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

export const deleteSpecialCharacters = (text) => {
  if (text == null || text === false || text == undefined) { return ""; }
  return text.toString()
    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '') 
}
