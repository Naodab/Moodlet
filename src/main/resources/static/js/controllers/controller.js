export class Controller {
    constructor(element) {
        this.element = element;
        this.connect();

        this.identifier = element.dataset.controller;
        const targets = this.findTargets();

        this.connect();
        Object.assign(this, targets)
        this.setupDisconnectObserver();
    }

    connect() {}

    disconnect() {}

    setupDisconnectObserver() {
        const observer = new MutationObserver(mutationsList => {
            for (const mutation of mutationsList) {
                for (const node of mutation.removedNodes) {
                    if (node.contains(this.element)) {
                        this.disconnect();
                        observer.disconnect();
                        return;
                    }
                }
            }
        })

        observer.observe(document.body, { childList: true, subtree: true });
    }

    findTargets() {
        const targetElements = this.element.querySelectorAll(`[data-${this.identifier}-target]`);
        const targets = {};
        targetElements.forEach(el => {
            const name = el.getAttribute(`data-${this.identifier}-target`);
            targets[name] = el;
        })
        return targets;
    }
}