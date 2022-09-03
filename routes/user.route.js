const express = require('express');
const {
  getRandomUser,
  getAllUser,
  saveRandomUser,
  updateUserById,
  deleteUserById,
} = require('../controllers/user.controller');
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
   * @apiParam  limit = {Number{1-100}}  any number between 1 to 100 to get limited random user
   *
   * @apiSuccess {Object[]} all the user.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   * @apiError (Forbidden 406)     Unacceptable  limit is not in the range of [1-100]
   */
  .get(getAllUser);

router
  .route('/save')
  /**
   * @api {Method: POST}
   * @api_local_link: http://localhost:4000/user/save
   *
   * @apiDescription POST a random user
   * @apiPermission admin, user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiSuccess {Object[]} the updated user data
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .post(saveRandomUser);

router.route('/update/:id').patch(updateUserById);
router.route('/delete/:id').delete(deleteUserById);

module.exports = router;
