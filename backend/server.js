import express from 'express'
import dotenv from 'dotenv' 
import Server from './classes/serverClass.js'


dotenv.config()
const server = new Server();
server.execute();







