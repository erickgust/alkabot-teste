import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      primary: string
      text: string
      icon: string

      posts: {
        background: string
      }
    }
  }
}
