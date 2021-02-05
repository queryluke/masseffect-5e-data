---
name: Vanguard
snippet: Vanguards have a high-risk high-reward combat style, using biotics and melee strikes.
primaryAbility: Strength or Wisdom
hitDice: 12
minHitDiceRoll: 7
armorProfs:
  text: 'Light Armor, Medium Armor'
  mandatory:
    - light-armor
    - medium-armor
toolProfs:
  text: None
weaponProfs:
  text: 'Heavy Pistols, Melee and choose either Shotguns or SMGs'
  mandatory:
    - heavy-pistols
    - melee
  options:
    items:
      - 'shotguns'
      - 'smgs'
    count: 1
skillProfs:
  text: 'Choose three from Acrobatics, Athletics, Deception, Insight, Intimidation, Performance, Persuasion, Sleight of Hand, and Survival'
  options:
    items:
      - acrobatics
      - athletics
      - deception
      - insight
      - intimidation
      - performance
      - persuasion
      - sleight-of-hand
      - survival
    count: 3
savingThrows:
  text: 'Strength, Wisdom'
  mandatory:
    - strength
    - wisdom
startingEquipment:
  - text: '(a) M-3 Predator or (b) M-4 Shuriken or (c) M-23 Katana'
    options:
      items:
        - m-3-predator
        - m-4-shuriken
        - m-23-katana
      count: 1
  - text: '(a) Omni-Blade or (b) Omni-Hammer or (c) Monomolecular Blade or (d) Riot Shield'
    options:
      items:
        - omni-blade
        - omni-hammer
        - monomolecular-blade
        - riot-shield
      count: 1
  - text: '(a) Stock Light Armor or (b) Stock Medium Armor'
    options:
      items:
        - 'stock-light-armor'
        - 'stock-medium-armor'
      count: 1
powercasting: half
subclassProgression:
  label: Subclass Feature
  level: [3,6,10,14,18]
abiLevels: [4,8,12,16,19]
progressionColumns:
  - name: Features
    key: features
  - name: Barrier Uses
    key: barrierUses
    values: [2,2,3,3,3,4,4,4,4,4,4,5,5,5,5,5,6,6,6,6]
  - name: Barrier Ticks
    key: barrierTicks
    values: [3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,9,9,10]
  - name: Cantrips
    key: cantrips
    values: [4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6]
  - name: Spells Known
    key: spellsKnown
    values: [0,2,3,3,4,4,5,5,6,6,6,7,8,8,9,9,10,10,11,11]
  - name: 1st
    key: firstLevelPowerSlots
    values: [0,2,3,4,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]
    ps: true
  - name: 2nd
    key: secondLevelPowerSlots
    values: [0,0,0,0,0,0,0,0,2,2,3,3,4,4,5,5,6,6,6,6]
    ps: true
  - name: 3rd
    key: thirdLevelPowerSlots
    values: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2]
    ps: true
---
Vanguards are feared for their high-risk high-reward combat style, closing quickly on enemies and destroying them at close range with weapons and biotic abilities. They are outfitted with L5n implants, enabling them to perform a biotic charge that strikes the opponent with incredible force while closing distance.
