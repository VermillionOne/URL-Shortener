module.exports = (express) => {
  const router = express.Router();

  router.get('/status', (req, res) => {
    res.json({
      healthy: true,
    });
  });

  // API Routes
  // Version 1 - Lacked version control in the path
  router.use('/api/', require('./api/user')(express));
  router.use('/api/', require('./api/url')(express));
  // Version 2 - Version Control to path
  router.use('/api/v2/', require('./api/v2/user')(express));
  router.use('/api/v2/', require('./api/v2/url')(express));

  // Route for getting the original url redirect.
  router.use('/go/', require('./go')(express));

  return router;
}
