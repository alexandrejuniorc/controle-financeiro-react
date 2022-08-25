import styled from 'styled-components'

export const TransationContainer = styled.div`
padding: 20px 15px;
width: 25rem;

border: 1px solid ${props => props.theme['gray-200']};
border-radius: 8px;

h1{
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 21px;
}

form{ 
  display: flex;
  justify-content: center;
  flex-direction: column;

  label{
    margin-bottom: 3px;
  }

  input {
    margin-bottom: 20px;
    height: 32px;
    border-radius: 4px;
    border: 1px solid ${props => props.theme['gray-200']};
  }

  input:last-child{
    background-color: ${props => props.theme['black-900']};
    color: ${props => props.theme['white']};
  }
}
`