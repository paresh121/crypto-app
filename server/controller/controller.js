const Crypto = require('../model/model');
exports.getAllData = async(req, res) => {
    try {
        // EXECUTE QUERY
        const data = await Crypto.find();

        // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            data: {
                crypto: data
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
exports.createData = async(req, res) => {
    const data = await Crypto.create(req.body);
    try {
        res.status(201).json({
            status: 'success',
            data: {
                crypto: data
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}
exports.deleteData = async(req, res) => {
    const data = await Crypto.deleteOne({...req.query });
    try {
        res.status(201).json({
            status: 'success',
            data: {
                crypto: data
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}