---
name: Adept
snippet: The Adept is the ultimate biotic, able to affect the physical world with the power of the mind.
primaryAbility: Wisdom
hitDice: 6
minHitDiceRoll: 4
armorProfs:
  - light
weaponProfs:
  mandatory:
    - Heavy Pistols
  options:
    - Melee
    - SMGs
  count: 1
skillProfs:
  options:
    - acrobatics
    - deception
    - history
    - insight
    - intimidation
    - performance
    - sleight-of-hand
    - survival
  count: 3
savingThrows:
  - charisma
  - wisdom
startingEquipment:
  - type: option
    options:
      - M-3 Predator
      - M-4 Shuriken
    count: 1
  - type: option
    options:
      - Omni-Blade
      - Monomolecular Blade
    count: 1
  - type: mandatory
    items:
      - Stock Light Armor
powercasting: full
subclassProgression:
  label: Subclass Feature
  level: [2,6,10,14]
abiLevels: [4,8,12,16,19]
progressionColumns:
  - name: Features
    key: features
  - name: Barrier Uses
    key: barrierUses
    values: [2,2,3,3,3,4,4,4,4,4,4,5,5,5,5,5,6,6,6,6]
  - name: Barrier Ticks
    key: barrierTicks
    values: [2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5]
  - name: Cantrips
    key: cantrips
    values: [4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8]
  - name: Spells Known
    key: spellsKnown
    values: [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
  - name: 1st
    key: firstLevelPowerSlots
    values: [2,4,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]
    ps: true
  - name: 2nd
    key: secondLevelPowerSlots
    values: [0,0,0,0,2,3,4,5,6,6,6,6,6,6,6,6,6,6,6,6,6]
    ps: true
  - name: 3rd
    key: thirdLevelPowerSlots
    values: [0,0,0,0,0,0,0,0,1,2,3,3,3,3,3,3,3,4,5,5]
    ps: true
  - name: 4th
    key: fourthLevelPowerSlots
    values: [0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,3]
    ps: true
  - name: 5th
    key: fifthLevelPowerSlots
    values: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1]
    ps: true
---
Adepts are biotic specialists, capable of disabling and killing enemies with raw biotic power. While they lack
advanced combat training, they are the best at defeating enemies without firing a shot. They are outfitted with L5x
implants that can spawn a micro-singularity, damaging enemies and pulling them into the air.
