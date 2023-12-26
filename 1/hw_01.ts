type TUnit = {
    health : number,
    armor: number
}

type TWeapon = {
    damage: number,
    range: number
}

// мечник
type Tblademan = TUnit
    & {
    weapon : TWeapon & {
        wear: number,
        arrows?: never,
    }
}
    & {
    shield: {
        size: number,
        resistance: number
    } | null
};

// лучник
type Tbowman = TUnit
    & {
        weapon : TWeapon & {
            wear?: never,
            arrows: number
        }
    }
    & {
        shield: null
    };

type TUnitRaw = Tblademan | Tbowman;

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
            shield:  null
        }
    ]
}