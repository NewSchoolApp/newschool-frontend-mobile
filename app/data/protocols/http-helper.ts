import { Buffer } from 'buffer';
import env from '@ns/main/config/env';

export default {
  toFormData: (object: any) => {
    const form = new FormData();
    Object.keys(object).forEach((item) => {
      form.append(item, object[item]);
    });
    return form;
  },

  getPasswordCredentials: () => {
    const credentials = `${env.credentials.name}:${env.credentials.secret}`;
    const base64 = Buffer.from(credentials).toString('base64');
    return `Basic ${base64}`;
  },
};
