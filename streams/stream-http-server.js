import http from 'node:http'
import {Transform} from 'node:stream'

class InverseNumber extends Transform {
  _transform(chunk, encoding, callback) {
    const _transformed = Number(chunk.toString()) *  -1;
    console.log(_transformed)

    callback(null, Buffer.from(String(_transformed)))
  }
}

const server = http.createServer((req, res) => {
  return req.pipe(new InverseNumber()).pipe(res)
})
//req - readblestream
//res - writebleStream

server.listen(3334, ()=> {
  console.log('Server online')
});

