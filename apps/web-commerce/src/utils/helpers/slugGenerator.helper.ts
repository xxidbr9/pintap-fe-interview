import ROUTES_CONSTANT, { RoutesType } from "../constants/routes.constant"

export function slugGenerator(text: string): string {
  text = text.replace(/^\s+|\s+$/g, '')
  text = text.toLowerCase()
  text = text
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
  return text
}

export default slugGenerator

export const createSlugLink = (
  path: RoutesType = ROUTES_CONSTANT.HOME,
  title: string,
  id: string
) => {

  let slugPath = `/${slugGenerator(title)}/${id}`
  // let slugPath = `/${title}/${id}`

  const result = path === ROUTES_CONSTANT.HOME ? slugPath : path + slugPath
  return result
}