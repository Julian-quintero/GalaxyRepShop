import express from 'express'
import dotenv from 'dotenv' 
import Server from './classes/serverClass.js'
import connectDB from './config/db.js'


dotenv.config()
connectDB()
const server = new Server();
server.execute();







