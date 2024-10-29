import { CreateBrandDTO, UpdateBrandDTO } from "../interface/brands";
import prismaClient from "./prismaClient";

async function FindAll() {
  try {
    const result = await prismaClient.brand.findMany({
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
    const result = await prismaClient.brand.findUnique({
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

async function Create(data: CreateBrandDTO) {
  try {
    const result = await prismaClient.brand.create({
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

async function Update(id: number, data: UpdateBrandDTO) {
  try {
    const result = await prismaClient.brand.update({
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
    const result = await prismaClient.brand.update({
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

const BrandsModel = {
  FindAll,
  FindUnique,
  Create,
  Update,
  Delete,
};

export default BrandsModel;
