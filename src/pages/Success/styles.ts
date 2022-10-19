import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: grid;
  grid-template-areas: 'title title' 'info image';

  div:last-child {
    width: 30rem;
    grid-area: image;
  }
`

export const Title = styled.div`
  margin: 5rem 0 2.5rem;
  grid-area: title;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${props => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${props => props.theme['base-subtitle']};
  }
`

export const InfoContainer = styled.div`
  grid-area: info;
  padding: 2.5rem;
  gap: 2rem;
  width: 32rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid transparent;
    border-radius: 6px 36px;
    background: linear-gradient(100deg, #dbac2c, #8047f8) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

export const InfoList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  p {
    line-height: 130%;
    color: ${props => props.theme['base-text']};
  }
`
