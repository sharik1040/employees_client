import { EMPLOYEES_REQUSTED } from '../constants/action-types';

export function getEmployees(){
    return { type: EMPLOYEES_REQUSTED }
}