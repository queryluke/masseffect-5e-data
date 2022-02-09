---
# possible paths
# species
# species/subspecies
# class
# class/[n-level]
# class/[n-level]/feat
# class/subclass
# class/subclass/[n-level]

# models

# resource (e.g., x per rest)
resource:
  displayType: enum [heat, counter, checkbox] # default checkbox
  reset: enum [short, long, manual, off] # 'manual' will display a "reload" button, default long, "off" will have no toggles
  resetTo: enum [min, max] #optional, default min
  max: @bonus
  increment: integer # default 1, for when a single click uses 2
  id: string # a uuid to track the resources. Allows for sharing resources
  label: string #default is '/ [short or long] rest'

# bonus
bonus:
  type: enum [flat, mod, proficiency, level, hp, progressive, progressionColumn]
  value: integer, string, or null
  multiplier: 1,
  min: integer # default 0

dieBonus:
  dieType: enum die types
  dieCount: integer

effect:
  type: enum [advantage, disadvantage, bonus, limited, die-bonus] #other is generic effect, usually just a note, parsed individually by the component that consumes it
  bonus: @bonus
  dieType: enum die types
  dieCount: integer
  resource: @resource # for limited, can disable when uses are out
  note: string

# used for looking up player selections
# in theory, all selections are:
{
  path: '...'
  value: [{type: 'type', value: 'value'}]
}
# so we can search for
#   path.includes(model/id)
#     .reduce to all values
#     .filter(limit.includes(type))
#     .map(value.value) for the value
valueLookup:
  model: string
  id: string
  limit: enum of types


# any mechanic that needs a selection should have
#   options: true

mechanics:
# Ability Score Increases
  # +X to a score
  - type: asi
    ability: int
    amount: 1
  - type: asi-choice
    options: true
    limit: enum [abilities]
    selections: integer # default 1
    total: integer # default 1
    max: integer #default 1, max 2
# Proficiencies
  - type: enum [skill, weapon, armor, saving-throw, tool, expertise]
    value: enum [types of that prof]
    expertise: boolean
  - type: # [prof]-choice
    options: true
    limit: [types] #optional array
    selections: integer
    expertise: boolean
# AC
  - type: ac
    bonus: @bonus
  - type: natural-armor
    base: integer
    mod: enum [abilities]
# HP
  - type: hp
    bonus: @bonus
# IRVs
  #resistances
  - type: resistance
    value: enum or false #false used when the type is "special" for oddballs like "falling damage"
    note: string #optional, appends to damage type as a caveat or used to display text for special damage types
  - type: condition-immunity
    value: enum or false #false used when the type is "special" for oddballs like "falling damage"
    note: string #optional, appends to damage type as a caveat or used to display text for special damage types
# Saving Throws, skill checks
  - type: saving-throw
    against: array
    value: enum [abilities]
    effect: @effect
# Initiative
  - type: initiative
    effect: @effect
# skill checks
  - type: skill-check
    value: enum [skills]
    valueLookup: @valueLookup
    effect: @effect
# Speeds
  # when rendering, 1) take the farther of identical speeds and/or the one without a note
  - type: speed
    speed: enum [walk, fly, burrow, swim, climb]
    distance: integer
    note: string #note is optional.
# Senses
  - type: sense
    sense: enum [senses]
    distance: integer
    note: string
# Unique
  - type: regain-all-hit-dice
# Attacks, Actions, Bonus Actions, and Reactions
  - type: enum [action, bonus-action, reaction, attack, other] # simply indicates where to render on the character sheet
    resource: @resource #optional, default null
    range:
      short: integer (0 = self, touch = 1)
      long: integer (0 = self, touch = 1)
      note: string
      aoe:
        type: enum [aoe types]
        size: integer
    attack: # optional, renders attack attributes
      proficient: boolean # optional, whether or not to add the proficiency bonus to attack, damage, etc
      mod: enum [str, dex, con, int, wis, cha] # optional
      note: string
    damage:
      - dieCount: integer (0 = special)
        dieType: integer
        mod: enum [abilities]
        type: enum [damage types] or hp, sp, tempHp
        bonus: @bonus
    dc:
      base: integer # default = true
      proficient: boolean # default = true
      mod: enum [str, dex, con, int, wis, cha] # whether to add the mod to the dc
      save: enum [str, dex, con, int, wis, cha]
      note: string
    notes:
      - string # optional, appends to damage type as a caveat or used to display text for special damage types
    shortDesc: string # optional, gets it's own object
    baseGroup: boolean (adds the string to the base group), i.e. actions > use an object, dash, etc
    moreInfo: # can also be false to override
      component: string
      bind: object
      model: string
      id: string
  - type: model-choice
    options: true
    label: string
    model: string
    limits:
      - attr: string
        value: []
    append: any
  - type: augment
    value: # or value lookup
      model: enum
      id: string
      limit: [enum types]
      instances: 0
    merge:
      @type
  - type: additional-damage
    model: [weapon, power]
    limits:
      - attr: string
        value: [potential matches]
    damage: @damage


# TODO
- type: advancements-choice
- type: skill-or-expertise
- type: featherlight
- type: add-prof-to-dt # add prof bonus to dw rolls, hair trigger
- type: dual-wielder # +1 ac if 2 melee equipped, twf with non-light
- type: innate-strike-damage # see long fist, melee gunner
  value: enum [unarmed-strike,gun-strike]
  damage: @damage
- type: melee-gunner #twf w/ two-handed weapon if other is gun strike and other is omni-tool?


# Unique
  - type: avatars-inspiration #note check for imp ava insp
  - type: tentacle-blender
  - type: poly-avatar
  - type: premium-genetics
  - type: regenerative-burst
  - type: repair-matrix
  - type: imprinted-enemies # can be model choice
  - type: speed-note
  - type: advanced-medigel-application #d6 for medigel
# augments...might want to split this into two different ones..augment-model and augment(general)

# NOT IMPLEMENTED
- type: nullify-armor-str-restriction # Do not check for STR requirements of armor (to reduce speed by 10)
- type: starting-equipment
  equipmentType: enum [weapon, armor, omni-gel, medi-gel, hw-charges, tool]
  value: string or int
- type: toggle # potential toggle that overrides/appends other states, i.e. hunter mode + 2 speed, disadvantage on addition saves
- type: additional-note # see elemental adept, long fist, add note to indicate bypass resistance
- # fake it till you make it, hit dice tracker
- type: fast-learner # fast learner, an all profs selection
- type: innate-strike-damage # see long fist, melee gunner
  innate: enum [unarmed-strike,gun-strike]
- type: medium-armor-master # seems worthless cause in me5e medium armor
---

- [ ] A link to omni-gel for hermetic and pressurized suit...could be a resource with type omni-gel,
  or and id of omni-gel...but the quantity of omni-gel is stored on the equipment model

Display (Attacks, Actions, Bonus Actions, Reactions)
______________________________________________________________________________________
| | $name |           [ $range ]  [ $attackHit / $dc ]         [ $damage ]  [$notes] |
| | $properties OR $range-on-mobile |
| | $shortDesc or $desc |
| | $properties-on-mobile |                                            [ $resource ] |
______________________________________________________________________________________

Display Resource

Heat
| [$reload-if-manual] [progress-bar-md-and-up] [$fire] |
|                     [$current] / [$max]              |

Counter
| [$minus] [$current] / [$max] [$plus] [$reset-if-manual]|

Checkbox
| [$checkboxes] [if reset === short || long ( / [$reset]) else [$reset-button] ]|
