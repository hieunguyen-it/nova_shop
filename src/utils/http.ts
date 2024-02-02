/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import { isAxiosUnprocessableEntityError } from './ultils'
import { HttpStatusCode } from '@/constants'
import { AuthResponse } from '@/types'
import { clearLS, getAccessTokenFromLS, setAccessTokenToLS, setProfileToLS } from '@/utils'
import { URL_LOGIN, URL_LOGOUT, URL_REGISTER } from '@/api/auth.api'

class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    /**
     *  this.accessToken = getAccessTokenFromLS()
     *  Trick: Lấy AccessToken từ ram thay vì lấy trực tiếp từ Local Storage
     *  => Khi đó tốc độ xử lý rất nhanh
     *  */

    this.accessToken = getAccessTokenFromLS()
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.authorization = this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === URL_LOGIN || url === URL_REGISTER) {
          const data = response.data as AuthResponse

          this.accessToken = data.data.access_token
          setAccessTokenToLS(this.accessToken)
          setProfileToLS(data.data.user)
        } else if (url === URL_LOGOUT) {
          this.accessToken = ''
          clearLS()
        }
        return response
      },
      function (error: AxiosError) {
        if (!isAxiosUnprocessableEntityError(error)) {
          console.log('error', error)
        }
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          const data: any | undefined = error.response?.data
          const message = data?.message || error.message
          toast.error(message)
        }
        // Check trường hợp token hết hạn
        if (error.response?.status === HttpStatusCode.Unauthorized) {
          clearLS()
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
