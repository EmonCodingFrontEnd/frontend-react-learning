import request from '../utils/request';

export function queryTodos() {
  return request('http://localhost:3001/todos');
}
