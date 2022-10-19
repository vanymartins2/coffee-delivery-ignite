import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3.5rem;
  padding: 5.8rem 0;

  img {
    width: 400px;
  }
`
export const IntroTitle = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 3.875rem;
    color: ${props => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.625rem;
    font-stretch: 100;
    color: ${props => props.theme['base-subtitle']};
  }
`
export const IntroList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.5rem;
  margin-top: 4.125rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${props => props.theme['base-text']};
  }
`

const ICON_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple'
} as const

interface IconProps {
  iconColor: keyof typeof ICON_COLORS
}

export const ListIcon = styled.span<IconProps>`
  width: 32px;
  height: 32px;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.white};
  background: ${props => props.theme[ICON_COLORS[props.iconColor]]};
`
