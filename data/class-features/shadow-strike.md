---
level: 13
klass: infiltrator
subclass: shadow
name: Shadow Strike
mechanics:
  - type: augment
    value:
      model: infiltrator
      id: tactical-cloak
      limit: [action]
    merge:
      moreInfo:
        additional:
          - model: class-features
            id: shadow-strike
      shortDesc: >-
        Become invisible for 1 minute or until you make an attack, cast a power, use a grenade or mine, or fire a heavy weapon. When you
        activate tactical cloak, you may teleport to a target location within <me-distance length="30" /> and use your reaction
        to make one melee attack (which benefits from your Sneak Attack).
---
At 13th level, whenever you activate Tactical Cloak you may teleport to a target location within <me-distance length="30" />. You must be able to see the location
and it cannot be occupied by a creature or object. This movement does not provoke an attack of opportunity.

When you arrive at the target location, you may use your reaction to make one melee attack on a creature or object within
range. This attack can benefit from your Sneak Attack even if you have already used it this turn, but you can't use your
Sneak Attack against the same target more than once in a turn.

The teleportation can be used to free you from movement impairing effects such as grapple, restrained, lifted, etc.
