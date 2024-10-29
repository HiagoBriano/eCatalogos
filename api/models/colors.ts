import { CreateColorDTO, UpdateColorDTO } from "../interface/colors";
import prismaClient from "./prismaClient";

async function FindAll() {
  try {
    const result = await prismaClient.color.findMany();

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
    const result = await prismaClient.color.findUnique({
      where: {
        id: id,
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

async function Create(data: CreateColorDTO) {
  try {
    const result = await prismaClient.color.create({
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

async function Update(id: number, data: UpdateColorDTO) {
  try {
    const result = await prismaClient.color.update({
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
    const result = await prismaClient.color.delete({
      where: {
        id: id,
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

const ColorsModel = {
  FindAll,
  FindUnique,
  Create,
  Update,
  Delete,
};

export default ColorsModel;
