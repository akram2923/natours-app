const Tour = require("../modals/tourModals");

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();

    res.status(200).json({
      status: "successss",
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getTour = async (req, res) => {
  console.log(req.params);

  try {
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "there was an error",
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: "successss",
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "invalid data sent",
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.deleteTour = async (req, res) => {

  try {

     await Tour.findByIdAndDelete(req.params.id)
    res.status(204).json({
      status :'success',
      data : 'deleted succefully'
    })
    
  } catch (error) {

    res.status(204).json({
      status: "fail",
      message: error,
    });
    
  }


  
};
