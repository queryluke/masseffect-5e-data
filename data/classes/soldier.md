---
name: Soldier
snippet: Soldiers are pure combat specialists effective at taking down enemies with gunfire.
primaryAbility: Strength or Dexterity
hitDice: 10
minHitDiceRoll: 6
armorProfs:
  text: Light Armor, Medium Armor, Heavy Armor
  mandatory:
    - light-armor
    - medium-armor
    - heavy-armor
toolProfs:
  text: 'None'
weaponProfs:
  text: 'Assault Rifles, Heavy Pistols, Melee, Shotguns, SMGs, Sniper Rifles'
  mandatory:
    - assault-rifles
    - heavy-pistols
    - melee
    - shotguns
    - smgs
    - sniper-rifles
skillProfs:
  text: 'Choose three from Acrobatics, Athletics, History, Intimidation, Medicine, Perception, Persuasion, Stealth, Survival, Vehicle Handling'
  options:
    items:
      - acrobatics
      - athletics
      - history
      - intimidation
      - medicine
      - perception
      - persuasion
      - stealth
      - survival
      - vehicle-handling
    count: 3
savingThrows:
  text: 'Strength, Dexterity'
  mandatory:
    - strength
    - dexterity
startingEquipment:
  - text: '(a) M-3 Predator or (b) M-4 Shuriken or (c) M-8 Avenger or (d) M-92 Mantis or (e) M-23 Katana'
    options:
      items:
        - m-3-predator
        - m-4-shuriken
        - m-8-avenger
        - m-92-mantis
        - m-23-katana
      count: 1
  - text: '(a) Omni-Blade or (b) Omni-Hammer'
    options:
      items:
        - omni-blade
        - omni-hamer
      count: 1
  - text: '(a) Stock Light Armor or (b) Stock Medium Armor or (c) Stock Heavy Armor'
    mandatory:
      - 'stock-light-armor'
      - 'stock-medium-armor'
      - 'stock-heavy-armor'
powercasting: false
subclassProgression:
  label: Subclass Feature
  level: [3,7,10,15,18]
abiLevels: [4,6,8,12,14,16,19]
progressionColumns:
  - name: Features
    key: features
  - name: Combat Powers
    key: combat-powers
    values: [1,1,1,2,2,2,2,3,3,3,3,4,4,4,5,5,5,6,6,6]
---
The Soldier is a tough warrior, able to deal with a range of combat situations. The Soldier gets improved health and has the widest selection of weapons. No one is tougher or more effective at taking down enemies with gunfire.
