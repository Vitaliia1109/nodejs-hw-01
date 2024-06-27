import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    return `Number of contacts: ${contacts.length}`;
  } catch (error) {
    console.error('Error counting contacts:', error);
  }
};

console.log(await countContacts());
