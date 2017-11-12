const functions = require('firebase-functions');
var admin = require("firebase-admin");


admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "student-resource-api",
    clientEmail: "firebase-adminsdk-szez0@student-resource-api.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDCBkT6u4pUmecj\nS4CtetwEaDJhcnu1nII3v785SMbR6EtCdnXyrHrFuR0tjuYlV7c0H7jdf+heCWtn\nuS1QE6FdjG/SBlWQMWAnLD8iIV2FPoCCyHUgMm2gEAO/b5pQ9dfwUHK5HjCINadK\n4Cqdqi92msenbMdeJMZZdig2sjbU10CmmPFWAUsp+wYT5wlaJ/xAbjLAJ3/cigjv\nqoPQoZObISAUGkci/Y7DGt3MJr7sLw6wuSdweaXDY8mdjU6+0jq7abX5Seh/ToLF\nraI+pkXsrM4hrYZoAXwWaB8XB2JKVQf8o4p/9WqU9dMcpFlTq6QLFkm+zjC/H1F4\nRty/U6r5AgMBAAECggEACXHxWlyrejzXvKcd8ilV8Tz6nuB01z1xirHh5txSbsDR\nJmt1Mxq5tfWx+ZgdlK8gHashqQljUBiYoD7/zrMgmtji+fq8SuhXFvEXeFuJcvAS\nT3Y0sBw5q/NmS05tLl3ED6XK6pS7+2rT5Fg58DJAXJS3qBXVNWcIOi3/Unz7IFdC\n+9gXW5CBhyU+jNwsOSVheQRh/Hj8maaeAWuGow8lAIEM0fO9HQgLBRJfc/H/ti67\nF1IKx9e8i0PsnguyU6TLsQ0QBfsawtIRQW1yTFq0L+dofTpuBU9piS22BVpP3QeO\nz1EJbLjUxC5Tq6D008UuJSGa0Z61t2XSvZAclx8pJQKBgQD8wbV/YampJPz0r1sK\nh3yuHmlohnhYaFfqcuRxu2ekUWZhHbvOMiSlEldatkUuHzV8EI41j75abUfk69Ci\nwoIgHyqoBvxKcHOJzxTZsSnldIp1HI+drkJndgk5CQvioyVF6s9epeU2KjRY0JOI\nanzEYFVB9M9cAVhtvI6KDbSLEwKBgQDEg6DvS0F6g8RYNjBg7w2h+yO1seO1APoc\nWDiEuqZxvKHl9cMyuGyij0xBqZI06JilDPBi8toF2KcLBpu3Pud+k/KT10BRYQmP\nfCu6r818NgwCQO5AemaBXGmODOLEQnmsmfxXCqSWVqkz9HG2WIg+aIVH1MkmC4Pn\nID+01ptHQwKBgQDNJUvyf4n8xxCoaEs0WJNRn01ekQXMe6QfnfDcfoa4T3kRCdkM\nmpYzhJdyAM5ViO8YKzfBMVIGgvv/SYalE8oZ2DH+/ux2Xp7oEzORHMIsglJ+ixfl\nmzI6VwtVR4pmAJSYEuUMpQlM1SR3kZKs/gEWQjnwtoo22sCzEH+AfW80EQKBgBOy\ngeoaZ/jIxmB1JgpBS+OFkcG/j+xvqaI3sYqUTuStnKi5JpSp6bGtnV4jihUlj09T\n6bBxWSsm2S+AvRD0DC4i1Di/ZaICkPvB3Xw77OPbYv7C1V6/JhEnWyky33P+mcWU\nNbffyDmNfC5J/S/i1d0zitB1YqgelV0QXXJZ5HyTAoGAf4Ub1nbvpBaFPfZhpgmZ\nL/7I6yS8ffGEgoqBdLoEzv2eJXdoDVXyPFt/slKkB/jNvG90eitLYLVo0NMLZclA\nC4/qy/W9wsH3REFz/lThYALoxT9L0kDpbUIZ/TNh5DKqQKUdIuDiWBVXFu9ci+J/\nwhGRw20fn2j8ketCzlI1OKo=\n-----END PRIVATE KEY-----\n"
  }),
  databaseURL: "https://student-resource-api.firebaseio.com"
});
const express = require('express');
var cors = require('cors');
const app = express();
var studentresource = [];
var student = [];

  var db = admin.database();
  
app.use(cors());

