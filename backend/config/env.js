import envalid, { str, port, url } from 'envalid'

import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

const env = envalid.cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'] }),
  MONGO_URI: url(),
  PORT: port({ default: 3000, devDefault: 5000 }),
  JWT_SECRET: str(),
  PAYPAL_CLIENT_ID: str(),
})

export default env