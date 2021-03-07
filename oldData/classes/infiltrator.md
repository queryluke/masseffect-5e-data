---
name: Infiltrator
snippet: Infiltrators are tech and combat specialists with the unique ability to cloak themselves.
primaryAbility: Dexterity
hitDice: 8
minHitDiceRoll: 5
armorProfs:
  text: Light Armor
  mandatory:
    - light-armor
toolProfs:
  text: "Choose 1 from Hacking Tools or Thieves' Tools"
  options:
    items:
      - hacking-tools
      - thieves-tools
weaponProfs:
  text: 'Heavy Pistols and choose two from Assault Rifles, Melee, SMGs, and Sniper Rifles'
  mandatory:
    - heavy-pistols
  options:
    items:
      - assault-rifles
      - melee
      - smgs
      - sniper-rifles
    count: 2
skillProfs:
  text: 'Choose three from Athletics, Acrobatics, Deception, Electronics, History, Insight, Investigation, Perception, Persuasion, Sleight of Hand, Stealth, and Vehicle Handling'
  options:
    items:
      - athletics
      - acrobatics
      - deception
      - electronics
      - history
      - insight
      - investigation
      - perception
      - persuasion
      - sleight-of-hand
      - stealth
      - vehicle-handling
    count: 3
savingThrows:
  text: 'Dexterity, Intelligence'
  mandatory:
    - dexterity
    - intelligence
startingEquipment:
  - text: '(a) M-3 Predator or (b) M-4 Shuriken or (c) M-92 Mantis'
    options:
      items:
        - m-3-predator
        - m-4-shuriken
        - m-92-mantis
      count: 1
  - text: '(a) Omni-Blade or (b) Omni-Taser or (c) Monomolecular Blade'
    options:
      items:
        - omni-blade
        - omni-taser
        - monomolecular-blade
      count: 1
  - text: 'Stock Light Armor'
    mandatory:
      - 'stock-light-armor'
powercasting: false
subclassProgression:
  label: Subclass Feature
  level: [3,9,13,17]
abiLevels: [4,8,10,12,16,19]
progressionColumns:
  - name: Sneak Attack Damage
    key: sneak-attack-damage
    values: ['1d6','1d6','2d6','2d6','3d6','3d6','4d6','4d6','5d6','5d6','6d6','6d6','7d6','7d6','8d6','8d6','9d6','9d6','10d6','10d6']
  - name: Features
    key: features
  - name: Tactical Cloak Uses
    key: tactical-cloak-uses
    values: [2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5]
  - name: Combat Powers
    key: combat-powers
    values: [0,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4]
  - name: Tech Points
    key: tech-points
    values: [2,2,3,4,6,6,7,7,11,11,13,13,15,15,17,17,20,20,23,25]
  - name: Tech Point Limit
    key: tech-point-limit
    values: [1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3]
---
The Infiltrator is a tech-savvy warrior, able to win battles by quickly disabling and killing enemies. These soldiers focus on unlocking alternate routes, gaining access to good equipment, and obtaining an advantageous position over enemies in combat.
