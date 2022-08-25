import { useState } from 'react';
import { HomeContainer } from './styles';

import { TransationContainer } from '../../components/Transation/styles';
import { ExtractContainer } from '../../components/Extract/styles';

export const Home = () => {
  const [merchandiseName, setMerchandiseName] = useState('');
  const [commodityName, setCommodityName] = useState('');
  const [valueInput, setValueInput] = useState('');

  const [extractList, setExtractList] = useState([]);

  const drawTable = () => {
    let total = 0;
  };

  const dataClean = () => {
    const confirmUser = confirm('Deseja remover todas as transações?');
    if (confirmUser) {
      localStorage.clear();
      setExtractList([]);
      drawTable();
    }
  };

  const sentTransaction = () => {};

  return (
    <HomeContainer>
      <TransationContainer>
        <h1>Nova Transação</h1>
        <form onSubmit={sentTransaction}>
          <label htmlFor="typeTransition">Tipo de transação</label>
          <select
            id="typeTransition"
            onChange={(e) => setMerchandiseName(e.target.value)}
          >
            <option disabled value="selecione">
              Selecione
            </option>

            <option value="compra">Compra</option>

            <option value="venda">Venda</option>
          </select>

          <label htmlFor="commodityName">Nome da mercadoria</label>
          <input
            type="text"
            id="commodityName"
            onChange={(e) => setCommodityName(e.target.value)}
            /* value={valueInput} */
          />

          <label htmlFor="value">Valor</label>
          <input
            type="text"
            id="value"
            onChange={(e) => setValueInput(e.target.value)}
          />

          <input type="submit" value="Adicionar transação" />
        </form>
      </TransationContainer>
      <ExtractContainer>
        <h1>Extrato de transações</h1>
        <div className="merchandiseAndValue">
          <span>Mercadoria</span>
          <span>Valor</span>
        </div>

        <div>
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
    </HomeContainer>
  );
};
function useForm(arg0: string) {
  throw new Error('Function not implemented.');
}
