import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const CardDiv = styled.div`
  padding: 12px;
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
`
export const UserDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex-grow: 1;
`
export const Heading = styled.h1`
  color: #ffffff;
  border-bottom: 3px solid #ffd773;
`
export const ImageDiv = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    width: 500px;
    height: 300px;
  }
`
export const CardNumber = styled.p`
  color: #ffffff;
  margin-bottom: 30px;
  font-size: 20px;
`
export const CardHolderName = styled.p`
  color: #ffffff;
  font-size: 12px;
  margin-bottom: 20px;
`
export const CardName = styled.p`
  color: #ffffff;
  margin: 0px;
  padding: 0px;
`
export const PaymentMethod = styled.h1`
  color: #3b4b69;
  font-size: 24;
  margin-top: 0px;
  margin-bottom: 40px;
`
export const InputElement = styled.input`
  height: 38px;
  margin: 10px;
  width: 100%;
  outline: none;
  padding: 8px;
  border: 1px solid #475569;
`
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  box-shadow: 0px 0px 10px 0px;
  border-radius: 8px;
`
