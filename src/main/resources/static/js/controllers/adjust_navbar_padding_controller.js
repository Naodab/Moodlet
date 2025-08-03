import { Controller } from './controller.js';

export class AdjustNavbarPaddingController extends Controller {
    connect() {
        const {navbar, page} = this

    }

    disconnect() {
        console.log('adjust navbar padding disconnected')
    }
}