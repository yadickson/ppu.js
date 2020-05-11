'use strict'

const expect = require('chai').expect

const {
  carFormatValidator,
  oldCarFormatValidator,
  newCarFormatValidator,
  motoFormatValidator
} = require('..')

describe('Test PPU validator', () => {
  describe('Validate Old PPU Car', () => {
    it('Validate from null', () => {
      const value = oldCarFormatValidator(null)
      expect(value).to.be.equal(false)
    })

    it('Validate from empty', () => {
      const value = oldCarFormatValidator('')
      expect(value).to.be.equal(false)
    })

    it('Validate from Abbb00 format, return true', () => {
      const value = oldCarFormatValidator('Abbb00')
      expect(value).to.be.equal(true)
    })

    it('Validate from bAbb00 format, return true', () => {
      const value = oldCarFormatValidator('bAbb00')
      expect(value).to.be.equal(true)
    })

    it('Validate from bbab00 format, return true', () => {
      const value = oldCarFormatValidator('bbab00')
      expect(value).to.be.equal(true)
    })

    it('Validate from bbba00 format, return true', () => {
      const value = oldCarFormatValidator('bbba00')
      expect(value).to.be.equal(true)
    })

    it('Validate from bbbba0 format, return false', () => {
      const value = oldCarFormatValidator('bbbba0')
      expect(value).to.be.equal(false)
    })

    it('Validate from bbbb0a format, return false', () => {
      const value = oldCarFormatValidator('bbbb0a')
      expect(value).to.be.equal(false)
    })

    it('Validate from bbbb00 format, return true', () => {
      const value = oldCarFormatValidator('bbbb00')
      expect(value).to.be.equal(true)
    })

    it('Validate from bBCf01 format, return true', () => {
      const value = oldCarFormatValidator('bBCf01')
      expect(value).to.be.equal(true)
    })

    it('Validate from bb000 format, return false', () => {
      const value = oldCarFormatValidator('bb000')
      expect(value).to.be.equal(false)
    })

    it('Validate from bb00000 format, return false', () => {
      const value = oldCarFormatValidator('bb00000')
      expect(value).to.be.equal(false)
    })
  })

  describe('Validate New PPU Car', () => {
    it('Validate from null', () => {
      const value = newCarFormatValidator(null)
      expect(value).to.be.equal(false)
    })

    it('Validate from empty', () => {
      const value = newCarFormatValidator('')
      expect(value).to.be.equal(false)
    })

    it('Validate from Abbb00 format, return false', () => {
      const value = newCarFormatValidator('Abbb00')
      expect(value).to.be.equal(false)
    })

    it('Validate from bAbb00 format, return false', () => {
      const value = newCarFormatValidator('bAbb00')
      expect(value).to.be.equal(false)
    })

    it('Validate from bbab00 format, return false', () => {
      const value = newCarFormatValidator('bbab00')
      expect(value).to.be.equal(false)
    })

    it('Validate from bbba00 format, return false', () => {
      const value = newCarFormatValidator('bbba00')
      expect(value).to.be.equal(false)
    })

    it('Validate from bbbba0 format, return false', () => {
      const value = newCarFormatValidator('bbbba0')
      expect(value).to.be.equal(false)
    })

    it('Validate from bbbb0a format, return false', () => {
      const value = newCarFormatValidator('bbbb0a')
      expect(value).to.be.equal(false)
    })

    it('Validate from bbbb00 format, return true', () => {
      const value = newCarFormatValidator('bbbb00')
      expect(value).to.be.equal(true)
    })

    it('Validate from bBCf01 format, return true', () => {
      const value = newCarFormatValidator('bBCf01')
      expect(value).to.be.equal(true)
    })

    it('Validate from bb000 format, return false', () => {
      const value = newCarFormatValidator('bb000')
      expect(value).to.be.equal(false)
    })

    it('Validate from bb00000 format, return false', () => {
      const value = newCarFormatValidator('bb00000')
      expect(value).to.be.equal(false)
    })
  })

  describe('Validate All PPU Car', () => {
    it('Validate from null', () => {
      const value = carFormatValidator(null)
      expect(value).to.be.equal(false)
    })

    it('Validate from empty', () => {
      const value = carFormatValidator('')
      expect(value).to.be.equal(false)
    })

    it('Validate from Abbb00 format, return true', () => {
      const value = carFormatValidator('Abbb00')
      expect(value).to.be.equal(true)
    })

    it('Validate from bAbb00 format, return true', () => {
      const value = carFormatValidator('bAbb00')
      expect(value).to.be.equal(true)
    })

    it('Validate from bbab00 format, return true', () => {
      const value = carFormatValidator('bbab00')
      expect(value).to.be.equal(true)
    })

    it('Validate from bbba00 format, return true', () => {
      const value = carFormatValidator('bbba00')
      expect(value).to.be.equal(true)
    })

    it('Validate from bbbba0 format, return false', () => {
      const value = carFormatValidator('bbbba0')
      expect(value).to.be.equal(false)
    })

    it('Validate from bbbb0a format, return false', () => {
      const value = carFormatValidator('bbbb0a')
      expect(value).to.be.equal(false)
    })

    it('Validate from bbbb00 format, return true', () => {
      const value = carFormatValidator('bbbb00')
      expect(value).to.be.equal(true)
    })

    it('Validate from bBCf01 format, return true', () => {
      const value = carFormatValidator('bBCf01')
      expect(value).to.be.equal(true)
    })

    it('Validate from bb000 format, return false', () => {
      const value = carFormatValidator('bb000')
      expect(value).to.be.equal(false)
    })

    it('Validate from bb00000 format, return false', () => {
      const value = carFormatValidator('bb00000')
      expect(value).to.be.equal(false)
    })
  })

  describe('Validate PPU Moto', () => {
    it('Validate from null', () => {
      const value = motoFormatValidator(null)
      expect(value).to.be.equal(false)
    })

    it('Validate from empty', () => {
      const value = motoFormatValidator('')
      expect(value).to.be.equal(false)
    })

    it('Validate from Abbb00 format, return false', () => {
      const value = motoFormatValidator('Abbb00')
      expect(value).to.be.equal(false)
    })

    it('Validate from Ab000 format, return true', () => {
      const value = motoFormatValidator('Ab000')
      expect(value).to.be.equal(true)
    })

    it('Validate from Ab0000 format, return true', () => {
      const value = motoFormatValidator('Ab0000')
      expect(value).to.be.equal(true)
    })

    it('Validate from b000 format, return false', () => {
      const value = motoFormatValidator('b000')
      expect(value).to.be.equal(false)
    })

    it('Validate from lb000 format, return true', () => {
      const value = motoFormatValidator('lb000')
      expect(value).to.be.equal(true)
    })

    it('Validate from bbba00 format, return false', () => {
      const value = motoFormatValidator('bbba00')
      expect(value).to.be.equal(false)
    })

    it('Validate from bbbba0 format, return false', () => {
      const value = motoFormatValidator('bbbba0')
      expect(value).to.be.equal(false)
    })

    it('Validate from bbbb0a format, return false', () => {
      const value = motoFormatValidator('bbbb0a')
      expect(value).to.be.equal(false)
    })

    it('Validate from bbbb00 format, return false', () => {
      const value = motoFormatValidator('bbbb00')
      expect(value).to.be.equal(false)
    })

    it('Validate from bBCf01 format, return false', () => {
      const value = motoFormatValidator('bBCf01')
      expect(value).to.be.equal(false)
    })
  })
})
