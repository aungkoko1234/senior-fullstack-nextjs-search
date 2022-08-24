import useSWR from 'swr'
import { fetcher } from '../lib/fetcher'
import { Paginated, PaginationQuery, Photo } from '../lib/interfaces'

export const useGetPhotos = ({
  page = 1,
  limit = 20,
  keyword = undefined,
}: PaginationQuery) => {
  console.log('page', page)
  const start = (page - 1) * limit
  let url = ''
  if (keyword) url = `/api/photos?title=${keyword}`
  else url = `/api/photos?_start=${start}&_limit=${limit}`
  console.log('url', url)
  const { data, error, isValidating } = useSWR<Paginated<Photo>, Error>(
    url,
    fetcher,
    {
      shouldRetryOnError: false,
    },
  )
  return { data, error, isValidating }
}
