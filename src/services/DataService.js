import constans from '../helpers/constans.js';
import { post } from './AxiosService.js';

export const DataService = {
    post : async (email, opt) => await post(`${constans.data.post}email=${email}&option=${opt}`)
}