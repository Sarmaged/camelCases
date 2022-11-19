const cases = require('./index')

describe('upperCaseFirst', () => {
  it('should String', () => {
    expect(cases.upperCaseFirst('string')).toBe('String')
  })
})

describe('lowCaseFirst', () => {
  it('should String', () => {
    expect(cases.lowCaseFirst('String')).toBe('string')
  })
})
