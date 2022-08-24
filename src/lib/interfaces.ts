export interface Photo {
  id: number
  albumId: number
  title: string
  thumbnailUrl: string
  url: string
}

export interface Paginated<T> {
  data: T[]
  currentPage: number
  limit: number
  total: number
}

export interface PaginationQuery {
  page?: number
  total?: number
  limit: number
  keyword?: string
}

export type Header = {
  title: string
  name: string
  type: 'text' | 'image' | 'block' | 'action'
  align: 'right' | 'left' | 'center' | undefined
  // eslint-disable-next-line no-unused-vars
  action?: (data: unknown) => void
}
