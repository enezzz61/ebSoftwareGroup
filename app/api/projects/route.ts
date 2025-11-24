import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Project from "@/models/Project"; // ✅ mutlak import (App Router standardı)

const MONGODB_URI = process.env.MONGODB_URI as string;

// 🔹 Ortak bağlantı fonksiyonu
async function connectDB() {
  if (!MONGODB_URI) throw new Error("❌ MONGODB_URI .env dosyasında tanımlı değil");
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB bağlantısı kuruldu");
  }
}

// 🔹 Proje listesini getir
export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find().sort({ createdAt: -1 });
    return NextResponse.json(projects, { status: 200 });
  } catch (error: any) {
    console.error("❌ MongoDB GET Hatası:", error.message);
    return NextResponse.json({ error: "Veritabanı bağlantı hatası" }, { status: 500 });
  }
}

// 🔹 Yeni proje ekle (isteğe bağlı, ileride admin panel için)
export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const { title, desc, image, url } = body;

    if (!title || !desc) {
      return NextResponse.json({ error: "Başlık ve açıklama zorunludur." }, { status: 400 });
    }

    const newProject = await Project.create({ title, desc, image, url });
    return NextResponse.json(newProject, { status: 201 });
  } catch (error: any) {
    console.error("❌ MongoDB POST Hatası:", error.message);
    return NextResponse.json({ error: "Proje eklenemedi" }, { status: 500 });
  }
}
