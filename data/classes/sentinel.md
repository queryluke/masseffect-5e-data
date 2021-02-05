---
name: Sentinel
snippet: Sentinels are unique, bringing both tech and biotic abilities to the battlefield.
primaryAbility: Charisma
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
  text: 'Heavy Pistols and choose two from Assault Rifles, Melee, Shotguns, and SMGs'
  mandatory:
    - heavy-pistols
  options:
    items:
      - assault-rifles
      - melee
      - shotguns
      - smgs
    count: 2
skillProfs:
  text: 'Choose three from Athletics, Engineering, Insight, Intimidation, Medicine, Persuasion, Science, and Survival'
  options:
    items:
      - athletics
      - engineering
      - insight
      - intimidation
      - medicine
      - persuasion
      - science
      - survival
    count: 3
savingThrows:
  text: 'Charisma, Constitution'
  mandatory:
    - charisma
    - constitution
startingEquipment:
  - text: '(a) M-3 Predator or (b) M-4 Shuriken or (c) M-8 Avenger'
    options:
      items:
        - m-3-predator
        - m-4-shuriken
        - m-8-avenger
      count: 1
  - text: '(a) Omni-Blade or (b) Omni-Hammer or (c) Monomolecular Blade or (d) Riot Shield'
    options:
      items:
        - omni-blade
        - omni-hamer
        - monomolecular-blade
        - riot-shield
      count: 1
  - text: '(a) Stock Light Armor or (b) Stock Medium Armor or (c) Stock Heavy Armor'
    mandatory:
      - 'stock-light-armor'
      - 'stock-medium-armor'
      - 'stock-heavy-armor'
powercasting: false
subclassProgression:
  label: Subclass Feature
  level: [3,7,10,14,18]
abiLevels: [4,8,12,16,19]
progressionColumns:
  - name: Features
    key: features
  - name: Barrier Uses
    key: barrier-uses
    values: [2,2,3,3,3,4,4,4,4,4,4,5,5,5,5,5,6,6,6,6]
  - name: Barrier Ticks
    key: barrier-ticks
    values: [3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,8,8]
  - name: Cantrips
    key: cantrips
    values: [2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4]
  - name: Powers Known
    key: powers-known
    values: [2,3,4,5,6,7,8,9,10,10,11,11,12,12,13,13,14,14,15,15]
  - name: Power Slots
    key: power-slots
    values: [1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4]
  - name: Power Level
    key: power-level
    values: [1,1,1,1,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3]
---
The Sentinel is able to combine tech and biotics to manipulate the environment, disable and track enemies, or defend the party. In addition to complete weapons training, Sentinels are equipped with an advanced shield that makes taking cover much less necessary and rushing their enemies much more productive. Because Sentinels have access to both biotic spells and tech powers and use Charisma as their spellcasting modifier.
