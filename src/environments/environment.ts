const baseUrl = 'http://localhost:8080';

export const environment = {
  production: false,
  studentEndPoint: {
    getAll: `${baseUrl}/student/list`
  },
  bookEndPoint: {
    getAll: `${baseUrl}/book/list`
  },
  loanEndPoint: {
    getAll: `${baseUrl}/loan/list`
  }
}
