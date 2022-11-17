export interface Order {
  _id: string;
  table: string;
<<<<<<< HEAD
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
=======
  status: string;
>>>>>>> 39520d747115c42fd1f9b4d8773fa7772e728142
  products: {
    _id: string;
    quantity: number;
    product: {
      name: string;
      imagePath: string;
      price: number;
    };
<<<<<<< HEAD
  }[];
}
=======
  }[],
}
>>>>>>> 39520d747115c42fd1f9b4d8773fa7772e728142
