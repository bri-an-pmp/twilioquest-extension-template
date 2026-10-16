# Fill the WhatsApp Template

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Name the parameter that replaces <code>Body</code>.</li>
  <li>Write the <code>ContentVariables</code> JSON.</li>
  <li>Click <em>HACK</em>.</li>
</ul>
</div>

Many Notary Confi clients prefer **WhatsApp**. When a business starts the conversation, WhatsApp only allows **approved templates**, so you can't send free text in `Body`.

The approved template looks like this:

```text
Your Notary Confi appointment is {{1}} at {{2}}. Please confirm.
[Confirm] [Cancel]
```

## What to send

- The template's ID (it starts with `HX`) goes in a parameter that replaces `Body`. **What is that parameter called?**
- The values for `{{1}}` and `{{2}}` go in **ContentVariables**, a JSON object:

```json
{"1": "Friday October 16", "2": "10:00 AM"}
```

Spanish-speaking clients get the Spanish template: *viernes 16 de octubre a las 10:00 a. m.*
