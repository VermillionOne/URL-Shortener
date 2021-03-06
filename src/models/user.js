const db = require('./db');

// POST user entry
exports.create = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
};

// GET all user entries
exports.findAll = (err, success) => {
  db.user.findAll().then(success).catch(err);
};

// GET Single user entry
exports.find = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
    // Find all relations in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
};

// DESTROY Single user entry
exports.destroy = (payload, err, success) => {
  db.user.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};

// UPDATE Single user entry
exports.update = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};
