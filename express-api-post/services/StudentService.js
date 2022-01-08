const StudentController = require('../controller/StudentController');


let create = async(req, res) => {
    if (!req.body.nama || !req.body.nim || !req.body.email || !req.body.jurusan) {
        res.status(400)
        .json({
            code: 422,
            message: 'Unprocess Entity'
        });
    } else {
        try {
            let criteria = {
                nama: req.body.nama,
                nim: req.body.nim,
                email: req.body.email,
                jurusan: req.body.jurusan,
            }
            const checkEmail = await StudentController.getStudent(criteria);
            if (checkEmail && checkEmail.length == 1) {
                res.status(400)
                .json({
                    code: 400,
                    message: 'email already exist'
                });
            } else {
                let studentData = {
                    nama: req.body.nama ? req.body.nama : "",
                    nim: req.body.nim ? req.body.nim : "",
                    email: req.body.email,
                    jurusan: req.body.jurusan,
                };
                const addStudent = await StudentController.createStudent(studentData);

                if (addStudent) {
                    res.status(201)
                    .json({
                        code: 201,
                        message: 'Student Created',
                        data: studentData,
                    })
                } else {
                    res.status(400)
                    .json({
                        code: 400,
                        message: 'Bad Request'
                    })
                }
            }
        } catch (error) {
            res.status(400).json({
                code: 400,
                message: "Something went wrong", error:error,
            })
        }
    }
}

let get = async(req, res) => {
    try {
        const students = await StudentController.getStudent();
        if (students) {
            res.status(200)
            .json({
                code: 200,
                message: 'Get All Student',
                data: students,
            });
        } else {
            res.status(404)
            .json({
                code: 404,
                message: 'Student Not Found',
            });
        }
    } catch (error) {
        res.status(400)
            .json({
                code: 400,
                message: 'Something Went Wrong',
            });
    }
}

module.exports = {
    create: create,
    get: get,
}