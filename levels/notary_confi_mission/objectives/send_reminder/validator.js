const { APPOINTMENT, clean, fold, isE164 } = require('../lib/notary');

module.exports = async function (helper) {
  const { to, body } = helper.validationFields;
  const text = clean(body);
  const f = fold(text);

  if (!isE164(to)) {
    return helper.fail(`
      Twilio needs the "To" number in E.164 format: a plus sign, the country
      code and the number, with no spaces or dashes. Example: +15125550142.
    `);
  }
  if (!text) {
    return helper.fail('Write the reminder message in the second field.');
  }
  if (text.length > 160) {
    return helper.fail(`
      Your message is ${text.length} characters. Keep it to 160 or fewer so it
      sends as a single SMS segment.
    `);
  }
  if (!f.includes('notary confi')) {
    return helper.fail('Start by saying who it is from: include "Notary Confi" so the client recognizes the sender.');
  }
  if (!f.includes('october 16') || !f.includes('10:00')) {
    return helper.fail(`
      Include the appointment day and time exactly: ${APPOINTMENT.dayEn} at ${APPOINTMENT.time}.
    `);
  }
  if (!/\bc\b|confirm/.test(f) || !/cancel/.test(f)) {
    return helper.fail(`
      Tell the client how to answer: for example "Reply C to confirm or CANCEL to cancel."
      The dashboard can only read replies it asked for.
    `);
  }

  helper.success(`
    Reminder queued for ${clean(to)}. In the real workflow, POST /Messages with To,
    From and Body returns 201 (queued).
  `);
};
