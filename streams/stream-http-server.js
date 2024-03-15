import http from 'node:http'
import {Transform} from 'node:stream'

class InverseNumber extends Transform {
  _transform(chunk, encoding, callback) {
    const _transformed = Number(chunk.toString()) *  -1;
    console.log(_transformed)

    callback(null, Buffer.from(String(_transformed)))
  }
}

const server = http.createServer(async (req, res) => {
  const buffers = []

  //Aguardar carregar todo conteudo antes de processar
  for await (const chunk of req) {
    buffers.push(chunk)
  }

  const fullStreamContent = Buffer.concat(buffers).toString()
  console.log(fullStreamContent)

  return req.end(fullStreamContent)


  //return req.pipe(new InverseNumber()).pipe(res)
})
//req - readblestream
//res - writebleStream

server.listen(3334, ()=> {
  console.log('Server online')
});

