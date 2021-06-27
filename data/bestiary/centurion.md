---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/3/3f/ME3_Cerberus_Centurion.png/revision/latest/scale-to-width-down/417?cb=20120322145316
type: organic
unit: cerberus
alignment: nn
profBonus: 2
ac: 14
hp:
  dieCount: 7
  dieType: 8
abilityScores:
  str: 14
  dex: 14
  con: 16
  int: 11
  wis: 9
  cha: 12
irv:
  res:
    - bludgeoning
    - piercing
    - slashing
savingThrows: false
senses:
  infrared_vision: 30
size: medium
skills: false
speed:
  walk: 30
entries:
  features:
    - list:
        - {id: frag-grenade, mark: iii, uses: 2}
        - {id: smoke, mark: grenade, uses: 2}
      id: grenades
  actions:
    - ref: weapon
      proficient: true
      id: stun-baton
      weaponId: stun-baton
    - ref: weapon
      proficient: true
      id: m-96-mattock
      weaponId: m-96-mattock
cr: '04000'
shields:
  capacity: 10
  regen: 10
---
