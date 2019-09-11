// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import { ipcRenderer } from 'electron';
let version = document.getElementById('version')!;
let notification = document.getElementById('notification')!;
let message = document.getElementById('message')!;
let restartButton = document.getElementById('restart-button')!;

import * as divine from "divine-engine";

ipcRenderer.send('app_version');
ipcRenderer.on('app_version', (event: any, arg: any) => {
    ipcRenderer.removeAllListeners('app_version');
    version.innerText = 'Version ' + arg.version;
});

ipcRenderer.on('update_available', () => {
    ipcRenderer.removeAllListeners('update_available');
    message.innerText = 'A new update is available. Downloading now...';
    notification.classList.remove('hidden');
});
ipcRenderer.on('update_downloaded', () => {
    ipcRenderer.removeAllListeners('update_downloaded');
    message.innerText = 'Update Downloaded. It will be installed on restart. Restart now?';
    restartButton.classList.remove('hidden');
    notification.classList.remove('hidden');
});
function closeNotification() {
    notification.classList.add('hidden');
}
function restartApp() {
    ipcRenderer.send('restart_app');
}
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
                    "name": "dragon_fireball",
                    "path": "assets/images/dragon_fireball.png"
                },
                {
                    "name": "dragon_fireball_impact",
                    "path": "assets/images/dragon_fireball_impact.png"
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
                    "name": "wizard_2_attack_e",
                    "path": "assets/images/wizard_2_attack_e.png"
                },
                {
                    "name": "wizard_2_die1",
                    "path": "assets/images/wizard_2_die1.png"
                },
                {
                    "name": "wizard_2_die2",
                    "path": "assets/images/wizard_2_die2.png"
                },
                {
                    "name": "wizard_2_run",
                    "path": "assets/images/wizard_2_run.png"
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
                    "name": "zone6",
                    "path": "assets/images/zone6.png"
                },
                {
                    "name": "zone6_castle",
                    "path": "assets/images/zone6_castle.png"
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
                    "path": "assets/sounds/credits.mp3"
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
                    "path": "assets/sounds/dragonbosstheme.mp3"
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
                    "path": "assets/sounds/evilcastle.mp3"
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
                    "path": "assets/sounds/maintheme.mp3"
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
                    "path": "assets/sounds/wizardbosstheme.mp3"
                },
                {
                    "name": "wizardshot",
                    "path": "assets/sounds/wizardshot.wav"
                },
                {
                    "name": "zone1",
                    "path": "assets/sounds/zone1.mp3"
                },
                {
                    "name": "zone2",
                    "path": "assets/sounds/zone2.mp3"
                },
                {
                    "name": "zone3",
                    "path": "assets/sounds/zone3.mp3"
                },
                {
                    "name": "zonecomplete",
                    "path": "assets/sounds/zonecomplete.wav"
                }
            ],
            "zones": [
                {
                    "path": "assets/zones/opening.sequence.json"
                },
                {
                    "path": "assets/zones/titlescreen.json"
                },
                {
                    "path": "assets/zones/begin.sequence.json"
                },
                {
                    "path": "assets/zones/howtoplay.sequence.json"
                },
                {
                    "path": "assets/zones/zone1.sequence.json"
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
                    "path": "assets/zones/zone2.sequence.json"
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
                    "path": "assets/zones/zone3.sequence.json"
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
                    "path": "assets/zones/zone4.sequence.json"
                },
                {
                    "path": "assets/zones/zone4_1.json"
                },
                {
                    "path": "assets/zones/zone5.sequence.json"
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
                    "path": "assets/zones/zone6.sequence.json"
                },
                {
                    "path": "assets/zones/zone6_1.json"
                },
                {
                    "path": "assets/zones/credits.sequence.json"
                }
            ]
        }
    });
};
