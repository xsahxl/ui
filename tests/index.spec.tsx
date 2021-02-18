import WindComponent from '../src/index'

describe('WindComponent #main', () => {
  it('exports in correct type', () => {
    [WindComponent].forEach((ReactComponent) => {
      expect(typeof ReactComponent).toBe('function')
    })
  })
})
