import './style.css';
import './todo.ts';
import { fetchuser } from './api';
import { renderUser } from './ui';

const container = document.querySelector<HTMLDivElement>('#user-list')!;
const reloadBtn = document.querySelector<HTMLButtonElement>('#reload')!;

async function load(){
    try{
        const users = await fetchuser();
        renderUser(users, container);
    }catch(error){
        console.error('Error loading users:', error);
    }
}
reloadBtn.addEventListener('click', load);
load();