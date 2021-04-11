const home = require('./home')

module.exports = {
    generators: {
        title: 'Generators',
        loot_generator: 'Loot Generator',
        npc_generator: 'NPC Generator',
        character_builder: 'Character Builder'
    },
    join_community: 'Join the community',
    license: 'License',
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
        bookmarks: 'Bookmarks',
        changelog: {
            title: 'Changelog'
        },
        home,
    },
    rules: 'Rules',
    search: 'Search',
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
    version: 'VERSION'
}
