// styled.d.ts
import 'styled-components'
interface IPalette {
  main: string
  contrastText: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      headerText: string
      darkGray: string
      danger: string
      searchBar: string
      lightBlue: string
      darkBlue: string
      border: string
      transparentBlack: string
      warning: string
      modalHeader: string
      phone: string
      button: {
        primary: string
        danger: string
        ghost: string
      }
      buttonHover: {
        primary: string
        danger: string
        ghost: string
      }
    }
  }
}
