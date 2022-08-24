import { NextApiRequest, NextApiResponse } from 'next'
import { apiClient } from '../../lib/httpClient'
import { stringify } from 'qs'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== 'GET') {
      res.status(405).json({ message: 'Only GET requests allowed' })
      return
    }
    console.log('query', req.query)
    const url = 'photos' + stringify(req.query, { addQueryPrefix: true })
    console.log('url', url)

    const response = await apiClient().get(url)
    const limit = Number(req.query['_limit'])
    const currentPage = Number(req.query['_start']) / limit
    const total = 5000
    return res.status(200).json({
      data: response.data,
      limit: req.query.title ? 1 : limit,
      currentPage: req.query.title ? 1 : currentPage,
      total: req.query.title ? response.data.length : total,
      message: 'Success',
    })
  } catch (e) {
    console.log('error', e)
    return res.status(500).json({ error: 'Unexpected error.' })
  }
}

export default handler
