import { createServer } from 'miragejs'
import * as data from './utils/mockdata'

const API_FETCH_ARTICLES = "/api/articles/"
const API_FETCH_CATS = "/api/categories/"

const tags = Array(7).fill(0).map((e, i) => `tag${i}`)

export default function mockServer() {
  return createServer({

    routes() {
      this.get(`${API_FETCH_ARTICLES}:category`, (schema, request) => {

        const category = request.params.category
        const {start, length} = request.queryParams;

        console.log(`GET ARTICLE: cate: ${category}`);

        return {
          data: {
            list: data.genItemsStatic(length),
            next: start + length,
            tags: tags
          }
        }
      })

      this.get( API_FETCH_ARTICLES , (schema, request) => {

        const {start, length} = request.queryParams;

        console.log(`GET ARTICLE: all`);

        return {
          data: {
            list: data.genItemsStatic(length),
            next: start + length,
            tags: tags
          }
        }
      })

      this.get( API_FETCH_CATS , (schema, request) => {
        console.log(`GET CATS:`);
        return data.mockCats;
      })
    }
  });
}
