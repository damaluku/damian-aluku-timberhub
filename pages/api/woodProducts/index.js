// import { woodDataObject } from "../../../data/data";

import woodData from "../../../data/data.json";

const handler = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json(woodData);
  } else if (req.method === "POST") {
    const usage = req.body?.usage;
    const specie = req.body?.specie;
    const drying = req.body?.drying;
    const grade = req.body?.grade;
    const treatment = req.body?.treatment;
    const thickness = req.body?.thickness;
    const width = req.body?.width;
    const length = req.body?.length;

    const newProduct = {
      rows: [
        {
          id: Date.now(),
          created: Date.now(),
          usage: `${usage}`,
          species: `${specie}`,
          drying_method: `${drying}`,
          grade: `${grade}`,
          treatment: `${treatment}`,
          dimensions: [
            {
              thickness: `${thickness}`,
              width: `${width}`,
              length: `${length}`,
            },
          ],
        },
      ],
    };

    people.push(newProduct);
    res.status(201).json(newProduct);
  }
};

export default handler;
