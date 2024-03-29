const Joi = require('joi');
const express = require('express'); 

const app = express();
ngoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

app.use(express.json());

const courses = [
	{id: 1, name: 'course1' },
	{id: 2, name: 'course2' },
	{id: 3, name: 'course3' }
];

app.get('/', (req, res) => {
	
	res.send('hello world!');
	
}); 

app.get('/api/courses', (req, res) => {
	
	res.send(courses);
	
}); 

app.post('/api/courses', (req, res) => {
	
	const { error } = validateCourse(req.body); // object destructuring syntax
	if (error)
		return res.status(400).send(error.details[0].message);
	
	const course = {
		id: courses.length + 1,
		name: req.body.name
	};
	courses.push(course);
	res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
	//res.send(req.params);
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course)
		return res.status(404).send('the course with the given ID was not found');
	res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course)
		return res.status(404).send('the course with the given ID was not found');
	
	//const result = validateCourse(req.body);
	const { error } = validateCourse(req.body); //result.error
	if (error) 
		return res.status(400).send(error.details[0].message);
	
	course.name = req.body.name;
	
	res.send(course);
	
});

function validateCourse(course) {
	const schema = {
		name: Joi.string().min(3).required()
	};
	
	return Joi.validate(course, schema);
}

// CRUD
app.delete('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course)
		res.status(404).send('the course with the given ID was not found');
	
	const index = courses.indexOf(course);
	courses.splice(index, 1);
	
	res.send(course);
	
});


// port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));

