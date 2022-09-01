const express = require('express');
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const multer = require('multer')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const DIR ='src/uploads';

var picname;

let mystorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);//src/uploads
    },
    filename: (req, file, cb) => {
        picname = Date.now() + file.originalname;//8792344848abc.jpg
        cb(null, picname);
    }
});
let upload = multer({ storage: mystorage });

app.listen(port, () => {
    console.log("Server is running");
});

//for cors
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



//signup Api
var SignupSchema = new mongoose.Schema({ person:String, uname: String, phone: String, email: { type: String, unique: true }, pass: String }, { versionKey: false });
var SignupModel = mongoose.model("signup", SignupSchema, "signup");
/*var SignupModel=mongoose.model("internalmodelname","schemaname","collectionname")
if we do not give collection name then it gives plural name of internalmodelname*/

app.post("/api/signup", function (req, res) {
    mongoose.connect("mongodb://localhost/grocerydb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

    var newsignup = new SignupModel({person:req.body.person, uname: req.body.uname, phone: req.body.phone, pass: req.body.pass, email: req.body.email});

    newsignup.save(function (err) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.send("Sign Up Successfull");
        }
        mongoose.connection.close();
    });
});


app.get("/api/login", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    SignupModel.find({ email: req.query.email, pass: req.query.pass }, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(data);
            console.log(data);
        }
        mongoose.connection.close();
    });
});




var ContactUsSchema = new mongoose.Schema({ name: String, msg: String, email: { type: String, unique: true } }, { versionKey: false });
var ContactusModel = mongoose.model("contactus", ContactUsSchema, "contactus");
app.post("/api/contact", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    var newcontactus = new ContactusModel({ name: req.body.name, msg: req.body.msg, email: req.body.email });
    newcontactus.save(function (err) {
        if (err) {
            console.log(err);
            res.send("Failed");
        } else {
            res.send("Thanks for contacting us.");
        }
        mongoose.connection.close();
    });
});

var FeedbackSchema = new mongoose.Schema({ name: String, rate: String, suggestion: String, email: { type: String, unique: true } }, { versionKey: false });
var FeedbackModel = mongoose.model("feedback", FeedbackSchema, "feedback");
app.post("/api/feedback", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    var newfeedback = new FeedbackModel({ name: req.body.name, rate: req.body.rate, email: req.body.email, suggestion: req.body.suggestion });
    newfeedback.save(function (err) {
        if (err) {
            console.log(err);
            res.send("Failed");
        } else {
            res.send("Thanks for your Feedback.");
        }
        mongoose.connection.close();
    });
});

var ReviewSchema = new mongoose.Schema({courseid:String,coursename:String,name: String,comment: String, email: { type: String, unique: true } }, { versionKey: false });
var ReviewModel = mongoose.model("review", ReviewSchema, "review");
app.post("/api/review", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    var newreview = new ReviewModel({courseid:req.body.courseid,coursename:req.body.coursename,name: req.body.name, email: req.body.email, comment: req.body.comment });
    newreview.save(function (err) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send("Thanks for your review.");
        }
        mongoose.connection.close();
    });
});






app.get("/api/searchuser", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    SignupModel.find({ email: req.query.email }, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(data);
            console.log(data);
        }
        mongoose.connection.close();
    });
});




app.put("/api/changepass", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    SignupModel.updateOne({ email: req.body.email, pass: req.body.cpass }, { $set: { pass: req.body.newp } }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});



app.get("/api/allmembers", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    SignupModel.find(function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(data);
            console.log(data);
        }
        mongoose.connection.close();
    });
});

app.get("/api/contactmsg", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    ContactusModel.find(function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(data);
            console.log(data);
        }
        mongoose.connection.close();
    });
});

app.get("/api/reviewmsg", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    ReviewModel.find(function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(data);
            console.log(data);
        }
        mongoose.connection.close();
    });
});

app.get("/api/reviewcheck", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    ReviewModel.find({courseid:req.query.courseid},function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(data);
            console.log(data);
        }
        mongoose.connection.close();
    });
});

