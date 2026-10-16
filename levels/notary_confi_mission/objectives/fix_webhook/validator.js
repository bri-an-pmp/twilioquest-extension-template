const { clean, fold } = require('../lib/notary');

module.exports = async function (helper) {
  const { errorCode, fix, smsCode } = helper.validationFields;

  if (clean(errorCode) !== '11210') {
    return helper.fail(`
      Check the Twilio debugger: the error for "HTTP bad host name" happens when
      the webhook URL points at a host that no longer resolves. It starts with 112.
    `);
  }

  const f = fold(fix);
  const mentionsUrl = /webhook|url|sandbox|when a message comes in|callback/.test(f);
  if (!mentionsUrl) {
    return helper.fail(`
      A quick tunnel gets a new hostname every time it restarts. Which Twilio
      setting still points at the old one? Think "When a message comes in".
    `);
  }

  if (clean(smsCode) !== '30034') {
    return helper.fail(`
      SMS from a US 10DLC number is blocked until the Brand and Campaign are
      approved. That delivery error starts with 300.
    `);
  }

  helper.success(`
    Webhook restored. WhatsApp and email replies reach the dashboard again, and
    SMS will deliver once the 10DLC campaign is approved. Notary Confi is back online!
  `);
};
