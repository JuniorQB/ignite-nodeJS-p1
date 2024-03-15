
export function buildRoutPath(path){
  const routeParameterRegex = /:([a-zA-z]+)/g
  const pathWithPrams = path.replaceAll(routeParameterRegex, '(?<$1>[a-z0-9\-_]+)')
  const pathRegex = new RegExp(`^${pathWithPrams}(?<query>\\?(.*))?$`)

  return pathRegex
}