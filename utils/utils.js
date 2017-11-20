module.exports.add = (a, b) => a + b;

module.exports.add_async = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1500);
};

module.exports.square = (x) => x * x;

module.exports.square_async = (x, callback) => {
    setTimeout(() => {
        callback(x * x);
    }, 1000);
};
module.exports.set_name = (user, full_name) => {
    let names = full_name.split(' ');
    user.first_name = names[0];
    user.last_name = names[1];
    return user;
};



