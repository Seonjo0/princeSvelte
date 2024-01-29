import { writable, type Writable } from 'svelte/store';
import { User } from '../class/User';
import { Pokemon } from '../class/Pokemon/Pokemon';

export const myUser: Writable<User | null> = writable<User | null>(null);
export const enemyUser: Writable<User | null> = writable<User | null>(null);

export const myPokemon: Writable<Pokemon | null> = writable<Pokemon | null>(null);
export const enemyPokemon: Writable<Pokemon | null> = writable<Pokemon | null>(null);