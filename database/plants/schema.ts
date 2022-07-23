export interface PlantSchema {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
}

export interface CreatePlantSchema {
  title: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
}
