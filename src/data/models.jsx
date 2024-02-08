import moment from "moment"

const models = [
  {
    id: ".elser_model_2",
    description: "Elastic Learned Sparse Encoder",
    type: [
      "elastic"
    ],
    running: false,
    license: "platinum",
  },
  {
    id: ".multilingual_e5_small",
    description: "E5 (Embeddings from bi-directional encoder representations)",
    type: [
      "elastic"
    ],
    running: false,
    license: "platinum",
  },
  {
    id: ".lang_ident_model_1",
    description: "Model used for identifying language from arbitrary input text",
    type: ["lang_ident", "classification", "built-in"],
    running: false,
    license: "basic",
  }
]

export { models }
