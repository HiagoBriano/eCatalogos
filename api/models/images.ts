import { CreateImageDTO, UpdateImageDTO } from "../interface/images";
import prismaClient from "./prismaClient";

async function FindAll() {
  try {
    const result = await prismaClient.product.findMany();

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
    const result = await prismaClient.image.findUnique({
      where: {
        id: id,
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

async function Create(data: CreateImageDTO) {
  try {
    const result = await prismaClient.image.create({
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

async function Update(id: number, data: UpdateImageDTO) {
  try {
    const result = await prismaClient.image.update({
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
    const result = await prismaClient.image.delete({
      where: {
        id: id,
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

const ImagesModel = {
  FindAll,
  FindUnique,
  Create,
  Update,
  Delete,
};

export default ImagesModel;
