export { EmailMetaData, EmailData } from './interfaces/interfaces';
export { EmailModuleOptions } from './interfaces/email-options.interface';
export { EmailService } from './email.service';
export { EmailModule } from './email.module';

/** Templates */
import { home } from './react-mjml/templates/UserRegistration/home';
import { welcomeUser } from './react-mjml/templates/UserRegistration/welcome-user';

import { marketingOne } from './react-mjml/templates/Marketing/1';
import { marketingTwo } from './react-mjml/templates/Marketing/2';

export const Template = {
  home,
  welcomeUser,
  marketingOne,
  marketingTwo,
};
