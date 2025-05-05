declare namespace NodeJS {
  interface ProcessEnv {
    SMTP_HOST: string;
    SMTP_PORT: string;
    SMTP_USER: string;
    SMTP_PASS: string;
    CONTACT_EMAIL: string;
  }
}