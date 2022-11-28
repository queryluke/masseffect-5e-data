---
author: Helios
name: Recon Scan
version: 1
level: 0
type: combat
classes:
  - tracker
tags:
  - debuff
mechanics:
  - castingTime:
      length: 1
      unit: attack
    attack: false
    dc: false
    damage: false
    conditions: false
    duration:
      length: 1
      unit: minute
    concentration: false
    range:
      short: 0
      aoe:
        type: sphere
        size: 150
    detonates: false
    primes: false
    resource:
      reset: long
      max:
        type: flat
        value: 3
advancements:
  - id: combat-scan
    name: Combat Scan
    text: >-
      You tweak your radar to be more precise. You may still use Recon Scan in the standard way. Alternatively, you may use
      this advancement to target 1 creature within range. On a success, you learn up to three of the following things of your choice about the creature:
      damage Vulnerabilities it has, if any; damage Resistances, if it has any; its Armor Class, whether it can cast biotic, tech or combat powers, its movement speed, and the types it has.
    mechanics: []
  - id: trackers-senses
    name: Tracker's Senses
    text: >-
      After scanning the area, the pulse doesn't only scan living creatures, but will highlight footprints, no matter
      how faint, and reveal them to the caster. When they do, you have advantage on Wisdom (Survival) checks to
      follow creatures whose footprints are revealed by this, and you are able to identify any known species'
      footprints among them, sentient or not, synthetic or organic.
    mechanics: []
---
Using a specially built radar, you sent a powered sonar pulse out in an area around you. When you do so, you learn the
exact location of all Small and larger creatures and their numbers. Creatures that are revealed by the scan appear as
moving blips on you and your allies' radars, continuing to reveal their location for 1 minute after being scanned. Enemies
scanned this way have disadvantage on Dexterity (Stealth) checks, while you and your allies have advantage on Wisdom (Perception) checks to find them.

You can use this ability 3 times. After that, the radar needs time to recharge, and it cannot be used until the end of a long rest.
