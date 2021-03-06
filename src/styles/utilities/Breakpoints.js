import { css } from 'styled-components'
import { breakpoints } from '../themes'
import { emSize } from './Converters'

/**
 * Breakpoint functions examples:
  export default styled.div`

    ${bp.above.md`
      background: red;
    `}

    ${bp.below.md`
      background: orange;
    `}

    ${bp.between('md','xl')`
      background: orange;
    `}

    ${bp.only.md`
      background: orange;
    `}

    ${bp.spesific('md')`
      background: orange;
    `}

    ${bp.spesific('md,xl')`
      background: orange;
    `}
  `
 */

// iterate through the breakpoints and create a media template
const above = Object.keys(breakpoints).reduce((accumulator, bp) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  accumulator[bp] = (...args) => {
    return function(props) {
      return css`
        @media (min-width: ${emSize(props.theme.breakpoints[bp])}) {
          ${css(...args)};
        }
      `
    }
  }
  return accumulator
}, {})

// iterate through the breakpoints and create a media template
const below = Object.keys(breakpoints).reduce((accumulator, bp) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  accumulator[bp] = (...args) => {
    return function(props) {
      return css`
        @media (max-width: ${emSize(props.theme.breakpoints[bp])}) {
          ${css(...args)};
        }
      `
    }
  }
  return accumulator
}, {})

/**
 *
 * Define styles that fit between two breakpoints
 *
 * Usage:
 * ${between('xs', 'md')`
 *  background: orange;
 * `}
 *
 * @param {string} min string needs to relate to a key in theme.breakpoints
 * @param {string} max string needs to relate to a key in theme.breakpoints
 */
const between = (min, max) => (...args) => {
  return function({ theme: { breakpoints } }) {
    if (!min || !max) {
      console.info('Either the min or max props is missing')
      return null
    }
    // Get index from max from props
    const maxIndex = Object.keys(breakpoints).indexOf(max)
    // get key for breakpoint after max from props
    const maxKey = Object.keys(breakpoints)[maxIndex + 1]
    return css`
      @media (min-width: ${emSize(breakpoints[min])}) and (max-width: ${emSize(
          breakpoints[maxKey]
        )}) {
        ${css(...args)}
      }
    `
  }
}

const only = Object.keys(breakpoints).reduce((acc, bp, i) => {
  acc[bp] = (...args) => {
    return function(props) {
      return css`
        @media (min-width: ${emSize(
            props.theme.breakpoints[bp]
          )}) and (max-width: ${emSize(
            props.theme.breakpoints[Object.keys(props.theme.breakpoints)[i + 1]]
          )}) {
          ${css(...args)}
        }
      `
    }
  }
  return acc
}, {})

/**
 * Breakpoint handler for a set of styles for a spesific breakpoints. Ex. no margin on xs and md
 * Usage:
 *
 * ${spesific('md,xl')`
      background: orange;
    `}

 * @param {string} breakpointsString string of comma separated breakpoints ex. 'md,xl'
 */
const spesific = breakpointsString => (...args) => {
  if (typeof breakpointsString !== 'string') {
    console.info(
      `The bp.spesific funtion expects a string separated by comma if you have multiple breakpoints. Ex: 'sm,lg'`
    )
  }
  const breakpoints = breakpointsString.split(',').map(string => string.trim())
  if (breakpoints.length === 1) {
    return css`
      ${only[breakpoints[0]]`
      ${css(...args)}
    `}
    `
  } else {
    return css`
      ${breakpoints.map(
        bp => css`
          ${only[bp]`
            ${css(...args)}
          `}
        `
      )}
    `
  }
}

export const bp = {
  above,
  below,
  between,
  only,
  spesific
}
