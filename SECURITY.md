# Security

TwilioQuest extension with a tag-triggered release workflow.

## Reporting a vulnerability

Please report security issues privately through GitHub: **Security → Report a vulnerability** on this repository (private vulnerability reporting is enabled). Don't open a public issue for security problems.

## Automated protections (always on)

| Protection | Status |
|---|---|
| GitHub secret scanning | Enabled |
| Push protection (blocks commits that contain secrets) | Enabled |
| Dependabot vulnerability alerts | Enabled |
| Private vulnerability reporting | Enabled |

## Checks run on 2026-10-16

| Check | Result |
|---|---|
| Secret patterns (AWS, GitHub, OpenAI, Anthropic, Slack, Google, Twilio, Hugging Face keys; private keys; hard-coded tokens) in every file **and every past commit** | ✅ None found |
| Credential files ever committed (`.env`, `*.pem`, `*.key`, `id_rsa`, credentials) | ✅ None found |
| GitHub secret-scanning alerts | ✅ 0 open alerts |
| Commit author emails | ✅ Resolved on 2026-10-16: history rewritten so every commit uses GitHub's private no-reply address |
| `npm audit` (runtime dependencies) | ✅ 0 known vulnerabilities |
| CI workflow review | ✅ Fixed: retired runner (`ubuntu-18.04`) and retired artifact actions replaced; token is read-only by default and write-only for the release job; release zips no longer include `.git`; no `pull_request_target` triggers |
| Scenario data | ✅ Mock data only (example numbers such as `+15125550142`); no real customer data |

## Not covered

These checks are automated and point-in-time. They are not a penetration test or a formal audit.
