import styled from "styled-components";

export const ExtractContainer = styled.div`
display: flex;
flex-direction: column;
width: 42.5rem;

h1{
  display: flex;
  justify-content:center;
}

.merchandiseAndValue{
  display: grid;
  grid-template-columns: repeat(2, 50%);
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme['gray-200']};
  padding: 19px 20px 0 40px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: ${props => props.theme['black-900']};

  span:last-child{
    text-align: right;
  }
}

.merchandise{
  display: grid;
  grid-template-columns: 6% 60% 34%;
  border-bottom:1px solid ${props => props.theme['gray-200']};
  padding: 7px 0px;

  span:first-child{
    padding: 0 0 0 50%;
  }
  span:last-child{
    text-align: right;
    padding: 0 20px 0 0;
  }
}

.total{
  display: flex;
  justify-content: space-between;
  margin-top: 3px;
  border-top: 1px solid ${props => props.theme['gray-200']};
  padding: 11px 20px 0 40px;

  span{
    font-weight: 700;
    font-style: normal;
    font-size: 14px;
    line-height: 16px;
  }
}

.totalValue{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: right;

  .profitOrLoss{
    font-style: 400;
    font-size: 10px;
    line-height: 22px;
  }
}

`