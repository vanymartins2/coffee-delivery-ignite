import styled from 'styled-components'

export const CardContainer = styled.div`
  max-width: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
  background: ${props => props.theme['base-card']};
  border-radius: 6px 36px;

  img {
    width: fit-content;
    margin-top: -2.5rem;
    margin-bottom: 0.75rem;
  }
`
export const CardTag = styled.span`
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 1rem;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  background: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};
`
export const Types = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

export const CardTitle = styled.h2`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;

  color: ${props => props.theme['base-subtitle']};
`
export const CardLabel = styled.p`
  font-size: 0.875rem;
  line-height: 130%;
  text-align: center;
  margin-bottom: 2rem;

  color: ${props => props.theme['base-label']};
`
export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
`
export const PriceTag = styled.span`
  font-size: 0.875rem;
  line-height: 130%;

  color: ${props => props.theme['base-text']};

  span {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;
  }
`
export const CardButton = styled.button`
  border: 0;
  background: transparent;
  color: ${props => props.theme.purple};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme['purple-dark']};
  }
`

export const QuantityButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;

  background: ${props => props.theme['base-button']};
  border-radius: 6px;

  span {
    color: ${props => props.theme['base-title']};
    line-height: 1.3rem;
  }
`
export const AddToCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
  background: ${props => props.theme['purple-dark']};
  color: ${props => props.theme.white};
  cursor: pointer;

  transition: background 0.2s;

  &:hover {
    background: ${props => props.theme.purple};
  }
`
