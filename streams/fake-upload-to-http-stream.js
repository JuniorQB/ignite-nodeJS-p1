import {Readable} from 'node:stream'

//process.stdin.pipe(process.stdout)

//Stream de Leitura
class OneToHundredStream extends Readable {
  index = 1

  _read(){
    const i = this.index++

    setTimeout(() => {
    if(i > 100){
      this.push(null)
    } else {
      const buf = Buffer.from(String(i))
      this.push(buf)
    }
  }, 1000)
  }
}


fetch('http://localhost:3334', {
  method: 'POST',
  body: new OneToHundredStream(),
  duplex: 'half' 
}).then(res => {
  return res.text()
}).then(data => {
  console.log(data)
})