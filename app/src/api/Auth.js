export const authenticateUser = (username: string, password: string): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'asdasds',
      })
    }, 1000);
  })
}