/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import { isAxiosUnprocessableEntityError } from './ultils'
import { HttpStatusCode, path } from '@/constants'
import { AuthResponse } from '@/types'
import { clearLS, getAccessTokenFromLS, setAccessTokenToLS, setProfileToLS } from '@/utils'

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
        if (url === path.login || url === path.register) {
          const data = response.data as AuthResponse
          this.accessToken = data.data.access_token
          setAccessTokenToLS(this.accessToken)
          setProfileToLS(data.data.user)
        } else if (url === path.logout) {
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
          const message = data.message || error.message
          toast.error(message)
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
