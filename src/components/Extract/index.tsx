import { ExtractContainer } from './styles';

interface ExtractProps {
  itemList?: string | number | any;
}

export const Extract = ({ itemList }: ExtractProps) => {
  return (
    <ExtractContainer>
      <h1>Extrato de transações</h1>
      <div className="merchandiseAndValue">
        <span>Mercadoria</span>
        <span>Valor</span>
      </div>

      <div className={itemList}>
        <div className="merchandise">
          <span>+</span>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          <span>R$ 12.999,99</span>
        </div>

        <div className="total">
          <span>Total</span>
          <div className="totalValue">
            <span>R$ 12.909,99</span>
            <span className="profitOrLoss">[LUCRO]</span>
          </div>
        </div>
      </div>
    </ExtractContainer>
  );
};
