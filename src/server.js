import http from 'node:http'





const server = http.createServer((request, response) => {
  const {method, url } = request
  if(method === 'GET' && url === "/users"){
    console.log('Lista de Usuarios')
  }

  return response.end(
    'Hello World'
  )
})


server.listen(3333)

