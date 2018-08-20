module.exports = (object, array_of_attributes) => {
    const new_object = {};
    for (const [key, value] of Object.entries(object)) {
        if (array_of_attributes.includes(key)) {
            new_object[key] = value;
        }
    }
    return new_object;
};
