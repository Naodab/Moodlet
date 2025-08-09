import { AdjustNavbarPaddingController } from "./controllers/adjust_navbar_padding_controller.js";

$(function() {
    const controllers = {
        "adjust-navbar-padding": AdjustNavbarPaddingController,
    }

    $('[data-controller]').each(function () {
        const name = $(this).data('controller');
        const ControllerClass = controllers[name];
        if (ControllerClass) {
            new ControllerClass(this);
        }
    });
})