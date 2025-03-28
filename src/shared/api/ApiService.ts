export abstract class ApiService {
    baseUrl = '';

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    get = () => {}
    create = () => {}
    update = () => {}
    delete = () => {}
}