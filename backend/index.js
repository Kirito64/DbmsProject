const express = require('express');
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.get('/', (req, res) => {
	res.send('Welcome')
})


app.listen(8000, ()=>{
	console.log('Service started on port 8000')
})