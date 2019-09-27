"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const divine = __importStar(require("divine-engine"));
window.onload = () => {
    process.env.NODE_DEBUG = "true";
    divine.Engine.start({
        assets: {
            "materials": [
                {
                    "name": "black_background",
                    "path": "assets/images/black_background.png"
                },
                {
                    "name": "cursor",
                    "path": "assets/images/cursor.png"
                },
                {
                    "name": "spacedragonstudios",
                    "path": "assets/images/spacedragonstudios.png"
                },
                {
                    "name": "deathscreen",
                    "path": "assets/images/deathscreen.png"
                },
                {
                    "name": "debug",
                    "path": "assets/images/debug.png"
                },
                {
                    "name": "dragon_attack",
                    "path": "assets/images/dragon_attack.png"
                },
                {
                    "name": "dragon_die",
                    "path": "assets/images/dragon_die.png"
                },
                {
                    "name": "dragon_fly",
                    "path": "assets/images/dragon_fly.png"
                },
                {
                    "name": "dragon_hit",
                    "path": "assets/images/dragon_hit.png"
                },
                {
                    "name": "fireball",
                    "path": "assets/images/fireball.png"
                },
                {
                    "name": "fireball_impact",
                    "path": "assets/images/fireball_impact.png"
                },
                {
                    "name": "flag",
                    "path": "assets/images/flag.png"
                },
                {
                    "name": "knight_jump",
                    "path": "assets/images/knight_jump.png"
                },
                {
                    "name": "knight_walk",
                    "path": "assets/images/knight_walk.png"
                },
                {
                    "name": "menubutton",
                    "path": "assets/images/menubutton.png"
                },
                {
                    "name": "peasent_attack",
                    "path": "assets/images/peasent_attack.png"
                },
                {
                    "name": "peasent_die",
                    "path": "assets/images/peasent_die.png"
                },
                {
                    "name": "peasent_hit",
                    "path": "assets/images/peasent_hit.png"
                },
                {
                    "name": "peasent_idle",
                    "path": "assets/images/peasent_idle.png"
                },
                {
                    "name": "peasent_jump",
                    "path": "assets/images/peasent_jump.png"
                },
                {
                    "name": "peasent_walk",
                    "path": "assets/images/peasent_walk.png"
                },
                {
                    "name": "princess_walk",
                    "path": "assets/images/princess_walk.png"
                },
                {
                    "name": "princess_idle",
                    "path": "assets/images/princess_idle.png"
                },
                {
                    "name": "titlescreen",
                    "path": "assets/images/titlescreen.png"
                },
                {
                    "name": "play",
                    "path": "assets/images/play.png"
                },
                {
                    "name": "howtoplay",
                    "path": "assets/images/howtoplay.png"
                },
                {
                    "name": "exit",
                    "path": "assets/images/exit.png"
                },
                {
                    "name": "village_sequence",
                    "path": "assets/images/village_sequence.png"
                },
                {
                    "name": "wizard_attack_e",
                    "path": "assets/images/wizard_attack_e.png"
                },
                {
                    "name": "wizard_die1",
                    "path": "assets/images/wizard_die1.png"
                },
                {
                    "name": "wizard_die2",
                    "path": "assets/images/wizard_die2.png"
                },
                {
                    "name": "wizard_hit",
                    "path": "assets/images/wizard_hit.png"
                },
                {
                    "name": "wizard_run",
                    "path": "assets/images/wizard_run.png"
                },
                {
                    "name": "wizard_idle",
                    "path": "assets/images/wizard_idle.png"
                },
                {
                    "name": "wizard_jump",
                    "path": "assets/images/wizard_jump.png"
                },
                {
                    "name": "wizard_attack_vfx_e_impact",
                    "path": "assets/images/wizard_attack_vfx_e_impact.png"
                },
                {
                    "name": "wizard_attack_vfx_e_shooting",
                    "path": "assets/images/wizard_attack_vfx_e_shooting.png"
                },
                {
                    "name": "wolf_attack",
                    "path": "assets/images/wolf_attack.png"
                },
                {
                    "name": "wolf_die",
                    "path": "assets/images/wolf_die.png"
                },
                {
                    "name": "wolf_hit",
                    "path": "assets/images/wolf_hit.png"
                },
                {
                    "name": "wolf_walk",
                    "path": "assets/images/wolf_walk.png"
                },
                {
                    "name": "lizard_walk",
                    "path": "assets/images/lizard_walk.png"
                },
                {
                    "name": "lizard_die",
                    "path": "assets/images/lizard_die.png"
                },
                {
                    "name": "treant_run",
                    "path": "assets/images/treant_run.png"
                },
                {
                    "name": "treant_die",
                    "path": "assets/images/treant_die.png"
                },
                {
                    "name": "skeleton_run",
                    "path": "assets/images/skeleton_run.png"
                },
                {
                    "name": "skeleton_die",
                    "path": "assets/images/skeleton_die.png"
                },
                {
                    "name": "goblin_walk",
                    "path": "assets/images/goblin_walk.png"
                },
                {
                    "name": "goblin_die",
                    "path": "assets/images/goblin_die.png"
                },
                {
                    "name": "orc_walk",
                    "path": "assets/images/orc_walk.png"
                },
                {
                    "name": "orc_die",
                    "path": "assets/images/orc_die.png"
                },
                {
                    "name": "troll_attack",
                    "path": "assets/images/troll_attack.png"
                },
                {
                    "name": "troll_die",
                    "path": "assets/images/troll_die.png"
                },
                // Dialogs
                {
                    "name": "attack_banner",
                    "path": "assets/images/attack_banner.png"
                },
                {
                    "name": "jump_banner",
                    "path": "assets/images/jump_banner.png"
                },
                {
                    "name": "howtoplay_banner",
                    "path": "assets/images/howtoplay_banner.png"
                },
                {
                    "name": "movement_banner",
                    "path": "assets/images/movement_banner.png"
                },
                {
                    "name": "select_banner",
                    "path": "assets/images/select_banner.png"
                },
                {
                    "name": "begin_k1",
                    "path": "assets/images/begin_k1.png"
                },
                {
                    "name": "begin_k2",
                    "path": "assets/images/begin_k2.png"
                },
                {
                    "name": "begin_k3",
                    "path": "assets/images/begin_k3.png"
                },
                {
                    "name": "begin_k4",
                    "path": "assets/images/begin_k4.png"
                },
                {
                    "name": "begin_k5",
                    "path": "assets/images/begin_k5.png"
                },
                {
                    "name": "begin_k6",
                    "path": "assets/images/begin_k6.png"
                },
                {
                    "name": "begin_g1",
                    "path": "assets/images/begin_g1.png"
                },
                {
                    "name": "zone4_w1",
                    "path": "assets/images/zone4_w1.png"
                },
                {
                    "name": "zone4_w2",
                    "path": "assets/images/zone4_w2.png"
                },
                {
                    "name": "zone4_w3",
                    "path": "assets/images/zone4_w3.png"
                },
                {
                    "name": "zone4_w4",
                    "path": "assets/images/zone4_w4.png"
                },
                {
                    "name": "zone6_w1",
                    "path": "assets/images/zone6_w1.png"
                },
                {
                    "name": "zone6_w2",
                    "path": "assets/images/zone6_w2.png"
                },
                {
                    "name": "zone6_w3",
                    "path": "assets/images/zone6_w3.png"
                },
                {
                    "name": "final_pc1",
                    "path": "assets/images/final_pc1.png"
                },
                {
                    "name": "final_pc2",
                    "path": "assets/images/final_pc2.png"
                },
                {
                    "name": "final_pc3",
                    "path": "assets/images/final_pc3.png"
                },
                // Backgrounds/environment
                {
                    "name": "light1",
                    "path": "assets/images/light1.png"
                },
                {
                    "name": "light2",
                    "path": "assets/images/light2.png"
                },
                {
                    "name": "light3",
                    "path": "assets/images/light3.png"
                },
                {
                    "name": "moving_platform",
                    "path": "assets/images/moving_platform.png"
                },
                {
                    "name": "zone1",
                    "path": "assets/images/zone1.png"
                },
                {
                    "name": "zone1_plains",
                    "path": "assets/images/zone1_plains.png"
                },
                {
                    "name": "zone2",
                    "path": "assets/images/zone2.png"
                },
                {
                    "name": "zone2_forest1",
                    "path": "assets/images/zone2_forest1.png"
                },
                {
                    "name": "zone2_forest2",
                    "path": "assets/images/zone2_forest2.png"
                },
                {
                    "name": "zone2_forest3",
                    "path": "assets/images/zone2_forest3.png"
                },
                {
                    "name": "zone3",
                    "path": "assets/images/zone3.png"
                },
                {
                    "name": "zone3_mountain1",
                    "path": "assets/images/zone3_mountain1.png"
                },
                {
                    "name": "zone3_mountain2",
                    "path": "assets/images/zone3_mountain2.png"
                },
                {
                    "name": "zone3_mountain3",
                    "path": "assets/images/zone3_mountain3.png"
                },
                {
                    "name": "zone4",
                    "path": "assets/images/zone4.png"
                },
                {
                    "name": "zone4_mountain1",
                    "path": "assets/images/zone4_mountain1.png"
                },
                {
                    "name": "zone5",
                    "path": "assets/images/zone5.png"
                },
                {
                    "name": "zone5_castle1",
                    "path": "assets/images/zone5_castle1.png"
                },
                {
                    "name": "zone5_castle2",
                    "path": "assets/images/zone5_castle2.png"
                },
                {
                    "name": "zone5_castle3",
                    "path": "assets/images/zone5_castle3.png"
                },
                {
                    "name": "zone6",
                    "path": "assets/images/zone6.png"
                },
                {
                    "name": "zone6_castle1",
                    "path": "assets/images/zone6_castle1.png"
                },
                // Credits
                {
                    "name": "credit1",
                    "path": "assets/images/credit1.png"
                },
                {
                    "name": "credit2",
                    "path": "assets/images/credit2.png"
                },
                {
                    "name": "credit3",
                    "path": "assets/images/credit3.png"
                },
                {
                    "name": "credit4",
                    "path": "assets/images/credit4.png"
                },
                {
                    "name": "credit5",
                    "path": "assets/images/credit5.png"
                },
                {
                    "name": "credit6",
                    "path": "assets/images/credit6.png"
                },
                {
                    "name": "credit7",
                    "path": "assets/images/credit7.png"
                },
                {
                    "name": "credit8",
                    "path": "assets/images/credit8.png"
                },
                {
                    "name": "credit9",
                    "path": "assets/images/credit9.png"
                },
                {
                    "name": "credit10",
                    "path": "assets/images/credit10.png"
                },
            ],
            "sounds": [
                {
                    "name": "bosshit",
                    "path": "assets/sounds/bosshit.wav"
                },
                {
                    "name": "buttonselect",
                    "path": "assets/sounds/buttonselect.wav"
                },
                {
                    "name": "credits",
                    "path": "assets/sounds/credits.mp3",
                    "loop": true
                },
                {
                    "name": "death",
                    "path": "assets/sounds/death.wav"
                },
                {
                    "name": "deathmusic",
                    "path": "assets/sounds/deathmusic.mp3"
                },
                {
                    "name": "dragonbosstheme",
                    "path": "assets/sounds/dragonbosstheme.mp3",
                    "loop": true
                },
                {
                    "name": "dragonshout",
                    "path": "assets/sounds/dragonshout.wav"
                },
                {
                    "name": "enemyhit",
                    "path": "assets/sounds/enemyhit.wav"
                },
                {
                    "name": "evilcastle",
                    "path": "assets/sounds/evilcastle.mp3",
                    "loop": true
                },
                {
                    "name": "fire",
                    "path": "assets/sounds/fire.wav"
                },
                {
                    "name": "howtoplay",
                    "path": "assets/sounds/howtoplay.mp3"
                },
                {
                    "name": "maintheme",
                    "path": "assets/sounds/maintheme.mp3",
                    "loop": true
                },
                {
                    "name": "playerattack",
                    "path": "assets/sounds/playerattack.wav"
                },
                {
                    "name": "playerhit",
                    "path": "assets/sounds/playerhit.wav"
                },
                {
                    "name": "playerjump",
                    "path": "assets/sounds/playerjump.wav"
                },
                {
                    "name": "princessmusic",
                    "path": "assets/sounds/princessmusic.mp3"
                },
                {
                    "name": "win",
                    "path": "assets/sounds/win.mp3"
                },
                {
                    "name": "wizardbosstheme",
                    "path": "assets/sounds/wizardbosstheme.mp3",
                    "loop": true
                },
                {
                    "name": "wizardshot",
                    "path": "assets/sounds/wizardshot.wav"
                },
                {
                    "name": "zone1",
                    "path": "assets/sounds/zone1.mp3",
                    "loop": true
                },
                {
                    "name": "zone2",
                    "path": "assets/sounds/zone2.mp3",
                    "loop": true
                },
                {
                    "name": "zone3",
                    "path": "assets/sounds/zone3.mp3",
                    "loop": true
                },
                {
                    "name": "zonecomplete",
                    "path": "assets/sounds/zonecomplete.wav"
                },
                {
                    "name": "village_sound",
                    "path": "assets/sounds/village_sound.wav",
                    "loop": true
                },
            ],
            "zones": [
                {
                    "path": "assets/zones/opening.sequence.json"
                },
                {
                    "path": "assets/zones/titlescreen.json"
                },
                {
                    "path": "assets/zones/howtoplay.sequence.json"
                },
                {
                    "path": "assets/zones/begin.sequence.json"
                },
                {
                    "path": "assets/zones/zone1.json"
                },
                {
                    "path": "assets/zones/zone1_1.json"
                },
                {
                    "path": "assets/zones/zone1_2.json"
                },
                {
                    "path": "assets/zones/zone1_3.json"
                },
                {
                    "path": "assets/zones/zone2.json"
                },
                {
                    "path": "assets/zones/zone2_1.json"
                },
                {
                    "path": "assets/zones/zone2_2.json"
                },
                {
                    "path": "assets/zones/zone2_3.json"
                },
                {
                    "path": "assets/zones/zone3.json"
                },
                {
                    "path": "assets/zones/zone3_1.json"
                },
                {
                    "path": "assets/zones/zone3_2.json"
                },
                {
                    "path": "assets/zones/zone3_3.json"
                },
                {
                    "path": "assets/zones/zone4.json"
                },
                {
                    "path": "assets/zones/boss_dragon.sequence.json"
                },
                {
                    "path": "assets/zones/zone4_1.json"
                },
                {
                    "path": "assets/zones/zone5.json"
                },
                {
                    "path": "assets/zones/zone5_1.json"
                },
                {
                    "path": "assets/zones/zone5_2.json"
                },
                {
                    "path": "assets/zones/zone5_3.json"
                },
                {
                    "path": "assets/zones/zone6.json"
                },
                {
                    "path": "assets/zones/boss_wizard.sequence.json"
                },
                {
                    "path": "assets/zones/zone6_1.json"
                },
                {
                    "path": "assets/zones/final_castle.sequence.json"
                },
                {
                    "path": "assets/zones/final_village.sequence.json"
                },
                {
                    "path": "assets/zones/credits.sequence.json"
                },
                {
                    "path": "assets/zones/deathscreen.sequence.json"
                }
            ]
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcmMvcmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsd0RBQXdEO0FBQ3hELHVEQUF1RDtBQUN2RCx5REFBeUQ7QUFDekQsc0RBQXdDO0FBQ3hDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO0lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUNoQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNoQixNQUFNLEVBQUU7WUFDSixXQUFXLEVBQUU7Z0JBQ1Q7b0JBQ0ksTUFBTSxFQUFFLGtCQUFrQjtvQkFDMUIsTUFBTSxFQUFFLG9DQUFvQztpQkFDL0M7Z0JBQ0Q7b0JBQ0ksTUFBTSxFQUFFLFFBQVE7b0JBQ2hCLE1BQU0sRUFBRSwwQkFBMEI7aUJBQ3JDO2dCQUNEO29CQUNJLE1BQU0sRUFBRSxvQkFBb0I7b0JBQzVCLE1BQU0sRUFBRSxzQ0FBc0M7aUJBQ2pEO2dCQUNEO29CQUNJLE1BQU0sRUFBRSxhQUFhO29CQUNyQixNQUFNLEVBQUUsK0JBQStCO2lCQUMxQztnQkFDRDtvQkFDSSxNQUFNLEVBQUUsT0FBTztvQkFDZixNQUFNLEVBQUUseUJBQXlCO2lCQUNwQztnQkFDRDtvQkFDSSxNQUFNLEVBQUUsZUFBZTtvQkFDdkIsTUFBTSxFQUFFLGlDQUFpQztpQkFDNUM7Z0JBQ0Q7b0JBQ0ksTUFBTSxFQUFFLFlBQVk7b0JBQ3BCLE1BQU0sRUFBRSw4QkFBOEI7aUJBQ3pDO2dCQUNEO29CQUNJLE1BQU0sRUFBRSxZQUFZO29CQUNwQixNQUFNLEVBQUUsOEJBQThCO2lCQUN6QztnQkFDRDtvQkFDSSxNQUFNLEVBQUUsWUFBWTtvQkFDcEIsTUFBTSxFQUFFLDhCQUE4QjtpQkFDekM7Z0JBQ0Q7b0JBQ0ksTUFBTSxFQUFFLFVBQVU7b0JBQ2xCLE1BQU0sRUFBRSw0QkFBNEI7aUJBQ3ZDO2dCQUNE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