import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(["development", "production"]).default("development"),
        NEXTAUTH_URL: z.string().url().optional(),
        NEXTAUTH_SECRET: z.string().min(1),
        DATABASE_URL: z.string().min(1),
        SMTP_FROM: z.string().min(1),
        MAILGUN_API_KEY: z.string().min(1),
        STRIPE_API_KEY: z.string().min(1),
        STRIPE_WEBHOOK_SECRET: z.string().min(1)
    },
    runtimeEnv: {
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        DATABASE_URL: process.env.DATABASE_URL,
        SMTP_FROM: process.env.SMTP_FROM,
        MAILGUN_API_KEY: process.env.POSTMARK_API_TOKEN,
        STRIPE_API_KEY: process.env.STRIPE_API_KEY,
        STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET
    }
});
