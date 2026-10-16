# TwilioQuest: Notary Confi Appointment Confirmations

A TwilioQuest extension built around a mock workflow for **Notary Confi**, a notary and Spanish ⇄ English translation office. Players help the office remind clients about appointments and read their replies.

Nothing is really sent: every challenge is checked inside the game.

## The mission

| # | Terminal | What the player does |
|---|---|---|
| 1 | Send the Appointment Reminder | Write a one-segment SMS with an E.164 number, the exact day and time, and reply instructions |
| 2 | Fill the WhatsApp Template | Use `ContentSid` instead of `Body` and write the `ContentVariables` JSON |
| 3 | Read the Client Replies | Map English and Spanish replies (confirmar, Cancel, R) to dashboard statuses and name the email webhook route |
| 4 | Fix the Broken Webhook | Diagnose error 11210 after a tunnel restart and the 10DLC error 30034; this opens the exit |

The scenario follows the real Notary Confi confirmation dashboard: reminders on SMS, WhatsApp and email, with replies posted to `/webhooks/sms` and `/webhooks/email`.

## Play it

1. Install [TwilioQuest](https://www.twilio.com/quest) and turn on extensions in **Settings → Extensions**.
2. Download or clone this repository into your extensions folder.
3. In the game, open the VR training missions aboard the Fog Owl and pick **Notary Confi: Appointment Confirmations**.

## Files

- `levels/notary_confi_mission/level.json`: mission title and order of challenges
- `levels/notary_confi_mission/objectives/`: one folder per challenge (`objective.json`, `description.md`, `validator.js`)
- `levels/notary_confi_mission/objectives/lib/notary.js`: shared appointment data and the reply parser

Based on the [TwilioQuest extension template](https://github.com/TwilioQuest/twilioquest-extension-template). Learn more in the [extension authoring docs](https://twilioquest.github.io/extension-docs/).
