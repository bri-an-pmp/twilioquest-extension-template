# Fix the Broken Webhook

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Identify the webhook error code.</li>
  <li>Name the setting to update.</li>
  <li>Identify the SMS delivery error.</li>
  <li>Click <em>HACK</em> to open the exit.</li>
</ul>
</div>

Clients are replying **Confirm** and **Cancel**, but nothing shows up on the Notary Confi dashboard.

## What the logs show

- In the Twilio debugger, every inbound WhatsApp reply has the same error: **HTTP bad host name**.
- The app runs locally behind a **quick tunnel**, and the tunnel was restarted this morning. Each restart gives it a new hostname.
- Separately, reminder **SMS** messages return `201 queued`, then fail. The number is a 10DLC long code whose sole-proprietor campaign is still **in carrier review**.

## Your diagnosis

1. Which **Twilio error code** means the webhook host couldn't be reached?
2. After starting a new tunnel, **what must you update** so Twilio posts to the new address?
3. Which **error code** do the blocked SMS messages show?

The real fix for SMS is an approved Brand and Campaign, with the number in the Messaging Service sender pool.
