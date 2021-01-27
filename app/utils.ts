import {Buffer} from 'buffer';
import {credentials} from '../env';

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
      `${credentials.name}:${credentials.secret}`,
    ).toString('base64');
    console.log(`Bearer ${base64}`);
    return `Basic ${base64}`;
  },
};
