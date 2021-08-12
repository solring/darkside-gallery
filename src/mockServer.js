import { createServer } from 'miragejs';
import * as data from './utils/mockdata';

const tags = Array(7).fill(0).map((e, i) => `tag${i}`)

export default function() {
  return createServer({
    seeds(server) {
      server.db.loadData({
        users:[
          {account: "test@email.cc", password: "123456", id: "userId"}
        ],
      })
    },

    routes() {
      this.post('/api/article/:category', (schema, request) => {

        const category = request.params.category
        const json = JSON.parse(request.requestBody);
        const {start, length} = json;

        console.log(`GET ARTICLE: cate: ${category}`);

        return {
          data: {
            list: data.genItems(length),
            next: start + length,
            tags: tags
          }
        }
      })

      this.post('/api/article', (schema, request) => {

        const json = JSON.parse(request.requestBody);
        const {start, length} = json;

        console.log(`GET ARTICLE: all`);

        return {
          data: {
            list: data.genItems(length),
            next: start + length,
            tags: tags
          }
        }
      })
    }
  });
}