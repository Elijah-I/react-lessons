const FS = {
  f1: 65,
  f2: 42
}

const getFS = (name, callback) => {
  setTimeout(() => {
    callback(FS[name])
  }, Math.random() * 500)
}

const sumFS = (f1, f2, callback) => {
  getFS(f1, (fs_1) => {
    getFS(f2, (fs_2) => {
      callback(fs_1 + fs_2)
    })
  })
}

sumFS("f1", "f2", (rez) => {
  console.log(rez)
})
