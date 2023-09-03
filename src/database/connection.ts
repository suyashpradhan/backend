/** @format */

const mongoose = require('mongoose');

async function main() {
	try {
		await mongoose.connect(process.env.DATABASE_URI, {
			useNewUrlParser: true,
		});
	} catch (error) {
		await mongoose.close();
	}
}

main().catch(console.dir);
main().then(() => console.log('Pinged your deployment. You successfully connected to MongoDB!'));
