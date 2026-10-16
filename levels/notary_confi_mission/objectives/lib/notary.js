// Shared rules for the Notary Confi appointment-confirmation scenario (mock data only).

const APPOINTMENT = {
  dayEn: 'Friday, October 16',
  dayEs: 'viernes 16 de octubre',
  time: '10:00 AM',
};

const clean = (s = '') => String(s).trim();
const fold = (s = '') =>
  clean(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

// E.164: a plus sign, a country code and up to 15 digits in total.
const isE164 = (s = '') => /^\+[1-9]\d{7,14}$/.test(clean(s));

// The same keyword parser the Notary Confi dashboard uses for SMS, WhatsApp and email replies.
function replyStatus(body = '') {
  const word = fold(body).split(/\s+/)[0] || '';
  if (['confirm', 'c', 'confirmar', 'si', 'yes'].includes(word)) return 'confirmed';
  if (['cancel', 'cancelar', 'x'].includes(word)) return 'canceled';
  if (['r', 'reschedule', 'reprogramar'].includes(word)) return 'reschedule';
  return 'unknown';
}

module.exports = { APPOINTMENT, clean, fold, isE164, replyStatus };
