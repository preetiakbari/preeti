// Expreess
// MandoDb .json

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const mongoose = require("mongoose");
const ejs = require("ejs");
const cors = require("cors"); // Import the cors middleware
const bcrypt = require('bcrypt'); //for bcrypt password

app.set("view engine", "ejs");

//Use jesonwebtoken for authentication 
const jwt = require("jsonwebtoken");
const secretKey = "secretkey";

// Use the cors middleware
app.use(cors());

// ... other middleware and routes

// Connection URL and database name
const url =
  "mongodb+srv://preetiakbari610:%40Preeti123!@cluster0.6sgcrd0.mongodb.net";
const dbName = "reactnode1";

// Serve the HTML files
app.use(express.static("public")); //Access .html file from public folder
app.use(express.static("src")); //Access .html file from public folder

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Create a schema for the data
const dataSchema = new mongoose.Schema({
  name: String,
  rollno: String,
  email: String,
  department: String,
  semester: String,
  address: String,
  pass: String,
  cpass: String,
  token: String, // Add this field to store the JWT token
});
// Create a model for the data
const Data = mongoose.model("Data", dataSchema);

// app.get('/login', (req, res) => {
//   res.redirect('login.html');
// });

// // Connect to the MongoDB database
mongoose
  .connect(`${url}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");

    //submit/register ------------------------------------------------------------------------------------------------------------------------------------------------------------
    app.post("/submit-form", async (req, res) => {
      const { name, rollno, email, department, semester, address, pass, cpass } = req.body;

      try {
        // Validate form data
        // if (!name || !email || !pass || !cpass) {
        //   return res.json({ Status: "Error", Message: "All fields are required" });
        // }

        // Compare password and confirm password
        if (pass !== cpass) {
          return res.json({ Status: "Error" });
          // res.json({ Status: "Success", Result: result });
          // return res.redirect("http://localhost:3001/Signup");
        }

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(pass, 10); // 10 is the salt rounds

        // Create a new user
        const newUser = new Data({ name, rollno, email, department, semester, address, pass: hashedPassword, cpass: hashedPassword });

        // Generate JWT token and save it to the newUser document
        const token = jwt.sign({ email }, secretKey, { expiresIn: "300s" });
        newUser.token = token;

        await newUser.save();

        return res.json({ Status: "Success" });

        // return res.render("login", { message: "Register Successful" });
        // res.render('login');
        // return res.redirect('http://localhost:3001/Login');
      } catch (error) {
        console.error("Failed to register user:", error);
        return res.redirect("/error.html");
      }
    });

    // app.post("/submit-form", async (req, res) => {
    //   const { name, email, pass, cpass } = req.body;

    //   try {

    //     // Compare password and confirm password
    //     if (pass !== cpass) {
    //       return res.json({ Status: "Error" });
    //       // res.json({ Status: "Success", Result: result });
    //       // return res.redirect("http://localhost:3001/Signup");
    //     }

    //     // Hash the password using bcrypt
    //     const hashedPassword = await bcrypt.hash(pass, 10); // 10 is the salt rounds

    //     // Create a new user
    //     const newUser = new Data({ name, email, pass: hashedPassword, cpass: hashedPassword });

    //     // Generate JWT token and save it to the newUser document
    //     const token = jwt.sign({ email }, secretKey, { expiresIn: "300s" });
    //     newUser.token = token;

    //     await newUser.save();

    //     return res.render("login", { message: "Register Successful" });
    //     // res.render('login');
    //     // return res.redirect('http://localhost:3001/Login');
    //   } catch (error) {
    //     console.error("Failed to register user:", error);
    //     return res.redirect("/error.html");
    //   }
    // });

    app.post("/AddStudent", async (req, res) => {
      const { name, rollno, email, department, semester, address, pass, cpass } = req.body;

      try {

        // Compare password and confirm password
        if (pass !== cpass) {
          return res.json({ Status: "Error" });
          // res.json({ Status: "Success", Result: result });
          // return res.redirect("http://localhost:3001/Signup");
        }

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(pass, 10); // 10 is the salt rounds


        // Create a new user
        const newUser = new Data({ name, rollno, email, department, semester, address, pass:hashedPassword, cpass:hashedPassword });
        // Generate JWT token and save it to the newUser document
        const token = jwt.sign({ email }, secretKey, { expiresIn: "300s" });
        newUser.token = token;

        await newUser.save();

        // alert("Data added succesfully");
        return res.redirect("http://localhost:3001/Dashboard/Student");
        // res.render('login');
        // return res.redirect('http://localhost:3001/Login');
      } catch (error) {
        console.error("Failed to register user:", error);
        return res.redirect("/error.html");
      }
    });

    //Login route----------------------------------------------------------------------------------------------
    // app.get('/login', (req, res) => {
    //   return res.redirect('/dashboard.html');
    // });

    app.post("/login", async (req, res) => {
      const { email, pass } = req.body;

      try {
        const token = jwt.sign({ email }, secretKey, { expiresIn: "300s" });
        jwt.verify(token, secretKey, (err, authData) => {
          if (err) {
            res.send({ result: "Invalid token" });
          }

          // else{
          //     res.json({
          //         message: "Profile accessed",
          //         authData
          //     })
          // }
        });

        //Admin side login
        if (email === "admin@gmail.com" && pass === "admin111") {
          return res.redirect("http://localhost:3001/Dashboard");
        }

        // Find the user by username
        const user = await Data.findOne({ email });
        // const user1 = await Data.findOne({ pass });

        if (!user) {
          return res.render("login", {
            message: "Login Failed / Register first / Enter valid Email",
          });
          // return res.redirect('/login.html');
          //   return res.render('login', { error: 'Invalid username or password' });
        }

        // Compare the provided password with the hashed password using bcrypt
        const isPasswordValid = bcrypt.compare(pass, user.pass);

        if (!isPasswordValid) {
          return res.render("login", {
            message: "Login Failed / Register first / Enter valid Email",
          });
        }

        res.render("dashboard", { user, message: "Login successful" });

      } catch (error) {
        console.error("Failed to login:", error);
        return res.render("login", { error: "Failed to login" });
      }
    });

    // Retrive data into admin dashboard
    app.get("/getStudent", async (req, res) => {
      try {

        // Find all student data
        const result = await Data.find();

        // return res.redirect('http://localhost:3001/Dashboard/Employee' ,{Status: 'Success' , result})
        res.json({ Status: "Success", Result: result });
        // return res.redirect('http://localhost:300');
      } catch (error) {
        console.error("Error fetching employee data:", error);
        return res
          .status(500)
          .json({ Status: "Error", Message: "Failed to fetch employee data" });
      }
    });

    // app.post('/profile/:user', async (req, res) => {
    //   const user = req.params.user;

    //   try {
    //     // Find the user by username
    //     // const user = await Data.findOne({ email });
    //     // const user1 = await Data.findOne({ pass });

    //       res.render('profile' , {user});

    //     // return res.redirect('/dashboard.html');

    //     // Compare the password
    //     // const isPasswordValid = await bcrypt.compare(pass, user.pass);
    //     // if (!isPasswordValid) {
    //     //   return res.render('login', { error: 'Invalid username or password' });
    //     // }

    //     // return res.redirect('/dashboard.html');
    //   }
    //   catch (error)
    //   {
    //     console.error('Failed to login:', error);
    //     return res.render('login', { error: 'Failed to login' });
    //   }
    // });

    // Update data----------------------------------------------------------------------------------------------------------------------------
    // app.get('/update', (req, res) => {
    //   return res.redirect('/dashboard.html');
    // });

    app.post('/get/:id', async (req, res) => {
      const id = req.params.id;

      try {
        const result = await Data.find({ _id: id }); // Make sure you replace 'Data' with your mongoose model name (e.g., 'Employee')

        res.json({ Status: "Success", Result: result });
      } catch (error) {
        console.error("Error fetching employee data:", error);
        return res
          .status(500)
          .json({ Status: "Error", Message: "Failed to fetch employee data" });
      }
    });

    app.post('/update/:id', async (req, res) => {
      const id = req.params.id;
      const {name, rollno, email, department, semester, address } = req.body;

      try {
        const result = await Data.updateOne(
          { _id: id },
          { $set: { name, rollno, email, department, semester, address } }
        );// Make sure you replace 'Data' with your mongoose model name (e.g., 'Employee')

        res.json({ Status: "Success", Result: result });
      } catch (error) {
        console.error("Error fetching employee data:", error);
        return res
          .status(500)
          .json({ Status: "Error", Message: "Failed to fetch employee data" });
      }
    });



    app.post("/update", async (req, res) => {
      const { email, pass, cpass } = req.body;
    

      try {
        // Find the user by username
        // const user = await Data.updateOne({email:email}, updates);
        //  await Data.findOne({ email });
        const hashedPassword = await bcrypt.hash(pass, 10); // 10 is the salt rounds
        const user1 = await Data.updateOne(
          { email },
          { $set: { pass:hashedPassword, cpass:hashedPassword } }
        );
        //  await Data.updateOne({ pass });
        if (user1.nModified === 0) {
          return res
            .status(404)
            .json({ message: `Cannot find user with id ${email}` });
        }

        res.render("login", { message: "Password Updated Successfully" });
        // return res.status(200).json({ success: true, message: 'User updated successfully', user1});

        // if (!user || !user1) {
        //     return res.redirect('/error.html');
        // //   return res.render('login', { error: 'Invalid username or password' });
        // }

        // Compare the password
        // const isPasswordValid = await bcrypt.compare(pass, user.pass);
        // if (!isPasswordValid) {
        //   return res.render('login', { error: 'Invalid username or password' });
        // }

        // return res.redirect('/login.html');
      } catch (error) {
        console.error("Failed to update:", error);
        return res.render("update", { error: "Failed to update" });
      }
    });

    // app.put('/update', async (req, res) => {
    //   const  email  = req.params.email;
    //   const  updates  = req.body;

    //   try {
    //     // Find the user by id
    //     const user = await Data.updateOne({email:email}, updates);

    // if(user.nModified === 0) {
    //   return res.status(404).json({ message: `Cannot find user with id ${email}` });
    // }

    // return res.status(200).json({ success: true, message: 'User updated successfully', user});
    //   } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ success: false, message: 'Internal server error' });
    //   }
    // });

    // // DELETE--------------------------------------------------------------------------------------------------------------------------
    // app.delete('/delete/:id', async (req, res) => {
    //   const id = req.params.id;

    //   try {
    //     // Delete the employee by ID
    //     const result = await Data.findByIdAndDelete(id);

    //     if (!result) {
    //       return res.json({ Error: 'Employee not found' });
    //     }

    //     return res.json({ Status: 'Success' });
    //   } catch (error) {
    //     console.error('Delete employee error:', error);
    //     return res.json({ Error: 'Delete employee error' });
    //   }
    // });

    app.post("/delete/:id", async (req, res) => {
      const id = req.params.id;

      try {
        // Delete the employee by ID
        const result = await Data.deleteOne({ _id: id });

        if (result.deletedCount === 0) {
          return res.json({ Error: "Employee not found" });
        }

        return res.json({ Status: "Success" });
      } catch (error) {
        console.error("Delete employee error:", error);
        return res.json({ Error: "Delete employee error" });
      }
    });

    app.post("/delete", async (req, res) => {
      // const { email, pass } = req.body;
      const email = req.body.email;
      // const  pass  = req.body.pass;
      // const  cpass  = req.body.cpass;

      try {
        await Data.deleteOne({ email });

        // // if(u1.nModified === 0) {
        // //   return res.status(404).json({ message: `Cannot find user with id ${email}` });
        // // }

        // return res.status(200).json({ success: true, message: 'Account deleted successfully', });

        res.render("login", { message: "Account Deleted Successfully" });
        // return res.redirect('http://localhost:3001');
        // // return res.redirect('/login.html');
      } catch (error) {
        console.error("Failed to Delete:", error);
        return res.render("delete", { error: "delete to login" });
      }
    });

    //   app.delete('/users/:id', async (req, res) => {
    //   Data.deleteOne({ _id: req.params.id }).then(
    //     () =>{ res.status(200).json({
    //     success: "User deleted successfully"
    //   });
    // }).catch((error ) => {
    //   res.status(500).json({ success: false, message: '  server Error' });

    //   }
    //   );
    // });

    // Log out -----------------------------------------------------

    app.get('/logout', (req, res) => {
      res.clearCookie('token');
      return res.json({Status: "Success"});
  })





    // Start the server-------------------------------------------------------------------------
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database", err);
  });

// function verifyToken(req, res, next)
// {

//   const bearerHeader = req.headers['authorization'];

//   if( typeof bearerHeader !== 'undefined'){

//     const token = bearerHeader.split("bearer").join("").trim();

//       req.token = token;
//       next();

//   }
//   else{
//       res.send({
//           result: 'Token is not valid'
//       })
//   }

// }
