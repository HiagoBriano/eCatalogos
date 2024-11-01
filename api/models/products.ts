import { CreateProductDTO, UpdateProductDTO } from "../interface/products";
import prismaClient from "./prismaClient";

async function FindAll() {
  try {
    const result = await prismaClient.product.findMany({
      where: { deleted: false },
      include: {
        colors: true,
        images: true,
        skus: true,
        company: true,
        brandRelation: true,
      },
    });

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
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
      include: {
        colors: true,
        images: true,
        skus: true,
        company: true,
        brandRelation: true,
      },
    });

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
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
      success: true,
      data: result,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
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
      success: true,
      data: result,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
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
      success: true,
      data: result,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
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
