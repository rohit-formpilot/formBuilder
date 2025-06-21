import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/posts', () => {
    return HttpResponse.json({
      id: 'abc-123',
      userId:'12',
      title: 'John',
      body: 'Maverick',
    })
  }),
]