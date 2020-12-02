import { MailData } from '@sendgrid/helpers/classes/mail';

export type EmailMetaData = Pick<MailData, 'to' | 'from' | 'subject'>;
