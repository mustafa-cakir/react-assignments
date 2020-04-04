export const throttle = (func, wait, options = {}) => {
    let context;
    let args;
    let result;
    let timeout = null;
    let previous = 0;
    const later = () => {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        // eslint-disable-next-line no-multi-assign
        if (!timeout) context = args = null;
    };
    return (...argument) => {
        const now = Date.now();
        if (!previous && options.leading === false) previous = now;
        const remaining = wait - (now - previous);
        context = this;
        args = argument;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            // eslint-disable-next-line no-multi-assign
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
};

export const debounce = (callback, wait) => {
    let timeout = null;
    return (...args) => {
        const next = () => callback(...args);
        clearTimeout(timeout);
        timeout = setTimeout(next, wait);
    };
};

export const getCurrentDeviceHandler = () => {
    const winWidth = window.innerWidth;
    if (winWidth === 0) return 'web';
    if (winWidth < 768) return 'mobile';
    if (winWidth > 767 && winWidth < 993) return 'tablet';
    if (winWidth > 992) return 'web';
    return null;
};
