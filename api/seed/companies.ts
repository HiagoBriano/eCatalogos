import prismaClient from "../models/prismaClient";

export default async function CompaniesSeed() {
  try {
    const datas = [
      {
        id: 31,
        name: "Inovações Luminar",
        mail: "info@inovacoesluminar.com.br",
        cnpj: "23456789000188",
        key: 2007,
        login: "luminarUser",
        pass: "$2b$10$oYm6HnoM2iU44gKerQzY1.Aq6pjxJ4RxoyDXmYhIk55IZyA.QnIHy",
        apiKey: "c7cb89f2-7faa-4903-a87d-4040d6f36e5f",
        createdAt: new Date("2024-04-12 14:11:57"),
      },
    ];

    for (const current of datas) {
      await prismaClient.company.create({
        data: current,
      });
    }

    console.log("success - companies");
  } catch (error) {
    console.error("error - companies");
  }
}
