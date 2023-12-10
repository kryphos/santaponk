export type Receiver = 'doag' | 'nemu' | 'sana' | 'smead';

export type ReceiverDetails = {
    name: string;
};

export type Data = {
    [key in Receiver]: ReceiverDetails;
};

export const DATA: Data = {
    'doag': { name: 'Doag' },
    'nemu': { name: 'Nemu' },
    'sana': { name: 'Sana' },
    'smead': { name: 'Smead' },
};
