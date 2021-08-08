---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/1/1c/ME3_Cerberus_Assault_Trooper.png/revision/latest/scale-to-width-down/514?cb=20120322151133
type: organic
unit: cerberus
alignment: nn
profBonus: 2
ac: 14
hp:
  dieCount: 6
  dieType: 8
abilityScores:
  str: 12
  dex: 13
  con: 14
  int: 10
  wis: 10
  cha: 10
irv: false
savingThrows:
  - dex
senses: false
size: medium
skills: false
speed:
  walk: 30
entries:
  features:
    - list:
        - {id: frag-grenade, mark: iii, uses: 2}
      id: grenades
  actions:
    - ref: weapon
      proficient: true
      id: stun-baton
      weaponId: stun-baton
    - ref: weapon
      proficient: true
      id: m-25-hornet
      weaponId: m-25-hornet
cr: '01000'
shields: false
---
