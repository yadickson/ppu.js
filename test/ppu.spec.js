'use strict'

const expect = require('chai').expect

const { carFormatValidator } = require('..')

describe('Test PPU validator', () => {
  describe('Validate PPU Car', () => {
    it('Validate from null', () => {
      const value = carFormatValidator(null)
      expect(value).to.be.equal(false)
    })

    it('Validate from empty', () => {
      const value = carFormatValidator('')
      expect(value).to.be.equal(false)
    })

    it('Validate from Abbb00 format, return false', () => {
      const value = carFormatValidator('Abbb00')
      expect(value).to.be.equal(false)
    })

    it('Validate from bAbb00 format, return false', () => {
      const value = carFormatValidator('bAbb00')
      expect(value).to.be.equal(false)
    })

    it('Validate from bbab00 format, return false', () => {
      const value = carFormatValidator('bbab00')
      expect(value).to.be.equal(false)
    })

    it('Validate from bbba00 format, return false', () => {
      const value = carFormatValidator('bbba00')
      expect(value).to.be.equal(false)
    })

    it('Validate from bbbba0 format, return false', () => {
      const value = carFormatValidator('bbbba0')
      expect(value).to.be.equal(false)
    })

    it('Validate from bbbb0a format, return false', () => {
      const value = carFormatValidator('bbbb0a')
      expect(value).to.be.equal(false)
    })

    it('Validate from bbbb00 format', () => {
      const value = carFormatValidator('bbbb00')
      expect(value).to.be.equal(true)
    })

    it('Validate from valid format', () => {
      const value = carFormatValidator('bBCf01')
      expect(value).to.be.equal(true)
    })
  })
})
