---
title: Movement & Position
section: combat
order: 2
---
In combat, characters and monsters are in constant motion, often using movement and position to gain the upper hand.

On your turn, you can move a distance up to your speed. You can use as much or as little of your speed as you like on your
turn, following the rules here.

Your movement can include jumping, climbing, and swimming. These different modes of movement can be combined with walking,
or they can constitute your entire move. However you're moving, you deduct the distance of each part of your move from your
speed until it is used up or until you are done moving.



### Breaking Up Your Move
You can break up your movement on your turn, using some of your speed before and after your action. For example, if you
have a speed of <me-distance length="30" />, you can move <me-distance length="10" />, take your action, and then move <me-distance length="20" />.

#### Moving between Attacks
If you take an action that includes more than one weapon attack, you can break up your movement even further by moving
between those attacks. For example, a soldier who can make two attacks with the Extra Attack feature and who has a speed
of <me-distance length="30" /> could move <me-distance length="15" />, make an attack, <me-distance length="15" />, and then attack again.

#### Using Different Speeds
If you have more than one speed, such as your walking speed and a flying speed, you can switch back and forth between your
speeds during your move. Whenever you switch, subtract the distance you've already moved from the new speed. The result
determines how much farther you can move. If the result is 0 or less, you can't use the new speed during the current move.

For example, if you have a speed of <me-distance length="30" /> and a flying speed of <me-distance length="60" /> because
you're wearing a jetpack, you could fly <me-distance length="20" />,
then walk <me-distance length="10" />, and then leap into the air to fly <me-distance length="30" /> more.



### Difficult Terrain
Combat rarely takes place in bare rooms or on featureless plains. Boulder-strewn caverns, briar-choked forests, treacherous
staircases - the setting of a typical fight contains difficult terrain.

Every meter of movement in difficult terrain costs 1 extra meter. This rule is true even if multiple things in a space
count as difficult terrain.

Low furniture, crates, trash cans, rubble, undergrowth, steep stairs, snow, and shallow bogs are examples of difficult
terrain. The space of another creature, whether hostile or not, also counts as difficult terrain.



### Being Prone
Combatants often find themselves lying on the ground, either because they are knocked down or because they throw themselves
down. In the game, they are <me-condition id="prone"/>. You can drop prone without using any of your speed. Standing up takes
more effort; doing so costs an amount of movement equal to half your speed. For example, if your speed is <me-distance length="30" />, you must
spend <me-distance length="15" /> of movement to stand up. You can't stand up if you don't have enough movement left or if your speed is 0.

To move while prone, you must crawl. Every foot of movement while crawling costs <me-distance length="1" override="extra {metric}" />.
Crawling <me-distance length="1" override="extra {metric}" /> in difficult terrain, therefore, costs <me-distance length="3" /> of movement.

### Interacting with Objects
Around You Here are a few examples of the sorts of thing you can do in tandem with your movement and action:

- draw *or* sheathe a sword
- open or close a door
- withdraw a medi-gel from your armor
- pick up a dropped weapon
- take a datapad from a table
- remove your helmet
- stuff some food into your mouth
- plant a banner in the ground
- drink all the ale in a flagon
- throw a lever or a switch
- extinguish a small flame
- put your ear to a door
- kick a small stone
- tap the floor with your weapon
- hand an item to another character

### Moving Around Other Creatures
You can move through a nonhostile creature's space. In contrast, you can move through a hostile creature's space only if
the creature is at least two sizes larger or smaller than you. Remember that another creature's space is difficult terrain for you.

Whether a creature is a friend or an enemy, you can't willingly end your move in its space.

If you leave a hostile creature's reach during your move, you provoke an opportunity attack, as explained later.

### Flying Movement
Flying creatures enjoy many benefits of mobility, but they must also deal with the danger of falling. If a flying creature
is knocked prone, has its speed reduced to 0, or is otherwise deprived of the ability to move, the creature falls, unless
it has the ability to hover or it is being held aloft by biotics, such as by the fly spell.



### Creature Size
Each creature takes up a different amount of space. The Size Categories table shows how much space a creature of a
particular size controls in combat. Objects sometimes use the same size categories.

|Size|Space|
|:---|:---:|
|Tiny|<me-distance length="3" numOnly /> by <me-distance length="3" abbr />|
|Small|<me-distance length="5" numOnly /> by <me-distance length="5" abbr />|
|Medium|<me-distance length="5" numOnly /> by <me-distance length="5" abbr />|
|Large|<me-distance length="10" numOnly /> by <me-distance length="10" abbr />|
|Huge|<me-distance length="15" numOnly /> by <me-distance length="15" abbr />|
|Gargantuan|<me-distance length="20" numOnly /> by <me-distance length="20" abbr /> or larger|

#### Space
A creature's space is the area in <me-distance length="0"/> that it effectively controls in combat, not an expression of its physical
dimensions. A typical Medium creature isn't <me-distance length="5" /> wide, for example, but it does control a space that wide. If a
Medium asari stands in a <me-distance length="5" adj />-wide doorway, other creatures can't get through unless the asari lets them.

A creature's space also reflects the area it needs to fight effectively. For that reason, there's a limit to the number
of creatures that can surround another creature in combat. Assuming Medium combatants, eight creatures can fit in a <me-distance length="5" adj />
radius around another one.

Because larger creatures take up more space, fewer of them can surround a creature. If five Large creatures crowd around
a Medium or smaller one, there's little room for anyone else. In contrast, as many as twenty Medium creatures can surround
a Gargantuan one.

#### Squeezing into a Smaller Space
A creature can squeeze through a space that is large enough for a creature one size smaller than it. Thus, a Large creature
can squeeze through a passage that's only <me-distance length="5" /> wide. While squeezing through a space, a creature must spend 1 extra
meter for every meter it moves there, and it has disadvantage on attack rolls and Dexterity saving throws. Attack rolls
against the creature have advantage while it's in the smaller space.

<me-source-reference pages="91-92"></me-source-reference>
