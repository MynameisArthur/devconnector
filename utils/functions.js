module.exports = serverError = (err) => {
    console.error(err.message);
    res.status(500).send('Server Error');
};
