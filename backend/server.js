// server.js

const express = require('express');
const cors = require('cors');
const sequelize = require('./config/config');

const User = require('./models/User');
const Tutor = require('./models/Tutor');
const Student = require('./models/Student');
const Subject = require('./models/Subject');
const TutoringSession = require('./models/TutoringSession');
const Payment = require('./models/Payment');
const Feedback = require('./models/Feedback');
const Message = require('./models/Message');
const Review = require('./models/Review');
const Appointment = require('./models/Appointment');
const Notification = require('./models/Notification');
const Attachment = require('./models/Attachment');
const AdminAction = require('./models/AdminAction');
const Schedule = require('./models/Schedule');
const Promotion = require('./models/Promotion');
const SessionNote = require('./models/SessionNote');
const SessionRequest = require('./models/SessionRequest');
const SessionCancellation = require('./models/SessionCancellation');

// Initialize Express app
const app = express();
app.use(express.json());
app.use(cors());

// Define routes (placeholder, you need to define actual routes)
app.use('/api/users', User);



// Sync models with database and start server
sequelize.sync({ alter: true }).then(() => {
    console.log('Database & tables created!');

    app.listen(3001, () => {
        console.log('Server is running on http://localhost:3001');
    });
}).catch((err) => console.error('Unable to connect to the database:', err));
