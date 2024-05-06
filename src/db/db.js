const {USER_NAME, PASSWORD} = process.env;

export const connect = `mongodb+srv://${USER_NAME}:${PASSWORD}@cluster0.smzztiz.mongodb.net/taskDB?retryWrites=true&w=majority`;