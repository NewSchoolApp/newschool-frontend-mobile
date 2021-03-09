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
    const base64 = Buffer.from(
      `${env.credentials.name}:${env.credentials.secret}`,
    ).toString('base64');
    console.log(`Bearer ${base64}`);
    return `Basic ${base64}`;
  },
};
