import { CreateSkuDTO, UpdateSkuDTO } from "../interface/skus";
import prismaClient from "./prismaClient";

async function FindAll() {
  try {
    const result = await prismaClient.sku.findMany({
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
    const result = await prismaClient.sku.findUnique({
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

async function Create(data: CreateSkuDTO) {
  try {
    const result = await prismaClient.sku.create({
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

async function Update(id: number, data: UpdateSkuDTO) {
  try {
    const result = await prismaClient.sku.update({
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
    const result = await prismaClient.sku.update({
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

const SkusModel = {
  FindAll,
  FindUnique,
  Create,
  Update,
  Delete,
};

export default SkusModel;
