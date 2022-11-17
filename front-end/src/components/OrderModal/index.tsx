import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { Overlay, ModalBody, OrderDetails } from './styles';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
}

export function OrderModal({ visible, order }: OrderModalProps) {
  if (!visible || !order) {
    return null;
  }

  const price = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format;

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type='button'>
            <img src={closeIcon} alt="icon close" />
          </button>
        </header>
        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '⏱'}
              {order.status === 'IN_PRODUCTION' && '👨‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em Preparação'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>
        </div>
        <OrderDetails>
          <strong>Items</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56"
                  height="28.51"
                />

                <span className='quantity'>{quantity}x</span>

                <div className="product-datails">
                  <strong>{product.name}</strong>
                  <span>{price}</span>
                </div>
              </div>
            ))}
          </div>

        </OrderDetails>
      </ModalBody>
    </Overlay>
  );
}
