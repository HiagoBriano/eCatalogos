import { CreateProductDTO, UpdateProductDTO } from "../interface/products";
import prismaClient from "./prismaClient";

async function FindAll() {
  try {
    const result = await prismaClient.product.findMany({
      where: { deleted: false },
    });

    return {
      sucess: true,
      data: result,
    };
  } catch (error) {
    console.error(error);

    return {
      sucess: false,
      data: null,
    };
  }
}

async function FindUnique(id: number) {
  try {
    const result = await prismaClient.product.findUnique({
      where: {
        id: id,
        deleted: false,
      },
    });

    return {
      sucess: true,
      data: result,
    };
  } catch (error) {
    console.error(error);

    return {
      sucess: false,
      data: null,
    };
  }
}

async function Create(data: CreateProductDTO) {
  try {
    const result = await prismaClient.product.create({
      data,
    });

    return {
      sucess: true,
      data: result,
    };
  } catch (error) {
    console.error(error);

    return {
      sucess: false,
      data: null,
    };
  }
}

async function Update(id: number, data: UpdateProductDTO) {
  try {
    const result = await prismaClient.product.update({
      where: {
        id,
      },
      data,
    });

    return {
      sucess: true,
      data: result,
    };
  } catch (error) {
    console.error(error);

    return {
      sucess: false,
      data: null,
    };
  }
}

async function Delete(id: number) {
  try {
    const result = await prismaClient.product.update({
      where: {
        id: id,
      },
      data: {
        deleted: true,
      },
    });

    return {
      sucess: true,
      data: result,
    };
  } catch (error) {
    console.error(error);

    return {
      sucess: false,
      data: null,
    };
  }
}

const ProductsModel = {
  FindAll,
  FindUnique,
  Create,
  Update,
  Delete,
};

export default ProductsModel;
