type TShield = {
    size: number,
    resistance: number
}

type TWeapon = {
    damage: number,
    range: number
}

type TUnit = {
    health : number,
    armor: number
}


type TSword = {
    weapon : TWeapon & {
        wear: number,
        arrows?: never,
    }
}

type TBow = {
    weapon : TWeapon & {
        wear?: never,
        arrows: number
    }
}

// мечник
type TSwordman = TUnit & TSword & {
        shield: TShield | null
};

// лучник
type TBowman = TUnit & TBow & {
        shield: null
};

type TUnitRaw = TSwordman | TBowman;

type TGroup = {
    units: TUnitRaw[]
}

let result: TGroup = {
    units: [
        // мечник (может быть с щитом и без щита)
        {
            health: 100,
            armor: 5,
            weapon: {
                damage: 5,
                range: 1,
                wear: 0
            },
            shield: {
                size: 10,
                resistance: 5
            }
        },
        // мечник без щита
        {
            health: 100,
            armor: 5,
            weapon: {
                damage: 10,
                range: 2,
                wear: 0,
            },
            shield: null
        },

        // лучник (обязательно без щита)
        {
            health: 100,
            armor: 5,
            weapon: {
                damage: 2,
                range: 10,
                arrows: 40,
            },
            shield: null
        }
    ]
}