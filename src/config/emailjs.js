const PLACEHOLDER_VALUES = new Set([
  "your_service_id",
  "your_template_id",
  "your_public_key",
]);

const isValidCredential = (value) =>
  Boolean(value) && !PLACEHOLDER_VALUES.has(value);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export const isEmailJsConfigured = () =>
  isValidCredential(emailjsConfig.serviceId) &&
  isValidCredential(emailjsConfig.templateId) &&
  isValidCredential(emailjsConfig.publicKey);

export const getEmailJsConfig = () => {
  if (!isEmailJsConfigured()) {
    throw new Error(
      "EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file."
    );
  }

  return emailjsConfig;
};

export default emailjsConfig;
