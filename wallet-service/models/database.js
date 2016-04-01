var pg = require('pg');
// var connectionString = process.env.DATABASE_URL || 'postgres://witcast:witcast2016@witcast-db.cuctrw1thiwz.ap-southeast-1.rds.amazonaws.com/DGOWallet';
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/Phoochaliaw';

var client = new pg.Client(connectionString);
client.connect();

// var queryUsers = client.query('CREATE TABLE users(id SERIAL PRIMARY KEY, firstName VARCHAR(40) not null, lastName VARCHAR(40), email VARCHAR(40) not null, phoneNo VARCHAR(15) not null, pin VARCHAR(40) not null, profileImg TEXT, citizenID VARCHAR(20), lastLogIn TIMESTAMP not null)');
// queryUsers.on('end', function() { client.end(); });

// var queryUserBalnace = client.query('CREATE TABLE user_balnace(id SERIAL PRIMARY KEY, userID INTEGER not null, balance REAL not null)');
// queryUserBalnace.on('end', function() { client.end(); });

// var queryTransaction = client.query('CREATE TABLE transactions(id SERIAL PRIMARY KEY, transID VARCHAR(20) not null, transFrom INTEGER not null, transTo INTEGER not null, transType INTEGER not null, transNet REAL not null, transFee REAL not null, transTotal REAL not null, note VARCHAR(40), transStatus VARCHAR(40) not null, transDate TIMESTAMP not null)');
// queryTransaction.on('end', function() { client.end(); });

// var queryTransactionType = client.query('CREATE TABLE transactions_type(id SERIAL PRIMARY KEY, transTypeName VARCHAR(20) not null)');
// queryTransactionType.on('end', function() { client.end(); });

// var queryUserCreditcard = client.query('CREATE TABLE user_creditcard(id SERIAL PRIMARY KEY, userID INTEGER not null, cardType VARCHAR(10) not null, cardName VARCHAR(20) not null, maskingPan VARCHAR(16) not null, cardToken VARCHAR(25) not null, bankIssuerID INTEGER not null)');
// queryUserCreditcard.on('end', function() { client.end(); });

// var queryUserBankAcc = client.query('CREATE TABLE user_bank_account(id SERIAL PRIMARY KEY, userID INTEGER not null, bankIssuerID INTEGER not null, maskingAccNo VARCHAR(10) not null)');
// queryUserBankAcc.on('end', function() { client.end(); });

// var queryBankData = client.query('CREATE TABLE bank_data(id SERIAL PRIMARY KEY, bankName VARCHAR(50) not null, bankShotName VARCHAR(10) not null, bankColor VARCHAR(7) not null, bankLogo VARCHAR(50) not null)');
// queryBankData.on('end', function() { client.end(); });

// var queryTopupCategory = client.query('CREATE TABLE topup_category(id SERIAL PRIMARY KEY, cateName VARCHAR(50) not null, cateLogo VARCHAR(50))');
// queryTopupCategory.on('end', function() { client.end(); });

// var queryTopupProvider = client.query('CREATE TABLE topup_provider(id SERIAL PRIMARY KEY, providerName VARCHAR(50) not null, topupCateID INTEGER not null, providerLogo VARCHAR(50))');
// queryTopupProvider.on('end', function() { client.end(); });

// var queryTopupValue = client.query('CREATE TABLE topup_value(id SERIAL PRIMARY KEY, value INTEGER not null, topupProviderID INTEGER not null)');
// queryTopupValue.on('end', function() { client.end(); });

// var queryBillCategory = client.query('CREATE TABLE bill_category(id SERIAL PRIMARY KEY, cateName VARCHAR(50) not null, cateLogo VARCHAR(50))');
// queryBillCategory.on('end', function() { client.end(); });

// var queryBiller = client.query('CREATE TABLE biller(id SERIAL PRIMARY KEY, billerName VARCHAR(50) not null, billCateID INTEGER not null, billerLogo VARCHAR(50))');
// queryBiller.on('end', function() { client.end(); });

// var queryMember = client.query('CREATE TABLE members(id SERIAL PRIMARY KEY, userID INTEGER not null, memberTypeID INTEGER not null, cardName VARCHAR(50) not null, barcodeValue VARCHAR(50), memberNo VARCHAR(50) not null, cardImgFront TEXT, cardImgBack TEXT)');
// queryMember.on('end', function() { client.end(); });

// var queryMemberCategory = client.query('CREATE TABLE members_category(id SERIAL PRIMARY KEY, cateName VARCHAR(50) not null, cateLogo VARCHAR(50))');
// queryMemberCategory.on('end', function() { client.end(); });

var queryMemberData = client.query('CREATE TABLE members_data(id SERIAL PRIMARY KEY, memberName VARCHAR(50) not null, memberLogo VARCHAR(50))');
queryMemberData.on('end', function() { client.end(); });
