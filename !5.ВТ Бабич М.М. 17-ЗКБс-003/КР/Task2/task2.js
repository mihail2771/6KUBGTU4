const {Router} = require('express')
const router = Router();
const path = require('path');
const Task2 = require('task2.js');

router.get('/task2', (req, res) => {
  res.sendFile(path.join(__dirname, 'task2.html'));
});



router.get('/task2_2/:id', async (req, res) => {
  const formData = await Task2.findById(req.params.id);
  res.send(formData.toJSON());
});



router.post('/task2/add', async (req, res) => {
  const formData = new Task2({
    name: req.body.name,
    course: req.body.course,
    typeEducation: req.body.typeEducation,
    undergraduate: req.body.undergraduate || false,
    magistracy:  req.body.magistracy || false,
    specialty: req.body.specialty || false,
    aspirantura: req.body.aspirantura || false,
    doctoralStudies: req.body.doctoralStudies || false,
  })

  try {
    await formData.save();
    alert("Добавено");
  } catch (e) {
    console.log(e);
  }


})


module.exports = router