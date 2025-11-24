import mongoose, { Schema, Document, models, model } from "mongoose";

export interface IProject extends Document {
  title: string;
  desc: string;
  image?: string;   // 🔹 opsiyonel: proje görsel linki
  url?: string;     // 🔹 opsiyonel: proje web adresi
  createdAt: Date;
  updatedAt: Date;
}

// 🔹 Şema tanımı
const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true, trim: true },
    desc: { type: String, required: true, trim: true },
    image: { type: String, default: "" },
    url: { type: String, default: "" },
  },
  {
    timestamps: true, // createdAt ve updatedAt otomatik gelir
  }
);

// 🔹 Model export
const Project = models.Project || model<IProject>("Project", ProjectSchema);
export default Project;
