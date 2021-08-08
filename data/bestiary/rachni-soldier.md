---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/4/4f/Codex_ME_-_Rachni.png/revision/latest?cb=20140820042133
type: organic
unit: rachni
alignment: u
profBonus: 2
ac: 14
hp:
  dieCount: 8
  dieType: 8
abilityScores:
  str: 14
  dex: 16
  con: 12
  int: 2
  wis: 11
  cha: 4
irv: false
savingThrows:
  - con
  - wis
senses:
  blindsight: 10
size: medium
skills:
  - stealth
  - perception
speed:
  walk: 30
entries:
  actions:
    - attack: ranged
      proficient: true
      range: 50
      dc: false
      mod: dex
      damage:
        - {dieCount: '2', dieType: '6', mod: true, type: acid}
        - {dieCount: '2', dieType: '6', mod: true, type: necrotic}
      target: one
      id: acid-spit
    - attack: melee
      proficient: true
      range: 10
      dc: false
      mod: str
      damage:
        - {dieCount: '1', dieType: '4', mod: true, type: acid}
      target: one
      id: impale
cr: '01000'
shields: false
---
