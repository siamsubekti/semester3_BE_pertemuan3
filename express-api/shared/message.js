class Message {

    global(status, data) {
        const { code, description } = status;
        // res.json(
        //     'status' = { code, description },
        //     'data' = data,
        // );

        console.log(typeof status, typeof data);
        const array = [];
        console.log(array.concat(...status));
        return JSON.stringify(status, data);
    }
}

const object = new Message();

module.exports = object;