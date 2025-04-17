const express = require("express");
const ejs = require('ejs');
const path = require('path');
const app = express();


 // 6EJS ko view engine ke roop mein set karein
app.set('view engine', 'ejs');

// Views folder ka path set karein
app.set('views', path.join(__dirname, 'view'));

// Public folder ko serve karein
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Route ko define karein
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/view/2.ejs', (req, res) => {
  res.render('2');
});
app.get('/view/3.ejs', (req, res) => {
  res.render('3');
});
app.get('/view/4.ejs', (req, res) => {
  res.render('4');
});
app.get('/view/mba.ejs', (req, res) => {
  res.render('mba');
});
app.get('/view/pgdm.ejs', (req, res) => {
  res.render('pgdm');
});
app.get('/view/mca.ejs', (req, res) => {
  res.render('mca');
});
app.get('/view/btech.ejs', (req, res) => {
  res.render('btech');
});
app.get('/view/bsc.ejs', (req, res) => {
  res.render('bsc');
});
app.get('/view/bca.ejs', (req, res) => {
  res.render('bca');
});
app.get('/view/bba.ejs', (req, res) => {
  res.render('bba');
});
app.get('/view/ba.ejs', (req, res) => {
  res.render('ba');
});
app.get('/view/docu.ejs', (req, res) => {
  res.render('docu');
});
// Server ko chalayein
const port = 3000;
app.listen(port, () => {
  console.log(`Server chal raha hai port ${port} par`);
});