app.get("/api/feedbackmsg", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    FeedbackModel.find(function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(data);
            console.log(data);
        }
        mongoose.connection.close();
    });
});


// var CategorySchema = new mongoose.Schema({ categoryname: String, categorypic: String }, { versionKey: false });
// var managecatmodel = mongoose.model("managecat", CategorySchema, "managecat");

// app.post("/api/addcat", upload.single('cpic'), function (req, res) {
//     mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
//     if (!req.file) {
//         picname = "noimage.jpg";//if file was not uploaded then we will save default imagename in database
//     };

//     var newmanagecat = new managecatmodel({ categoryname: req.body.cname, categorypic: picname });
//     newmanagecat.save(function (err) {
//         if (err) {
//             console.log(err);
//             res.send("Failed");
//         }
//         else {
//             res.send("Category added successfully");
//         }
//         mongoose.connection.close();
//     });
// });

// app.get("/api/getallcat", function (req, res) {
//     mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
//     console.log(req.body);
//     managecatmodel.find(function (err, data) {
//         if (err) {
//             console.log(err);
//             res.send(err);
//         }
//         else {
//             console.log(data);
//             res.send(data);
//         }
//         mongoose.connection.close();
//     });
// });


// app.get("/api/getallsubcat", function (req, res) {
//     mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
//     console.log(req.body);
//     managesubcatmodel.find({category:req.query.cid},function (err, data) {
//         if (err) {
//             console.log(err);
//             res.send(err);
//         }
//         else {
//             console.log(data);
//             res.send(data);
//         }
//         mongoose.connection.close();
//     });
// });


// var SubCategorySchema = new mongoose.Schema({ category: String, subcatname: String, subcatpic: String }, { versionKey: false });
// var managesubcatmodel = mongoose.model("managesubcat", SubCategorySchema, "managesubcat");

// app.post("/api/addsubcat", upload.single('scpic'), function (req, res) {
//     mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
//     if (!req.file) {
//         picname = "profile.png";//if file was not uploaded then we will save default imagename in database
//     };

//     var newmanagesubcat = new managesubcatmodel({ category: req.body.cid, subcatname: req.body.scname, subcatpic: picname });
//     newmanagesubcat.save(function (err) {
//         if (err) {
//             console.log(err);
//             res.send("Failed");
//         }
//         else {
//             res.send("Sub Category added successfully");
//         }
//         mongoose.connection.close();
//     });
// });


// app.get("/api/getsubcatdetailsbyid", function (req, res) {
//     mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
//     console.log(req.body);
//     managesubcatmodel.find({ _id: req.query.scid }, function (err, data) {
//         if (err) {
//             console.log(err);
//             res.send(err);
//         }
//         else {
//             console.log(data);
//             res.send(data);
//         }
//         mongoose.connection.close();
//     });
// });
// app.get("/api/getsubcatbycatid", function (req, res) {
//     mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
//     console.log(req.body);
//     managesubcatmodel.find({ category: req.query.catid }, function (err, data) {
//         if (err) {
//             console.log(err);
//             res.send(err);
//         }
//         else {
//             console.log(data);
//             res.send(data);
//         }
//         mongoose.connection.close();
//     });
// });



// var DataSchema = new mongoose.Schema({ category: String, subcategory: String, pname: String, rate: Number, discount: Number, stock: Number, description: String, prodpic: String }, { versionKey: false });
// var datamodel = mongoose.model("managedata", DataSchema, "managedata");

// app.post("/api/adddata", upload.single('ppic'), function (req, res) {
//     mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
//     if (!req.file) {
//         picname = "profile.png";//if file was not uploaded then we will save default imagename in database
//     };

//     var newdata= new datamodel({ category: req.body.cid, subcategory: req.body.scid, pname: req.body.pname, rate: req.body.rate, discount: req.body.discount, stock: req.body.stock, description: req.body.description, prodpic: picname });
//     newdata.save(function (err) {
//         if (err) {
//             console.log(err);
//             res.send("Failed");
//         }
//         else {
//             res.send("Data added successfully");
//         }
//         mongoose.connection.close();
//     });
// });






