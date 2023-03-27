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
        medium: string
        light: string
      }

      white: {
        background: string
        details: string
      }
    }
  }
}
