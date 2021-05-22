---
name: Thorian
entries:
  features:
    indoctrination:
      name: Indoctrination
      text: >-
        Unless a thorian controller is incapacitated, it is a source of
        indoctrination to all creatures within 1<me-distance length='0' /> of
        it. See the indoctrination condition.
    root-structure:
      name: Root Structure
      text: >-
        One a thorian reaches maturity, it's roots grow at a rate of
        <me-distance length="5" numOnly /> to <me-distance length="10" /> per
        year. Over time, these roots create vast tunnel systems and caverns that
        act as the thorian's lair.
    neural-nodes:
      name: Neural Nodes
      text: >-
        The thorian has 4 + 1d4 neural nodes located along its root structure,
        spread throughout its lair. At start of its turn, the thorian gains 2d12
        points for each remaining neural node. Each node has AC 10 and 30 (6d6 +
        10) hit points.
  actions:
    indoctrinate:
      name: Indoctrinate
      text: >-
        The thorian targets one creature within <me-distance length='300' /> of
        it that it or one of its controllers, thralls, or creepers can see. That
        creature must make a DC 17 Wisdom saving throw or suffer a level of
        indoctrination.
    summon-thrall:
      name: Summon Thrall
      text: >-
        The thorian summons a thrall to its aid. It arrives on initiative count
        20 somewhere along the thorian's root structure.
---
### Lair Actions
On initiative count 20 (losing initiative ties), the thorian takes a lair action to cause one of the 
following effects; it can't use the same effect two rounds in a row:

- The thorian sprouts 1d12 + 3 thorian spawn. These spawn can appear in an unoccupied space within 
<me-distance length='5' /> of any part of the thorian's root structure. The spawn take their turn at 
the end of the thorian's turn.
- The thorian summons 1d8 + 4 thorian creepers. These creepers can appear in an unoccupied space 
within <me-distance length='5' /> of any part of the thorian's root structure. The creepers take 
their turn at the end of the thorian's turn.
- The thorian summons 1d4 thorian controllers. These controllers can appear in an unoccupied space 
within <me-distance length='5' /> of any part of the thorian's root structure. The controllers take 
their turn at the end of the thorian's turn.