// app.get("/api/getcatdetailsbyid", function (req, res) {
//     mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
//     console.log(req.body);
//     managecatmodel.find({ _id: req.query.cid }, function (err, data) {
//         if (err) {
//             console.log(err);
//             res.send(err);
//         }
//         else {
//             console.log(data);
//             res.send(data);
//         }
//         mongoose.connection.close();
//     });
// });


// app.put("/api/updatecat", upload.single('cpic'), function (req, res) {
//     mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

//     if (!req.file) {
//         picname = req.body.oldpicname;//if file was not uploaded then we will save old picture name in database
//     };

//     managecatmodel.updateOne({ _id: req.body.catid }, { $set: { categoryname: req.body.cname, categorypic: picname } }, function (err, data) {
//         if (err) {
//             console.log(err);
//             res.send("Failed");
//         }
//         else {
//             console.log(data);
//             res.send(data);
//         }
//         mongoose.connection.close();
//     });
// });


// app.get("/api/getsubcatdetailsbyid", function (req, res) {
//     mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
//     console.log(req.body);
//     managesubcatmodel.find({ _id: req.query.scatid }, function (err, data) {
//         if (err) {
//             console.log(err);
//             res.send(err);
//         }
//         else {
//             console.log(data);
//             res.send(data);
//         }
//         mongoose.connection.close();
//     });
// });


// app.put("/api/updatesubcat", upload.single('scpic'), function (req, res) {
//     mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

//     if (!req.file) {
//         picname = req.body.oldpicname;//if file was not uploaded then we will save old picture name in database
//     };

//     managesubcatmodel.updateOne({ _id: req.body.scatid }, { $set: { subcatname: req.body.scname, subcatpic: picname } }, function (err, data) {
//         if (err) {
//             console.log(err);
//             res.send("Failed");
//         }
//         else {
//             console.log(data);
//             res.send(data);
//         }
//         mongoose.connection.close();
//     });
// });

var TutorProfileSchema = new mongoose.Schema({ name: String, email:{type:String,unique:true},gender:String,contact:String,bio:String,qualification:String,country:String,state:String,dob:String,skills:String,experience:String,picture:String,address:String,college:String,subject:String,level:String,one2one:String,group8:String,group12:String}, { versionKey: false });
var tutorprofilemodel = mongoose.model("tutorprofile", TutorProfileSchema, "tutorprofile");

app.post("/api/tutoredit", upload.single('userpic'), function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    if (!req.file) {
        picname = "profile.png";//if file was not uploaded then we will save default imagename in database
    };

    var newtutorprofile = new tutorprofilemodel({ name:req.body.name, email:req.body.email, gender:req.body.gender, contact:req.body.contact, bio:req.body.about, qualification:req.body.qualification, country:req.body.country, state:req.body.state, dob:req.body.dob, skills:req.body.skills, experience:req.body.experience, picture:picname, address:req.body.address, college:req.body.clg ,subject:req.body.subject,level:req.body.level,one2one:req.body,one2one,group8:req.body.group8,group12:req.body.group12});
    newtutorprofile.save(function (err) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            res.send("Profile created successfully");
        }
        mongoose.connection.close();
    });
});



