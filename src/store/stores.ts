import { writable } from 'svelte/store';
import { Patient } from '../classes/Patient';

export const pt = writable(new Patient());
