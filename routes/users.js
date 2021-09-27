const express = require('express');
const router = express.Router();
const User = require('../models/user');

//Get all users_info
router.get('/', async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting one user_info
router.get('/:id', getUser, (req, res) => {
  res.json(res.user);
});

//Creating one user_info
router.post('/create', async (req, res) => {
  const user = new User({
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    postcode: req.body.postcode,
    phone: req.body.phone,
    email_address: req.body.email_address,
    email_domain: req.body.email_domain,
    ip_address: req.body.ip_address,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//update one user_info
router.patch('/:id', getUser, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }

  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//delete one user_info
router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: 'Deleted user' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.user = user;
  next();
}
module.exports = router;
