var express = require("express");
const toursControllers = require("../controllers/toursControllers");
const multerSingle = require("../middleware/multerSingle");
const multerMulti = require("../middleware/multerMulti");
const multerPrueba = require("../middleware/multerPrueba");
const { route } = require("./admin");

var router = express.Router();

//ruta base http://localhost:3000/tours/
router.post("/newtour", multerSingle("tours"), toursControllers.newTour);
router.get("/waiting", toursControllers.waiting);
router.post("/addsection", multerPrueba(), toursControllers.addSection);
router.put(
  "/edittour/:tour_id",
  multerSingle("tours"),
  toursControllers.editTour
);
router.get("/alltours", toursControllers.allTours);
router.get("/onetour/:tour_id", toursControllers.viewOneTour);
router.post("/:tour_id/rating/:id", toursControllers.rateTour);
router.put("/deltour/:tour_id", toursControllers.delTour);
router.put("/enableTour/:tour_id", toursControllers.enableTour);
router.put("/disableTour/:tour_id", toursControllers.disableTour);

// router.put(
//   "/addPics/:section_id",
//   multerMulti("imgsection"),
//   toursControllers.addPics
// );

module.exports = router;
