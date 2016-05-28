module.exports = {
  cluster: {
    disconnect: 0
  },
  crypto: {
    pbkdf2: 5,
    randomBytes: 1
  },
  dns: {
    lookup: 2,
    lookupService: 2,
    resolve: 2,
    resolve4: 1,
    resolve6: 1,
    resolveCname: 1,
    resolveMx: 1,
    resolveNs: 1,
    resolveSoa: 1,
    resolveSrv: 1,
    resolvePtr: 1,
    resolveTxt: 1,
    reverse: 1
  },
  fs: {
    access: 2,
    appendFile: 3,
    chmod: 2,
    chown: 3,
    close: 1,
    exists: 1,
    fchmod: 2,
    fchown: 3,
    fdatasync: 1,
    fstat: 1,
    fsync: 1,
    ftruncate: 2,
    futimes: 3,
    lchmod: 2,
    lchown: 3,
    link: 2,
    lstat: 1,
    mkdir: 2,
    mkdtemp: 1,
    open: 3,
    read: 5,
    readdir: 2,
    readFile: 2,
    readlink: 2,
    realpath: 2,
    rename: 2,
    rmdir: 1,
    stat: 1,
    symlink: 3,
    truncate: 2,
    unlink: 1,
    utimes: 3,
    writeFile: 3
  },
  http: {
    get: 1,
    request: 1
  },
  https: {
    get: 1,
    request: 1
  },
  dgram: {
    createSocket: 1
  },
  zlib: {
    flush: 1,
    params: 2,
    deflate: 2,
    deflateRaw: 2,
    gunzip: 2,
    gzip: 2,
    inflate: 2,
    inflateRaw: 2,
    unzip: 2
  }
}
