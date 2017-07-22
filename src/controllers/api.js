'use strict';

const createCat = (body) => {
    const name = body.name;
    const color = body.color;

    // model.create(name, color);
    console.log(name);
    console.log(color);

    return Promise.resolve({
        status: 'ok'
    });

};

module.exports = {
    createCat
}