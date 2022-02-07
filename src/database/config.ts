import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
    type: "postgres",
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '78xhdtls@',
    database: 'postgres',
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    synchronize: true,
};

export default connectionOptions;