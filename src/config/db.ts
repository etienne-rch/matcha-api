import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error('❌ MONGODB_URI est manquant dans le fichier .env');
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log(`✅ MongoDB connecté : ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ Erreur de connexion à MongoDB :', error);
    process.exit(1);
  }
};

export default connectDB;
