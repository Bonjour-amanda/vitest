
const bussinessHours = [9, 17];

export const useDate = () => {
    const currentHour = new Date().getHours();
    const [open, close] = bussinessHours;

    if(currentHour > open && currentHour < close) {
        return { message: 'Success' };
    };
    return { message: 'Error' };
};