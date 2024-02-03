import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import {
  clearLS,
  getAccessTokenFromLS,
  getProfileFromLS,
  getRefreshTokenFromLS,
  setAccessTokenToLS,
  setProfileToLS,
  setRefreshTokenToLS
} from '../auth'

const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzRhNjExNWZkYzVmMDM3ZTZmNjk0YiIsImVtYWlsIjoiZDdAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMi0xMi0xNVQwOTo1MDo0Ny4xODhaIiwiaWF0IjoxNjcxMDk3ODQ3LCJleHAiOjE2NzExODQyNDd9.aRuh6TdD8sMlJuAA-YYg_b0xNwOK4gQzoHsqLczs9Gw'

const refresh_token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzRhNjExNWZkYzVmMDM3ZTZmNjk0YiIsImVtYWlsIjoiZDdAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyMi0xMi0xMlQwODoxMjo1NS4xOTZaIiwiaWF0IjoxNjcwODMyNzc1LCJleHAiOjE2ODQ2NTY3NzV9.exhtfRyvl2Z5uAAfEQKtIyyUhP8q-K5wvHvHpWZz128'

const profile =
  '{"_id":"6374a6115fdc5f037e6f694b","roles":["User"],"email":"d7@gmail.com","createdAt":"2022-11-16T08:57:53.872Z","updatedAt":"2022-12-05T06:55:57.846Z","__v":0,"date_of_birth":"1997-01-13T17:00:00.000Z","name":"Dư Thanh Được 3","address":"Da nang, Vietnam","avatar":"44f75461-560e-42b5-a9d7-2b833a9f4d67.jpg","phone":"11111111111"}'

/**
 *  beforeEach được gọi trước khi mỗi describe được gọi
 *  localStorage sẽ bị xóa toàn bộ trước khi các describe được gọi
 *  ở đây có 3 describe đứng sau thì nó sẽ gọi trước mỗi lần describe tương ứng là 3 lần gọi
 * */
beforeEach(() => {
  localStorage.clear()
})

/**
 * beforeAll được gọi trước khi tất cả các describe được gọi
 */

beforeAll(() => {
  setAccessTokenToLS(access_token)
  setRefreshTokenToLS(refresh_token)
  setProfileToLS(JSON.parse(profile))
})

/**
 * Tương tự
 * afterEach được gọi sau mỗi describe được gọi
 * afterAll được gọi sau khi tất cả các describe được gọi
 */

describe('access_token', () => {
  it('access_token được set vào localStorage', () => {
    setAccessTokenToLS(access_token)
    expect(getAccessTokenFromLS()).toBe(access_token)
  })
})

describe('refresh_token', () => {
  it('refresh_token được set vào localStorage', () => {
    setRefreshTokenToLS(refresh_token)
    expect(getRefreshTokenFromLS()).toEqual(refresh_token)
  })
})

describe('clearLS', () => {
  it('Xóa hết access_token, refresh_token, profile', () => {
    setRefreshTokenToLS(refresh_token)
    setAccessTokenToLS(access_token)
    setProfileToLS(JSON.parse(profile))
    clearLS()
    expect(getAccessTokenFromLS()).toBe('')
    expect(getRefreshTokenFromLS()).toBe('')
    expect(getProfileFromLS()).toBe(null)
  })
})
