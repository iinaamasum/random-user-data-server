const express = require('express');
const { getRandomUser, getAllUser } = require('../controllers/user.controller');
const router = express.Router();

router
  .route('/random')
  /**
   * @api {Method: Get}
   * @api_local_link: http://localhost:4000/
   *
   * @apiDescription Get a random user
   * @apiPermission admin, user
   *
   *
   * @apiSuccess {Object[]} a random user.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(getRandomUser);

router
  .route('/all')
  /**
   * @api {Method: Get}
   * @api_local_link: http://localhost:4000/user/all
   *
   * @apiDescription Get all the users
   * @apiPermission admin, user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the user.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(getAllUser);

module.exports = router;