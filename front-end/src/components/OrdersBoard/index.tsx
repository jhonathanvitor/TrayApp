import { Board, OrdersContainer } from './styles';

interface OrderBoardProps {
  icon: string;
  title: string;
}

export function OrdersBoard({icon, title}: OrderBoardProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <samp>(1)</samp>
      </header>

      <OrdersContainer>
        <button type='button'>
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
        <button type='button'>
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
      </OrdersContainer>
    </Board>
  );
}
