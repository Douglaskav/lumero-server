function testDatabaseConnection(connection) {
	try {
		connection.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}

module.exports = testDatabaseConnection;
