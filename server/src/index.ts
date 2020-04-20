import logger from './utils/logger';
import app from './server';

const port = process.env.PORT || 3001;
app.listen(port, () => logger.info(`Listening on port ${port}.`));
