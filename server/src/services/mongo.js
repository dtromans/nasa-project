const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://nasa-api:w5e6UsdNdePVstrM@nasacluster.uw0g7vc.mongodb.net/nasa?retryWrites=true&w=majority';

mongoose.connection.on('open', () => {
	console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
	console.error('uh oh')
	console.error(err);
});

async function mongoConnect() {
	await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
	await mongoose.disconnect();
}

module.exports = {
	mongoConnect,
	mongoDisconnect,
};
