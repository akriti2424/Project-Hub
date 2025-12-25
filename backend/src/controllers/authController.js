const User = require('../models/User');
const bcrypt = require('bcryptjs');
const generateToken = require("../utils/generateToken");


// Register User 

exports.register = async (req, res) =>{
    try{///
        const {name, email, password, role} = req.body;

        // check if user exists
        const userExists = await User.findOne({email});
        if(userExists)
        {
            return res.status(400).json({message:"User already exitst"});
        }

        // Create User (password hashing handled by model)
        const user = await User.create({
            name,
            email,
            password,
            role,
        }); 

        res.status(201).json({
            message: "User registered successfully"
        })
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
}

//  Login users

exports.login = async (req, res) => {
    try
    {
        const {email, password} = req.body;
        
        const user = await User.findOne({email}).select("+password");

        if(!user)
        {
            return res.status(401).json({message:"Invalid email or password"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)
        {
            return res.status(401).json({message:'Invalid email or password'})
        }

        const token = generateToken(user);

        res.json({
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                role:user.role,
            }
        })
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
}

    