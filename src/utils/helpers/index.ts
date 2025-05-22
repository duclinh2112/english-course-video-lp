import type { IPaginationRequest } from '../types/interface/response/IPaginationRequest'

export function toURLSearchParams(
  request?: IPaginationRequest,
): URLSearchParams {
  const params = new URLSearchParams()

  request &&
    Object.entries(request).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (key === 'sort' && typeof value === 'string') {
          try {
            const parsedSort = JSON.parse(value)
            if (Array.isArray(parsedSort)) {
              parsedSort.forEach((v) => params.append(key, v))
            } else {
              params.append(key, value)
            }
          } catch {
            params.append(key, value)
          }
        } else if (Array.isArray(value)) {
          value.forEach((v) => params.append(key, v))
        } else {
          params.append(key, value)
        }
      }
    })

  return params
}
