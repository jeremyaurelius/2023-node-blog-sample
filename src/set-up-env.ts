import path = require('path');
import * as dotenv from 'dotenv';

dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
});
