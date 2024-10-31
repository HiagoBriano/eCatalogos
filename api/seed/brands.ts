import prismaClient from "../models/prismaClient";

export default async function BrandsSeed() {
  try {
    const data = [
      {
        id: 11,
        name: "Marca Moda",
        createdAt: new Date("2024-06-12T14:43:53"),
        companyId: 31,
        visible: true,
      },
      {
        id: 12,
        name: "Marca útil",
        createdAt: new Date("2024-06-12T14:43:53"),
        companyId: 31,
        visible: true,
      },
      {
        id: 13,
        name: "Esculturas",
        createdAt: new Date("2024-06-12T14:43:53"),
        companyId: 31,
        visible: true,
      },
      {
        id: 115,
        name: "MOSAICO",
        createdAt: new Date("2024-09-03T13:17:58"),
        companyId: 31,
        visible: true,
      },
      {
        id: 117,
        name: "TESTE",
        createdAt: new Date("2024-09-03T16:25:32"),
        companyId: 31,
        visible: true,
      },
      {
        id: 118,
        name: "Teste2",
        createdAt: new Date("2024-09-03T16:28:54"),
        companyId: 31,
        visible: true,
      },
      {
        id: 119,
        name: "Teste3",
        createdAt: new Date("2024-09-03T16:36:13"),
        companyId: 31,
        visible: true,
      },
      {
        id: 120,
        name: "TESTE1",
        createdAt: new Date("2024-09-03T16:36:55"),
        companyId: 31,
        visible: true,
      },
      {
        id: 121,
        name: "TESTE4",
        createdAt: new Date("2024-09-03T16:51:26"),
        companyId: 31,
        visible: true,
      },
      {
        id: 122,
        name: "TESTE5",
        createdAt: new Date("2024-09-03T16:54:17"),
        companyId: 31,
        visible: true,
      },
      {
        id: 123,
        name: "TESTE6",
        createdAt: new Date("2024-09-03T16:59:47"),
        companyId: 31,
        visible: true,
      },
      {
        id: 124,
        name: "TESTE8",
        createdAt: new Date("2024-09-03T17:01:56"),
        companyId: 31,
        visible: true,
      },
      {
        id: 125,
        name: "Teste100",
        createdAt: new Date("2024-09-03T17:03:59"),
        companyId: 31,
        visible: true,
      },
      {
        id: 126,
        name: "TESTE666",
        createdAt: new Date("2024-09-03T17:11:24"),
        companyId: 31,
        visible: true,
      },
      {
        id: 127,
        name: "TESTE333",
        createdAt: new Date("2024-09-03T17:14:01"),
        companyId: 31,
        visible: true,
      },
      {
        id: 128,
        name: "TESTE777",
        createdAt: new Date("2024-09-03T17:15:13"),
        companyId: 31,
        visible: true,
      },
    ];

    await prismaClient.brand.createMany({
      data,
    });

    console.log("success - brands");
  } catch (error) {
    console.error("error - brands");
  }
}
