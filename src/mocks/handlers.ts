import { http, HttpResponse } from 'msw'
 
export const handlers = [
  // Default: return a list of posts
  http.get('https://jsonplaceholder.typicode.com/posts', () => {
    return HttpResponse.json([
      {
        id: 'abc-123',
        userId: '12',
        title: 'User Post',
        body: 'Maverick',
      },
      {
        id: 'def-456',
        userId: '34',
        title: 'Another Post',
        body: 'Goose',
      }
    ])
  }),
];