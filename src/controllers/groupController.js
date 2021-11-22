const permissionChecker = require("../helpers/permissionChecker");
const {groupCreateValidation} = require("../modules/validation");

module.exports = class groupController{
    static async groupCreatePostController(req,res,next){
        try {
            permissionChecker("admin",req.user_permissions, res.error);

            const data = await Validations.groupCreateValidation(req.body, res.error);


            
            function getRandomName(length) {
                var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var result = '';
                for ( var i = 0; i < length; i++ ) {
                    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
                }
                return result;
            }



                const group =  await req.db.groups.create({

                    group_time: data.time,
                    group_status: data.status,
                    group_name:getRandomName(8),
                    group_lesson_duration: data.lesson_duration,
                    group_course_duration: data.course_duration,
                    group_schedule: data.schedule,
                    course_id: data.course_id,
                    teacher_id: data.teacher_id
                });

                res.status(201).json({
                    ok:true,
                    message: "Group  successfully created",
                    data:{
                        group,
                    }
                });
        } catch (error) {
            next(error);
        }
    }



    static async groupUpdate(req, res, next) {
        try {
            
            permissionChecker("admin",req.user_permissions, res.error);


            const data = await groupCreateValidation(req.body,res.error
                );
                const group_id = req.params.group_id;

                const group = await req.db.groups.findOne({
                    where: {
                        group_id
                    }
                });

                if(!group_id) throw new res.error("Group not found");

                await req.db.groups.update({

                    
                    group_time: data.time,
                    group_status: data.status,
                    group_name:getRandomName(8),
                    group_lesson_duration: data.lesson_duration,
                    group_course_duration: data.course_duration,
                    group_schedule: data.schedule,
                },{
                    where: {
                        group_id,
                    }
                })
console.log(group);

res.status(201).json({
    ok: true,
    message: "Group updated successfully"
})

        } catch (error) {
            next(error);
        }
    }
}