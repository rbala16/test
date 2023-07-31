const express = require('express');
const app = express();

app.get('/admin-dashboard',(req,res)=>{
  res.render('admin-dashboard');
  imageList = []
  imageList.push({src:'images/studentprofile.jpg',name:'Student Profile'})
  imageList.push({src:'images/studentcourses.jpg',name:'Student Courses'})
  imageList.push({src:'images/faculty.jpg',name:'Faculty Profile'})
  imageList.push({src:'images/department.jpg',name:'View Department'})
  res.render('admin-dashboard',{imageList:imageList})
})


module.exports = router;