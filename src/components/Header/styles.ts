import styled from 'styled-components'

export const HeaderContainer = styled.header`
display: flex;
justify-content: space-around;
align-items: center;
padding: 19px 0; 

background-color: ${props => props.theme['gray-200']};

div{
  display: flex;
  align-items: center;
  gap: 1rem;
}

nav{
display: flex;
gap: 1rem;
align-items: center;

background-color: ${props => props.theme['white']};
padding: 4px 20px;
}

`