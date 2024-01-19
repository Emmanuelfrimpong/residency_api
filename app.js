require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const authRoutes = require('./src/auth/auth.routes');
const settingsRoutes = require('./src/settings/settings.routes');
const staffRoutes = require('./src/staffs/staffs.routes');
const studentRoutes = require('./src/students/students.routes')
const complainstRoutes = require('./src/complaints/complaints.routes');
const messageRoutes = require('./src/messages/messages.routes');
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// app.use(express.json());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
app.use(bodyParser.json({ limit: "50mb" }))

app.use('/auth', authRoutes);
app.use('/settings', settingsRoutes);
app.use('/staffs', staffRoutes);
app.use('/students', studentRoutes);
app.use('/complaints', complainstRoutes);
app.use('/messages', messageRoutes);


app.use('*', (req, res, next) => {
    res.json({
        success: false,
        message: 'Connected to server successfully.Unkown path.'
    });
});

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Connected to server successfully.'
});
});
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/residency",{family:4}).then(() => {
    app.listen(process.env.PORT || 3000,() => {
        console.log("server running on port ", process.env.PORT || 3000);
        //get user schema
        const User = require('./src/users/users.model');
        const bcryptUtil = require('./src/utils/bcrypt');
        //get user service
        const userService = require('./src/users/users.services');
        userService.getById("admin").then(async(user) => {
        if(user){
        }else{
          var newUser = new User();
          var hashedPassword =await  bcryptUtil.createHash("admin");
            newUser.password = hashedPassword;
            newUser.firstname = "admin";
            newUser.surname = "admin";
            newUser.id = "admin"; 
            newUser.role = "Hall Admin";
            newUser.createdAt = Date.now();
          await   newUser.save();
        }
        // const userService = require('./src/users/users.services');
        //     userService.updateAllUsersPassword().then((result) => {
        //     console.log(result);
        // }).catch((error) => {
        //     console.log(error);
        // });
    });
       
    });
}
).catch(error => { 
    console.log(error);
});

  
