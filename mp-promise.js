const wxp = new Proxy({}, {
  get (target, key) {
    if (key === '__esModule') return
    const method = wx[key]
    if (!method) return
    return (args = {}) =>
      new Promise((resolve, reject) => {
        args.success = (res) => resolve(res)
        args.fail = (err) => reject(err)
        method(args)
      })
  }
})

module.exports = wxp
