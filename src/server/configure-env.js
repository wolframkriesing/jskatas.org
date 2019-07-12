import dotenv from 'dotenv';

const envConfigured = dotenv.config();
if (envConfigured.error) {
  throw envConfigured.error;
}