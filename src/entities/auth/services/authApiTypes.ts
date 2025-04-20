export type CheckAuthResponse = {
  data: {
    auth: boolean,
    email: string,
    id: number,
  }
}