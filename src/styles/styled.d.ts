// import original module declarations
import 'styled-components'
import { BorderProps } from '../types'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main?: string
      primary?: string
      secondary?: string
      text?: string
      border?: string
      background?: string
    }
    breakpoints: {
      xs?: number
      sm?: number
      md?: number
      lg?: number
      xl?: number
      xxl?: number
    }
    spacingUnit: {
      xs?: string
      sm?: string
      md?: string
      lg?: string
      xl?: string
      section?: string
      gutter?: string
    }
    spacing?: {
      xs?: (props?: string) => void | any
      sm?: (props?: string) => void | any
      md?: (props?: string) => void | any
      lg?: (props?: string) => void | any
      xl?: (props?: string) => void | any
      section?: (props?: string) => void | any
      gutter?: (props?: string) => void | any
    }
    grid?: {
      columns: number
    }
    fontFamily: {
      sans?: string
      serif?: string
    }
    fonts: {
      xxlarge?: () => void
      xlarge?: () => void
      large?: () => void
      medium?: () => void
      small?: () => void
      xs?: () => void
    }
    aspect: {
      portrait?: number
      landscape?: number
      square?: number
      widescreen?: number
      panorama?: number
    }
    contentWidth: {
      small?: string
      large?: string
      text?: string
      image?: string
    }
    icons: {
      small?: string
      medium?: string
      large?: string
    }
    trans: {
      fast?: string
      slow?: string
    }
    borderWidth: {
      small?: string
      large?: string
    }
    border: {
      small?: (prop: BorderProps) => ({ theme: DefaultTheme }) => void
      large?: (prop: BorderProps) => ({ theme: DefaultTheme }) => void
    }
    defaultStyle?: ({ theme }: { theme: DefaultTheme | undefined }) => void
  }
}
