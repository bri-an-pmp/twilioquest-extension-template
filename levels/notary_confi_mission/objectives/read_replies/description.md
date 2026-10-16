# Read the Client Replies

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Decide the status for each reply.</li>
  <li>Name the email webhook route.</li>
  <li>Click <em>HACK</em>.</li>
</ul>
</div>

When a client answers, Twilio sends an HTTP `POST` to the Notary Confi app, with the client's message in the `Body` field. The dashboard turns each reply into a status chip.

## The parser rules

It reads the **first word**, ignoring capital letters and accents:

| Reply | Status |
|---|---|
| Confirm, C, confirmar, sí | `confirmed` |
| Cancel, cancelar | `canceled` |
| R, reschedule, reprogramar | `reschedule` |

## Where replies arrive

| Channel | Sent by | App route |
|---|---|---|
| SMS and WhatsApp | Twilio | `/webhooks/sms` |
| Delivery status | Twilio | `/webhooks/status` |
| Email | SendGrid Inbound Parse | `/webhooks/email` |
