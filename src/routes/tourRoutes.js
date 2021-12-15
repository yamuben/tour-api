import express from 'express';

import tourController from "../controllers/tourController";

const tourRoute = express.Router();

tourRoute.post('/create',tourController.createTour);
tourRoute.get('/all',tourController.getAllTour);
tourRoute.get('/:id',tourController.getOneTour);


export default tourRoute;