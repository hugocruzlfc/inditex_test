import { createServer } from "http";

import app from "./app.js";
import { info } from "./utils/logger.js";
import { PORT } from "./utils/config.js";

const server = createServer(app);

server.listen(PORT, () => {
  info(`Server running on port ${PORT}`);
});
