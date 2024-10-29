import { CreateCompanyDTO, UpdateCompanyDTO } from "../interface/companies";
import prismaClient from "./prismaClient";

async function FindAll() {
  try {
    const result = await prismaClient.company.findMany({
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
    const result = await prismaClient.company.findUnique({
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

async function Create(data: CreateCompanyDTO) {
  try {
    const result = await prismaClient.company.create({
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

async function Update(id: number, data: UpdateCompanyDTO) {
  try {
    const result = await prismaClient.company.update({
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
    const result = await prismaClient.company.update({
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

const CompaniesModel = {
  FindAll,
  FindUnique,
  Create,
  Update,
  Delete,
};

export default CompaniesModel;
