export type Receiver = 'doag' | 'nemu' | 'sana' | 'smead';

export type ReceiverDetails = {
    name: string;
    message: string;
    twitch?: string;
    youtube?: string;
    twitter?: string;
    discord?: string;
};

export type Data = {
    [key in Receiver]: ReceiverDetails;
};

export const DATA: Data = {
    'doag': {
        name: 'Doag',
        message: collapse_whitespace(`
            <Doag>
        `),
    },
    'nemu': {
        name: 'Nemu',
        message: collapse_whitespace(`
            <Nemu>
        `),
    },
    'sana': {
        name: 'Sana',
        message: collapse_whitespace(`
            <Sana>
        `),
    },
    'smead': {
        name: 'Smead',
        message: collapse_whitespace(`
            Hai smeady. Nearly three months ago, I found your little sanctuary and needless to say,
            it was one of the best things that happened in a while. I want to thank you with this
            small gift for all the fun I've had and all the awesome people I've met. Your link
            situation is quite messy, so I thought it's time for changies. But this isn't just any
            link tree page, in fact, its... emtpy and boring. But that's where you come in! Tell me
            what you want and I will make it happen. Stackable letter blocks? Sure. Angry birds but 
            you throw pacis at little sanas? Why not! The links are sheep that run around? 3D?
            Particles? EXPLOSIONS?!? Music? Sounds? It's upon you to decide.
        `),
    },
};


// Does as the title indicates. "a     sd    fgh" -> "a sd fgh"
function collapse_whitespace(s: string): string {
    return s.replace(/\s+/g, ' ');
}