app.get("/api/gettutordetails", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    tutorprofilemodel.find({email:req.query.email},function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

app.get("/api/getdetailsoftutor", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    tutorprofilemodel.find({_id: req.query.tid }, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});
app.get("/api/getelementarydata", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    tutorprofilemodel.find({ level: "elementary" }, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});
app.get("/api/getmiddledata", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    tutorprofilemodel.find({ level: "Middle and high" }, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});
app.get("/api/getcollegedata", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    tutorprofilemodel.find({ level: "College" }, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});


app.put("/api/tutorupdate", upload.single('userpic'), function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

    if (!req.file) {
        picname = req.body.oldpic;//if file was not uploaded then we will save old picture name in database
    };

    tutorprofilemodel.updateOne({ email: req.body.email }, { $set: { name: req.body.name, email: req.body.email, gender: req.body.gender, contact: req.body.contact, bio: req.body.about, qualification: req.body.qualification, country: req.body.country, state: req.body.state, dob: req.body.dob, skills: req.body.skills, experience: req.body.experience, picture: picname, address: req.body.address, college: req.body.clg,subject:req.body.subject,level:req.body.level,one2one:req.body.one2one,group8:req.body.group8,group12:req.body.group12} }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

var LearnerProfileSchema = new mongoose.Schema({ name: String, email: { type: String, unique: true }, gender: String, contact: String, bio: String, qualification: String, country: String, state: String, dob: String, picture: String, address: String, college: String }, { versionKey: false });
var learnerprofilemodel = mongoose.model("learnerprofile", LearnerProfileSchema, "learnerprofile");

app.post("/api/learneredit", upload.single('userpic'), function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    if (!req.file) {
        picname = "profile.png";//if file was not uploaded then we will save default imagename in database
    };

    var newlearnerprofile = new learnerprofilemodel({ name: req.body.name, email: req.body.email, gender: req.body.gender, contact: req.body.contact, bio: req.body.about, qualification: req.body.qualification, country: req.body.country, state: req.body.state, dob: req.body.dob,picture: picname, address: req.body.address, college: req.body.clg });
    newlearnerprofile.save(function (err) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            res.send("Profile created successfully");
        }
        mongoose.connection.close();
    });
});

app.get("/api/getlearnerdetails", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    learnerprofilemodel.find({ email: req.query.email }, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

app.put("/api/learnerupdate", upload.single('userpic'), function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

    if (!req.file) {
        picname = req.body.oldpic;//if file was not uploaded then we will save old picture name in database
    };

    learnerprofilemodel.updateOne({ email: req.body.email }, { $set: { name: req.body.name, email: req.body.email, gender: req.body.gender, contact: req.body.contact, bio: req.body.about, qualification: req.body.qualification, country: req.body.country, state: req.body.state, dob: req.body.dob,picture: picname, address: req.body.address, college: req.body.clg } }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});




var SeekerProfileSchema = new mongoose.Schema({ name: String, email: { type: String, unique: true }, gender: String, contact: String, bio: String, qualification: String, country: String, state: String, dob: String, picture: String, address: String, college: String }, { versionKey: false });
var seekerprofilemodel = mongoose.model("seekerprofile", SeekerProfileSchema, "seekerprofile");

app.post("/api/seekeredit", upload.single('userpic'), function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    if (!req.file) {
        picname = "profile.png";//if file was not uploaded then we will save default imagename in database
    };

    var newseekerprofile = new seekerprofilemodel({ name: req.body.name, email: req.body.email, gender: req.body.gender, contact: req.body.contact, bio: req.body.about, qualification: req.body.qualification, country: req.body.country, state: req.body.state, dob: req.body.dob, picture: picname, address: req.body.address, college: req.body.clg });
    newseekerprofile.save(function (err) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            res.send("Profile created successfully");
        }
        mongoose.connection.close();
    });
});

app.get("/api/getseekerdetails", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    seekerprofilemodel.find({ email: req.query.email }, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

app.put("/api/seekerupdate", upload.single('userpic'), function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

    if (!req.file) {
        picname = req.body.oldpic;//if file was not uploaded then we will save old picture name in database
    };

    seekerprofilemodel.updateOne({ email: req.body.email }, { $set: { name: req.body.name, email: req.body.email, gender: req.body.gender, contact: req.body.contact, bio: req.body.about, qualification: req.body.qualification, country: req.body.country, state: req.body.state, dob: req.body.dob, picture: picname, address: req.body.address, college: req.body.clg} }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});


app.get("/api/alltutormembers", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    tutorprofilemodel.find(function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(data);
            console.log(data);
        }
        mongoose.connection.close();
    });
});


app.get("/api/alllearnermembers", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    learnerprofilemodel.find(function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(data);
            console.log(data);
        }
        mongoose.connection.close();
    });
});


app.get("/api/allseekermembers", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    seekerprofilemodel.find(function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(data);
            console.log(data);
        }
        mongoose.connection.close();
    });
});

