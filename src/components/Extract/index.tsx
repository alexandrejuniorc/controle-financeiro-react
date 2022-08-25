import { ExtractContainer } from './styles';

export const Extract = () => {
  return (
    <ExtractContainer>
      <h1>Extrato de transações</h1>
      <div>
        <span>Mercadoria</span>
        <span>Valor</span>
      </div>
      <div>
        <span>+</span>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <span>R$ 12.999,99</span>
      </div>
      <div>
        <span>Total</span>
        <div>
          <span>Total</span>
          <span>[LUCRO]</span>
        </div>
      </div>
    </ExtractContainer>
  );
};
