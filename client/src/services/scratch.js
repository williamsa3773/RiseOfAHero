const axios = require('axios');

const main = async () => {
  const resp = await axios.put('http://localhost:3000/heros/2', {hero:{
  level: 2,
  exp: 0,
  str: 1,
  dex: 1,
  kno: 1,
  cha: 1,
  vit: 1,
  def: 1,
  skill_point: 5,
  name: 'noobi3'
}})
console.log(resp.data)
}

main();
