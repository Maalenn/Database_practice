const {Users} = require("../models/index");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await Users.findAll();

  res.status(200).json({
    status: "success",
    data: {
      users,
    },
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await Users.findById(req.params.id);

  if (!user) {
    return next(new AppError("No user found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.createUser = catchAsync(async (req, res, next) => {


  
  const newUser = await Users.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const user = await Users.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    return next(new AppError("No user found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const user = await Users.findIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
});
