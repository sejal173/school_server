import express from "express";
const app = express();
app.use(express.json());
const PORT = 8080;

const students = [];

app.get("/students", (req, res) => {
  //json obj return kr rahi
  res.json({
    success: true,
    data: students,
    message: "Successfully fetched all students",
  });
});

app.post("/student", (req, res) => {
  const { name, age, email, mobile } = req.body;

  if (!name) {
    return res.json({
      success: false,
      message: "name is required",
    });
  }

  if (!age) {
    return res.json({
      success: false,
      message: "age is required",
    });
  }

  if (!email) {
    return res.json({
      success: false,
      message: "email is required",
    });
  }

  if (!mobile) {
    return res.json({
      success: false,
      message: "mobile is required",
    });
  }

  const id = Math.floor(Math.random() * 100000) + 1;

  const newStudent = {
    id,
    name,
    age,
    mobile,
    email,
  };

  students.push(newStudent);

  res.json({
    success: true,
    data: newStudent,
    message: "Successfully added a new student",
  });
});


//specific student la hi record     endpoint-get student
app.get('/student' ,(req,res) => {

    // const id = req.query.id;

    const {id} = req.query;

    let student = null;

    students.forEach( (stud) => {
        if(stud.id == id){
            student =stud;
        }
    })

    if(student == null){
        return res.json({
            success:false,
            message:'student not found'
        })
    }

    res.json({
        success:true,
        data:student,
        message:"succefully fetched students"
    })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
