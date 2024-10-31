import prismaClient from "../models/prismaClient";

const allData = [
  [533, "Vermelho", null, "d93300", 0, "2024-04-30 17:08:46", null, 452],
  [
    9819,
    "PRETO/VERMELHO",
    null,
    "000000",
    0,
    "2024-05-02 13:14:13",
    null,
    7039,
  ],
  [9820, "AZUL", null, "3b1ebd", 0, "2024-05-02 13:14:13", null, 7053],
  [
    9821,
    "PRETO/VERMELHO",
    null,
    "000000",
    0,
    "2024-05-02 13:14:13",
    null,
    7054,
  ],
  [9822, "Cinza", null, "575757", 0, "2024-05-02 13:14:14", null, 7056],
  [9823, "MESCLA ESCURO", null, "ababab", 0, "2024-05-02 13:14:14", null, 7062],
  [9824, "Cinza", null, "575757", 0, "2024-05-02 13:14:14", null, 7064],
  [
    9825,
    "PRETO/VERMELHO",
    null,
    "000000",
    0,
    "2024-05-02 13:14:14",
    null,
    7062,
  ],
];

export default async function ColorsSeed() {
  try {
    const data = allData.map((data) => ({
      id: data[0] as number,
      name: data[1] as string,
      rgb: data[2] as string | null,
      hexCode: data[3] as string | null,
      productId: data[7] as number,
      createdAt: new Date(data[5] as string),
      updatedAt: data[6] === null ? null : new Date(data[6] as string),
    }));

    await prismaClient.color.createMany({
      data,
    });

    console.log("success - colors");
  } catch (error) {
    console.error("error - colors");
  }
}
