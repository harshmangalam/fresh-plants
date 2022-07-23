import { CreatePlantSchema, PlantSchema } from "./schema.ts";
import { db } from "../connection.ts";

const plantCollection = db.collection<PlantSchema>("plants");

export async function createPlant(plant: CreatePlantSchema) {
  const plantId = await plantCollection.insertOne({
    ...plant,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return plantId.toString();
}

export async function fetchPlants() {
  const cursor = plantCollection.find();
  const plants = await cursor.toArray();
  return plants;
}
