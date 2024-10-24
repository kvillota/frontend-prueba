import { environment } from '../../environments/environment'; // Ruta al archivo environment

export const getApiUrl = (): string => {
    return environment.apiUrl;
};
