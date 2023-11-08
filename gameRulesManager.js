import gameRules from "./gameRules.js";
import { language } from "./languageManager.js";

const data = gameRules[language]

console.log(data)

const vsModeMode = document.getElementsByClassName("vsModeMode")[0]
const vsModeTeams = document.getElementsByClassName("vsModeTeams")[0]
const vsModeItems = document.getElementsByClassName("vsModeItems")[0]
const vsModeCom = document.getElementsByClassName("vsModeCom")[0]
const vsModeComVehicles = document.getElementsByClassName("vsModeComVehicles")[0]
const vsModeCourses = document.getElementsByClassName("vsModeCourses")[0]
const vsModeRaceCount = document.getElementsByClassName("vsModeRaceCount")[0]

const selectedVsModeMode = document.getElementsByClassName("selectedVsModeMode")[0]
const selectedVsModeTeams = document.getElementsByClassName("selectedVsModeTeams")[0]
const selectedVsModeItems = document.getElementsByClassName("selectedVsModeItems")[0]
const selectedVsModeCom = document.getElementsByClassName("selectedVsModeCom")[0]
const selectedVsModeComVehicles = document.getElementsByClassName("selectedVsModeComVehicles")[0]
const selectedVsModeCourses = document.getElementsByClassName("selectedVsModeCourses")[0]
const selectedVsModeRaceCount = document.getElementsByClassName("selectedVsModeRaceCount")[0]

const battleModeMode = document.getElementsByClassName("battleModeMode")[0]
const battleModeTeams = document.getElementsByClassName("battleModeTeams")[0]
const battleModeItems = document.getElementsByClassName("battleModeItems")[0]
const battleModeCom = document.getElementsByClassName("battleModeCom")[0]
const battleModeComVehicles = document.getElementsByClassName("battleModeComVehicles")[0]
const battleModeCourses = document.getElementsByClassName("battleModeCourses")[0]
const battleModeRoundCount = document.getElementsByClassName("battleModeRoundCount")[0]
const battleModeRoundTime = document.getElementsByClassName("battleModeRoundTime")[0]

const selectedBattleModeMode = document.getElementsByClassName("selectedBattleModeMode")[0]
const selectedBattleModeTeams = document.getElementsByClassName("selectedBattleModeTeams")[0]
const selectedBattleModeItems = document.getElementsByClassName("selectedBattleModeItems")[0]
const selectedBattleModeCom = document.getElementsByClassName("selectedBattleModeCom")[0]
const selectedBattleModeComVehicles = document.getElementsByClassName("selectedBattleModeComVehicles")[0]
const selectedBattleModeCourses = document.getElementsByClassName("selectedBattleModeCourses")[0]
const selectedBattleModeRoundCount = document.getElementsByClassName("selectedBattleModeRoundCount")[0]
const selectedBattleModeRoundTime = document.getElementsByClassName("selectedBattleModeRoundTime")[0]

const generateVsModeRules = () => {
    selectedVsModeMode.textContent = data.vsMode.modes.rules[Math.floor(Math.random() * data.vsMode.modes.rules.length)]
    selectedVsModeTeams.textContent = data.vsMode.teams.rules[Math.floor(Math.random() * data.vsMode.teams.rules.length)];
    selectedVsModeItems.textContent = data.vsMode.items.rules[Math.floor(Math.random() * data.vsMode.items.rules.length)];
    selectedVsModeCom.textContent = data.vsMode.com.rules[Math.floor(Math.random() * data.vsMode.com.rules.length)];
    selectedVsModeComVehicles.textContent = data.vsMode.comVehicles.rules[Math.floor(Math.random() * data.vsMode.comVehicles.rules.length)];
    selectedVsModeCourses.textContent = data.vsMode.courses.rules[Math.floor(Math.random() * data.vsMode.courses.rules.length)];
    selectedVsModeRaceCount.textContent = data.vsMode.raceCount.rules[Math.floor(Math.random() * data.vsMode.raceCount.rules.length)];
}

const generateBattleModeRules = () => {
    selectedBattleModeMode.textContent = data.battleMode.modes.rules[Math.floor(Math.random() * data.battleMode.modes.rules.length)];
    selectedBattleModeTeams.textContent = data.battleMode.teams.rules[Math.floor(Math.random() * data.battleMode.teams.rules.length)];
    selectedBattleModeItems.textContent = data.battleMode.items.rules[Math.floor(Math.random() * data.battleMode.items.rules.length)];
    selectedBattleModeCom.textContent = data.battleMode.com.rules[Math.floor(Math.random() * data.battleMode.com.rules.length)];
    selectedBattleModeComVehicles.textContent = data.battleMode.comVehicles.rules[Math.floor(Math.random() * data.battleMode.comVehicles.rules.length)];
    selectedBattleModeCourses.textContent = data.battleMode.courses.rules[Math.floor(Math.random() * data.battleMode.courses.rules.length)];
    selectedBattleModeRoundCount.textContent = data.battleMode.roundCount.rules[Math.floor(Math.random() * data.battleMode.roundCount.rules.length)];
    selectedBattleModeRoundTime.textContent = data.battleMode.roundTime.rules[Math.floor(Math.random() * data.battleMode.roundTime.rules.length)];
}

