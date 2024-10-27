import dotenv from 'dotenv';
import fs from 'fs';

const testEnvFile = '.env.test';
const envFile = '.env';

if (!fs.existsSync(testEnvFile)) {
  throw new Error(`Cannot find ${testEnvFile}`);
}

if (!fs.existsSync(envFile)) {
  throw new Error(`Cannot find ${envFile}`);
}

dotenv.config({ path: envFile });
dotenv.config({ path: testEnvFile, override: true });
