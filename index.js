const m = new Map()
m.set('0', 'foo')
m.set(1, 'bar')

for (const [k, v] of m.entries()) {
  console.log(k, v)
}
