'use strict'

const carRegex =
  '^(([B-DF-HJ-NP-TV-Z]{4})(\\d{2}))|(([B-DF-HJ-NP-TV-Z]{2})(\\d{4}))$'

function carFormatValidator (ppu) {
  const regex = new RegExp(carRegex, 'i')
  return ppu ? regex.exec(ppu) !== null : false
}

function motoFormatValidator (ppu) {
  return false
}

module.exports = {
  carFormatValidator,
  motoFormatValidator
}
