import API_URL from './API_URL';
import { ApiResponse } from './interface';

async function getAll() {
  try {
    const response = await fetch(`${API_URL}/product`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data: ApiResponse = await response.json();

    return data;
  } catch (error) {
    return {
      success: false,
      message: 'Internal Server Error',
      data: null,
    };
  }
}

const Product = { getAll };

export default Product;
