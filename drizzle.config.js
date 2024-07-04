/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://AI-Content-Generator_owner:k7DnEYMFxm2I@ep-snowy-math-a1ankcwx.ap-southeast-1.aws.neon.tech/AI-Content-Generator?sslmode=require',

    }
  };
  