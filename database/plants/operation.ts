import { CreatePlantSchema, PlantSchema } from "./schema.ts";
import { db } from "../connection.ts";

const plantCollection = db.collection<PlantSchema>("plants");

export async function createPlant(plant: CreatePlantSchema) {
  try {
    const newPlant = await plantCollection.insertOne({
      ...plant,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    console.log(newPlant)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
