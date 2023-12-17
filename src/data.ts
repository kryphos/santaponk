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
            Hi Doag! You're such a cuet and smort and talented and funny and cool guy. I had lots of 
            fun hanging out with you and your community, both on stream and on discord. I have a little
            gift for you where you can show off your blender skills and put all your links and other stuff,
            a smoll webpage. While it is empty and boring right now, the background is basically
            made with a 3D game engine, so I can make it whatever you want. Be it music, sounds,
            particles or blender models. Just let me know!
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
            Hellau Sana! It's been a year since I first was mesmerized by your art. You're undebatably
            one of the coolest people I've found on the internet and that's why I have a little something
            for you. To boost your social media presence, I thought you would like a small personalized 
            link tree page. But it's not just any link tree page, in fact, its... empty and boring.
            I couldn't just presume to design this for you. So you can prompt me to add whatever you want.
            Sounds? Music? Particles? The background a 3D flappy bird clone where the brid is a tiny sana?
            Your turn. I'll make it happen. One more thing. I peeked at the requirements for the 
            internship you're applying to while you were streaming it and saw that they want a "link to portfolio". 
            If you don't have one, I surely could make one for you. Just let me know if u want ^^
        `),
    },
    'smead': {
        name: 'Smead',
        message: collapse_whitespace(`
            Hai smeady. Nearly three months ago, I found your little sanctuary and needless to say,
            it was one of the best things that happened in a while. I want to thank you with this
            small gift for all the fun I've had and all the awesome people I've met. Your link
            situation is quite messy, so I thought it's time for changies. But this isn't just any
            link tree page, in fact, its... empty and boring. But that's where you come in! Tell me
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
