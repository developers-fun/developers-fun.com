function generateToken() {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var token = '';
    for(var i = 0; i < 80; i++) {
        token += chars[Math.floor(Math.random() * chars.length)];
    }
    return token;
}

console.log(generateToken())