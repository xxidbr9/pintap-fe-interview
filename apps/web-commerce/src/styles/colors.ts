import baseTailwind from '@base/tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

const config = {
  ...baseTailwind,
  darkMode: "class",
}

const twFullConfig = resolveConfig(config)
const colors = {
  ...twFullConfig.theme.colors,  
}


export default colors

