//Timesheet = new Mongo.Collection('mlh-timesheet');
//Company = new Mongo.Collection('mlh-companies');
//Supervisor = new Mongo.Collection('mlh-supervisors');
//PayPeriod = new Mongo.Collection('mlh-payperiod');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Accounts.config({
    forbidClientAccountCreation: 'true'
  });

  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
