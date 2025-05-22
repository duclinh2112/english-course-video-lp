export interface IPaginationResponse<T> {
  content: T[]
  currentPage: number
  hasNext: boolean
  payloadSize: number
  skippedRecords: number
  totalPages: number
  totalRecords: number
}

export interface IPaginationResponseNew<T> {
  results: T[]
  count: number
  current_page: number
  next: number
  previous: number
  total_pages: number
}