var CategorySchema = new mongoose.Schema({ categoryname: String, categorypic: String }, { versionKey: false });
var CategoryModel = mongoose.model("category", CategorySchema, "category");

app.post("/api/addcat", upload.single('cpic'), function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    if (!req.file) {
        picname = "profile.png";//if file was not uploaded then we will save default imagename in database
    };

    var newcategory = new CategoryModel({ categoryname: req.body.cname, categorypic: picname });
    newcategory.save(function (err) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            res.send("Category added successfully");
        }
        mongoose.connection.close();
    });
});

app.get("/api/getallcat", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.body);
    CategoryModel.find(function (err, data){
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

app.delete("/api/delcat", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.query);
    CategoryModel.remove({ _id: req.query.cid }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

app.get("/api/getcatdetailsbyid", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.body);
    CategoryModel.find({ _id: req.query.cid }, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});


app.put("/api/updatecat", upload.single('cpic'), function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

    if (!req.file) {
        picname = req.body.oldpicname;//if file was not uploaded then we will save old picture name in database
    };

    CategoryModel.updateOne({ _id: req.body.catid }, { $set: { categoryname: req.body.cname, categorypic: picname } }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});


var SubCategorySchema = new mongoose.Schema({ category: String, subcatname: String, subcatpic: String }, { versionKey: false });
var SubcategoryModel = mongoose.model("subcategory", SubCategorySchema, "subcategory");

app.post("/api/addsubcat", upload.single('scpic'), function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    if (!req.file) {
        picname = "profile.png";//if file was not uploaded then we will save default imagename in database
    };

    var newsubcategory = new SubcategoryModel({ category: req.body.cid, subcatname: req.body.scname, subcatpic: picname });
    newsubcategory.save(function (err) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            res.send("Sub Category added successfully");
        }
        mongoose.connection.close();
    });
});

app.get("/api/getallsubcat", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.body);
    SubcategoryModel.find({category:req.query.cid},function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

app.put("/api/updatesubcat", upload.single('scpic'), function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

    if (!req.file) {
        picname = req.body.oldpicname;//if file was not uploaded then we will save old picture name in database
    };

    SubcategoryModel.updateOne({ _id: req.body.scatid }, { $set: { subcatname: req.body.scname, subcatpic: picname } }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

app.delete("/api/delsubcat", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.query);
    SubcategoryModel.remove({ _id: req.query.scid }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

app.get("/api/getsubcatdetailsbyid", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.body);
    SubcategoryModel.find({ _id: req.query.scid}, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

app.get("/api/getsubcatbycatid", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.body);
    SubcategoryModel.find({ category: req.query.catid }, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});


var ManagedataSchema = new mongoose.Schema({ category: String, subcategory: String, dataname: String, description: String, datapic: String }, { versionKey: false });
var managedatamodel = mongoose.model("managedata", ManagedataSchema, "managedata");

app.post("/api/adddata", upload.single('ppic'), function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    if (!req.file) {
        picname = "profile.png";//if file was not uploaded then we will save default imagename in database
    };

    var newdata = new managedatamodel({ category: req.body.cid, subcategory: req.body.scid, dataname: req.body.dname,  description: req.body.description, datapic: picname });
    newdata.save(function (err) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            res.send("Data added successfully");
        }
        mongoose.connection.close();
    });
});

app.get("/api/getalldata", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.body);
    managedatamodel.find({ subcategory: req.query.scid }, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

app.delete("/api/deldata", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.query);
    managedatamodel.remove({ _id: req.query.did }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});
app.get("/api/getdatabysubcatid", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.body);
    managedatamodel.find({ subcategory: req.query.scid }, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});


var CartSchema = new mongoose.Schema({ coursepic: String, coursename: String, courserate:String, courseid: String, username: String }, { versionKey: false });
var cartmodel = mongoose.model("cart", CartSchema, "cart");

app.post("/api/addtocart", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    var newcart = new cartmodel({ coursepic: req.body.picname, coursename: req.body.coursename, courserate: req.body.rate,courseid: req.body.pid, username: req.body.username });
    newcart.save(function (err) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            res.send("Added to cart successfully");
        }
        mongoose.connection.close();
    });
});
app.get("/api/getcart", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.body);
    cartmodel.find({ username: req.query.email }, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});
