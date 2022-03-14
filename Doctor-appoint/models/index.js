const User = require('./users');
const Appointment = require('./appointment');
const Doctor = require('./doctor');
const Medicalnotes = require ('./medicalnotes');
const ToDo = require('./todo');

User.hasMany(Appointment, {
    foreignKey: 'user_id',
});

User.hasMany(Doctor, {
  foreignKey: 'user_id',
});

User.hasMany(Medicalnotes, {
  foreignKey: 'user_id',
});

User.hasMany(ToDo, {
  foreignKey: 'user_id',
});

Appointment.belongsTo(User, {
  foreignKey: 'user_id',
});

Doctor.belongsTo(User, {
  foreignKey: 'user_id',
});

Medicalnotes.belongsTo(User, {
  foreignKey: 'user_id',
  allowNull: false
});

ToDo.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = {User, Appointment, Doctor, Medicalnotes, ToDo };
