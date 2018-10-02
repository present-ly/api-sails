module.exports = {


  friendlyName: 'Create User',


  description: 'Sign up for a new user account.',


  extendedDescription:
    `This creates a new user record in the database, signs in the requesting user agent
by modifying its [session](https://sailsjs.com/documentation/concepts/sessions), and
(if emailing with Mailgun is enabled) sends an account verification email.

If a verification email is sent, the new user's account is put in an "unconfirmed" state
until they confirm they are using a legitimate email address (by clicking the link in
the account verification message.)`,


  inputs: {

    userId:  {
      required: true,
      type: 'number',
      example: 12345,
      description: 'The user\'s identifier.',
    }

  },


  exits: {

    invalid: {
      responseType: 'badRequest',
      description: 'The property \'userId\' must be provided.',
      extendedDescription: 'A valid User ID should be provided with the request'
    },

  },


  fn: async function (inputs, exits) {

    var userRecord = await User.fetch({ id: inputs.userId });
    // Since everything went ok, send our 200 response.
    return exits.success(userRecord);

  }

};