app.delete("/api/delcart", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.query);
    cartmodel.remove({ _id: req.query.cid }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});


var CourseCategorySchema = new mongoose.Schema({ coursecategoryname: String, coursecategorypic: String }, { versionKey: false });
var CourseCategoryModel = mongoose.model("coursecategory", CourseCategorySchema, "coursecategory");

app.post("/api/addcoursecat", upload.single('cpic'), function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    if (!req.file) {
        picname = "profile.png";//if file was not uploaded then we will save default imagename in database
    };

    var newcoursecategory = new CourseCategoryModel({ coursecategoryname: req.body.cname, coursecategorypic: picname });
    newcoursecategory.save(function (err) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            res.send("Course Category added successfully");
        }
        mongoose.connection.close();
    });
});

app.get("/api/getallcoursecat", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.body);
    CourseCategoryModel.find(function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

app.delete("/api/delcoursecat", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.query);
    CourseCategoryModel.remove({ _id: req.query.cid }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});


app.get("/api/getcoursecatdetailsbyid", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.body);
    CourseCategoryModel.find({ _id: req.query.cid }, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});


app.put("/api/updatecoursecat", upload.single('cpic'), function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

    if (!req.file) {
        picname = req.body.oldpicname;//if file was not uploaded then we will save old picture name in database
    };

    CourseCategoryModel.updateOne({ _id: req.body.catid }, { $set: { coursecategoryname: req.body.cname, coursecategorypic: picname } }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});
var CoursedataSchema = new mongoose.Schema({ category: String, coursedataname: String, coursedatarate:String,coursedatains:String,coursedatalang:String,coursedatacertificate:String,coursedataduration:String,coursedatapic: String }, { versionKey: false });
var CoursedataModel = mongoose.model("coursedata", CoursedataSchema, "coursedata");

app.post("/api/addcoursedata", upload.single('cdpic'), function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    if (!req.file) {
        picname = "profile.png";//if file was not uploaded then we will save default imagename in database
    };

    var newcoursedata = new CoursedataModel({ category: req.body.cid, coursedataname: req.body.cdname, coursedatarate: req.body.cdrate, coursedatains: req.body.cdins, coursedatalang: req.body.cdlang, coursedatacertificate: req.body.cdcertificate, coursedataduration: req.body.cdduration, coursedatapic: picname });
    newcoursedata.save(function (err) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            res.send("course data added successfully");
        }
        mongoose.connection.close();
    });
});

app.get("/api/getallcoursedata", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.body);
    CoursedataModel.find({ category: req.query.cid }, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

app.put("/api/updatecoursedata", upload.single('cdpic'), function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

    if (!req.file) {
        picname = req.body.oldpicname;//if file was not uploaded then we will save old picture name in database
    };

    CoursedataModel.updateOne({ _id: req.body.cdid }, { $set: {coursedataname: req.body.cdname, coursedatarate: req.body.cdrate, coursedatains: req.body.cdins, coursedatalang: req.body.cdlang, coursedatacertificate: req.body.cdcertificate, coursedataduration: req.body.cdduration, coursedatapic: picname } }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

app.delete("/api/delcoursedata", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.query);
    CoursedataModel.remove({ _id: req.query.cdid }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

app.get("/api/getcoursedatadetailsbyid", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.body);
    CoursedataModel.find({ _id: req.query.cdid }, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

app.get("/api/getcoursedatabycatid", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.body);
    CoursedataModel.find({category: req.query.catid }, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

app.get("/api/getallcoursedatabyid", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.body);
    CoursedataModel.find({ _id: req.query.courseid }, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});
app.get("/api/getallfreecourse", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.body);
    CoursedataModel.find({ coursedatarate: { $eq: "Free" } }, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});


var OrderSchema = new mongoose.Schema({ country:String,state:String, pmode: String, cardno: String, hname: String, coname: String, expiry: String, cvv: String, username: String, billamt: Number, status: String, orderdate: String }, { versionKey: false });
var Ordermodel = mongoose.model("finalorder", OrderSchema, "finalorder");

var orderdt = new Date();

app.post("/api/saveorder", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

    var neworder = new Ordermodel({ country:req.body.country,state:req.body.state, pmode: req.body.pmode, cardno: req.body.cardno, hname: req.body.hname, coname: req.body.coname, expiry: req.body.expiry, cvv: req.body.cvv, username: req.body.username, billamt: req.body.billamt, status: req.body.status, orderdate: orderdt });

    neworder.save(function (err) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            res.send("done");
        }
        mongoose.connection.close();
    });
});

app.get("/api/getorderdetails", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    Ordermodel.find({ username: req.query.username }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    }).sort({"orderdate":-1});
});
var orderproductsSchema = new mongoose.Schema({ orderid: String, courseid: String, coursename: String, courserate: String, coursepic: String, username: String }, { versionKey: false });
var orderproducts = mongoose.model("orderproducts", orderproductsSchema, "orderproducts");

