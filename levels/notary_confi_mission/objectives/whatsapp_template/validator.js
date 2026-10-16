const { clean, fold } = require('../lib/notary');

module.exports = async function (helper) {
  const { contentSid, variables } = helper.validationFields;

  if (fold(contentSid).replace(/\s/g, '') !== 'contentsid') {
    return helper.fail(`
      WhatsApp business-initiated messages use an approved template. Instead of
      Body, you pass the template's ID in a parameter whose name starts with "Content".
    `);
  }

  let vars;
  try {
    vars = JSON.parse(clean(variables));
  } catch (e) {
    return helper.fail(`
      ContentVariables must be valid JSON, like {"1":"Friday October 16","2":"10:00 AM"}.
      Check the quotes and braces.
    `);
  }
  if (!vars || typeof vars !== 'object' || Array.isArray(vars)) {
    return helper.fail('ContentVariables is a JSON object whose keys are "1", "2" and so on.');
  }
  const day = fold(vars['1'] || '');
  const time = fold(vars['2'] || '');
  if (!day.includes('october 16')) {
    return helper.fail('Variable "1" fills {{1}} in the template: the appointment day, "Friday October 16".');
  }
  if (!time.replace(/\s/g, '').includes('10:00am')) {
    return helper.fail('Variable "2" fills {{2}} in the template: the time, "10:00 AM".');
  }

  helper.success(`
    Template filled: "Your Notary Confi appointment is ${vars['1']} at ${vars['2']}."
    The client sees Confirm and Cancel buttons under the message.
  `);
};
