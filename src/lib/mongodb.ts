import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;
const DB_NAME = process.env.MONGODB_DB as string;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI missing in .env.local");
}

// Global cache (Next.js hot reload fix)
let cached = global.mongooseCache;

if (!cached) {
  cached = global.mongooseCache = {
    conn: null as typeof mongoose | null,
    promise: null as Promise<typeof mongoose> | null,
  };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: DB_NAME,
      bufferCommands: false,
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}