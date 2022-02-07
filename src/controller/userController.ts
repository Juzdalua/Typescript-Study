import { getRepository } from "typeorm";
import User from "../entity/User";

const userController = {
    findUser : async () => {
        const userRepository = getRepository(User);

        //findOne
        const user = await userRepository
            .createQueryBuilder("user") // user table
            .where("user.id = :id", {id : 1})
            .getOne();

        //findAll
        const users = await userRepository
            .createQueryBuilder("user")
            .getMany();

        // const user = await userRepository.findOne({
        //     where: {
        //         email: req.body.email,
        //         login_with: req.body.login_with,
        //         is_deleted: false,
        //         user_type: req.body.user_type,
        //         is_admin: false,
        //     },
        // });

        return users;
    },

    createUser: async() => {
        const userRepository = getRepository(User);
        const user = userRepository.create({
            name: "Jun",
            age: 33
        });
        let result = await userRepository.save(user);
        result = JSON.parse(JSON.stringify(result)); 
        
        return result;
    },
    
};

export default userController;