window.addEventListener("load", () => {
    vsModeMode.textContent = data.vsMode.modes.name
    vsModeTeams.textContent = data.vsMode.teams.name
    vsModeItems.textContent = data.vsMode.items.name
    vsModeCom.textContent = data.vsMode.com.name
    vsModeComVehicles.textContent = data.vsMode.comVehicles.name
    vsModeCourses.textContent = data.vsMode.courses.name
    vsModeRaceCount.textContent = data.vsMode.raceCount.name

    battleModeMode.textContent = data.battleMode.modes.name
    battleModeTeams.textContent = data.battleMode.teams.name
    battleModeItems.textContent = data.battleMode.items.name
    battleModeCom.textContent = data.battleMode.com.name
    battleModeComVehicles.textContent = data.battleMode.comVehicles.name
    battleModeCourses.textContent = data.battleMode.courses.name
    battleModeRoundCount.textContent = data.battleMode.roundCount.name
    battleModeRoundTime.textContent = data.battleMode.roundTime.name

    generateVsModeRules()
    generateBattleModeRules()
})

document.getElementById("rollRulesVSMode").addEventListener("click", () => {
    generateVsModeRules()
})

document.getElementById("rollRulesBattleMode").addEventListener("click", () => {
    generateBattleModeRules()
})

const selectedRules = [...document.getElementsByClassName("ruleRule")]
selectedRules.map((rule) => (
    rule.addEventListener("click", () => {
        if (rule == selectedVsModeMode) selectedVsModeMode.textContent = data.vsMode.modes.rules[Math.floor(Math.random() * data.vsMode.modes.rules.length)]
        else if (rule == selectedVsModeTeams) selectedVsModeTeams.textContent = data.vsMode.teams.rules[Math.floor(Math.random() * data.vsMode.teams.rules.length)];
        else if (rule == selectedVsModeItems) selectedVsModeItems.textContent = data.vsMode.items.rules[Math.floor(Math.random() * data.vsMode.items.rules.length)];
        else if (rule == selectedVsModeCom) selectedVsModeCom.textContent = data.vsMode.com.rules[Math.floor(Math.random() * data.vsMode.com.rules.length)];
        else if (rule == selectedVsModeComVehicles) selectedVsModeComVehicles.textContent = data.vsMode.comVehicles.rules[Math.floor(Math.random() * data.vsMode.comVehicles.rules.length)];
        else if (rule == selectedVsModeCourses) selectedVsModeCourses.textContent = data.vsMode.courses.rules[Math.floor(Math.random() * data.vsMode.courses.rules.length)];
        else if (rule == selectedVsModeRaceCount) selectedVsModeRaceCount.textContent = data.vsMode.raceCount.rules[Math.floor(Math.random() * data.vsMode.raceCount.rules.length)];
        else if (rule == selectedBattleModeMode) selectedBattleModeMode.textContent = data.battleMode.modes.rules[Math.floor(Math.random() * data.battleMode.modes.rules.length)];
        else if (rule == selectedBattleModeTeams) selectedBattleModeTeams.textContent = data.battleMode.teams.rules[Math.floor(Math.random() * data.battleMode.teams.rules.length)];
        else if (rule == selectedBattleModeItems) selectedBattleModeItems.textContent = data.battleMode.items.rules[Math.floor(Math.random() * data.battleMode.items.rules.length)];
        else if (rule == selectedBattleModeCom) selectedBattleModeCom.textContent = data.battleMode.com.rules[Math.floor(Math.random() * data.battleMode.com.rules.length)];
        else if (rule == selectedBattleModeComVehicles) selectedBattleModeComVehicles.textContent = data.battleMode.comVehicles.rules[Math.floor(Math.random() * data.battleMode.comVehicles.rules.length)];
        else if (rule == selectedBattleModeCourses) selectedBattleModeCourses.textContent = data.battleMode.courses.rules[Math.floor(Math.random() * data.battleMode.courses.rules.length)];
        else if (rule == selectedBattleModeRoundCount) selectedBattleModeRoundCount.textContent = data.battleMode.roundCount.rules[Math.floor(Math.random() * data.battleMode.roundCount.rules.length)];
        else if (rule == selectedBattleModeRoundTime) selectedBattleModeRoundTime.textContent = data.battleMode.roundTime.rules[Math.floor(Math.random() * data.battleMode.roundTime.rules.length)];
    })
))