app.post("/api/orderitems", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    var neworder = req.body;

    orderproducts.insertMany(neworder, function (err, docs) {
        if (err) {
            return console.error(err);
        }
        else {
            console.log("Multiple documents inserted to Collection");
            res.send("Successfully inserted");
        }
    });
});
app.get("/api/fetchorderdetails", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    orderproducts.find({ orderid: req.query.orderid }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});


app.delete("/api/emptycart", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    cartmodel.deleteMany({ username: req.query.un }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send("removed to cart successfully");
        
        }
        mongoose.connection.close();
    });
});


app.get("/api/getallorders", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    Ordermodel.find(function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    }).sort({"orderdate":-1 });
});


app.get("/api/getallordersbyid", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    Ordermodel.find({orderid:req.query.id},function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    })
});

app.get("/api/searchcoursebyname", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

    var coursename = req.query.s;
        CoursedataModel.find({ coursedataname: { $regex: '.*' + coursename, $options: 'i' } }, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);

        }
        mongoose.connection.close();
    });
});

var ContentuploadSchema = new mongoose.Schema({tutorname:String,tutorsubject:String,tutorqualification:String,tutorpicture:String,tutorid:String,filename: String, filedata: String }, { versionKey: false });
var ContentuploadModel = mongoose.model("contentupload", ContentuploadSchema, "contentupload");

app.post("/api/addfile", upload.single('filedata'), function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    if (!req.file) {
        picname = "profile.png";//if file was not uploaded then we will save default imagename in database
    };

    var newupload = new ContentuploadModel({ tutorid:req.body.tutorid,tutorname:req.body.tutorname,tutorsubject:req.body.tutorsubject,tutorpicture:req.body.tutorpic,tutorqualification:req.body.tutorqualification,filename: req.body.filename, filedata: picname });
    newupload.save(function (err) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            res.send("File added successfully");
        }
        mongoose.connection.close();
    });
});

app.get("/api/getallfile", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.body);
    ContentuploadModel.find({tutorid:req.query.id},function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});
app.get("/api/getfiles", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.body);
    ContentuploadModel.find( function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

app.delete("/api/delfile", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.query);
    ContentuploadModel.remove({ _id: req.query.fileid }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

var EnrollSchema = new mongoose.Schema({ name: String, email: String, phone: String, country:String, state:String, rate:Number,totalamt:Number, hours: Number, months:Number, potion: String, cardno: String, hname: String, coname: String, expiry:String, cvv: String, tutorName: String, tutorid:String, subject:String ,applydate:String}, { versionKey: false });
var Enrollmodel = mongoose.model("enrollstudents", EnrollSchema, "enrollstudents");

var applydt = new Date();

app.post("/api/enrollstudents", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

    var newenroll = new Enrollmodel({ name: req.body.name, email: req.body.email, phone: req.body.phone, country: req.body.country,totalamt:req.body.totalamt, state: req.body.state, rate: req.body.rate, hours: req.body.hours, months: req.body.months, potion: req.body.poption, cardno: req.body.cardno, hname: req.body.hname, coname: req.body.coname, expiry: req.body.exp, cvv: req.body.cvv, tutorName: req.body.tutorName, tutorid: req.body.tutorid, subject: req.body.subject ,applydate:applydt });

    newenroll.save(function (err) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            res.send("done");
        }
        mongoose.connection.close();
    });
});

