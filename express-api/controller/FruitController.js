const service = require('../api/api');
const message = require('../shared/message');

class FruitController {

    constructor() {}

    get(req, res) {
        console.log('Welcome Express');
    }

    index(req, res) {
        const status = {
            code: 200,
            description: 'OK',
        }
        res.json({ status, data: service });
    }

    store(req, res) {
        const status = {
            code: 201,
            description: 'Created',
        }
        const { name } = req.body;
        if (!name) {
            res.json('Data yang anda masukan harus menggunakan key name');
        } else if (name !== service[name]) {
            service.push(name);
            res.json({ status, data: service });
        }
    }

    update(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        const status = {
            code: 200,
            description: 'Updated',
        }

        if (!name) {
            res.json('Data yang anda masukan harus menggunakan key name');
        }

        if (service[id] === undefined) {
            res.json('Data tidak ditemukan');
        } else {
            service[id] = name;
            res.json({ status, data: service });
        }
    }

    destroy(req, res) {
        const { id } = req.params;
        const status = {
            code: 200,
            description: 'Updated',
        }

        if (service[id] === undefined) {
            res.json('Data tidak ditemukan');
        } else {
            service.splice(id, 1);
            res.json({ status, data: service });
        }
    }
}

const object = new FruitController();

module.exports = object;