import TourInfos from "../models/tour";

class TourController {
  //create tour
  static async createTour(req, res) {
    req.body.user= req.user._id;
    const tour = await TourInfos.create(req.body);

    if (!tour) {
      return res.status(404).json({ error: "failed to save tour" });
    }

    return res.status(201).json({
      message: "tour saved successfully",
      data: tour,
    });
  }

    //get all tours
    static async getAllTour(req, res) {
        const tours = await TourInfos.find();
    
        if (!tours) {
          return res.status(404).json({ error: "failed to fetch tours" });
        }
    
        return res.status(200).json({
          message: "tours fetched successfully",
          data: tours,
        });
      }
      //get One tour
      static async getOneTour(req, res) {
          console.log(req.params.id);
          const tour = await TourInfos.findById(req.params.id);
      
          if (!tour) {
            return res.status(404).json({ error: "failed to fetch tour" });
          }
      
          return res.status(200).json({
            message: "tour fetched successfully",
            data: tour,
          });
        }
}

export default TourController;
