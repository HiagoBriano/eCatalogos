import prismaClient from "../models/prismaClient";

const allData = [
  [
    452,
    "Jaqueta Rain Vermelha",
    "41.31.0000",
    80,
    null,
    "Marca Moda",
    null,
    "Feminino",
    "Jaquetas M",
    null,
    1,
    null,
    31,
    "9909",
    11,
    null,
    "2024-04-30 17:08:45",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7030,
    "Bermuda",
    "67.15.4801",
    158,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Bermudas",
    "Lisa",
    1,
    null,
    31,
    "9900",
    11,
    null,
    "2024-05-02 13:14:11",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7031,
    "Bermuda",
    "67.15.3915",
    132,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Bermudas",
    "Estampada",
    1,
    null,
    31,
    "204",
    11,
    null,
    "2024-05-02 13:14:11",
    "2024-07-26 16:54:31",
    1,
    null,
  ],
  [
    7032,
    "Ferramenta",
    "67.15.8427",
    207,
    null,
    "Marca útil",
    null,
    "Masculino",
    "Ferramentas",
    null,
    1,
    null,
    31,
    "803",
    12,
    null,
    "2024-05-02 13:14:11",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7033,
    "Bermuda",
    "67.15.8065",
    196,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Bermudas",
    "Lisa",
    1,
    null,
    31,
    "9901",
    11,
    null,
    "2024-05-02 13:14:11",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7034,
    "Jaqueta",
    "67.15.3761",
    179,
    null,
    "Marca Moda",
    null,
    "Feminino",
    "Jaquetas F",
    null,
    1,
    null,
    31,
    "902",
    11,
    null,
    "2024-05-02 13:14:11",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7035,
    "Marca arte",
    "67.15.8018",
    87,
    null,
    "Esculturas",
    null,
    "Masculino",
    "Esculturas",
    null,
    1,
    null,
    31,
    "706",
    13,
    null,
    "2024-05-02 13:14:11",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7036,
    "CASACO",
    "66.08.0082",
    49,
    null,
    "Marca Moda",
    null,
    "FEMININO",
    "CASACO",
    null,
    1,
    null,
    31,
    "7163",
    11,
    null,
    "2024-05-02 13:14:11",
    "2024-07-26 16:55:02",
    1,
    null,
  ],
  [
    7037,
    "Bota",
    "67.15.2668",
    102,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Botas",
    null,
    1,
    null,
    31,
    "302",
    11,
    null,
    "2024-05-02 13:14:11",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7038,
    "Jaqueta",
    "67.15.9376",
    92,
    null,
    "Marca Moda",
    null,
    "Feminino",
    "Jaquetas F",
    null,
    1,
    null,
    31,
    "901",
    11,
    null,
    "2024-05-02 13:14:11",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7039,
    "CASACO #MO - JMW018",
    "66.08.0095",
    44,
    null,
    "Marca Moda",
    null,
    "FEMININO",
    "CASACO",
    null,
    1,
    null,
    31,
    "7164",
    11,
    null,
    "2024-05-02 13:14:11",
    "2024-07-26 14:57:38",
    0,
    null,
  ],
  [
    7040,
    "Ferramenta",
    "67.15.8574",
    86,
    null,
    "Marca útil",
    null,
    "Masculino",
    "Ferramentas",
    null,
    1,
    null,
    31,
    "800",
    12,
    null,
    "2024-05-02 13:14:11",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7041,
    "Bermuda",
    "67.15.8037",
    60,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Bermudas",
    "Estampada",
    1,
    null,
    31,
    "203",
    11,
    null,
    "2024-05-02 13:14:12",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7042,
    "Marca arte",
    "67.15.8075",
    133,
    null,
    "Esculturas",
    null,
    "Masculino",
    "Esculturas",
    null,
    1,
    null,
    31,
    "704",
    13,
    null,
    "2024-05-02 13:14:12",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7043,
    "Jaqueta",
    "67.15.10675",
    89,
    null,
    "Marca Moda",
    null,
    "Feminino",
    "Jaquetas F",
    null,
    1,
    null,
    31,
    "900",
    11,
    null,
    "2024-05-02 13:14:13",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7044,
    "Marca arte",
    "67.15.3682",
    212,
    null,
    "Esculturas",
    null,
    "Masculino",
    "Esculturas",
    null,
    1,
    null,
    31,
    "700",
    13,
    null,
    "2024-05-02 13:14:13",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7045,
    "Marca arte",
    "67.15.1630",
    87,
    null,
    "Esculturas",
    null,
    "Masculino",
    "Esculturas",
    null,
    1,
    null,
    31,
    "702",
    13,
    null,
    "2024-05-02 13:14:13",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7046,
    "Ferramenta",
    "67.15.9825",
    115,
    null,
    "Marca útil",
    null,
    "Masculino",
    "Ferramentas",
    null,
    1,
    null,
    31,
    "804",
    12,
    null,
    "2024-05-02 13:14:13",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7047,
    "Chinelo",
    "67.15.4100",
    63,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Chinelos",
    null,
    1,
    null,
    31,
    "502",
    11,
    null,
    "2024-05-02 13:14:13",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7048,
    "Bota",
    "67.15.2442",
    172,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Botas",
    null,
    1,
    null,
    31,
    "301",
    11,
    null,
    "2024-05-02 13:14:13",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7049,
    "Marca arte",
    "67.15.2489",
    163,
    null,
    "Esculturas",
    null,
    "Masculino",
    "Esculturas",
    null,
    1,
    null,
    31,
    "701",
    13,
    null,
    "2024-05-02 13:14:13",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7050,
    "Chinelo",
    "67.15.2201",
    240,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Chinelos",
    null,
    1,
    null,
    31,
    "504",
    11,
    null,
    "2024-05-02 13:14:13",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7051,
    "Bota",
    "67.15.9006",
    203,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Botas",
    null,
    1,
    null,
    31,
    "300",
    11,
    null,
    "2024-05-02 13:14:13",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7052,
    "Chinelo",
    "67.15.7753",
    230,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Chinelos",
    null,
    1,
    null,
    31,
    "500",
    11,
    null,
    "2024-05-02 13:14:13",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7053,
    "Jaqueta Rain",
    "61.31.2000",
    60,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Jaquetas M",
    null,
    1,
    null,
    31,
    "2",
    11,
    null,
    "2024-05-02 13:14:13",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7054,
    "CASACO #MO - JMW019",
    "66.08.0096",
    55,
    null,
    "Marca Moda",
    null,
    "FEMININO",
    "CASACO",
    null,
    1,
    null,
    31,
    "7165",
    11,
    null,
    "2024-05-02 13:14:13",
    "2024-07-26 14:57:38",
    0,
    null,
  ],
  [
    7055,
    "Bermuda",
    "67.15.5431",
    82,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Bermudas",
    "Lisa",
    1,
    null,
    31,
    "9902",
    11,
    null,
    "2024-05-02 13:14:13",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7056,
    "Jaqueta Rain Cinza",
    "99.68.1000",
    110,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Jaquetas M",
    null,
    1,
    null,
    31,
    "9",
    11,
    null,
    "2024-05-02 13:14:13",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7057,
    "Chinelo",
    "67.15.8363",
    141,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Chinelos",
    null,
    1,
    null,
    31,
    "501",
    11,
    null,
    "2024-05-02 13:14:13",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7058,
    "Mochila",
    "67.15.6144",
    188,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Mochilas",
    null,
    1,
    null,
    31,
    "1100",
    11,
    null,
    "2024-05-02 13:14:13",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7059,
    "Ferramenta",
    "67.15.1938",
    224,
    null,
    "Marca útil",
    null,
    "Masculino",
    "Ferramentas",
    null,
    1,
    null,
    31,
    "805",
    12,
    null,
    "2024-05-02 13:14:13",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7060,
    "Chinelo",
    "67.15.4992",
    195,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Chinelos",
    null,
    1,
    null,
    31,
    "503",
    11,
    null,
    "2024-05-02 13:14:13",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7061,
    "Marca arte",
    "67.15.5133",
    103,
    null,
    "Esculturas",
    null,
    "Masculino",
    "Esculturas",
    null,
    1,
    null,
    31,
    "705",
    13,
    null,
    "2024-05-02 13:14:13",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7062,
    "CASACO MOL. ABER. FEM - M2267",
    "66.01.0059",
    31,
    null,
    "Marca Moda",
    null,
    "FEMININO",
    "CASACO",
    null,
    1,
    null,
    31,
    "7155",
    11,
    null,
    "2024-05-02 13:14:13",
    "2024-07-26 14:57:38",
    0,
    null,
  ],
  [
    7063,
    "Ferramenta",
    "67.15.3020",
    177,
    null,
    "Marca útil",
    null,
    "Masculino",
    "Ferramentas",
    null,
    1,
    null,
    31,
    "801",
    12,
    null,
    "2024-05-02 13:14:13",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7064,
    "Jaqueta Rain Cinza",
    "99.68.1000",
    100,
    null,
    "Marca Moda",
    null,
    "Feminino",
    "Jaquetas M",
    null,
    1,
    null,
    31,
    "4",
    11,
    null,
    "2024-05-02 13:14:13",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7065,
    "Bota",
    "67.15.10262",
    192,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Botas",
    null,
    1,
    null,
    31,
    "304",
    11,
    null,
    "2024-05-02 13:14:13",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7066,
    "Bermuda",
    "67.15.7671",
    198,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Bermudas",
    "Estampada",
    1,
    null,
    31,
    "201",
    11,
    null,
    "2024-05-02 13:14:14",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7067,
    "Mochila",
    "67.15.1340",
    1055,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Mochilas",
    null,
    1,
    null,
    31,
    "1102",
    11,
    null,
    "2024-05-02 13:14:14",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7068,
    "Bota",
    "67.15.4837",
    217,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Botas",
    null,
    1,
    null,
    31,
    "305",
    11,
    null,
    "2024-05-02 13:14:14",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7069,
    "Bermuda",
    "67.15.5937",
    168,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Bermudas",
    "Estampada",
    1,
    null,
    31,
    "202",
    11,
    null,
    "2024-05-02 13:14:14",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7070,
    "Jaqueta",
    "67.15.6399",
    208,
    null,
    "Marca Moda",
    null,
    "Feminino",
    "Jaquetas F",
    null,
    1,
    null,
    31,
    "903",
    11,
    null,
    "2024-05-02 13:14:14",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7071,
    "Bermuda",
    "67.15.3602",
    55,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Bermudas",
    "Estampada",
    1,
    null,
    31,
    "200",
    11,
    null,
    "2024-05-02 13:14:14",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7072,
    "Mochila",
    "67.15.7671",
    983,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Mochilas",
    null,
    1,
    null,
    31,
    "1101",
    11,
    null,
    "2024-05-02 13:14:14",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7073,
    "Ferramenta",
    "67.15.6511",
    102,
    null,
    "Marca útil",
    null,
    "Masculino",
    "Ferramentas",
    null,
    1,
    null,
    31,
    "802",
    12,
    null,
    "2024-05-02 13:14:14",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7074,
    "Bota",
    "67.15.7250",
    181,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Botas",
    null,
    1,
    null,
    31,
    "303",
    11,
    null,
    "2024-05-02 13:14:14",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7075,
    "Bota",
    "67.15.1689",
    226,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Botas",
    null,
    1,
    null,
    31,
    "306",
    11,
    null,
    "2024-05-02 13:14:14",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    7076,
    "Marca arte",
    "67.15.3697",
    133,
    null,
    "Esculturas",
    null,
    "Masculino",
    "Esculturas",
    null,
    1,
    null,
    31,
    "703",
    13,
    null,
    "2024-05-02 13:14:14",
    "2024-06-12 14:45:50",
    0,
    null,
  ],
  [
    56701,
    "BLUSA MOL GEEK",
    "100BMG68",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "MASCULINO",
    "BLUSA MOLETOM",
    "MOLETOM CAPUZ",
    1,
    "Blusa de moletom com capuz",
    31,
    "100024",
    11,
    229,
    "2024-07-04 14:30:24",
    null,
    0,
    null,
  ],
  [
    56702,
    "BLUSA MOL GEEK",
    "100BMG68",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "MASCULINO",
    "BLUSA MOLETOM",
    "MOLETOM CAPUZ",
    1,
    "Blusa de moletom com capuz",
    31,
    "100025",
    11,
    229,
    "2024-07-04 14:45:52",
    null,
    0,
    null,
  ],
  [
    56703,
    "BLUSA MOL GEEK",
    "100BMG68",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "MASCULINO",
    "BLUSA MOLETOM",
    "MOLETOM CAPUZ",
    1,
    "Blusa de moletom com capuz",
    31,
    "100026",
    11,
    229,
    "2024-07-04 14:48:57",
    null,
    0,
    null,
  ],
  [
    56704,
    "BLUSA MOL GEEK",
    "100BMG68",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "MASCULINO",
    "BLUSA MOLETOM",
    "MOLETOM CAPUZ",
    1,
    "Blusa de moletom com capuz",
    31,
    "100027",
    11,
    229,
    "2024-07-04 15:11:28",
    null,
    0,
    null,
  ],
  [
    56811,
    "Camisa xadrez",
    "100BMG69",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Feminino",
    "Outono",
    null,
    1,
    "Camisa xadrez",
    31,
    "1000161",
    11,
    229,
    "2024-08-22 16:31:25",
    "2024-08-22 17:19:20",
    0,
    null,
  ],
  [
    56812,
    "Jaqueta Tweed Preta",
    "100BMG70",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Feminino",
    "Outono",
    null,
    1,
    "Jaqueta feminina em tweed preta com zíper frontal.",
    31,
    "1000163",
    11,
    229,
    "2024-08-22 16:34:39",
    "2024-08-22 17:20:07",
    0,
    null,
  ],
  [
    56813,
    "Jaqueta Marrom com Capuz",
    "100BMG71",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Feminino",
    "Inverno",
    null,
    1,
    "Jaqueta marrom com capuz e cinto ajustável.",
    31,
    "1000164",
    11,
    229,
    "2024-08-22 16:40:02",
    null,
    0,
    null,
  ],
  [
    56814,
    "Jaqueta Verde com Capuz",
    "100BMG72",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Feminino",
    "Inverno",
    null,
    1,
    "Jaqueta verde com capuz ajustável e fechamento por zíper e botões.",
    31,
    "1000165",
    11,
    229,
    "2024-08-22 16:40:21",
    null,
    0,
    null,
  ],
  [
    56815,
    "Jaqueta Puff Rosa",
    "100BMG73",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Feminino",
    "Inverno",
    null,
    1,
    "Jaqueta puff rosa com capuz removível.",
    31,
    "1000166",
    11,
    229,
    "2024-08-22 16:40:41",
    null,
    0,
    null,
  ],
  [
    56816,
    "Jaqueta Azul",
    "100BMG74",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Feminino",
    "Inverno",
    null,
    1,
    "Jaqueta azul com capuz removível.",
    31,
    "1000167",
    11,
    229,
    "2024-08-22 16:41:53",
    null,
    0,
    null,
  ],
  [
    56817,
    "Jaqueta Azul claro",
    "100BMG75",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Feminino",
    "Inverno",
    null,
    1,
    "Jaqueta azul claro",
    31,
    "1000168",
    11,
    229,
    "2024-08-22 16:44:58",
    null,
    0,
    null,
  ],
  [
    56818,
    "Jaqueta Cinza",
    "100BMG76",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Feminino",
    "Inverno",
    null,
    1,
    "Jaqueta cinza",
    31,
    "1000169",
    11,
    229,
    "2024-08-22 16:45:25",
    null,
    0,
    null,
  ],
  [
    56819,
    "Jaqueta Verde",
    "100BMG77",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Feminino",
    "Inverno",
    null,
    1,
    "Jaqueta verde",
    31,
    "1000170",
    11,
    229,
    "2024-08-22 17:06:04",
    null,
    0,
    null,
  ],
  [
    56820,
    "Camisa xadrez",
    "100BMG78",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Feminino",
    "Outono",
    null,
    1,
    "Camisa xadrez",
    31,
    "1000162",
    11,
    229,
    "2024-08-22 17:22:38",
    null,
    0,
    null,
  ],
  [
    56821,
    "Jaqueta Preta",
    "100BMG78",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Masculino",
    "Jaqueta",
    null,
    1,
    "Jaqueta preta sem manga",
    31,
    "1000171",
    11,
    229,
    "2024-08-22 18:13:49",
    null,
    0,
    null,
  ],
  [
    56822,
    "Moletom Rosa",
    "100BMG79",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Feminino",
    "Moletom",
    null,
    1,
    "Moletom rosa",
    31,
    "1000172",
    11,
    229,
    "2024-08-22 18:14:34",
    null,
    0,
    null,
  ],
  [
    56823,
    "Jaqueta Azul",
    "100BMG80",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Masculino",
    "Jaqueta",
    null,
    1,
    "Jaqueta azul",
    31,
    "1000173",
    11,
    229,
    "2024-08-22 18:15:27",
    null,
    0,
    null,
  ],
  [
    56824,
    "Mochila Amarela",
    "100BMG81",
    null,
    100,
    "Marca Moda",
    "NACIONAL",
    "Unisex",
    "Acessórios",
    null,
    1,
    "Mochila",
    31,
    "1000174",
    11,
    229,
    "2024-08-22 18:17:12",
    null,
    0,
    null,
  ],
  [
    56825,
    "Mochila Rosa",
    "100BMG82",
    null,
    100,
    "Marca Moda",
    "NACIONAL",
    "Unisex",
    "Acessórios",
    null,
    1,
    "Mochila",
    31,
    "1000175",
    11,
    229,
    "2024-08-22 18:17:55",
    null,
    0,
    null,
  ],
  [
    56826,
    "Mochila Amarela",
    "100BMG83",
    null,
    100,
    "Marca Moda",
    "NACIONAL",
    "Unisex",
    "Acessórios",
    null,
    1,
    "Mochila",
    31,
    "1000176",
    11,
    229,
    "2024-08-22 18:18:24",
    "2024-09-03 13:55:30",
    0,
    null,
  ],
  [
    56827,
    "Jaqueta Branca e Azul",
    "100BMG84",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Feminino",
    "Jaqueta",
    null,
    1,
    "Jaqueta",
    31,
    "1000177",
    11,
    229,
    "2024-08-22 18:19:14",
    "2024-08-22 18:21:01",
    0,
    null,
  ],
  [
    56828,
    "Jaqueta Vermelha",
    "100BMG85",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Feminino",
    "Jaqueta",
    null,
    1,
    "Jaqueta",
    31,
    "1000178",
    11,
    229,
    "2024-08-22 18:20:02",
    null,
    0,
    null,
  ],
  [
    56829,
    "Jaqueta Branca",
    "100BMG86",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Masculino",
    "Jaqueta",
    null,
    1,
    "Jaqueta",
    31,
    "1000179",
    11,
    229,
    "2024-08-22 18:28:25",
    null,
    0,
    null,
  ],
  [
    56830,
    "Jaqueta Amarela",
    "100BMG87",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Masculino",
    "Jaqueta",
    null,
    1,
    "Jaqueta",
    31,
    "1000180",
    11,
    229,
    "2024-08-22 18:28:48",
    null,
    0,
    null,
  ],
  [
    56831,
    "Jaqueta Bege",
    "100BMG88",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Masculino",
    "Jaqueta",
    null,
    1,
    "Jaqueta",
    31,
    "1000181",
    11,
    229,
    "2024-08-22 18:29:14",
    null,
    0,
    null,
  ],
  [
    56832,
    "Moletom Azul",
    "100BMG89",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Masculino",
    "Moletom",
    null,
    1,
    "Moletom",
    31,
    "1000182",
    11,
    229,
    "2024-08-22 18:30:16",
    null,
    0,
    null,
  ],
  [
    56833,
    "Moletom Verde",
    "100BMG90",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Masculino",
    "Moletom",
    null,
    1,
    "Moletom",
    31,
    "1000183",
    11,
    229,
    "2024-08-22 18:31:04",
    null,
    0,
    null,
  ],
  [
    56834,
    "Moletom Verde Claro",
    "100BMG91",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Masculino",
    "Moletom",
    null,
    1,
    "Moletom",
    31,
    "1000184",
    11,
    229,
    "2024-08-22 18:31:31",
    null,
    0,
    null,
  ],
  [
    56835,
    "Moletom Amarelo",
    "100BMG92",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Masculino",
    "Moletom",
    null,
    1,
    "Moletom",
    31,
    "1000185",
    11,
    229,
    "2024-08-22 18:31:56",
    null,
    0,
    null,
  ],
  [
    56836,
    "Moletom Preto",
    "100BMG93",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Masculino",
    "Moletom",
    null,
    1,
    "Moletom",
    31,
    "1000186",
    11,
    229,
    "2024-08-22 18:32:24",
    null,
    0,
    null,
  ],
  [
    56837,
    "Bota branca",
    "100BMG94",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Masculino",
    "Bota",
    null,
    1,
    "Bota",
    31,
    "1000187",
    11,
    229,
    "2024-08-22 18:33:39",
    null,
    0,
    null,
  ],
  [
    56838,
    "Bota preta",
    "100BMG95",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Masculino",
    "Bota",
    null,
    1,
    "Bota",
    31,
    "1000188",
    11,
    229,
    "2024-08-22 18:33:55",
    null,
    0,
    null,
  ],
  [
    56839,
    "Bota preta",
    "100BMG96",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Masculino",
    "Bota",
    null,
    1,
    "Bota",
    31,
    "1000189",
    11,
    229,
    "2024-08-22 18:34:12",
    null,
    0,
    null,
  ],
  [
    56840,
    "Tênis roxo e preto",
    "100BMG97",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Masculino",
    "Tênis",
    null,
    1,
    "Tênis",
    31,
    "1000190",
    11,
    229,
    "2024-08-22 18:34:45",
    null,
    0,
    null,
  ],
  [
    56841,
    "Tênis verde",
    "100BMG98",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "Masculino",
    "Tênis",
    null,
    1,
    "Tênis",
    31,
    "1000191",
    11,
    229,
    "2024-08-22 18:35:03",
    null,
    0,
    null,
  ],
  [
    56849,
    "Bermuda",
    "67.15.4801",
    null,
    null,
    "Marca Moda",
    null,
    "Masculino",
    "Bermudas",
    "Lisa",
    1,
    null,
    31,
    "7030",
    11,
    null,
    "2024-09-02 18:06:49",
    null,
    0,
    null,
  ],
  [
    56854,
    "JAQUETA FEMININA POLIESTER IM03",
    "16.20.0321",
    null,
    null,
    "MOSAICO",
    "IMPORTADOS",
    "FEMININO",
    "JAQUETAS",
    "POLIESTER",
    1,
    "JAQUETA FEMININA POLIESTER IM03",
    31,
    "109856",
    null,
    null,
    "2024-09-03 13:17:58",
    null,
    0,
    null,
  ],
  [
    56855,
    "JAQUETA FEMININA POLIESTER IM03",
    "16.20.0321",
    null,
    null,
    "MOSAICO",
    "IMPORTADOS",
    "FEMININO",
    "JAQUETAS",
    "POLIESTER",
    1,
    "JAQUETA FEMININA POLIESTER IM03",
    31,
    "109666",
    115,
    null,
    "2024-09-03 13:46:16",
    null,
    0,
    null,
  ],
  [
    56856,
    "JAQUETA FEMININA POLIESTER IM03",
    "16.20.0321",
    null,
    null,
    "Marca Moda",
    "IMPORTADOS",
    "Feminino",
    "Jaqueta",
    "POLIESTER",
    1,
    "JAQUETA FEMININA POLIESTER IM03",
    31,
    "109667",
    11,
    229,
    "2024-09-03 13:48:43",
    "2024-09-03 13:57:59",
    0,
    null,
  ],
  [
    56857,
    "BLUSA MOL GEEK",
    "100BMG68",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "MASCULINO",
    "BLUSA MOLETOM",
    "MOLETOM CAPUZ",
    1,
    "Blusa de moletom com capuz",
    31,
    "100015",
    11,
    229,
    "2024-09-03 14:20:43",
    null,
    0,
    null,
  ],
  [
    56858,
    "BLUSA MOL GEEK",
    "100BMG6666",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "MASCULINO",
    "BLUSA MOLETOM",
    "MOLETOM CAPUZ",
    1,
    "Blusa de moletom com capuz",
    31,
    "100016666",
    11,
    229,
    "2024-09-03 14:52:18",
    null,
    0,
    null,
  ],
  [
    56860,
    "BLUSA Felipão",
    "100BMG68FELIPÂO",
    null,
    null,
    "Marca Moda",
    "NACIONAL",
    "MASCULINO",
    "BLUSA MOLETOM FELIPÃO",
    "MOLETOM CAPUZ",
    1,
    "Blusa de moletom com capuz",
    31,
    "100015FELIPÂO",
    11,
    229,
    "2024-09-03 16:23:07",
    null,
    0,
    null,
  ],
  [
    56861,
    "BLUSA Felipão",
    "100BMG68FELIPE",
    null,
    null,
    "TESTE",
    "NACIONAL",
    "MASCULINO",
    "BLUSA MOLETOM FELIPE",
    "MOLETOM CAPUZ",
    1,
    "Blusa de moletom com capuz",
    31,
    "100015FELIPE",
    117,
    null,
    "2024-09-03 16:27:06",
    null,
    0,
    null,
  ],
  [
    56862,
    "JAQUETA FEMININA POLIESTER IM03",
    "16.20.0321",
    null,
    null,
    "Teste2",
    "IMPORTADOS",
    "FEMININO",
    "JAQUETAS",
    "POLIESTER",
    1,
    "JAQUETA FEMININA POLIESTER IM03",
    31,
    "10985365",
    null,
    null,
    "2024-09-03 16:28:54",
    null,
    0,
    null,
  ],
  [
    56863,
    "BLUSA Felipão",
    "100BMG68FELIPY",
    null,
    null,
    "TESTE",
    "NACIONAL",
    "MASCULINO",
    "BLUSA MOLETOM FELIPY",
    "MOLETOM CAPUZ",
    1,
    "Blusa de moletom com capuz",
    31,
    "100015FELIPY",
    117,
    null,
    "2024-09-03 16:30:50",
    null,
    0,
    null,
  ],
  [
    56864,
    "JAQUETA FEMININA POLIESTER IM03",
    "16.20.0321",
    null,
    null,
    "Teste2",
    "IMPORTADOS",
    "FEMININO",
    "JAQUETAS",
    "POLIESTER",
    1,
    "JAQUETA FEMININA POLIESTER IM03",
    31,
    "109853675",
    118,
    null,
    "2024-09-03 16:35:02",
    null,
    0,
    null,
  ],
  [
    56865,
    "JAQUETA FEMININA POLIESTER IM03",
    "16.20.0321",
    null,
    null,
    "Teste3",
    "IMPORTADOS",
    "FEMININO",
    "JAQUETAS",
    "POLIESTER",
    1,
    "JAQUETA FEMININA POLIESTER IM03",
    31,
    "1098553675",
    null,
    null,
    "2024-09-03 16:36:13",
    null,
    0,
    null,
  ],
  [
    56866,
    "BLUSA Felipão",
    "100BMG68FELIPYz",
    null,
    null,
    "TESTE",
    "NACIONAL",
    "MASCULINO",
    "BLUSA MOLETOM FELIPYz",
    "MOLETOM CAPUZ",
    1,
    "Blusa de moletom com capuz",
    31,
    "100015FELIPYz",
    117,
    null,
    "2024-09-03 16:36:20",
    null,
    0,
    null,
  ],
  [
    56867,
    "BLUSA Felipão",
    "100BMG68FELIPYzx",
    null,
    null,
    "TESTE1",
    "NACIONAL",
    "MASCULINO",
    "BLUSA MOLETOM FELIPYzx",
    "MOLETOM CAPUZ",
    1,
    "Blusa de moletom com capuz",
    31,
    "100015FELIPYzx",
    null,
    null,
    "2024-09-03 16:36:55",
    null,
    0,
    null,
  ],
  [
    56868,
    "BLUSA Felipão",
    "100BMG68FELIPYzxy",
    null,
    null,
    "TESTE1",
    "NACIONAL",
    "MASCULINO",
    "BLUSA MOLETOM FELIPYzxy",
    "MOLETOM CAPUZ",
    1,
    "Blusa de moletom com capuz",
    31,
    "100015FELIPYzxy",
    120,
    null,
    "2024-09-03 16:39:16",
    null,
    0,
    null,
  ],
  [
    56869,
    "BLUSA FelipãoX",
    "100BMG68FELIPYzxyyz",
    null,
    null,
    "TESTE1",
    "NACIONAL",
    "MASCULINO",
    "BLUSA MOLETOM FELIPYzxyyz",
    "MOLETOM CAPUZ",
    1,
    "Blusa de moletom com capuz",
    31,
    "100015FELIPYzxyyz",
    120,
    null,
    "2024-09-03 16:48:51",
    null,
    0,
    null,
  ],
  [
    56870,
    "BLUSA FelipãoXZ",
    "100BMG68FELIPYzxyyzx",
    null,
    null,
    "TESTE4",
    "NACIONAL",
    "MASCULINO",
    "BLUSA MOLETOM FELIPYzxyyzx",
    "MOLETOM CAPUZ",
    1,
    "Blusa de moletom com capuz",
    31,
    "100015FELIPYzxyyzx",
    null,
    null,
    "2024-09-03 16:51:26",
    null,
    0,
    null,
  ],
  [
    56871,
    "BLUSA FelipãoXZX",
    "100BMG68FELIPYzxyyzxz",
    null,
    null,
    "TESTE4",
    "NACIONAL",
    "MASCULINO",
    "BLUSA MOLETOM FELIPYzxyyzxz",
    "MOLETOM CAPUZ",
    1,
    "Blusa de moletom com capuz",
    31,
    "100015FELIPYzxyyzxz",
    121,
    null,
    "2024-09-03 16:52:13",
    null,
    0,
    null,
  ],
  [
    56872,
    "BLUSA FelipãoXZXzz",
    "100BMG68FELIPYzxyyzxzzz",
    null,
    null,
    "TESTE5",
    "NACIONAL",
    "MASCULINO",
    "BLUSA MOLETOM FELIPYzxyyzxzzz",
    "MOLETOM CAPUZ",
    1,
    "Blusa de moletom com capuz",
    31,
    "100015FELIPYzxyyzxzzz",
    null,
    null,
    "2024-09-03 16:54:17",
    null,
    0,
    null,
  ],
  [
    56873,
    "BLUSA x",
    "100BMG68x",
    null,
    null,
    "TESTE6",
    "NACIONAL",
    "MASCULINO",
    "BLUSA MOLETOM x",
    "MOLETOM CAPUZ",
    1,
    "Blusa de moletom com capuz",
    31,
    "100015x",
    null,
    null,
    "2024-09-03 16:59:47",
    null,
    0,
    null,
  ],
  [
    56874,
    "BLUSA z",
    "100BMG68z",
    null,
    null,
    "TESTE8",
    "NACIONAL",
    "MASCULINO",
    "BLUSA MOLETOM z",
    "MOLETOM CAPUZ",
    1,
    "Blusa de moletom com capuz",
    31,
    "100015z",
    null,
    null,
    "2024-09-03 17:01:56",
    null,
    0,
    null,
  ],
  [
    56875,
    "JAQUETA FEMININA POLIESTER IM03",
    "16.20.0321",
    null,
    null,
    "Teste100",
    "IMPORTADOS",
    "FEMININO",
    "JAQUETAS",
    "POLIESTER",
    1,
    "JAQUETA FEMININA POLIESTER IM03",
    31,
    "10985354675",
    null,
    null,
    "2024-09-03 17:03:59",
    null,
    0,
    null,
  ],
  [
    56876,
    "JAQUETA FEMININA POLIESTER IM03",
    "16.20.0321",
    null,
    null,
    "Teste100",
    "IMPORTADOS",
    "FEMININO",
    "JAQUETAS",
    "POLIESTER",
    1,
    "JAQUETA FEMININA POLIESTER IM03",
    31,
    "109853546975",
    125,
    null,
    "2024-09-03 17:04:35",
    null,
    0,
    null,
  ],
  [
    56877,
    "BLUSA zz",
    "100BMG68zz",
    null,
    null,
    "TESTE666",
    "NACIONAL",
    "MASCULINO",
    "BLUSA MOLETOM zz",
    "MOLETOM CAPUZ",
    1,
    "Blusa de moletom com capuz",
    31,
    "100015zz",
    null,
    null,
    "2024-09-03 17:11:24",
    null,
    0,
    null,
  ],
  [
    56878,
    "BLUSA zzz",
    "100BMG68zzz",
    null,
    null,
    "TESTE333",
    "NACIONAL",
    "MASCULINO",
    "BLUSA MOLETOM zzz",
    "MOLETOM CAPUZ",
    1,
    "Blusa de moletom com capuz",
    31,
    "100015zzz",
    127,
    null,
    "2024-09-03 17:14:01",
    null,
    0,
    null,
  ],
  [
    56879,
    "BLUSA zzzz",
    "100BMG68zzzz",
    null,
    null,
    "TESTE777",
    "NACIONAL",
    "MASCULINO",
    "BLUSA MOLETOM zzzz",
    "MOLETOM CAPUZ",
    1,
    "Blusa de moletom com capuz",
    31,
    "100015zzzz",
    128,
    null,
    "2024-09-03 17:15:13",
    null,
    0,
    null,
  ],
];

export default async function ProductsSeed() {
  try {
    const data = allData.map((data) => ({
      id: data[0] as number,
      name: data[1] as string,
      category: data[8] as string,
      reference: data[2] as string,
      gender: data[7] as string,
      promptDelivery: data[10] === 1 ? true : false,
      companyId: data[12] as number,
      createdAt: new Date(data[16] as string),
      updatedAt: new Date(data[17] as string),
      deleted: data[18] === 1 ? true : false,
    }));

    await prismaClient.product.createMany({
      data,
    });

    console.log("success - product");
  } catch (error) {
    console.error("error - product");
    // console.log(error);
  }
}
