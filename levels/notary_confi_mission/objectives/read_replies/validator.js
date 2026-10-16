const { fold, replyStatus } = require('../lib/notary');

const CASES = [
  ['reply1', 'confirmar'],
  ['reply2', 'Cancel'],
  ['reply3', 'R'],
];

module.exports = async function (helper) {
  const fields = helper.validationFields;

  for (const [field, body] of CASES) {
    const expected = replyStatus(body);
    const given = fold(fields[field]).replace(/^cancelled$/, 'canceled');
    if (given !== expected) {
      return helper.fail(`
        Look again at the reply "${body}". The parser reads the first word,
        ignores capital letters and accents, and accepts English and Spanish.
      `);
    }
  }

  const route = fold(fields.route).replace(/\/+$/, '');
  if (route !== '/webhooks/email') {
    return helper.fail(`
      SMS and WhatsApp replies post to /webhooks/sms. Email replies come from
      SendGrid Inbound Parse to their own route under /webhooks/.
    `);
  }

  helper.success(`
    All three replies are on the dashboard: confirmed, canceled and reschedule.
  `);
};
