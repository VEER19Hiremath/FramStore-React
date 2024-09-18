const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = 5000;

// Database details
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'farmstore',
};

// Create a MySQL connection
const connection = mysql.createConnection(dbConfig);

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        process.exit(1);
    }
    console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const router = require('./router');
// Replace with your actual route file
const contactroute = require('./routes/contactroute'); // Replace with your actual route file
const faculty_route = require('./routes/faculty_route'); // Replace with your actual route file
const admin = require('./routes/admin'); // Replace with your actual route file
const user = require('./routes/user'); // Replace with your actual route file

// Define CORS options
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

// Use CORS middleware with options
app.use(cors(corsOptions));

// Use routes
app.use("/api/", router);
app.use("/api/", contactroute);
app.use("/api/", faculty_route);
app.use("/api/admin/", admin);
app.use("/api/user/", user);

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running at port number: ${PORT}`);
});