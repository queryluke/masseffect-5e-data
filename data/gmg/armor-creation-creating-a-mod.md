---
title: Creating an Armor Mod
section: armor-creation
order: 3
---
Creating a custom armor mod simply requires combining a slot (head, chest, arms, or legs), one or more mechanics, 
and a potency for each mechanic. Each potency is 2.5 times more expensive than it's previous level. If you have a 
potency of 1, the final cost equals the value in the Cost column. If you have a potency of 2, the final cost 
equals the value in the Cost column times 2.5. If you have a potency of 3, the final cost equals the value in the 
Cost column times 5.

### Example: +10 shields, +5 shield regen, +3 AC

- __Slot__: Chest
- __Mechanic 1__: shields
    1. +10 shields = potency 2
    2. Cost = 10,000 * 2.5 = 25,000
- __Mechanic 2__: shield regen
    1. +5 shield regen = potency 1
    2. Cost = 8,000
- __Mechanic 3__: AC
    1. +3 AC = potency 3
    2. Cost = 20,000 * 5 = 100,000

__Total Cost:__ 133,000

When creating new mods, be mindful that their benefits can stack. You wouldn't want to create a +3 AC armor mod for 
the head, chest, arms, and legs — this would result in a player being able to attain +12 AC.
