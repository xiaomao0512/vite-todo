import type { user } from './types';
export function renderUser(users: user[], target: HTMLElement){
    target.innerHTML = '';
    users.forEach(u => {
        const card = document.createElement('div');
        card.className = 'bg-white shadow p-4 rounded border flex flex-col gap-1';
        card.innerHTML = `
        <h2 class="font-bold">${u.name}</h2>
        <p class="text-sm text-gray-500">${u.email}</p>
        <p class="text-sm text-gray-500">${u.company.name}</p>
        `;
        target.appendChild(card);
    });
    }