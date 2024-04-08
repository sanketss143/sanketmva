import express from 'express';
import { createSecondForm, getAllSecondForm, getOneSecondForm, updateSecondForm, deleteSecondForm, viewSecondForm } from '../controller/secondFormController.js';

const route = express.Router();


route.post('/createSecondForm', createSecondForm);

route.get('/getAllSecondForm', getAllSecondForm);

route.get('/getOneSecondForm/:id', getOneSecondForm);

route.put('/updateSecondForm/:id', updateSecondForm);

route.delete('/deleteSecondForm/:id', deleteSecondForm);

route.get('/viewSecondForm/:id', viewSecondForm)

export default route;