app.get("/api/getenrolldetails", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    Enrollmodel.find({tutorid:req.query.id}, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

var FreeSchema = new mongoose.Schema({name: String, email: {type:String,unique:true}, phone: String, courseid: String, coursename: String, coursepic: String,  enrolldate: String, status:String }, { versionKey: false });
var Freemodel = mongoose.model("freeEnroll", FreeSchema, "freeEnroll");

var enrolldt = new Date();

app.post("/api/freeenroll", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

    var newfree = new Freemodel({courseid:req.body.courseid, coursename:req.body.coursename,coursepic:req.body.coursepic,name:req.body.name,email:req.body.email,phone:req.body.phone, enrolldate: enrolldt,status:req.body.status });

    newfree.save(function (err) {
        if (err) {
            console.log(err);
            res.send("you can enroll with the same emailid.");
        }
        else {
            res.send("Enrollment Done.Go to mypurchases to access course");
        }
        mongoose.connection.close();
    });
});
app.get("/api/freeenroll", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    Freemodel.find({ email: req.query.username }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    }).sort({ "orderdate": -1 });
});
app.get("/api/freeenrolldatabyid", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    Freemodel.find({ courseid: req.query.id }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    }).sort({ "orderdate": -1 });
});

var CoursevideosSchema = new mongoose.Schema({ duration:String,coursename:String,headingname:String,headingid:String,coursepath:String}, { versionKey: false });
var CoursevideosModel = mongoose.model("coursevideos", CoursevideosSchema, "coursevideos");

app.post("/api/addcoursevideos", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
   var newcv = new CoursevideosModel({ duration:req.body.duration,coursename:req.body.coursename,headingname:req.body.headingname,headingid:req.body.headingid,coursepath:req.body.coursepath});
newcv.save(function (err) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            res.send("Course Video added successfully");
        }
        mongoose.connection.close();
    });
});

app.get("/api/getallvideos", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.body);
    CoursevideosModel.find(function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

app.delete("/api/delpath", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.query);
    CoursevideosModel.remove({ _id: req.query.pid }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

app.get("/api/getallvideos", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.body);
    CoursevideosModel.find({coursename:req.query.coursename},function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

app.get("/api/getvideopath", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.body);
    CoursevideosModel.find({ headingid: req.query.headingid }, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

var bookSchema = new mongoose.Schema({tutorname:String,tutorsubject:String, pname:String,email:String,contact:String,gender:String,country:String,meeting:String,date1:String,date2:String,date3:String}, { versionKey: false });
var bookModel = mongoose.model("booktrial", bookSchema,"booktrial");

app.post("/api/book", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    var newbook = new bookModel({ tutorname:req.body.tutorname,tutorsubject:req.body.tutorsubject,pname: req.body.pname, contact: req.body.contact, email: req.body.email, country: req.body.country, gender: req.body.gender,date1:req.body.date1,date2:req.body.date2,date3:req.body.date3,meeting:req.body.meeting });
    newbook.save(function (err) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            res.send("Booking added successfully");
        }
        mongoose.connection.close();
    });
});
app.get("/api/getallbookings", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.body);
    bookModel.find(function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});

app.get("/api/getallbookingsbyname", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log(req.body);
    bookModel.find({tutorname:req.query.tname},function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});




app.put("/api/updatestatus", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    Ordermodel.updateOne({ _id: req.body.orderid }, { $set: { status : req.body.status } }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});


app.put("/api/updatestatus2", function (req, res) {
    mongoose.connect("mongodb://localhost/projectdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    Freemodel.updateOne({courseid: req.body.id }, { $set: { status: req.body.status } }, function (err, data) {
        if (err) {
            console.log(err);
            res.send("Failed");
        }
        else {
            console.log(data);
            res.send(data);
        }
        mongoose.connection.close();
    });
});