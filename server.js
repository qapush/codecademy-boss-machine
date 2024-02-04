const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const apiRouter = require('./server/api');

module.exports = app;

/* Do not change the following line! It is required for testing and allowing
 *  the frontend application to interact as planned with the api server
 */
const PORT = process.env.PORT || 4001;

// Logging middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));

// Add middleware for handling CORS requests from index.html

// Add middware for parsing request bodies here:
app.use(bodyParser.json());
// Mount your existing apiRouter below at the '/api' path.
app.use('/api', apiRouter);

// This conditional is here for testing purposes:
if (!module.parent) {
  // Add your code to start the server listening at PORT below:
  app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
  });
}
