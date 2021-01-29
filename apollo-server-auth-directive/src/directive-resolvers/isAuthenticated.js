const isAuthenticated = (next, src, args, ctx) => {
  if (ctx.token === 'asdf') return next();
  throw new Error(`Not Authenticated`)
}

export default isAuthenticated