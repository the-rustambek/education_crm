module.exports = async function init(db){
    const count = await db.users.count();

    if(count === 0){
        const  admin = await db.users.create({
            user_username: "admin",
            user_password:"admin",
            user_gender:"male",
            user_name: "admin",
        });

        console.log(admin);
    }
}

