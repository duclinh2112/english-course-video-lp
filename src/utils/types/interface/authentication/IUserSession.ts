import type { IToken } from '../IAuth'

export interface IIuserSession {
  id: string
  fullName: string
  email: string
  phone: string
  status: string
  token: IToken
}
