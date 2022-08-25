import { useState } from 'react';
import { TransationContainer } from './styles';

interface TransationProps {
  sentTransaction?: string | any;
}

export const Transation = ({ sentTransaction }: TransationProps) => {
  const [merchandiseName, setMerchandiseName] = useState('');
  const [commodityName, setCommodityName] = useState('');
  const [value, setValue] = useState('');

  return (
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
        />

        <label htmlFor="value">Valor</label>
        <input
          type="text"
          id="value"
          onChange={(e) => setValue(e.target.value)}
        />

        <input type="submit" value="Adicionar transação" />
      </form>
    </TransationContainer>
  );
};
