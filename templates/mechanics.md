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
  displayType: enum [heat, counter, checkbox, hit-dice] # default checkbox
  reset: enum [short, long, manual, off] # 'manual' will display a "reload" button, default long, "off" will have no toggles
  resetTo: enum [min, max] #optional, default min
  max: @bonus
  increment: integer # default 1, for when a single click uses 2
  id: string # a uuid to track the resources. Allows for sharing resources
  label: string #default is '/ [short or long] rest'

companion:
  name: string
  type: string
  profBonus: 2
  abilityScores:
    str: integer
    dex: integer
    con: integer
    wis: integer
    int: integer
  hp:
    dieCount: integer
    dieType: integer
    bonus: @bonus
  savingThrows:
    str:
      proficient: boolean
      bonus: @bonus
  irv:
    - type: enum [resistance, immunity, condition-immunity, vulnerability]
      value: [enum, string]
  senses:
    - sense: [enum senses]
      distance: integer
      note: string
  speeds:
    - speed: [enum speeds]
      distance: integer
      note: string


# bonus
bonus:
  type: enum [flat, mod, proficiency, level, hp, progressive, progressionColumn, modComparison, dice]
  value: any
    # flat = integer
    # mod = string (abilities)
    # proficiency = null
    # level = null (for all levels), or string (klass-id) for klass levels
    # hp = null
    # progressive = object { [level]: value }
    # modComparison = array of abilities
    # dice = object { dieCount: @bonus, dieType: @bonus }
    # TODO
    # powercastingMod = string, klass-id
    # resource = string, resource-id
    # multi = array of bonus
  multiplier: float
  min: integer # default 0
  round: up or down, default down

dieBonus:
  dieType: enum die types
  dieCount: integer

effect:
  type: enum [advantage, disadvantage, bonus, limited, die-bonus] #other is generic effect, usually just a note, parsed individually by the component that consumes it
  bonus: @bonus
  resource: @resource # for limited, can disable when uses are out
  note: string

attackLimit:
  type: melee or ranged
  model: weapon or power
  type: weapon types or power types

damage:
  dieCount: integer (0 = special)
  dieType: integer
  mod: enum [str, dex, con, int, wis, cha, max] # optional
  modComparison: enum [abilities] #required for max mod
  type: enum [damage types] or hp, sp, tempHp
  bonus: @bonus

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

# any mechanic can have progressionColumn as an attribute
progressionColumn:
  label: string
  values: array
  order: int
# column orders are
# 0 = level, then prof bonus
# 1-4 = custom before features
# 5 = features
# 6-9 = custom before barrier
# 10 = barrier
# 11-14 = custom before cantrips
# 15 = cantrips
# 16-19 = custom before powercasting
# 20 = point, then pact, then slot

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
  - type: skill-or-expertise
    value: [@skills]
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
    valueLookup: @valueLookup
    effect: @effect
# Initiative
  - type: initiative
    effect: @effect
# skill checks
  - type: skill-check
    value: enum [skills]
    valueLookup: @valueLookup
    effect: @effect
  - type: passive
    value: enum @skills
    bonus: @bonus
# Speeds
  # when rendering, 1) take the farther of identical speeds and/or the one without a note
  - type: speed
    speed: enum [walk, fly, burrow, swim, climb]
    distance: integer
    note: string #note is optional.
  - type: speed-bonus
    value: [enum speeds]
    bonus: @bonus
  - type: speed-note
    note: string
# Senses
  - type: sense
    sense: enum [senses]
    distance: integer
    note: string
# Unique
  - type: regain-all-hit-dice
# Attacks
  - type: natural-weapon
    replacesUnarmedStrike: # boolean
    value:
      noMod: boolean # see tentacles, damage doesn't add str
      type: enum [natural-melee,natural-ranged]
      damage: @damage
      notes: array of strings
      properties: [enum [weapon properties]]
      moreInfo:
        model: string
        id: string
  - type: gun-strike-augment
    value:
      damage: @damage
      notes: array of strings

