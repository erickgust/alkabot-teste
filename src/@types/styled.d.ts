import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      success: string
      danger: string
      black: string

      gray: {
        dark: string
      }

      white: {
        background: string
        details: string
      }
    }
  }
}
