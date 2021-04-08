modules.export = {
    gear: {
        label: 'gear',
        types: {
            ammo: 'Ammo',
            device: 'Device',
            grenade: 'Grenade',
            heavy_weapon: 'Heavy Weapon',
            medi_gel: 'Medi-gel',
            omni_gel: 'Omni-gel',
            shield: 'Shield',
            tool: 'Tool'
        },
        marks: {
            'i': 'I',
            'ii': 'II',
            'iii': 'III',
            'iv': 'IV',
            'v': 'V',
            'vi': 'VI',
            'vii': 'VII',
            'viii': 'VIII',
            'ix': 'IX',
            'x': 'X'
        },
        grenade_name_w_mark: (ctx) => `${ctx.named('name')} ${ctx.named('mark')}`
    }
}
