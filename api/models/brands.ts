import { CreateBrandDTO, UpdateBrandDTO } from "../interface/brands";
import prismaClient from "./prismaClient";

async function FindAll() {
  try {
    const result = await prismaClient.brand.findMany({
      where: { deleted: false },
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
    const result = await prismaClient.brand.findUnique({
      where: {
        id: id,
        deleted: false,
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

async function Create(data: CreateBrandDTO) {
  try {
    const result = await prismaClient.brand.create({
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

async function Update(id: number, data: UpdateBrandDTO) {
  try {
    const result = await prismaClient.brand.update({
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
    const result = await prismaClient.brand.update({
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

const BrandsModel = {
  FindAll,
  FindUnique,
  Create,
  Update,
  Delete,
};

export default BrandsModel;
