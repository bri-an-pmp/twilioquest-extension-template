module.exports = async function (helper) {
  const { answer } = helper.validationFields;

  if (answer !== "correct answer") {
    return helper.fail("That answer is not correct.");
  }

  helper.success("Challenge complete!");
};
