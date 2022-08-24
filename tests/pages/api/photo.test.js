/* eslint-disable no-undef */
/**
 * @jest-environment node
 */
import { createMocks } from 'node-mocks-http'
import photoHandler from '../../../src/pages/api/photos'

describe('/api/photos API Endpoint', () => {
  function mockRequestResponse(method = 'GET') {
    const { req, res } = createMocks({ method })
    req.headers = {
      'Content-Type': 'application/json',
    }

    return { req, res }
  }

  it('should return a successful response from Photo Api', async () => {
    const { req, res } = mockRequestResponse()
    req.query = {
      _limit: 20,
      _start: 1,
    }
    await photoHandler(req, res)

    expect(res.statusCode).toBe(200)
    expect(res.getHeaders()).toEqual({ 'content-type': 'application/json' })
    expect(res.statusMessage).toEqual('OK')
  })

  it('should return a 405 if HTTP method is not GET', async () => {
    const { req, res } = mockRequestResponse('POST') // Invalid HTTP call

    await photoHandler(req, res)

    expect(res.statusCode).toBe(405)
  })
})
