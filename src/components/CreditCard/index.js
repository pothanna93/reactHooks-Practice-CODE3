import {useState} from 'react'

import {
  MainContainer,
  CardDiv,
  UserDiv,
  ImageDiv,
  Heading,
  CardNumber,
  CardHolderName,
  CardName,
  PaymentMethod,
  InputElement,
  Div,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const onChangeNumber = event => setNumber(event.target.value)
  const onChangeName = event => setName(event.target.value)
  const cardholderName = name.toUpperCase()

  return (
    <MainContainer>
      <CardDiv>
        <Heading>CREDIT CARD</Heading>
        <ImageDiv data-testid="creditCard">
          <CardNumber>{number}</CardNumber>
          <CardHolderName>CARDHOLDER NAME</CardHolderName>
          <CardName>{cardholderName}</CardName>
        </ImageDiv>
      </CardDiv>
      <UserDiv>
        <Div>
          <PaymentMethod>Payment Method</PaymentMethod>
          <InputElement
            type="text"
            onChange={onChangeNumber}
            value={number}
            placeholder="Card Number"
          />
          <InputElement
            type="text"
            onChange={onChangeName}
            value={name}
            placeholder="Cardholder Name"
          />
        </Div>
      </UserDiv>
    </MainContainer>
  )
}
export default CreditCard
