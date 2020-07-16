import axios from 'axios';
import { Client } from '@/types/types';

const baseUrl = process.env.API_PATH;

export default {
    async getClients() {
        try {
            const data = await axios.get(`${ baseUrl }/clients`);
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    async getClient(id: string) {
        try {
            const data = await axios.get(`${ baseUrl }/client/${ id }`);
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    async addClient(client: Client) {
        try {
            await axios.post(`${ baseUrl }`, client);
        }
        catch (error) {
            console.log(error);
        }
    },
    async updateClient(partial: {}) {
        try {
            await axios.patch(`${ baseUrl }`, partial);
        }
        catch (error) {
            console.log(error);
        }
    },
    async deleteClient(id: string) {
        try {
            await axios.delete(`${ baseUrl }/${ id }`);
        } catch (error) {
            console.log(error);
        }
    }
};