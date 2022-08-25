import { TransationContainer } from './styles';

export const Transation = () => {
  return (
    <TransationContainer>
      <h1>Nova Transação</h1>
      <form>
        <label htmlFor="typeTransition">Tipo de transação</label>
        <input type="text" id="typeTransition" />

        <label htmlFor="commodityName">Nome da mercadoria</label>
        <input type="text" id="commodityName" />

        <label htmlFor="value">Valor</label>
        <input type="text" id="value" />

        <input type="submit" value="Adicionar transação" />
      </form>
    </TransationContainer>
  );
};
