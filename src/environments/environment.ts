const baseUrl = 'http://localhost:8080';

export const environment = {
  production: false,
  studentEndpoint: {
    getAll: `${baseUrl}/student/list`
  }
}
