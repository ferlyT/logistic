import { db } from "../db";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";

/**
 * Service untuk menangani logika bisnis terkait User.
 */
export const UserService = {
  /**
   * Menangani pendaftaran user baru.
   * Melakukan validasi email unik dan enkripsi password.
   */
  async register(data: any) {
    const { name, email, password } = data;

    // Check if user exists
    const existingUser = await db.select().from(users).where(eq(users.email, email)).limit(1);
    if (existingUser.length > 0) {
      throw new Error("Email sudah terdaftar");
    }

    // Hash password using Bun's built-in bcrypt
    const hashedPassword = await Bun.password.hash(password, {
      algorithm: "bcrypt",
      cost: 10,
    });

    // Insert user
    await db.insert(users).values({
      name,
      email,
      password: hashedPassword,
    });

    return { data: "OK" };
  },

  /**
   * Menangani proses autentikasi user.
   * Mencocokkan email dan memverifikasi password yang sudah di-hash.
   */
  async login(data: any) {
    const { email, password } = data;

    // Find user
    const [foundUser] = await db.select().from(users).where(eq(users.email, email)).limit(1);
    if (!foundUser) {
      return { data: "FAILED" };
    }

    // Verify password
    const isMatch = await Bun.password.verify(password, foundUser.password);
    if (!isMatch) {
      return { data: "FAILED" };
    }

    return { data: "OK" };
  },
};
