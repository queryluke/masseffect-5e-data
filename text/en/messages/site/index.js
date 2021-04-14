const home = require('./home')

module.exports = {
    buttons: {
        add_bookmark: 'Bookmark',
        remove_bookmark: 'Remove Bookmark',
        change_species: 'Switch Species',
        read_more: 'Read More',
        join_community: 'Join the community',
        search: 'Search',
        view_details: 'View Details Page'
    },
    labels: {
        generators: 'Generators',
        rules: 'Rules',
        tools_guides: 'Tools & Guides',
        version: 'VERSION'
    },
    pages: {
        about: {
            title: 'About',
            all_others: 'And any/all the others in the Discord and Reddit community who have contributed ideas and/or words of motivation!',
            roles: {
                creator: 'Creator, Website Developer',
                editor: 'Editor',
                discord: 'Discord Moderator',
                reddit: 'Subreddit Moderator',
                developer: 'Website Developer',
                content: 'Content Developer',
                translator: 'Translator {n}',
                designer: 'Graphics Designer'
            }
        },
        assets: {
            title: 'Assets'
        },
        bookmarks: {
            title: 'Bookmarks'
        },
        changelog: {
            title: 'Changelog'
        },
        home,
        license: {
            title: 'License'
        },
        loot_generator: {
            title: 'Loot Generator'
        },
        npc_generator: {
            title: 'NPC Generator'
        },
        character_builder: {
            title: 'Character Builder'
        }
    },
    settings: {
        label: 'Settings',
        dark: 'Dark',
        light: 'Light',
        imperial: 'Imperial',
        metric: 'Metric',
        units: 'Units',
        mode: 'Mode',
        language: 'Language'
    },
    stat_headers: {
        name: 'Name',
        prereq: 'Prereq',
        notes: 'Notes',
        type_level: 'Type/Level',
        duration: 'Duration',
        range_area: 'Range (Area)',
        attack: 'Attack',
        damage_effect: 'Damage/Effect',
        damage: 'Damage',
        heat: 'Heat',
        range: 'Range',
        weight: 'Weight',
        cost: 'Cost',
        armor_type: 'Armor_Type',
        type: 'Type',
        placement: 'Placement',
        for: 'For',
        faction: 'Faction',
        cr: 'CR'
    }
}
