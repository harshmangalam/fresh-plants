import { CreatePlantSchema, PlantSchema, UpdatePlantSchema } from "./schema.ts";
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

export async function fetchPlant(id: string) {
  const plant = await plantCollection.findOne({
    _id: new ObjectId(id),
  });

  return plant;
}

export async function fetchPlants() {
  const cursor = plantCollection.find();
  const plants = await cursor.toArray();
  return plants;
}

export async function deletePlant(id: string) {
  const count = await plantCollection.deleteOne({
    _id: new ObjectId(id),
  });

  return count;
}

export async function editPlant(id: string, data: UpdatePlantSchema) {
  const update = await plantCollection.updateOne(
    {
      _id: new ObjectId(id),
    },
    { $set: data }
  );

  return update.modifiedCount;
}