function getData(req, res){
  studentresource = [];
   var ref = db.ref("studentresource");
  ref.on("value", function(snapshot) {
     var count = 0;
   snapshot.forEach(childSnapshot => {
   
  var data = childSnapshot.val();
   studentresource.push({ 
        id: count,
        title: data.title, 
        body: data.body,
        key: childSnapshot.key
    }); 
   count++;
 });
     res.json(studentresource);
   
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

}

function getStudentData(req, res){
  student = [];
   var ref = db.ref("student");
  ref.on("value", function(snapshot) {
     var count = 0;
   snapshot.forEach(childSnapshot => {
   
  var data = childSnapshot.val();
   student.push({ 
        id: count,
        name: data.name, 
        level: data.level,
        department: data.department,
        key: childSnapshot.key
    }); 
   count++;
 });
     res.json(student);
   
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

}


var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });



  


// get student resource
app.get('/studentresource.json', (request, response) =>{

 getData(request, response);

});

app.get('/studentresource/:id',function(request, response){
    studentresource = [];
   var ref = db.ref("studentresource");
  ref.on("value", function(snapshot) {
     var count = 0;
   snapshot.forEach(childSnapshot => {
   
  var data = childSnapshot.val();
   studentresource.push({ 
        id: count,
        title: data.title, 
        body: data.body,
        key: childSnapshot.key
    }); 
   count++;
 });
      var detail = studentresource[request.params.id ];
  if(!detail){
    response.status(404).json('no detail for '+request.params.id);
  }else{
    response.json(detail);
  } ;
   
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
});



app.get('/admin/student.json', (request, response) =>{
 getStudentData(request, response);

});

app.get('/admin/student/:id',function(request, response){
    student = [];
   var ref = db.ref("student");
  ref.on("value", function(snapshot) {
     var count = 0;
   snapshot.forEach(childSnapshot => {
   
  var data = childSnapshot.val();
   student.push({ 
      id: count,
        name: data.name, 
        level: data.level,
        department: data.department,
        key: childSnapshot.key
    }); 
   count++;
 });
      var detail = student[request.params.id ];
  if(!detail){
    response.status(404).json('no detail for '+request.params.id);
  }else{
    response.json(detail);
  } ;
   
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
});



// post request
app.post('/admin/studentresource.json',parseUrlencoded, function(request, response){ 
   //Check if all fields are provided and are valid: 
   
  //var newId = student[student.length-1].id+1; 
    var db = admin.database();
  var ref = db.ref("studentresource");

  // push data to firebase
    
     ref.push({
        title: request.body.title, 
        body: request.body.body  
     });
     getData(request, response);
 // response.json({message: "New student created.", location: "/admin/student" + "newId"}); 
}); 


// post request
app.post('/admin/student.json',parseUrlencoded, function(request, response){ 
    //Check if all fields are provided and are valid: 
   
   var db = admin.database();
  var ref = db.ref("student");

  // push data to firebase
    
     ref.push({
         name: request.body.name, 
        level: request.body.level,
        department: request.body.department,
     });
  response.json({message: "New student created.", location: "/admin/student" + "newId"}); 
     
}); 


// update student resoure
app.put('/admin/studentresource/edit/:id', function(req, res){

  var db = admin.database();
   var ref = db.ref("studentresource");
  ref.on("value", function(snapshot) {
     var count = 0;
   snapshot.forEach(childSnapshot => {
   
  var data = childSnapshot.val();
   studentresource.push({ 
        id: count,
        title: data.title, 
        body: data.body,
        key: childSnapshot.key
    }); 
   count++;
 });
      var detail = studentresource[req.params.id ];
  if(!detail){
    res.status(404).json('no detail for '+req.params.id);
  }else{
    var editRef = admin.database().ref('studentresource/'+detail.key);
    editRef.update({
      title: req.body.title,
      body: req.body.body
    });
       res.json({message: "New student resource created.", location: "/admin/studentresource/edit" + newId}); 
  }
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
  });
});

// update student resoure
app.put('/admin/student/edit/:id', function(req, res){
	  var db = admin.database();
   var ref = db.ref("student");
  ref.on("value", function(snapshot) {
     var count = 0;
   snapshot.forEach(childSnapshot => {
   
  var data = childSnapshot.val();
   student.push({ 
       id: count,
        name: data.name, 
        level: data.level,
        department: data.department,
        key: childSnapshot.key
    }); 
   count++;
 });
      var detail = student[req.params.id ];
  if(!detail){
    res.status(404).json('no detail for '+req.params.id);
  }else{
    var editRef = admin.database().ref('student/'+detail.key);
    editRef.update({
      name: req.body.name, 
        level: req.body.level,
        department: req.body.department,
    });
       res.json({message: "New student created.", location: "/admin/student/edit" + newId}); 
  }
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
  });
});

// delete student resource
app.delete('/admin/studentresource/delete/:id', function(req, res){ 
    //Check if all fields are provided and are valid: 
       var db = admin.database();
      var ref = db.ref("studentresource");
  ref.on("value", function(snapshot) {
     var count = 0;
   snapshot.forEach(childSnapshot => {
   
  var data = childSnapshot.val();
   studentresource.push({ 
        id: count,
        title: data.title, 
        body: data.body,
        key: childSnapshot.key
    }); 
   count++;
 });

      var detail = studentresource[req.params.id ];
  if(!detail){
    res.status(404).json('no detail for '+req.params.id);
  }else{
    var deleteRef = admin.database().ref('studentresource/'+detail.key);
    deleteRef.set({
      title: "",
      body: ""
    });
  } ;
   
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
  });
});

// delete student 
app.delete('/admin/student/delete/:id', function(req, res){ 
    //Check if all fields are provided and are valid: 
       var db = admin.database();
      var ref = db.ref("student");
  ref.on("value", function(snapshot) {
     var count = 0;
   snapshot.forEach(childSnapshot => {
   
  var data = childSnapshot.val();
   student.push({ 
        id: count,
        name: data.name, 
        level: data.level,
        department: data.department,
        key: childSnapshot.key
    }); 
   count++;
 });

      var detail = student[req.params.id ];
  if(!detail){
    res.status(404).json('no detail for '+req.params.id);
  }else{
    var deleteRef = admin.database().ref('student/'+detail.key);
    deleteRef.set({
        name: "", 
        level: "",
        department: ""
    });
  } ;
   
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
  });
});


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);

