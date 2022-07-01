import {$authHost} from './index';


export const fetchContacts = async () => {
    const {data} = await $authHost.get('api/v1/twilio/contact/list/');
    console.log(data.results);
    return data;
}

