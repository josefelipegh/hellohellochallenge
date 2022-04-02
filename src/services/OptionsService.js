import constans from '../helpers/constans.js';
import { get } from './AxiosService.js';

const OptionsServices = {
    get : async () => await get(constans.options.get)
}

export default OptionsServices;