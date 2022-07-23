export interface PlantSchema {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
}

export interface CreatePlantSchema {
  name: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
}
