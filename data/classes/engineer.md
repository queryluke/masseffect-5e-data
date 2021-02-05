---
name: Engineer
snippet: Engineers are tech specialists, the only class able to employ combat drones on the battlefield.
primaryAbility: Intelligence
hitDice: 8
minHitDiceRoll: 5
armorProfs:
  text: Light Armor, Medium Armor
  items:
    - light-armor
    - medium-armor
toolProfs:
  text: "Choose 1 from Armorsmith's Workbench, Tailor's Tools, Tinker's Tools, and Weaponsmith's Workbench"
  options:
    items:
      - armorsmiths-workbench
      - tailors-tools
      - tinkers-tools
      - weaponsmiths-workbench
weaponProfs:
  text: 'Heavy Pistols and choose one from Assault Rifles, Melee, or SMGs'
  mandatory:
    - 'heavy-pistols'
  options:
    items:
      - 'assault-rifles'
      - 'melee'
      - 'smgs'
    count: 1
skillProfs:
  text: 'Choose three from Athletics, Electronics, Engineering, History, Investigation, Medicine, Science, Vehicle Handling'
  options:
    items:
      - athletics
      - electronics
      - engineering
      - history
      - investigation
      - medicine
      - science
      - vehicle-handling
    count: 3
savingThrows:
  text: 'Constitution, Intelligence'
  mandatory:
    - constitution
    - intelligence
startingEquipment:
  - text: '(a) M-3 Predator or (b) M-4 Shuriken or (c) M-8 Avenger'
    options:
      items:
        - m-3-predator
        - m-4-shuriken
        - m-8-avenger
      count: 1
  - text: '(a) Omni-Blade or (b) Omni-Taser or (c) Omni-Torch'
    options:
      items:
        - omni-blade
        - omni-taser
        - omni-torch
      count: 1
  - text: '(a) Stock Light Armor or (b) Stock Medium Armor'
    options:
      items:
        - 'stock-light-armor'
        - 'stock-medium-armor'
      count: 1
powercasting: false
subclassProgression:
  label: Subclass Feature
  level: [2,6,10,14,18]
abiLevels: [4,8,12,16,19]
progressionColumns:
  - name: Features
    key: features
  - name: Tech Points
    key: techPoints
    values: [2,4,5,7,11,13,15,17,20,23,26,26,30,30,34,34,39,42,45,50]
  - name: Tech Point Limit
    key: techPointLimit
    values: [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,6,6]
---
The Engineer is a tech specialist, able to quickly and easily manipulate the environment with specific talents, and repair or modify technical equipment. Gameplay focus is on shaping the battlefield during combat, healing the party, and debuffing enemies (disabling weapons and lowering shields).
