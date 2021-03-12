const test = {
    dir: 'bestiary',
        type: 'json',
    facts: ['abilityScores', 'ac', 'entries', 'alignment',
    'conditionImmunities', 'damageImmunities', 'damageResistances', 'damageVulnerabilities', 'image',
    'savingThrows', 'senses', 'size', 'skills', 'speed', 'powercasting', 'type', 'unit'
],
    slugify: ['size', 'skills', 'unit', 'type'],
    text: ['multiattack', 'name'],
    replaceKeys: [
    { from: 'abilityScores', to: 'abilities'}
],
    factTransform: (item, id) => {
    item.ac = parseInt(item.ac, 10)
    const entries = {
        features: {},
        actions: {},
        legendary: {},
        reactions: {}

    }
    // features
    for (const i of item.features) {
        const featureId = generateId(i.name)
        const {recharge, uses} = processRecharge(i.recharge)
        entries.features[featureId] = {
            mechanics: {
                recharge,
                uses
            }
        }
    }
    delete item.features
    // actions
    for (const i of item.actions) {
        const actionId = generateId(i.name)
        if (i.name === 'Multiattack') {
            continue
        }
        if (i.type === 'weapon') {
            entries.actions[i.id]
            continue
        }
        const {recharge, uses} = processRecharge(i.recharge)
        entries.features[actionId] = {
            mechanics: {
                type: i.type,
                range: i.range || false,
                dc: false,
                save: false,
                damage: false,
                abilityMod: i.attackMod || false,
                recharge,
                uses,

            }
        }
        const action = {
            id: actionId,
            npc: id,
            type: 'action',
            name: i.name,
            hit: i.description || i.hit,
            miss: i.miss,
            mechanics: {
                type: i.type,

                recharge,
                uses,

            }
        }
        bestiaryEntryCache.push(action)
    }
    delete item.actions
    // alignment
    item.alignment = item.alignment.split(' ').map(i => i.substr(0,1).toLowerCase()).join('')
    // barrier
    if (item.barrier) {
        const barrierId = `${id}-feature-barrier`
        const barrier = {
            id: barrierId,
            type: 'feature',
            npc: id,
            name: 'Barrier'
        }
        bestiaryEntryCache.push(barrier)
    }
    // legendary
    for (const i of item.legendaryActions) {
        const featureId = `${id}-legendary-${generateId(i.name)}`
        entries.push(featureId)
        const feature = {
            id: featureId,
            npc: id,
            type: 'legendary',
            name: i.name,
            mechanics: {
                cost: i.cost,
            },
            text: i.description
        }
        bestiaryEntryCache.push(feature)
    }
    delete item.legendaryActions
    // reactions
    for (const i of item.reactions) {
        const featureId = `${id}-reaction-${generateId(i.name)}`
        const {recharge, uses} = processRecharge(i.recharge)
        const feature = {
            id: featureId,
            npc: id,
            type: 'reaction',
            name: i.name,
            mechanics: {
                recharge,
                uses
            },
            text: i.description
        }
        bestiaryEntryCache.push(feature)
    }
    delete item.reactions
    // hp
    item.hp = { dieType: item.hp.die, dieCount: item.hp.numDice}
    return item
},
    textTransform: (item, id) => {
    const entries = {
        features: {},
        actions: {},
        legendary: {},
        reactions: {}

    }
    // features
    for (const i of item.features) {
        const featureId = generateId(i.name)
        entries.features[id] = {
            name: i.name,
            text: i.description
        }
    }
    delete item.features
    // actions
    item.multiattack = false
    for (const i of item.actions) {
        const actionId = `${id}-action-${generateId(i.name)}`
        if (i.name === 'Multiattack') {
            item.multiattack = i.description
            continue
        }
        if (i.type === 'weapon') {
            entries.push(`@:weapon.${i.id}`)
            continue
        }
        const {recharge, uses} = processRecharge(i.recharge)
        const action = {
            id: actionId,
            npc: id,
            type: 'action',
            name: i.name,
            hit: i.description || i.hit,
            miss: i.miss,
            mechanics: {
                type: i.type,
                range: i.range || false,
                recharge,
                uses,
                dc: false,
                save: false,
                damage: false,
                abilityMod: i.attackMod || false
            }
        }
        bestiaryEntryCache.push(action)
    }
    delete item.actions
    // alignment
    item.alignment = item.alignment.split(' ').map(i => i.substr(0,1).toLowerCase()).join('')
    // barrier
    if (item.barrier) {
        const barrierId = `${id}-feature-barrier`
        const barrier = {
            id: barrierId,
            type: 'feature',
            npc: id,
            name: 'Barrier'
        }
        bestiaryEntryCache.push(barrier)
    }
    // legendary
    for (const i of item.legendaryActions) {
        const featureId = `${id}-legendary-${generateId(i.name)}`
        entries.push(featureId)
        const feature = {
            id: featureId,
            npc: id,
            type: 'legendary',
            name: i.name,
            mechanics: {
                cost: i.cost,
            },
            text: i.description
        }
        bestiaryEntryCache.push(feature)
    }
    delete item.legendaryActions
    // reactions
    for (const i of item.reactions) {
        const featureId = `${id}-reaction-${generateId(i.name)}`
        const {recharge, uses} = processRecharge(i.recharge)
        const feature = {
            id: featureId,
            npc: id,
            type: 'reaction',
            name: i.name,
            mechanics: {
                recharge,
                uses
            },
            text: i.description
        }
        bestiaryEntryCache.push(feature)
    }
    delete item.reactions
    // hp
    item.hp = { dieType: item.hp.die, dieCount: item.hp.numDice}
    return item
}
}
