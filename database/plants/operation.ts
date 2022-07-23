import { CreatePlantSchema, PlantSchema } from "./schema.ts";
import { db } from "../connection.ts";
import { ObjectId } from "mongo";

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

export async function deletePlant(id: string) {
  const n = await plantCollection.deleteOne({
    _id: new ObjectId(id),
  });

  return n;
}
