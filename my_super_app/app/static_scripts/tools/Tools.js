
export const generateId = () => {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

export const getRandomColor = () =>  {
    return `rgb(${Math.floor(Math.random() * 128)}, ${Math.floor(Math.random() * 128)}, ${Math.floor(Math.random() * 128)})`;
}