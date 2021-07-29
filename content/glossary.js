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
    name: 'ELIMINATION',
    preamble: 'A player who is eliminated is no longer part of the game.',
    subsections: [
      {
        name: '',
        items: [
`
A player is eliminated when they meet all of the following three conditions:

1. The player has no ground forces on the game board.
2. The player has no unit that has “Production.”
3. The player does not control any planets.
`,`
When a player becomes eliminated, all of the units, command tokens, control tokens, promissory notes, technologies, command sheets, and the faction sheet that matches that player’s faction or color are returned to the game box, including those in their reinforcements.
`,`
When a player becomes eliminated, all agenda cards they own are discarded.
`,`
When a player becomes eliminated, each promissory note they have that matches another player’s faction or color is returned to that player. a Promissory notes that match the eliminated player are returned to the game box, even if another player has them.
`,`
When a player becomes eliminated, each action card in their hand is discarded.
`,`
When a player becomes eliminated, their strategy cards are returned to the common play area whether those cards have been exhausted or not.
`,`
When a player becomes eliminated, their secret objectives are shuffled back into the secret objective deck whether those secret objectives have been completed or not.
`,`
If the speaker becomes eliminated, the speaker token passes to the player to the speaker’s left.
`,`
If a game that started with five or more players becomes a game with four or fewer players due to elimination, the players continue to select only one strategy card during the strategy phase.
`,`
When players are eliminated, faction-specific components interact with the game as follows:

1. If a player becomes eliminated and the Nekro Virus’ assimilator “X” or assimilator “Y” token is placed on one of their faction technologies, that technology remains in play.
2. If the Ghost of Creuss player becomes eliminated, their wormhole tokens remain on the game board for the remainder of the game.
3. If the Naalu player becomes eliminated while another player has the Naalu player’s “0” token, that token remains with its current player until the end of the status phase, and then it is removed from play.
4. If the Titans of Ul player becomes eliminated while their hero or promissory note is attached to a planet, those attachments and attachment tokens remain in play for the remainder of the game.
5. If the Mahact Gene-Sorcerers become eliminated while they have another player’s command tokens on their faction sheet, those command tokens are returned to their respective players’ reinforcements.
6. If the Mahact Gene-Sorcerers have an eliminated player’s command token on their faction sheet, that command token remains in play, as does the eliminated player’s commander, if it is unlocked.
`,`
If a player becomes eliminated, any units they have captured are returned to the reinforcements of their original owners.
`,
        ]
      }
    ]
  },
  {
    name: 'EXHAUSTED',
    preamble: 'Some cards can be exhausted. A player cannot resolve abilities or spend the resources or influence of an exhausted card.',
    subsections: [
      {
        name: '',
        items: [
`
To exhaust a card, a player flips the card facedown.
`,`
During the “Ready Cards” step of the status phase, each player readies all of their exhausted cards by flipping those cards faceup.
`,`
A player exhausts their planet cards to spend either the resources or influence on that card.
`,`
Abilities, including some found on technology cards, may instruct a player to exhaust a card to resolve those abilities. If a card is already exhausted, it cannot be exhausted again.

1. Passive abilities on an exhausted card are still in effect while that card is exhausted.
`,`
After a player performs a strategic action, they exhaust the strategy card that corresponds to that action.
`,
        ]
      }
    ]
  },
  {
    name: 'EXPLORATION',
    preamble: 'Planets and some space areas can be explored, yielding varying results determined by the cards drawn from the exploration decks.',
    subsections: [
      {
        name: '',
        items: [
`
When a player takes control of a planet that is not already controlled by another player, they explore that planet.
`,`
When a player explores a planet, they draw and resolve a card from the exploration deck that corresponds to that planet’s trait.

1. There are three planetary exploration decks, each of which corresponds to a planet trait: cultural, hazardous, and industrial.
2. Planets that do not have traits, such as Mecatol Rex and planets in home systems, cannot be explored.
3. If a planet has multiple traits, the player exploring the planet chooses which of the corresponding exploration decks to draw from.
4. If a player gains control of multiple planets or resolves multiple explore effects at the same time, they choose the order in which they resolve those explorations, completely resolving each exploration card before resolving the next.
`,`
Certain abilities may allow a planet to be explored multiple times.
`,`
Players can explore space areas that contain frontier tokens if they own the “Dark Energy Tap” technology or if another game effect allows them to.

1. Frontier tokens are placed in systems during setup and by specific abilities.
`,`
When a player explores a frontier token, they draw and resolve a card from the frontier exploration deck.
`,`
After a frontier token is explored, it is discarded and returned to the supply.
`,`
To resolve an exploration card, a player reads the card, makes any necessary decisions, and resolves its ability. If the card was not a relic fragment or an attachment, it is discarded into its respective discard pile.

1. If there are no cards in an exploration deck, its discard pile is shuffled to form a new exploration deck.
`,`
If a player resolves an exploration card that has an “attach” header, they attach that card to the planet card of the planet being explored.
`,`
If a player resolves an exploration card that has “relic fragment” in the title, they place that card faceup in their play area.

1. Players can resolve the ability of relic fragments that are in their play area. Resolving these abilities allows players to draw cards from the relic deck.
2. Relic fragments can be exchanged as part of transactions.
`,
        ]
      }
    ]
  },
  {
    name: 'FIGHTER TOKENS',
    preamble: 'A fighter token functions as a plastic fighter unit for all game purposes.',
    subsections: [
      {
        name: '',
        items: [
`
When producing a fighter unit, a player can use a fighter token from the supply instead of a plastic piece.
`,`
Players can replace their plastic fighters with tokens at any time.
`,`
If a player ever has a fighter token in a system that does not contain one of their plastic fighters, that player must replace it with a plastic fighter from their reinforcements.

1. If the player cannot replace the token, the unit is destroyed.
`,`
Fighter tokens come in values of one and three. A player can swap between these tokens as necessary.
`,
        ]
      }
    ]
  },
  {
    name: 'FLEET POOL',
    preamble: 'The fleet pool is an area of a player’s command sheet.',
    subsections: [
      {
        name: '',
        items: [
`
The number of command tokens in a player’s fleet pool indicates the maximum number of non-fighter ships that a player can have in a system.

1. Units that are on planets or that count against a player’s capacity do not count against that player’s fleet pool.
2. Units that are being transported through systems do not count against a player’s fleet pool in those systems.
`,`
Players place command tokens in their fleet pools with the ship silhouette faceup.
`,`
If at any time the number of a player’s non-fighter ships in a system exceeds the number of tokens in that player’s fleet pool, they choose and remove excess ships in that system, returning those units to their reinforcements.
`,`
Players do not spend command tokens from this pool unless a game effect specifically allows it.
`,
        ]
      }
    ]
  },
  {
    name: 'FRONTIER TOKENS',
    preamble: 'Frontier tokens can be explored for a variety of game effects.',
    subsections: [
      {
        name: '',
        items: [
`
Frontier tokens are placed on the game board during setup. One frontier token is placed in each system that does not contain any planets.

1. Frontier tokens are not placed on hyperlane tiles.
2. A system cannot have more than one frontier token.
3. Frontier tokens are placed in anomalies that do not have planets.
4. A frontier token is placed in the Creuss gate system.
`,
        ]
      }
    ]
  },
  {
    name: 'GAME BOARD',
    preamble: 'The game board consists of all system tiles in play.',
    subsections: [
      {
        name: '',
        items: [
`
The game board consists of all system tiles that were placed during setup, even if the sides of those tiles do not touch any other system tiles, such as the Ghosts of Creuss’ home system.
`,`
A system tile is on the edge of the game board if any of its sides are not touching another system tile.
a The Ghosts of Creuss home system and the wormhole nexus are on the edge of the game board.
`,
        ]
      }
    ]
  },
  {
    name: 'GAME ROUND',
    preamble: `
A game round consists of the following four phases:

1. Strategy Phase
2. Action Phase
3. Status Phase
4. Agenda Phase
`,
    subsections: [
      {
        name: '',
        items: [
`
Players skip the agenda phase during the early portion of each game. After the custodians token is removed from Mecatol Rex, the agenda phase is added to each game round.
`,`
Player turns occur during the action phase.
`,`
Abilities that last until the end of a player’s turn do not persist for the duration of a game round or into the other phases of that game round. Those effects end at the end of that player’s turn, before the next player’s turn begins.
`,
        ]
      }
    ]
  },
  {
    name: 'GRAVITY RIFT',
    preamble: 'A gravity rift is an anomaly that affects movement.',
    subsections: [
      {
        name: '',
        items: [
`
A ship that will move out of or through a gravity rift at any time during its movement, applies +1 to its move value.

1. This can allow a ship to reach the active system from farther away than it normally could.
`,`
For each ship that would move out of or through a gravity rift, one die is rolled immediately before it exits the gravity rift system; on a result of 1–3, that ship is removed from the board.

1. Dice are not rolled for units that are being transported by ships that have capacity.
2. Units that are being transported are removed from the board if the ship transporting them is removed from the board.
3. Units that are removed are returned to the player’s reinforcements.
`,`
A gravity rift can affect the same ship multiple times during a single movement.
`,`
A system that contains multiple gravity rifts is treated as a single gravity rift.
`,
        ]
      }
    ]
  },
  {
    name: 'GROUND COMBAT',
    preamble: 'During the “Ground Combat” step of an invasion, if the active player has ground forces on a planet that contains another player’s ground forces, those players resolve a ground combat on that planet. To resolve a ground combat, players perform the following steps:',
    subsections: [
      {
        name: '',
        items: [
`
STEP 1—ROLL DICE: Each player rolls one die for each ground force they have on the planet; this is a combat roll. If a unit’s combat roll produces a result that is equal to or greater than that unit’s combat value, that roll produces a hit.

1. If a unit’s combat value contains two or more burst icons, the player rolls one die for each burst icon instead.
`,`
STEP 2—ASSIGN HITS: Each player in the combat must choose one of their own ground forces on the planet to be destroyed for each hit result their opponent produced.

1. When a unit is destroyed, the player who controls that unit removes it from the board and places it in their reinforcements.
`,`
After assigning hits, if both players still have ground forces on the planet, players resolve a new combat round starting with the “Roll Dice” step.
`,`
Ground combat ends when only one player (or neither player) has ground forces on the planet.

1. During the first round of a combat, “start of combat” and “start of combat round” effects occur during the same timing window.
2. During the last round of a combat, “end of combat” and “end of combat round” effects occur during the same timing window.
3. After a combat ends, the player with one or more ground forces remaining on the planet is the winner of the combat; the other player is the loser of the combat.
4. If neither player has a ground force remaining, there is no winner; the combat ends in a draw.
`,
        ]
      }
    ]
  },
  {
    name: 'GROUND FORCES',
    preamble: 'A ground force is a type of unit. All infantry and mech units in the game are ground forces. Some races have unique infantry units.',
    subsections: [
      {
        name: '',
        items: [
`
Ground forces are always on planets, in a space area with ships that have capacity values, or being transported by those ships.
`,`
Ground forces being transported by a ship are placed in a system’s space area along with the ship that is transporting them.
`,`
There is no limit to the number of ground forces a player can have on a planet.
`,
        ]
      }
    ]
  },
  {
    name: 'HYPERLANES',
    preamble: 'Hyperlanes are tiles that are used in some game board setups to create adjacency of system tiles that are not touching each other.',
    subsections: [
      {
        name: '',
        items: [
`
Systems that are connected by lines drawn across one or more hyperlane tiles are adjacent for all purposes.
`,`
Hyperlane tiles are not systems. They cannot have units on them and they cannot be targets for effects or abilities.
`,
        ]
      }
    ]
  },
  {
    name: 'IMPERIAL (STRATEGY CARD)',
    preamble: 'The “Imperial” strategy card allows players to score victory points and draw secret objectives. This card’s initiative value is “8.”',
    subsections: [
      {
        name: '',
        items: [
`
During the action phase, if the active player has the “Imperial” strategy card, they can perform a strategic action to resolve that card’s primary ability.
`,`
To resolve the primary ability on the “Imperial” strategy card, the active player can score one public objective of their choice if they meet that objective’s requirements as described on its card. Then, if the active player controls Mecatol Rex, they gain one victory point; if they do not control Mecatol Rex, they can draw one secret objective card.
`,`
After the active player resolves the primary ability of the “Imperial” strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend one command token from their strategy pool to draw one secret objective card.
`,`
If a player has more than three secret objective cards after drawing a secret objective, they must choose one of their unscored secret objectives and return it to the secret objective deck. This number includes the secret objective cards in the player’s hand and the cards that player has already scored. Then, they shuffle the secret objective deck.`,
        ]
      }
    ]
  },
  {
    name: 'INFANTRY TOKENS',
    preamble: 'An infantry token functions as a plastic infantry unit for all game purposes.',
    subsections: [
      {
        name: '',
        items: [
`
When producing an infantry unit, a player can use an infantry token from the supply instead of a plastic piece.
`,`
Players can replace their plastic infantry with tokens at any time.
`,`
If a player ever has an infantry token on a planet that does not contain one of their plastic infantry or in the space area of a system that does not contain one of their plastic infantry, that player must replace it with one of their plastic infantry from their reinforcements.
a If that player cannot replace the token, the unit is destroyed.
`,`
Infantry tokens come in values of one and three. A player can swap between these tokens as necessary.
`,
        ]
      }
    ]
  },
  {
    name: 'INFLUENCE',
    preamble: 'Influence represents a planet’s political power. Players spend influence to gain command tokens using the “Leadership” strategy card, and the influence values of planets are used to cast votes during the agenda phase.',
    subsections: [
      {
        name: '',
        items: [
`
A planet’s influence is the rightmost value (surrounded by a blue border) found on the planet’s system tile and planet card.
`,`
A player can spend a planet’s influence by exhausting that planet’s card.
`,`
A player can spend a trade good as if it were one influence. a Players cannot spend trade goods to cast votes during the agenda phase.
`,
        ]
      }
    ]
  },
  {
    name: 'INITIATIVE ORDER',
    preamble: 'Initiative order is the order in which players resolve steps of the action and status phases.',
    subsections: [
      {
        name: '',
        items: [
`
Initiative order is determined by the initiative numbers on strategy cards.

1. A player who has the Naalu “0” token has the initiative number 0.
`,`
Initiative order begins with the player who has the lowest numbered strategy card and proceeds to the player who has the strategy card that is next in numerical order.

1. Only strategy cards that were chosen during the strategy phase are used when determining initiative order; strategy cards not chosen during the strategy phase are ignored.
`,`
When playing with three or four players, a player’s initiative is determined only by their lowest-numbered strategy card.
`,
        ]
      }
    ]
  },
  {
    name: 'INVASION',
    preamble: `
Invasion is a step of the tactical action during which the active player can land ground forces on planets to gain control of those planets.

To resolve an invasion, players perform the following steps:
`,
    subsections: [
      {
        name: '',
        items: [
`
STEP 1—BOMBARDMENT: The active player may use the “Bombardment” ability of any of their units in the active system.
`,`
STEP 2—COMMIT GROUND FORCES: If the active player has ground forces in the space area of the active system, that player may commit any number of those ground forces to land on any of the planets in that system. a To commit a ground force to a planet, the active player places that ground force unit on that planet. b The planet may contain another player’s ground forces. c If the active player does not wish to commit ground forces, that player proceeds to the “Production” step of the tactical action.
`,`
STEP 3—SPACE CANNON DEFENSE: If the active player commits any ground forces to a planet that contains units that have the “Space Cannon” ability, those “Space Cannon” abilities can be used against the committed ground forces.

1. If the active player committed ground forces to more than one planet that contained units with a “Space Cannon” ability, the active player chooses the order in which those “Space Cannon” abilities are resolved.
`,`
STEP 4—GROUND COMBAT: If the active player has ground forces on a planet in the active system that contains another player’s ground forces, those players resolve a ground combat on that planet.

1. If players must resolve a combat on more than one planet, the active player chooses the order in which those combats are resolved.
`,`
STEP 5—ESTABLISH CONTROL: The active player gains control of each planet they committed ground forces to if that planet still contains at least one of their ground forces.

1. When a player gains control of a planet, any structures on the planet that belong to other players are immediately destroyed.
2. When a player gains control of a planet, they gain the planet card that matches that planet and exhaust that card.
3. A player cannot gain control of a planet they already control.
4. If there was a combat, and all units belonging to both players were destroyed, the player who was the defender retains control of the planet and places one of their control tokens on the planet.
`,
        ]
      }
    ]
  },
  {
    name: 'LEADER SHEET',
    preamble: 'Each player has a leader sheet that contains slots for their faction’s three leader cards as well as their faction’s mech unit card.',
    subsections: [
      {
        name: '',
        items: [
`
The leader slots of the leader sheet are where players place their three leader cards during setup. Each slot displays the name of the type of leader that is placed in that slot (agent, commander, and hero) as well as a symbol in the upper-right that helps players quickly determine which side of those leaders begins the game faceup.

1. The sides of the leader cards that display one (agent), two (commander), or three (hero) hash marks, respectively, begin the game faceup.
`,`
The mech slot of the leader sheet is where players place their mech unit cards during setup.
`,`
Players who are familiar with the game can hide the quick reference by placing that portion of the leader sheet under their faction sheets.
`,
        ]
      }
    ]
  },
  {
    name: 'LEADERS',
    preamble: 'Each player has several faction-specific leader cards that represent characters with unique abilities.',
    subsections: [
      {
        name: '',
        items: [
`
Each faction has three leaders; one agent, one commander, and one hero.

1. The Nomad’s “The Company” faction ability grants them two additional agents, for a total of five leaders.
`,`
A player’s leaders are placed on their leader sheet during setup.

1. Each leader card is placed on the slot that matches its type. The leader cards are placed so that the hash mark symbols in the upper right are faceup and match the slot that the card is placed on.
2. The two additional Nomad agents are placed in the Nomad player’s play area readied side up.
`
        ]
      },
      {
        name: 'Agents',
        items: [
`
An agent does not need to be unlocked and begins the game in a readied state. They can be exhausted by resolving their abilities, and they ready during the “Ready Cards” step of the status phase.
`
        ]
      },
      {
        name: 'COMMANDERS',
        items: [
`
A commander must be unlocked to use its abilities. A player unlocks their commander if they fulfill the conditions listed after the “Unlock” header.

1. Each faction’s commander has a unique “Unlock” condition.
2. After a player fulfills the unlock condition of their commander, they flip it over to its unlocked side.
3. A commander’s unlock conditions cannot be met while an ability or game effect is being resolved. That is, pending abilities or partially resolved game effects must be completed before checking if conditions are met.
4. A commander cannot flip to its locked side after it is unlocked, even if its owner no longer meets the unlock conditions.
`,`
A commander cannot be exhausted.
`,`
The “Alliance” promissory note allows a player to share their commander’s ability with another player.

1. A commander’s owner can still use their commander’s ability, even if another player has their “Alliance” promissory note.
`
        ]
      },
      {
        name: 'HEROES',
        items: [
`
A hero needs to be unlocked to use their abilities. A player unlocks their hero if they fulfill the conditions listed after the “Unlock” header.

1. The “Unlock” condition for each hero is to have three scored objectives; these can be any combination of secret objectives and public objectives.
2. Victory points do not count toward unlocking heroes.
3. After a player fulfills the unlock condition of their hero, they flip it to its unlocked side.
4. A hero cannot flip to its locked side after it is unlocked.
`,`
A hero cannot be exhausted.
`,`
A hero is purged after its abilities are resolved.

1. The Titans of Ul’s hero is not purged; it is attached to the planet Elysium instead.
`,
        ]
      }
    ]
  },
  {
    name: 'LEADERSHIP (STRATEGY CARD)',
    preamble: 'The “Leadership” strategy card allows players to gain command tokens. This card’s initiative value is “1.”',
    subsections: [
      {
        name: '',
        items: [
`
During the action phase, if the active player has the “Leadership” strategy card, they can perform a strategic action to resolve that card’s primary ability.
`,`
To resolve the primary ability on the “Leadership” strategy card, the active player gains three command tokens. Then, that player can spend any amount of their influence to gain one command token for every three influence they spend.
`,`
After the active player resolves the primary ability of the “Leadership” strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend any amount of influence to gain one command token for every three influence they spend.
`,`
When a player gains command tokens, that player places each token on their command sheet in the pool of their choice.
`,
        ]
      }
    ]
  },
  {
    name: 'LEGENDARY PLANETS',
    preamble: 'Legendary planets grant the player that controls them unique, planet-specific abilities.',
    subsections: [
      {
        name: '',
        items: [
`
A legendary planet is indicated by the legendary planet icon.
`,`
When a player gains control of a legendary planet, they also place its legendary planet ability card in their play area.

1. If a player gains control of a legendary planet ability card from the deck, it is readied.
2. If a player gains control of an exhausted legendary planet ability card, it remains exhausted.
`,`
Players can use the abilities on the legendary planet ability cards in their play area.
`,`
If a legendary planet’s planet card is purged, its corresponding legendary planet ability card is also purged.

`,
        ]
      }
    ]
  },
  {
    name: 'MECATOL REX',
    preamble: 'Mecatol Rex is the planet placed in the center of the game board during setup.',
    subsections: [
      {
        name: '',
        items: [
`
During setup, the custodians token is placed on Mecatol Rex. This token prevents a player from committing ground forces to land on the planet unless they spend six influence to remove the token.
`,
        ]
      }
    ]
  },
  {
    name: 'MECHS',
    preamble: 'Mechs are unique, faction-specific heavy ground forces.',
    subsections: [
      {
        name: '',
        items: [
`
Mechs are a type of ground force and can be transported and participate in ground combat.
`,`
Each player begins with their mech unit card in play on their leader sheet and can produce mechs for the cost presented on the card.
`,`
Some mechs have “Deploy” abilities which allow a player to place them on the game board without producing them normally.
`,`
Mech unit cards are not technologies.`,
        ]
      }
    ]
  },
  {
    name: 'MODIFIERS',
    preamble: 'A modifier is a number that is applied by an ability to increase or decrease the attribute values of a unit or the results of a die roll.',
    subsections: [
      {
        name: '',
        items: [
`
A modifier is always preceded by the word “apply” followed by a numerical value.
`,`
A modifier value preceded by a “+” is added to the attribute or result being modified; a modifier value preceded by a “-” is subtracted from the attribute or result being modified.
`,
        ]
      }
    ]
  },
  {
    name: 'MOVE (ATTRIBUTE)',
    preamble: 'Move is an attribute of some units that is presented on faction sheets and unit upgrade technology cards.',
    subsections: [
      {
        name: '',
        items: [
`
A unit’s move value indicates the distance from its current system that it can move during the “Movement” step of a tactical action.
`,
        ]
      }
    ]
  },
  {
    name: 'MOVEMENT',
    preamble: '',
    subsections: [
      {
        name: '',
        items: [
`
A player can move their ships by resolving a tactical action during the action phase. Additionally, some abilities can move a unit outside of the tactical action.
`,
        ]
      },
      {
        name: 'TACTICAL ACTION MOVEMENT',
        items: [
`
A ship’s move value is presented along with its other attributes on faction sheets and unit upgrade technology cards. This value indicates the distance from its current system that a ship can move.

To resolve movement, players perform the following steps:
`,`
STEP 1—MOVE SHIPS: A player can move any number of their eligible ships into the active system, obeying the
following rules:

1. The ship must end its movement in the active system.
2. The ship cannot move through a system that contains ships that are controlled by another player.
3. The ship cannot move if it started its movement in another system that contains one of its faction’s command tokens.
4. The ship can move through systems that contain its own faction’s command tokens.
5. The ship can move out of the active system and back into it if its move value is high enough.
6. The ship must move along a path of adjacent systems, and the number of systems the ship enters cannot exceed its move value.
`,`
When a ship with a capacity value moves or is moved, it may transport ground forces and fighters.
`,`
The active player declares which of their ships are moving before any ships move. Those ships arrive in the active system simultaneously.
`,`
STEP 2—SPACE CANNON OFFENSE: After the “Move Ships” step, players can use the “Space Cannon” abilities of their units in the active system.
`
        ]
      },
      {
        name: 'ABILITY MOVEMENT',
        items: [
`
If an ability moves a unit outside of the “Movement” step of a tactical action, players follow the rules specified by that ability; neither a unit’s move value nor the rules specified above apply.
`,
        ]
      }
    ]
  },
  {
    name: 'NEBULA',
    preamble: 'A nebula is an anomaly that affects movement and combat.',
    subsections: [
      {
        name: '',
        items: [
`
A ship can only move into a nebula if it is the active system. a A ship cannot move through a nebula. That is, a ship cannot move into and out of a nebula during the same movement.
`,`
A ship that begins the “Movement” step of a tactical action in a nebula treats its move value as “1” for the duration of that step.

1. Other abilities and effects can increase this number.
`,`
If a space combat occurs in a nebula, the defender applies +1 to each combat roll of their ships during that combat.

`,
        ]
      }
    ]
  },
  {
    name: 'NEIGHBORS',
    preamble: 'Two players are neighbors if they both have a unit or control a planet in the same system. They are also neighbors if they both have a unit or control a planet in systems that are adjacent to each other.',
    subsections: [
      {
        name: '',
        items: [
`
Players can resolve transactions with their neighbors.
`,`
Players are neighbors if the adjacency of systems is granted by a wormhole.
`,`
Players are neighbors with the Ghosts of Creuss if the Ghosts of Creuss’ “Quantum Entanglement” faction ability is causing adjacency from the perspective of the Ghosts of Creuss player.`,
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