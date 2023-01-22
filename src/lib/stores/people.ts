import { writable } from 'svelte/store';
import type Person from '../models/person';

export const people = writable(Array<Person>());
