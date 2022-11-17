import { Order } from '../../types/Order';
import { Container } from './styles';
import { OrdersBoard } from '../OrdersBoard';

const orders: Order[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '123',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
<<<<<<< HEAD
          imagePath: '1668571159659-quatro-queijos.png',
=======
          imagePath: '1668472896991-quatro-queijos.png',
>>>>>>> 39520d747115c42fd1f9b4d8773fa7772e728142
          price: 40,
        },
        quantity: 3,
        _id: '6372e48cbcd195b0d3d0f7f4'
      },
      {
        product: {
          name: 'Coca cola',
<<<<<<< HEAD
          imagePath: '1668483856444-coca-cola.png',
=======
          imagePath: '1668473462705-coca-cola.png',
>>>>>>> 39520d747115c42fd1f9b4d8773fa7772e728142
          price: 7,
        },
        quantity: 2,
        _id: '6372e48cbcd195b0d3d0f7f5'
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="⏱"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
}
