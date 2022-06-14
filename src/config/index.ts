import * as Joi from 'joi';
import * as dotenv from 'dotenv';

process.env.ENV_PATH
  ? dotenv.config({ path: process.env.ENV_PATH })
  : dotenv.config();

// validating environment variables
const schema = Joi.object({
  PORT: Joi.number().required(),
  NODE_ENV: Joi.string()
    .valid('development', 'staging', 'production')
    .required(),
  DB_URL: Joi.string().required(),
})
  .unknown()
  .required();

const { error, value: envVars } = schema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const config = {
  IS_DEVELOPMENT:
    envVars.NODE_ENV === 'development' || envVars.NODE_ENV === 'staging'
      ? true
      : false,
  IS_LOCALHOST: envVars.NODE_ENV === 'development' ? true : false,
  PORT: envVars.PORT,
  NODE_ENV: envVars.NODE_ENV,
  DB_URL: envVars.DB_URL,

};
