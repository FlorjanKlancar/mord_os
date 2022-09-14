export interface fileModel {
  fileName: string;
  createdAt: Date;
  updatedAt: Date;
  fileBody?: string;
  size: number;
}
