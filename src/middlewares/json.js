export async function json(req, res) {

  const buffers = []

//Aguardar carregar todo conteudo antes de processar
for await (const chunk of req) {
  buffers.push(chunk)
}
try {
  req.body = JSON.parse(Buffer.concat(buffers).toString())
} catch {
  req.body = null
}

res.setHeader('Content-type', 'application/json')
}