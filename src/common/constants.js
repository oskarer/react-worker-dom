// Other constants
export const MAX_QUEUE_SIZE = 500;
export const TIMEOUT = 5;

export const WORKER_MESSAGES = {
    renderTime: 1000,
    renderQueue: 1001,
    event: 1002,
    location: 1003,
    history: 1004,
}

export const DOM_OPS = {
    createComment: 0,
    innerHTML: 1,
    createDOMElement: 2,
    setAttribute: 3,
    createFragment: 4,
    createTextNode: 5,
    insertBefore: 6,
    appendChild: 7,
    attachRoot: 8,
    setTextContent: 9,
    addEventHandler: 10,
    removeEventHandler: 11,
    setStyle: 12,
    attachHead: 13,
    replaceChild: 14,
    attachBody: 15,
}

export const LOCATION_OPS = {
    assign: 0,
    reload: 1,
    replace: 2,
    toString: 3,
}
