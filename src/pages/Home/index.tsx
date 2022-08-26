import { useState } from 'react';
import { HomeContainer } from './styles';

import { TransationContainer } from '../../components/Transation/styles';
import { ExtractContainer } from '../../components/Extract/styles';

export const Home = () => {
  // transaction data
  const [merchandiseName, setMerchandiseName] = useState('');
  const [commodityName, setCommodityName] = useState('');
  const [valueInput, setValueInput] = useState('');

  const [extractList, setExtractList] = useState<any>([]);
  const [itemsList, setItemsList] = useState<any>([]);

  const dataClean = () => {
    const confirmUser = confirm('Deseja remover todas as transações?');
    if (confirmUser) {
      localStorage.clear();
      setExtractList([]);
    }
  };

  const drawTable = () => {
    let total = 0;
    let maskValue;

    for (const product in extractList) {
      if (extractList[product].merchandiseName === 'compra') {
        maskValue = extractList[product];
        total -= Number(extractList[product].valueInput);
      } else {
        total += Number(extractList[product].valueInput);
      }

      console.log(extractList);
    }
  };

  const sentTransaction = (e: any) => {
    e.preventDefault();

    extractList.push({
      merchandiseName,
      commodityName,
      valueInput: valueInput.replaceAll('.', '').replaceAll(',', '.'),
    });

    const stringList = JSON.stringify(extractList);
    localStorage.setItem('lista', stringList);

    drawTable();
  };

  drawTable();

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
          {extractList!.map((product: any) => {
            return (
              <div key={product.merchandiseName} className="merchandise">
                <span>{product.commodityName}</span>
                <p>{commodityName}</p>
                <span>{valueInput}</span>
              </div>
            );
          })}

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
