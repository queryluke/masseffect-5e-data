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
  max: # optional, default is flat, 1 per
    type: enum [flat, mod, proficiency, omni-gel, hit-dice]
    value: any [integer for flat, enum for mod, null for proficiency]
    min: integer # optional, if there were ever a use case for min 2
  isolated: boolean # optional, default false # electrogenesis vs seeker swarm. egen needs uses that are combined, ss needs isolated
  shared: string # optional, {model}-{id} id of a trait, uses the resource of another trait

# bonus
bonus:
  type: enum [flat, mod, proficiency, level]
  value: integer, string, or null
  multiplier: 1

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
  - type: prof
    profType: enum [skill, weapon, armor, saving_throw, tool]
    value: enum [types of that prof]
    expertise: boolean
  - type: prof-choice
    profType: enum [skill, weapon, armor, saving_throw, tool]
    options: true
    limit: [types] #optional array
    selections: integer
    expertise: boolean
# AC
  - type: ac
    bonus: integer
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
    ability: enum [abilities]
    note: string
    effect: enum [advantage, disadvantage, bonus]
# Initiative
  - type: initiative
    effect: enum [advantage, disadvantage, @bonus]
# skill checks
  - type: skill-check
    limit: enum [skills]
    effect: enum [advantage, disadvantage, @bonus]
    note: string
# Speeds
  # when rendering, 1) take the farther of identical speeds and/or the one without a note
  - type: speed
    speed: enum [walk, fly, burrow, swim, climb]
    distance: integer
    note: string #note is optional.
# Feats
  - type: feat-choice
    limit: enum [feats]
    options: true
# TODO
  - type: fighting-style
    options: true
    limit: enum [fighting-styles]
    selections: integer
  - type: regain-all-hit-dice
# Unique
  - type: ardat-yakshi-addiction
  - type: ardat-yakshi-stave-off
  - type: ardat-yakshi-mating
  - type: avatars-inspiration #note check for imp ava insp
  - type: twice-as-bright
  - type: biotic-prodigy
  - type: tentacle-blender
  - type: fast-learner
  - type: poly-avatar
  - type: premium-genetics
  - type: regenerative-burst
# senses
  - type: sense
    sense: enum [senses]
    distance: integer
    note: string
# Attacks, Actions, Bonus Actions, and Reactions
  - type: enum [action, bonus-action, reaction, attack, other] # simply indicates where to render on the character sheet
    resource: @resource #optional, default null
    range:
      short: integer (0 = self, touch = 1)
      long: integer (0 = self, touch = 1)
    attack: # optional, renders attack attributes
      proficient: boolean # optional, whether or not to add the proficiency bonus to attack, damage, etc
      mod: enum [str, dex, con, int, wis, cha] # optional
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
      textBonus: string
    notes:
      - string # optional, appends to damage type as a caveat or used to display text for special damage types
    shortDesc: string # optional
    component: string # for pre-compiled components
# Powers
  - type: power
    powerId: string
    resource: @resource
    mod: enum [abilities]
  - type: power-choice
    options: true
    limit:
      type: enum [biotic, tech, combat]
      level: enum [0, 1, 2, 3, 4]
    resource: @resource
    selections: integer # optional, default 1
    mod: enum [abilities]
# augments
  - type: augment
    model: enum [weapon, power]
    modelId: string
    mechanicType: string
    instance: integer
    limits:
      - path: 'path.to.attr'
        values: array of matching values
    augments:
      - path: 'path.to.mechanic.attr'
        value: any
        type: enum [replace, append]

# NOT IMPLEMENTED
- type: nullify-armor-str-restriction # Do not check for STR requirements of armor (to reduce speed by 10)
- type: starting-equipment
  equipmentType: enum [weapon, armor, omni-gel, medi-gel, hw-charges, tool]
  value: string or int

---


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
