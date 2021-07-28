export const preamble = `This glossary provides players with detailed rules for *Twilight Imperium: Fourth Edition* and its *Prophecy of Kings* expansion, organized by topic. Players are encouraged to use the index on page 38 to find specific topics within the glossary.`;
export const content = [
  {
    name: 'Abilities',
    preamble: `Cards and faction sheets each have abilities that players can resolve to trigger various game effects.`,
    subsections: [
      {
        items: [
`
If information in this Rules Reference contradicts the Learn to Play booklet, the Rules Reference takes precedence.
`,`
If a card ability contradicts information in the Rules Reference, the card takes precedence. If both the card and the rules can be followed at the same time, they should be.
`,`
Each ability describes when and how a player can resolve it.

1. If an ability with a specified duration is resolved, the effect of the ability remains through that duration, even if the component that caused the ability is removed.
`,`
If a card has multiple abilities, each ability is presented as its own paragraph.
`,`
If an ability contains the word “Action,” a player must use a component action during the action phase to resolve that ability.
`,`
If an ability uses the word “cannot,” that effect is absolute.

1. If two abilities use the word “cannot,” a persistent ability takes precedence over a one-time ability and an enabling ability takes precedence over a cancel ability.
`,`
When a player resolves an ability, they must resolve the ability in its entirety. Any parts of the ability preceded by the word “may” are optional, and the player resolving the ability may choose not to resolve those parts.
`,`
Abilities on components that remain in play are mandatory unless those abilities use the word “may.”
`,`
If an ability has multiple effects separated by the word “and,” a player must resolve as many of the ability’s effects as possible. However, if the player cannot resolve all of its effects, that player is allowed to resolve as many as they can.`,
        ]
      },
      {
        name: 'Costs',
        items: [
`
Some abilities have a cost that is followed by an effect. The cost of an ability is separated from the effect by the word “to” or by a semicolon. A player cannot resolve the effect of such an ability if they cannot resolve that ability’s cost.
`,`
Some examples of an ability’s cost include spending resources, spending trade goods, spending command tokens, exhausting cards, purging cards, and activating specific systems.`,
        ]
      },
      {
        name: 'Timing',
        items: [
`
If the timing of an ability uses the word “before” or “after,” the ability’s effect occurs immediately before or after the described timing event, respectively.

1. For example, if an ability is resolved “after a ship is destroyed,” the ability must be resolved as soon as the ship is destroyed and not later during that turn or round.
`,`
If the timing of an ability uses the word “when,” the ability’s effect occurs at the moment of the described timing event.

1. Such an ability typically modifies or replaces the timing event in some way.
`,`
Effects that occur “when” an event happens take priority over effects that occur “after” an event happens.
`,`
If an ability uses the word “then,” a player must resolve the effect that occurs before the word “then” or they cannot resolve the effect that occurs after the word “then.”
`,`
Each ability can be resolved once for each occurrence of that ability’s timing event. For example, if an ability is resolved “At the start of combat,” it can be resolved at the start of each combat.
`,`
If there are multiple abilities that players wish to resolve at the same time during the **action phase**, each player takes a turn resolving an ability in initiative order, beginning with the active player. This process continues until each player has resolved each ability that they wish to resolve during that window.
`,`
If there are multiple abilities that players wish to resolve at the same time during the **strategy** or **agenda phases**, players take turns resolving abilities starting with the speaker and proceeding clockwise. This process continues until each player has resolved each ability that they wish to resolve during that window.`,
        ]
      },
      {
        name: 'Component-Specific Rules',
        items: [
`
The opening paragraph of each ability found on an action card describes when a player can resolve that card’s ability.
`,`
The opening paragraph of most abilities found on promissory notes describes when a player can resolve that card’s ability.

1. Some promissory notes have abilities that trigger as soon as a player receives the card.
`,`
Abilities on agenda cards correspond to an outcome. Players resolve these abilities during the agenda phase after players vote for a particular outcome.
`,`
Each faction has faction abilities presented on its faction sheet. Each faction’s flagship has one or more unique abilities. Some abilities provide players with perpetual effects.
`,`
Some units have unit abilities. These abilities are named and presented above a unit’s attributes on a player’s faction sheet or on a unit upgrade card. Each unit ability has unique rules for when a player can resolve that ability. The following abilities are unit abilities:

* Anti-Fighter Barrage
* Bombardment
* Deploy
* Planetary Shield
* Production
* Space Cannon
* Sustain Damage
`,`
If a unit’s ability uses the phrase “this system” or “this planet,” the ability is referring to the system or planet that contains that unit.`,
        ]
      }
    ]
  },
  {
    name: 'Action Cards',
    preamble: 'Action cards provide players with various abilities that they can resolve as described on the cards.',
    subsections: [
      {
        items: [
`
Each player draws one action card during each status phase.
`,`
Players can draw action cards by resolving the primary and secondary abilities of the “Politics” strategy card.
`,`
When a player draws an action card, they take the top card from the action card deck and add it to their hand of action cards.
`,`
Each player’s hand can have a maximum of **seven action cards**. If a player ever has more than seven action cards, that player must choose seven cards to keep and discard the rest.

1. A game effect can increase or decrease the number of cards a player’s hand can have.
`,`
A player’s action cards remain hidden from other players until those cards are played.
`,`
The first paragraph of each action card is presented in bold text and describes the timing of when that card’s ability can be resolved.

1. If an action card contains the word “Action,” a player must use a component action during the action phase to resolve the ability. A player cannot resolve a component action if they cannot completely resolve its ability.
2. Multiple action cards with the **same** name cannot be played during a single timing window to affect the same units or game effect. Canceled cards are not treated as being played.
`,`
To play an action card, a player reads and resolves the card’s ability text, making any decisions as prompted by the card. Then, that player discards the card, placing it in the action discard pile.
`,`
If an action card is canceled, that card has no effect and is discarded.
`
        ]
      }
    ]
  },
  {
    name: 'Action Phase',
    preamble: 'During the action phase, each player takes a turn in initiative order.',
    subsections: [
      {
        items: [
`
During a player’s turn, they perform a single action. After each player has taken a turn, player turns begin again in initiative order. This process continues until all players have passed.
`,`
If a player cannot perform an action, they must pass.
`,`
After a player has passed, they have no further turns and cannot perform additional actions during that action phase.

1. During a turn that a player passes, they can resolve transactions and “at the start of your turn” abilities.
2. A player that has passed can still resolve the secondary ability of other players’ strategy cards.
3. It is possible for a player to perform multiple, consecutive actions during an action phase if all other players have passed during that action phase.
`,`
A player cannot pass until they have performed the strategic action of their strategy card. 

1. During a three-player or four-player game, a player cannot pass until they have exhausted both of their strategy cards.
`,`
After all players have passed, play proceeds to the status phase.
`
        ]
      }
    ]
  },
  {
    name: 'ACTIVE PLAYER',
    preamble: 'The active player is the player taking a turn during the action phase.',
    subsections: [
      {
        items: [
`
During the action phase, the player who is first in initiative order is the first active player.
`,`
After the active player takes a turn, the next player in initiative order becomes the active player.
`,`
After the last player in initiative order takes a turn, the player who is first in initiative order becomes the active player again, and turns begin again in initiative order, ignoring any players who have already passed.
`,
        ]
      }
    ]
  },
  {
    name: 'ACTIVE SYSTEM',
    preamble: 'The active system is the system that is activated during a tactical action.',
    subsections: [
      {
        items: [
`
When a player performs a tactical action, they activate a system by placing a command token from their tactic pool in that system. That system is the active system.
`,`
A player cannot activate a system that already contains one of their command tokens.
`,`
A player can activate a system that contains command tokens that match other players’ factions.
`,`
A system remains the active system for the duration of the tactical action during which it was activated.
`,
        ]
      }
    ]
  },
  {
    name: 'ADJACENCY',
    preamble: 'Two system tiles are adjacent to each other if any of the tiles’ sides are touching each other.',
    subsections: [
      {
        items: [
`
A system that has a wormhole is treated as being adjacent to a system that has a matching wormhole.
`,`
A unit or planet is adjacent to all system tiles that are adjacent to the system tile that contains that unit or planet.

1. A system is not adjacent to itself.
`,`
A planet is treated as being adjacent to the system that contains that planet.
`,`
Systems that are connected by lines drawn across one or more hyperlane tiles are adjacent for all purposes.
`,
        ]
      }
    ]
  },
  {
    name: 'AGENDA CARD',
    preamble: 'Agenda cards represent galactic laws and policies. During each agenda phase, players cast votes for specific outcomes on two agenda cards.',
    subsections: [
      {
        name: '',
        items: [
`
There are two types of agenda cards: laws and directives.
`,`
Laws can permanently change the rules of the game.
`,`
When resolving a law, if a “For” outcome received the most votes, or if the law requires an election, the law’s ability becomes a permanent part of the game. Players resolve the outcome and place the agenda card either in the common play area or in a player’s play area, as dictated by the card.
`,`
If a law is in a player’s play area as opposed to the common play area, that player owns that law.
`,`
If a law is discarded from play, that law’s ability is no longer in effect. Place that card on the top of the agenda card discard pile.
`,`
If an “Against” outcome of a law received the most votes, players resolve the outcome and discard the agenda.
`,`
Directives provide one-time game effects.
`,`
When resolving a directive, players resolve the outcome that received the most votes and discard the agenda card.
`,
        ]
      }
    ]
  },
  {
    name: 'AGENDA PHASE',
    preamble: 'During the agenda phase, players can cast votes on agendas that can change the rules of the game.',
    subsections: [
      {
        items: [
`
Players skip the agenda phase during the early portion of each game. After the custodians token is removed from Mecatol Rex, the agenda phase is added to each game round. To resolve the agenda phase, players perform the following steps:
`,`
STEP 1—FIRST AGENDA: Players resolve the first agenda by following these steps in order: i. REVEAL AGENDA: The speaker draws one agenda card from the top of the agenda deck and reads it aloud to all players, including all of its possible outcomes. ii. VOTE: Each player, starting with the player to the left of the speaker and continuing clockwise, can cast votes for an outcome of the current agenda. iii. RESOLVE OUTCOME: Players tally each vote that was cast and resolve the outcome that received the most votes.
`,`
STEP 2—SECOND AGENDA: Players repeat the “First Agenda” step of this phase for a second agenda.
`,`
STEP 3—READY PLANETS: Each player readies each of their exhausted planets. Then, a new game round begins starting with the strategy phase.
`,
        ]
      },
      {
        name: 'VOTING',
        preamble: 'When voting during the agenda phase, a player can cast votes for a specific outcome of an agenda',
        items: [
`
To cast votes, a player exhausts any number of their planets and chooses an outcome. The number of votes cast for that outcome is equal to the combined influence values of the planets that the player exhausts. a When a player exhausts a planet to cast votes, that player must cast the full amount of votes provided by that planet.
`,`
A player cannot cast votes for multiple outcomes of the same agenda. Each vote a player casts must be for the same outcome.
`,`
Some agendas have “For” and “Against” outcomes. When a player casts votes on such an agenda, that player must cast their votes either “For” or “Against.”
`,`
Some agendas instruct players to elect either a player or a planet. When a player casts votes for such an agenda, that player must cast their vote for an eligible player or planet as described on the agenda.
`,`
When electing a player, a player can cast votes for themselves. a When resolving these agendas, the “elected player” is the player for whom the most votes are cast.
`,`
When electing a planet, a player must cast votes for a planet that is controlled by a player. a When resolving these agendas, the “elected planet” is the planet that had the most votes cast for it.
`,`
When casting votes, a player must declare aloud the outcome for which their votes are being cast.
`,`
Trade goods cannot be spent to cast votes.
`,`
A player may choose to abstain by not casting any votes.
`,`
Some game effects allow a player to cast additional votes for an outcome. These votes cannot be cast for a different outcome than other votes cast by that player.
`,`
If a player cannot vote on an agenda because of a game effect, that player cannot cast votes for that agenda by exhausting planets or through any other game effect.
`,
        ]
      },
      {
        name: 'OUTCOMES',
        items: [
`
To resolve an outcome, the speaker follows the instructions on the agenda card.
`,`
If there is a tie for the outcome that received the most votes, or if no outcome receives any votes, the speaker decides which of the tied outcomes to resolve.

1. The speaker’s decision is not a vote.
`,`
If an “Elect” or “For” outcome of a law was resolved, that card remains in play and permanently affects the game.
`,`
If a directive or an “Against” outcome of a law was resolved, that card is placed in the agenda discard pile.
`,`
Some game effects instruct a player to predict an outcome. To predict an outcome, a player declares aloud the outcome they think will receive the most votes. That player must make this prediction after the agenda is revealed but before any votes have been cast.

1. A predicted outcome must be a possible outcome of the revealed agenda.
2. After resolving the outcome of the agenda, any abilities that were dependent upon predicting the outcome are resolved.
`
        ]
      }
    ]
  },
  {
    name: 'ANOMALIES',
    preamble: 'An anomaly is a system tile that has unique rules.',
    subsections: [
      {
        name: '',
        items: [
`
An anomaly is identified by a red border located on the tile’s corners.
`,`
There are four types of anomalies: asteroid fields, nebulae, supernovas, and gravity rifts.

1. Some anomalies contain planets; those systems are still anomalies.
`,`
Each type of anomaly is identified by its art, as follows:

* Asteroid
* Field Nebula
* Supernova
* Gravity Rift
`,`
Abilities can cause a system tile to become an anomaly; that system tile is an anomaly in addition to its other properties.
`,`
Abilities can cause a system to be two different anomalies; that system has the properties of both anomalies.
`,
        ]
      }
    ]
  },
  {
    name: 'ANTI-FIGHTER BARRAGE (UNIT ABILITY)',
    preamble: 'A unit with the “Anti-Fighter Barrage” ability may be able to destroy an opponent’s fighters at the onset of a space battle. During the “Anti-Fighter Barrage” step of the first round of space combat, players perform the following steps:',
    subsections: [
      {
        name: '',
        items: [
`
STEP 1—Each player rolls dice for each of their units in the combat that has the “Anti-Fighter Barrage” ability; this is called an anti-fighter barrage roll. A hit is produced for each die roll that is equal to or greater than the unit’s anti-fighter barrage value.

1. A unit’s “Anti-Fighter Barrage” ability is presented along with a unit’s attributes on faction sheets and unit upgrade technology cards.
2. The “Anti-Fighter Barrage” ability is displayed as “AntiFighter Barrage X (xY).” The X is the minimum value needed for a die to produce a hit, and Y is the number of dice rolled.
3. Game effects that reroll, modify, or otherwise affect combat rolls do not affect anti-fighter barrage rolls.
4. This ability can still be used if no fighters are present; hits produced may be used to trigger specific abilities.
`,`
STEP 2:—Each player must choose and destroy one of their fighters in the active system for each hit their opponent’s antifighter barrage roll produced.

1. If a player has to assign more hits than they have fighters in the active system, the excess hits have no effect.
`,
        ]
      }
    ]
  },
  {
    name: 'ASTEROID FIELD',
    preamble: 'An asteroid field is an anomaly that affects movement.',
    subsections: [
      {
        name: '',
        items: [
`
A ship cannot move through or into an asteroid field
`,
        ]
      }
    ]
  },
  {
    name: 'ATTACH',
    preamble: 'Some game effects instruct a player to attach a card to a planet card. The attached card modifies that planet card in some way.',
    subsections: [
      {
        name: '',
        items: [
`
To attach a card to a planet card, a player places the card with the attach effect partially underneath the planet card.
`,`
If a player gains or loses control of planet that contains a card with an attach effect, the attached card stays with that planet.

1. The attached card maintains its exhausted or readied state.
2. If a planet card is purged, also purge all cards that are attached to that planet card and remove the corresponding attachment tokens from the game board.
`,`
When a card is attached to a planet card, place the corresponding attachment token on that planet on the game board.
`,
        ]
      }
    ]
  },
  {
    name: 'ATTACKER',
    preamble: 'During combat, the active player is the attacker.',
  },
  {
    name: 'BLOCKADED',
    preamble: 'A player’s unit with “Production” is blockaded if it is in a system that does not contain any of their ships and contains other players’ ships.',
    subsections: [
      {
        name: '',
        items: [
`
A player cannot use a blockaded unit to produce ships; that player can still use a blockaded unit to produce ground forces.
`,`
When a player blockades another player’s space dock, if the blockaded player has captured any of the blockading player’s units, those units are returned to the blockading player’s reinforcements.

1. While a player is blockading another player, the blockaded player cannot capture any of the blockading player’s units.
`,
        ]
      }
    ]
  },
  {
    name: 'BOMBARDMENT (UNIT ABILITY)',
    preamble: 'A unit with the “Bombardment” ability may be able to destroy another player’s ground forces during an invasion. During the “Bombardment” step, players perform the following steps:',
    subsections: [
      {
        name: '',
        items: [
`
STEP 1— The active player chooses which planet each of their units that has a “Bombardment” ability will bombard. Then, that player rolls dice for each of those units; this is called a bombardment roll. A hit is produced for each die roll that is equal to or greater than the unit’s “Bombardment” value.

1. A unit’s “Bombardment” ability is presented along with a unit’s attributes on faction sheets and unit upgrade technology cards.
2. The “Bombardment” ability is displayed as “Bombardment X (xY).” The X is the minimum value needed for a die to produce a hit, and Y is the number of dice rolled. Not all “Bombardment” abilities have a (Y) value; a bombardment roll for such a unit consists of one die.
3. Game effects that reroll, modify, or otherwise affect combat rolls do not affect bombardment rolls.
4. Multiple planets in a system may be bombarded, but a player must declare which planet a unit is bombarding before making a bombardment roll.
5. The L1Z1X’s “Harrow” ability does not affect the L1Z1X player’s own ground forces.
6. Planets that contain a unit with the “Planetary Shield” ability cannot be bombarded.
`,`
STEP 2— The player who controls the planet that is being bombarded chooses and destroys one of their ground forces on that planet for each hit result the bombardment roll produced.
1. If a player has to assign more hits than that player has ground forces, the excess hits have no effect.
`,
        ]
      }
    ]
  },
  {
    name: 'CAPACITY (ATTRIBUTE)',
    preamble: 'Capacity is an attribute of some units that is presented on faction sheets and unit upgrade technology cards.',
    subsections: [
      {
        name: '',
        items: [
`
A unit’s capacity value indicates the maximum combined number of fighters and ground forces that it can transport.
`,`
The combined capacity values of a player’s ships in a system determine the number of fighters and ground forces that player can have in that system’s space area.
`,`
If a player has more fighters and ground forces in the space area of a system than the total capacity of that player’s ships in that system, that player must remove the excess units.

1. A player can choose which of their excess units to remove.
2. Ground forces on planets do not count against capacity.
3. A player’s fighters and ground forces do not count against capacity during combat. At the end of combat, any excess units are removed and returned to that player’s reinforcements.
`,`
Fighters and ground forces are not assigned to specific ships, except while they are being transported.
`,
        ]
      }
    ]
  },
  {
    name: 'CAPTURE',
    preamble: 'Some abilities instruct a player to capture a unit, preventing the unit’s original owner from using it.',
    subsections: [
      {
        name: '',
        items: [
`
If a player captures a non-fighter ship or mech, they place it on their faction sheet. When such a unit is returned, it is placed into the reinforcements of the original owner.
`,`
A captured non-fighter ship or mech is returned under the following circumstances:

1. If the player who captured the unit agrees to return it as part of a transaction.
2. If an ability instructs the capturing player to return the unit as part of an ability’s cost.
3. If the player whose unit was captured blockades a space dock of the player who captured the unit.
`,`
If a player captures a fighter or infantry, it is placed in its reinforcements instead of on the capturing player’s faction sheet; the capturing player places a fighter or infantry token from the supply on their faction sheet instead. 
`,`
Captured fighters and infantry do not belong to any player and are returned only when an ability instructs the capturing player to do so.

1. Captured fighters and infantry cannot be returned as part of a transaction.
2. Captured fighters and infantry are not returned as the result of a blockade.
3. When a captured fighter or infantry is returned, it is placed in the supply.
`,`
While a unit is captured, it cannot be produced or placed by its original owner until it is returned.
`,`
If one or more of a player’s space docks is being blockaded, that player cannot capture units from the blockading players.
`,
        ]
      }
    ]
  },
  {
    name: 'COMBAT (ATTRIBUTE)',
    preamble: 'Combat is an attribute of some units that is presented on faction sheets and unit upgrade technology cards.',
    subsections: [
      {
        name: '',
        items: [
`
During combat, if a unit’s combat roll produces a result equal to or greater than its combat value, it produces a hit.
`,`
If a unit’s combat value contains two or more burst icons, instead of rolling a single die, the player rolls one die for each burst icon when making that unit’s combat rolls.
`,
        ]
      }
    ]
  },
  {
    name: 'COMMAND SHEET',
    preamble: 'Each player has a command sheet that contains a strategy pool, a tactic pool, a fleet pool, a trade good area, and a quick reference.',
    subsections: [
      {
        name: '',
        items: [
`
The pools on the command sheet are where players place their command tokens. Command tokens in a player’s pools are used by that player to perform strategic and tactical actions and to increase the number of ships that player can have in each system.
`,`
The trade good area on the command sheet is where a player places their trade good tokens; trade tokens in a player’s trade good area can be spent by that player as resources, influence, or to resolve certain game effects that require trade goods.
`,`
Players who are familiar with the game can hide the quick reference by placing that portion of the command sheet under their faction sheets.
`,
        ]
      }
    ]
  },
  {
    name: 'COMMAND TOKENS',
    preamble: 'Command tokens are a currency that players use to perform actions and expand their fleets.',
    subsections: [
      {
        name: '',
        items: [
`
Each player begins the game with eight tokens on their command sheet: three in their tactic pool, three in their fleet pool, and two in their strategy pool.

1. Command tokens in the strategy and tactic pool are placed with the faction symbol faceup.
2. Command tokens in the fleet pool are placed with the ship silhouette faceup.
`,`
When a player gains a command token, they choose which of their three pools to place it in.
`,`
A player is limited by the amount of command tokens in their reinforcements.

1. If a player would gain a command token but has none available in their reinforcements, that player cannot gain that command token.
2. If a game effect would place a player’s command token from their reinforcements and none are available, that player must take a token from a pool on their command sheet, unless the token would be placed into a system that already contains one of their command tokens.
`,`
During the action phase, a player can perform a tactical action by spending a command token from their tactic pool; they place the command token in a system.
`,`
After a player performs a strategic action during the action phase, each other player can resolve the secondary ability of that strategy card by spending a command token from their strategy pool.

1. A player does not spend a command token to resolve the secondary ability of the “Leadership” strategy card.
`,`
If a game effect would place a player’s command token in a system where they already have one, they place the token in their reinforcements instead. Any effects that resolve by placing that token are resolved as normal.
`,
        ]
      }
    ]
  },
  {
    name: 'COMMODITIES',
    preamble: 'Commodities represent goods that are plentiful for their own faction and are desired by other factions. A commodity has no inherent game effects, but converts into a trade good if given to or received from another player.',
    subsections: [
      {
        name: '',
        items: [
`
Commodities and trade goods are represented by opposite sides of the same token.
`, `
The commodity value on a player’s faction sheet indicates the maximum number of commodities that player can have.
`, `
When an effect instructs a player to replenish commodities, that player takes the number of commodity tokens necessary so that the amount of commodities that player has equals the commodity value on their faction sheet. Then, those tokens are placed faceup in the commodity area of that player’s faction sheet.
`, `
When a player replenishes commodities, that player takes the commodity tokens from the supply.
`, `
Players can trade commodities following the rules for transactions. When a player receives a commodity from another player, the player who received that token converts it into a trade good by placing it in the trade good area of their command sheet with the trade good side faceup.

1. That token is no longer a commodity token; it is a trade good token.
2. A player can trade commodity tokens before resolving a game effect that allows them to replenish commodities.
3. If a game effect instructs a player to convert a number of their own commodities to trade goods, those trade goods are not treated as being gained for the purpose of triggering other abilities.
`, `
Any game effect that instructs a player to give a commodity to another player causes that commodity to be converted into a trade good.
`, `
A player cannot spend commodities unless otherwise specified; a player can only trade them during a transaction.
`, `
Commodity tokens come in values of one and three. A player can swap between these tokens as necessary.
`
        ]
      }
    ]
  },
  {
    name: 'COMPONENT ACTION',
    preamble: 'A component action is a type of action that a player can perform during their turn of an action phase.',
    subsections: [
      {
        name: '',
        items: [
`
Component actions can be found on various game components, including action cards, technology cards, leaders, exploration cards, relics, promissory notes, and faction sheets. Each component action is indicated by an “Action” header.
`,`
To perform a component action, a player reads the action’s text and follows the instructions as described.
`,`
A component action cannot be performed if its ability cannot be completely resolved.
`,`
If a component action is canceled, it does not use that player’s action.
`,
        ]
      }
    ]
  },
  {
    name: 'COMPONENT LIMITATIONS',
    preamble: 'If a component type is depleted during the game, players obey the following rules:',
    subsections: [
      {
        name: '',
        items: [
`
DICE: Dice are limitless. If a player needs to roll more dice than the game provides, that player should roll as many as possible, record the results, and then reroll dice as necessary
`,`
TOKENS: Tokens are limited to those included in the game, except for the following:

* Control Tokens
* Fighter Tokens
* Trade Good Tokens
* Infantry Tokens
`,`
If any of the above tokens are depleted, players can use a suitable substitute, such as a coin or bead.
`,`
UNITS: Units are limited to those included in the game, except for fighters and ground forces.

1. When a player would place a unit, if there are none of that type left in their reinforcements, that player can remove a unit from any system that does not contain one of their command tokens and place that unit in their reinforcements. A player can remove any number of their units in this way; however, any units that are removed must be placed immediately. Abilities cannot force a player to remove and place a unit in this manner.
2. When producing a fighter or infantry unit, a player can use a fighter or infantry token, as appropriate, from the supply instead of a plastic piece. These tokens must be accompanied by at least one plastic piece of the same type; players can swap infantry and fighter tokens for plastic pieces at any time.
`,`
CARDS: When a deck is depleted, players shuffle the deck’s discard pile and place it facedown to create a new deck.
`,
        ]
      }
    ]
  },
  {
    name: 'CONSTRUCTION (STRATEGY CARD)',
    preamble: 'The “Construction” strategy card allows players to construct structures on planets they control. This card’s initiative value is “4.”',
    subsections: [
      {
        name: '',
        items: [
`
During the action phase, if the active player has the “Construction” strategy card, they can perform a strategic action to resolve that card’s primary ability.
`,`
To resolve the primary ability on the “Construction” strategy card, the active player may place either one PDS or one space dock on a planet they control. Then, that player may place an additional PDS on a planet they control.

1. The structures can be placed on the same planet or different planets.
2. The structures can be placed in any systems, regardless of whether the player has a command token in the system or not.
`,`
After the active player resolves the primary ability of the “Construction” strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend one command token from their strategy pool and place that command token in any system. If that player already has a command token in that system, the spent token is returned to their reinforcements instead. Then, that player places either one PDS or one space dock on a planet they control in that system.
`,`
When a player places either a PDS or space dock using the “Construction” strategy card, they take that PDS or space dock from their reinforcements.

1. If a player does not have the unit in their reinforcements, that player can remove a unit from any system that does not contain one of their command tokens and place that unit in their reinforcements. Then, that player must place the unit on the game board as instructed by the effect that is placing the unit.
`,
        ]
      }
    ]
  },
  {
    name: 'CONTROL',
    preamble: 'Each player begins the game with control of each planet in their home system. During the game, players can gain control of additional planets.',
    subsections: [
      {
        name: '',
        items: [
`
When a player gains control of a planet, they take the planet card that corresponds to that planet and place it in their play area; that card is exhausted.

1. If a player is the first player to control a planet, they take the planet card from the planet card deck.
2. If another player controls the planet, they take that planet’s card from the other player’s play area.
3. When a player gains control of a planet that is not already controlled by another player, they explore that planet.
`,`
A player cannot gain control of a planet that they already control.
`,`
While a player controls a planet, that planet’s card remains in their play area until they lose control of that planet.
`,`
A player can control a planet that they do not have any units on; that player places a control token on that planet to mark that they control it.
`,`
A player loses control of a planet if they no longer have units on it and another player has units on it.

1. The player that placed units on the planet gains control of that planet.
2. During the invasion step of a tactical action, control is determined during the “Establish Control” step instead.
`,`
A player can lose control of a planet through some game effects.
`,`
If a player loses control of a planet that contains their control token, they remove their control token from the planet.
`,
        ]
      }
    ]
  },
  {
    name: 'COST (ATTRIBUTE)',
    preamble: 'Cost is an attribute of some units that is presented on faction sheets and unit upgrade technology cards. A unit’s cost determines the number of resources a player must spend to produce that unit.',
    subsections: [
      {
        name: '',
        items: [
`
To produce a unit, a player must spend a number of resources equal to or greater than the cost of the unit they are producing.
`,`
If the cost is accompanied by two icons—typically for fighters and ground forces—a player produces two of that unit for that cost.
`,`
If a unit does not have a cost, it cannot be produced. a Structures do not have costs and are usually placed by resolving the “Construction” strategy card.
`,
        ]
      }
    ]
  },
  {
    name: 'CUSTODIANS TOKEN',
    preamble: 'The custodians token begins each game on Mecatol Rex. The token represents the caretakers that safeguard the seat of the empire until such time as the galactic council can be reconvened.',
    subsections: [
      {
        name: '',
        items: [
`
Units can move into the system that contains Mecatol Rex following normal rules; however, players cannot commit ground forces to land on Mecatol Rex until the custodians token is removed from the planet.
`,`
Before the “Commit Ground Forces” step of an invasion, the active player can remove the custodians token from Mecatol Rex by spending six influence. Then, that player must commit at least one ground force to land on the planet. a If a player cannot commit ground forces to land on Mecatol Rex, they cannot remove the custodians token.
`,`
When a player removes the custodians token from Mecatol Rex, they take the token from the game board and place it in their play area. Then, they gain one victory point.
`,`
After a player removes the custodians token from Mecatol Rex, the agenda phase is added to all subsequent game rounds, including the game round during which the custodians token was removed from Mecatol Rex.
`,
        ]
      }
    ]
  },
  {
    name: 'DEALS',
    preamble: 'A deal is an agreement between two players that may or may not include a transaction that involves physical components.',
    subsections: [
      {
        name: '',
        items: [
`
Players can make deals with each other at any time, even if they are not neighbors. However, deals that include a transaction must follow the rules for transactions, including that the players be neighbors.
`,`
Deals are binding or non-binding according to the conditions of the deal.
`,`
If the terms of a deal can be resolved immediately, it is a binding deal. When a deal is binding, a player must adhere to the terms of the agreement and whatever transactions, if any, were agreed upon.

1. The results of playing an action card, including the act of successfully resolving a card, are not instantaneous and cannot be guaranteed. They cannot be part of a binding deal.
`,`
If the terms of a deal cannot be resolved immediately, it is a non-binding deal. When a deal is non-binding, a player does not have to adhere to any part of the agreement.
`,
        ]
      }
    ]
  },
  {
    name: 'DEFENDER',
    preamble: 'During either a space or ground combat, the player who is not the active player is the defender.',
  },
  {
    name: 'DEPLOY',
    preamble: 'Some units have deploy abilities. Deploy abilities are indicated by the “Deploy” header and provide the means to place specific units on the game board without producing them as normal.',
    subsections: [
      {
        name: '',
        items: [
`
A player can use a unit’s deploy ability when the ability’s conditions are met to place that unit on the game board. a A player does not have to spend resources to deploy a unit unless otherwise specified.
`,`
A player can only resolve a deploy ability to place a unit that is in their reinforcements.

1. If there are no units that have a deploy ability in a player’s reinforcements, the deploy ability cannot be used.
`,`
A unit’s deploy ability can be resolved only once per timing window.
`,
        ]
      }
    ]
  },
  {
    name: 'DESTROYED',
    preamble: 'Various game effects can cause a unit to be destroyed. When a player’s unit is destroyed, it is removed from the game board and returned to their reinforcements.',
    subsections: [
      {
        name: '',
        items: [
`
When a player assigns hits that were produced against their units, that player chooses a number of their units to be destroyed equal to the number of hits produced against those units.
`,`
If a player’s unit is removed from the board by a game effect, it is not treated as being destroyed; effects that trigger when a unit is destroyed are not triggered.
`,
        ]
      }
    ]
  },
  {
    name: 'DIPLOMACY (STRATEGY CARD)',
    preamble: 'The “Diplomacy” strategy card can be used to preemptively prevent other players from activating a specific system. It can also be used to ready planets. This card’s initiative value is “2.”',
    subsections: [
      {
        name: '',
        items: [
`
During the action phase, if the active player has the “Diplomacy” strategy card, they can perform a strategic action to resolve that card’s primary ability.
`,`
To resolve the primary ability on the “Diplomacy” strategy card, the active player chooses a system that contains a planet they control other than the Mecatol Rex system; each other player places one command token from their reinforcements in that system. Then, the active player readies any two of their exhausted planets.

1. If a player has no command tokens in their reinforcements, that player places one command token of their choice from their command sheet.
2. If a player already has a command token in the chosen system, they do not place a command token there.
`,`
After the active player resolves the primary ability of the “Diplomacy” strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend one command token from their strategy pool to ready up to two exhausted planets they control.
`,
        ]
      }
    ]
  },
  {
    name: '',
    preamble: '',
    subsections: [
      {
        name: '',
        items: [
`

`,
        ]
      }
    ]
  },
  {
    name: '',
    preamble: '',
    subsections: [
      {
        name: '',
        items: [
`

`,
        ]
      }
    ]
  },
  {
    name: '',
    preamble: '',
    subsections: [
      {
        name: '',
        items: [
`

`,
        ]
      }
    ]
  },
];

/*
  {
    name: '',
    preamble: '',
    subsections: [
      {
        name: '',
        items: [
`

`,`

`,
        ]
      }
    ]
  },
  {
    name: 'Section heading',
    preamble: 'Non-numbered content below the heading',
    subsections: [
      {
        name: 'Numbered secondary heading (if applicable)',
        items: [
`
Markdown content with a number
`,`
Markdown content with a number
`,
        ]
      }
    ]
  },
*/