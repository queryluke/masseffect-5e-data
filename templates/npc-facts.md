TODO:
- grenades and powercasting are in features
- actions, reactions, features are an array
- legendary.actions is an array

---
image: https://....
type: synorg # or organic or synthetic
unit: reaper # or one of the units
hp:
  dieCount: 5
  dieType: 10
abilityScores:
  str: 10
  dex: 10
  con: 10
  int: 10
  wis: 10
  cha: 10
ac: 10
entries:
  # features
  features:
    - id: uses
      uses: 3
    - id: recharge
      recharge:
        - 5
        - 6
    - id: per-day
      uses: 1
      perDay: true
  # actions
  actions:
    - id: multiattack
    - id: m-8-avenger-0
      ref: weapon
      refId: m-8-avenger
    - id: frag-grenade:
      ref: grenade
      uses: 2
    impale:
      attack: melee
      range: 5
      target: one
      damage:
        - dieCount: 3
          dieType: 8
          type: piercing
          mod: str
    wail:
  # legendary actions
  legendary:
    actions:
      cast-a-power:
        cost: 3
      impale-attack:
        cost: 1
      wail-attack:
        cost: 2
  # reactions
  reactions:
    dodge:
alignment: ln
irv:
  imm:
    conditions:
      - prone
      - lifted
    damage:
      - force
  res:
    - necrotic
  vul:
    - radiant
savingThrows:
  - dex
  - wis
senses:
  darkvision: 20
size: large
skills:
  - acrobatics
speed:
  walk: 20
powercasting:
  mod: cha
  dc: 10
  # an innate example
  innate:
    - id: spell-id-1
      perDay: at-will
    - id: spell-id-2
      perDay: 6
      level: 4 # will need to retrieve the spell, check the level...if it doesn't match, indicate at a higher level
  # a leveled caster
  casterLevel: 12
  casterType: full # or half or third
  list:
    cantrips:
      - spell-id-1
    1st:
      - spell-id-2
    2nd:
      - spell-id-3
---
