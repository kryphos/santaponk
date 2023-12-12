export type Receiver = 'doag' | 'nemu' | 'sana' | 'smead' | 'aki';

export type ReceiverDetails = {
    name: string;
    message: string;
};

export type Data = {
    [key in Receiver]: ReceiverDetails;
};

export const DATA: Data = {
    'aki': { name: 'Aki', message: '<aki message>' },
    'doag': { name: 'Doag', message: '<doag message>' },
    'nemu': { name: 'Nemu', message: '<namu message>' },
    'sana': { name: 'Sana', message: '<sana message>' },
    'smead': { name: 'Smead', message: '<smead message>' },
};