# Actions, Bonus Actions, and Reactions
  - type: enum [action, bonus-action, reaction, other] # simply indicates where to render on the character sheet
    resource: @resource #optional, default null
    range:
      short: integer (0 = self, touch = 1)
      long: integer (0 = self, touch = 1)
      note: string
      aoe:
        type: enum [aoe types]
        size: integer
    attack: # optional, renders attack attributes
      type: enum [melee, ranged]
      proficient: boolean # optional, whether or not to add the proficiency bonus to attack, damage, etc
      mod: enum [str, dex, con, int, wis, cha] # optional
      bonus: @bonus
      note: string
    damage:
      - dieCount: integer (0 = special)
        dieType: integer
        mod: enum [str, dex, con, int, wis, cha, max] # optional
        modComparison: enum [abilities] #required for max mod
        type: enum [damage types] or hp, sp, tempHp
        bonus: @bonus
    dc:
      base: integer # default = true
      proficient: boolean # default = true
      mod: enum [str, dex, con, int, wis, cha] # optional
      bonus: @bonus
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
  # Model Choice
  - type: model-choice
    options: true
    label: string
    model: string
    limits:
      - attr: string
        value: []
    append: any
  # Augments
  - type: augment
    value: # or value lookup
      model: enum
      id: string
      limit: [enum types]
      instances: 0
    merge:
      @type
  - type: attack-augment, bf-augment, twf-augment, dt-augment
    augment: enum [attack,damage,dc,notes]
    limits:
      attack: enum [melee,ranged]
      model: enum [weapons,powers]
      modelType: [enum [weapon types, power types]]
    value: array or @bonus
  - type: global-attack-note
    attack: enum [melee, ranged]
    value: array
- type: powercasting-slots
  multiclassConversion: float (default 1)
  known: array or false
  prepared:
    levelMultiplier: float
    modBonus: boolean
  slots:
    1: array
    2: array
    3: array
    4: array
    5: array
  mod: enum @abilities
- type: powercasting-points
  multiclassConversion: float (default 1)
  known: array or false
  prepared:
    levelMultiplier: float
    modBonus: boolean
  points: array
  limit: array
  mod: enum @abilities
- type: powercasting-pact
  multiclassConversion: float (default 1)
  known: array or false
  prepared:
    levelMultiplier: float
    modBonus: boolean
  slotLevel: array
  numSlots: array
  mod: enum @abilities
- type: cantrips
  columnName: string (default Cantrips)
  known: array
- type: barrier
  multiclassConversion: float (default 1)
  ticks: array
  uses: array
  dieType: int
  dieCount: int
- type: additional-cantrips
  bonus: @bonus



# TODO
- type: tech-armor # new health circle and damage/heal buttons
- type: companion
  options:
    - @companion
- type: dual-wielder # +1 ac if 2 melee equipped, twf with non-light
  value: @bonus || array (for notes) || abilityMod
- type: featherlight
- type: melee-gunner #twf w/ two-handed weapon if other is gun strike and other is omni-tool?

# NOT IMPLEMENTED
- type: extra-attack # highest of all of these
  amount: int
  additive: boolean #default false
- type: nullify-armor-str-restriction # Do not check for STR requirements of armor (to reduce speed by 10)
- type: reroll-damage # can replace attack-augment, elemental adept & carnage, auto-reroll (need to figure out auto rerolling)
  attackLimit: @attackLimit
  damageTypeLimit: enum damages
  min: int #default 1
- type: conditional-attack-bonus # displays an icon with a list of all conditional attack bonuses (potentially armor piercing, might be others)
  attackLimit: @attackLimit
  bonus: @bonus
- type: conditional-damage-bonus # displays an icon with a list of all conditional damage bonus options
  attackLimit: @attackLimit
  bonus: @bonus
  damageType: enum damage types
- type: starting-equipment
  equipmentType: enum [weapon, armor, omni-gel, medi-gel, hw-charges, tool]
  value: string or int
- type: medium-armor-master # seems worthless cause in me5e medium armor
- type: prof-choice # need to retrofit or add this, for combined choices like fast learner and skilled
- type: imprinted-enemies # can be model choice
- type: advanced-medigel-application #d6 for medigel
- type: toggle # potential toggle that overrides/appends other states, i.e. hunter mode + 2 speed, disadvantage on addition saves
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
