const permissionChecker = require("../helpers/permissionChecker");
const { courseCreateValidation } = require("../modules/validation");
const path =  require("path");
const fs  =  require("fs");

module.exports = class courseController{
    static async courseCreatePostController(req,res,next){
        try {
            permissionChecker("admin", req.user_permissions, res.error);

            const photo = req?.files?.photo;
// console.log(photo);

if(photo && photo?.size > 5*1024*1024){
    throw new res.error(400, "Size of photo must be less than 5mb")
}
            const data = await courseCreateValidation(req.body,res.error);
            // console.log(data);

let photo_name = photo ? photo.md5 + "." + photo.mimetype.split("/")[photo.mimetype.split("/").length -1] : course ? course?.course_photo : null;


if(photo){
        photo.mv(
        path.join(__dirname, "..", "public", "uploads", photo_name)
    )
}

            const course = await req.db.courses.create({
                course_name: data.name,
                course_description: data.description,
                course_price: data.price,
                course_photo: photo_name,
            });

            res.status(201).json({
                ok:true,
                message: "Course created successfully"
            })
        } catch (error) {
            console.log(error);
            next();
        }
    }


static async courseGetController(req,res,next){
    try{
// permissionChecker("admin",req.user_permissions, res.error);

        const limit = req.query.limit || 15;
        const offset = req.query.offset - 1 || 0;


        const courses = await req.db.courses.findAll({
            raw:true,
            limit,
            offset: offset * 15,

        });
        res.status(200).json({
            ok:true,
            message: "Courses",
            data:{
                courses
            }
        })
    }
    catch(error){
        next(error);
    }
}


static async courseUpdatePutController(req, res, next) {
    try {
        permissionChecker("admin", req.user_permissions, res.error);

        const course_id = req.params.course_id;

        const course = await req.db.courses.findOne({
            where: {
                course_id,
            },
            raw: true,
        });

        if (!course) throw new res.error(404, "Course not found");

        const photo = req?.files?.photo;

        if (photo && photo?.size > 5 * 1024 * 1024) {
            throw new res.error(
                400,
                "Size of photo must be less than 5 mb"
            );
        }

        const data = await courseCreateValidation(req.body, res.error);

        let photo_name = photo
            ? photo.md5 +
              "." +
              photo.mimetype.split("/")[
                    photo.mimetype.split("/").length - 1
              ]
            : course
            ? course?.course_photo
            : null;

        if (photo) {
            fs.unlink(
                path.join(
                    __dirname,
                    "..",
                    "public",
                    "uploads",
                    course.course_photo
                ),
                () => {}
            );

            photo.mv(
                path.join(__dirname, "..", "public", "uploads", photo_name)
            );
        }

        await req.db.courses.update(
            {
                course_name: data.name,
                course_price: data.price,
                course_description: data.description,
                course_photo: photo_name,
            },
            {
                where: {
                    course_id,
                },
            }
        );

        res.status(200).json({
            ok: true,
            message: "Updated successfully",
        });
    } catch (error) {
        next(error);
    }
}


static async courseGetOneController(req,res,next){
    try {
        const course_id =  req.params.course_id;

        const course = await req.db.courses.findOne({
            where:{
                course_id,
            },
            raw:true,
        });

        if(!course) throw new res.error(404,"Course not found");

        res.status(200).json({
            ok:true,
            message:"Ok",
            data:{
                course
            }
        })
    } catch (error) {
        next(error);
        
    }
}


}