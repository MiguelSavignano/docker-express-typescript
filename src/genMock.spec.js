const genMock = require('./genMock')

describe('genMock#resolveHttpMethodAndUrlPath', () => {
  it('get example', () => {
    expect(genMock.resolveHttpMethodAndUrlPath("/posts")).toEqual(["get", "/posts"])
  })
  it('post example', () => {
    expect(genMock.resolveHttpMethodAndUrlPath("POST /posts")).toEqual(["post", "/posts"])
  })
})
