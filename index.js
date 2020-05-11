'use strict'

const oldCarRegex = '^(([A-Z]{4}\\d{2})|([A-Z]{2}\\d{4}))$'

const newCarRegex =
  '^(([B-DF-HJ-NP-TV-Z]{4}\\d{2})|([B-DF-HJ-NP-TV-Z]{2}\\d{4}))$'

const motoRegexBase = '^([A-Z]{2}\\d{3})$'

const motoRegexFull = '^([A-Z]{2}[0]\\d{3})$'

function regexValidator (iregex, ppu) {
  const regex = new RegExp(iregex, 'i')
  return ppu ? regex.exec(ppu) !== null : false
}

function oldCarFormatValidator (ppu) {
  return regexValidator(oldCarRegex, ppu)
}

function newCarFormatValidator (ppu) {
  return regexValidator(newCarRegex, ppu)
}

function carFormatValidator (ppu) {
  return newCarFormatValidator(ppu) || oldCarFormatValidator(ppu)
}

function motoFormatValidatorBase (ppu) {
  return regexValidator(motoRegexBase, ppu)
}

function motoFormatValidatorFull (ppu) {
  return regexValidator(motoRegexFull, ppu)
}

function motoFormatValidator (ppu) {
  return motoFormatValidatorBase(ppu) || motoFormatValidatorFull(ppu)
}

module.exports = {
  carFormatValidator,
  oldCarFormatValidator,
  newCarFormatValidator,
  motoFormatValidator
}
