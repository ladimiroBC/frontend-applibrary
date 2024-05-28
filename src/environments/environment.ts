const baseUrl = 'http://localhost:8080';

export const environment = {
  production: false,
  studentEndPoint: {
    getAll: `${baseUrl}/student/list`,
    getById: (id: number) => `${baseUrl}/student/list/${id}`,
    create: `${baseUrl}/student/`,
    update: `${baseUrl}/student/`,
    delete: (id: number) => `${baseUrl}/student/${id}`
  },
  bookEndPoint: {
    getAll: `${baseUrl}/book/list`,
    getById: (id: number) => `${baseUrl}/book/list/${id}`,
    create: `${baseUrl}/book/`,
    update: `${baseUrl}/book/`,
    delete: (id: number) => `${baseUrl}/book/${id}`,
    checkBook: `${baseUrl}/book/check-book`
  },
  loanEndPoint: {
    getAll: `${baseUrl}/loan/list`,
    checkStudent: `${baseUrl}/loan/check-student`,
    borrowBook: `${baseUrl}/loan/borrow-book`
  }
}
