import logger from './utils/logger';
import app from './server';
import { initializeSocketIo } from './websockets';

// const port = process.env.PORT || 3001;
// const server = new Server(app);
// const io = socketIo(server);

// server.listen(port);

// io.on('listening', () => logger.info(`Listening on port ${port}.`));

const port = process.env.PORT || 3001;
const server = app.listen(port, () => logger.info(`Listening on port ${port}.`));

initializeSocketIo(server);
