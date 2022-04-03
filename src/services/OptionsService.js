import constans from '../helpers/constans.js';
import { get } from './AxiosService.js';

export const OptionsServices = {
    get : async () => await get(constans.options.get)
}