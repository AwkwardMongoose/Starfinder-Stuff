const arm1 = {
    'name': "Goblin Battle Jack",
    'cost': 950,
    'eac': 6,
    'kac': 8,
    'dex': 2,
    'str': 16,
    'wpn': 1,
    'upg': 1,
    'lvl': 2,
    'num': 1
};
const arm2 = {
    'name': 'Salvage Chassis',
    'cost': 850,
    'eac': 5,
    'kac': 8,
    'dex': 2,
    'str': 16,
    'wpn': 1,
    'upg': 1,
    'lvl': 2,
    'num': 2
};
const arm3 = {
    'name': 'Encounter Suit',
    'cost': 2800,
    'eac': 5,
    'kac': 5,
    'dex': 3,
    'str': 16,
    'wpn': 0,
    'upg': 2,
    'lvl': 4,
    'num': 3
};
const arm4 = {
    'name': "Scrapper's Rig",
    'cost': 2150,
    'eac': 5,
    'kac': 9,
    'dex': 2,
    'str': 16,
    'wpn': 3,
    'upg': 1,
    'lvl': 4,
    'num': 4
};
const arm5 = {
    'name': 'Absorbative Shell',
    'cost': 3375,
    'eac': 8,
    'kac': 13,
    'dex': 3,
    'str': 18,
    'wpn': 0,
    'upg': 1,
    'lvl': 5,
    'num': 5
};
const arm6 = {
    'name': 'Battle Harness',
    'cost': 3450,
    'eac': 9,
    'kac': 12,
    'dex': 2,
    'str': 18,
    'wpn': 1,
    'upg': 1,
    'lvl': 5,
    'num': 6
};
const arm7 = {
    'name': 'Infiltration Skin',
    'cost': 5200,
    'eac': 6,
    'kac': 10,
    'dex': 5,
    'str': 18,
    'wpn': 1,
    'upg': 1,
    'lvl': 6,
    'num': 7
};
const arm8 = {
    'name': 'Spacer Carapace',
    'cost': 4650,
    'eac': 8,
    'kac': 13,
    'dex': 2,
    'str': 18,
    'wpn': 1,
    'upg': 2,
    'lvl': 6,
    'num': 8
};
const arm9 = {
    'name': 'Laborer Frame',
    'cost': 7500,
    'eac': 10,
    'kac': 13,
    'dex': 2,
    'str': 18,
    'wpn': 2,
    'upg': 2,
    'lvl': 7,
    'num': 9
};
const arm10 = {
    'name': 'Kashcomm Scout',
    'cost': 12600,
    'eac': 13,
    'kac': 14,
    'dex': 5,
    'str': 16,
    'wpn': 1,
    'upg': 1,
    'lvl': 8,
    'num': 10
};
const arm11 = {
    'name': 'Celerity Rigging',
    'cost': 38500,
    'eac': 16,
    'kac': 20,
    'dex': 5,
    'str': 22,
    'wpn': 2,
    'upg': 2,
    'lvl': 12,
    'num': 11
};
const arm12 = {
    'name': 'Geistwork Hunter',
    'cost': 59400,
    'eac': 18,
    'kac': 20,
    'dex': 5,
    'str': 22,
    'wpn': 2,
    'upg': 2,
    'lvl': 13,
    'num': 12
};
const arm13 = {
    'name': 'Angel Frame',
    'cost': 191000,
    'eac': 18,
    'kac': 22,
    'dex': 6,
    'str': 20,
    'wpn': 1,
    'upg': 2,
    'lvl': 16,
    'num': 13
};
const arm14 = {
    'name': 'Extradimensional Armor',
    'cost': 278200,
    'eac': 22,
    'kac': 28,
    'dex': 3,
    'str': 26,
    'wpn': 3,
    'upg': 3,
    'lvl': 17,
    'num': 14
};
const arm15 = {
    'name': 'Devaplate',
    'cost': 424000,
    'eac': 21,
    'kac': 25,
    'dex': 4,
    'str': 26,
    'wpn': 2,
    'upg': 2,
    'lvl': 18,
    'num': 15
};
const arm16 = {
    'name': 'Starguard',
    'cost': 904500,
    'eac': 27,
    'kac': 29,
    'dex': 4,
    'str': 30,
    'wpn': 4,
    'upg': 5,
    'lvl': 20,
    'num': 16
};

const armArr = [arm1,arm2,arm3,arm4,arm5,arm6,arm7,arm8,arm9,arm10,arm11,arm12,arm13,arm14,arm15,arm16];


const buttonLeft = document.getElementById('buttonleft');
const buttonRight = document.getElementById('buttonright');
const arrowButton = document.querySelectorAll('.arrowbutton');
var page = 2;

window.addEventListener('load', function() {
    console.log("PAGE LOADED!")
    document.getElementById('level-number').innerText = page;
    changePageButton('blank')
})

function updateAll() {
    console.log("UPDATED!")
};

function armorCost(armor, pg) {
    let lvl = armor.lvl;
    let lvlDiff = pg-lvl;
    if (lvlDiff >= 0) {
        let result = Math.round(armor.cost*1.5**lvlDiff);
        return result
    } else if (lvlDiff < 0) {
        let result = '';
        return result
    }
};

function armorName(armor, pg) {
    let lvl = armor.lvl;
    let lvlDiff = pg-lvl;
    if (lvlDiff >= 0) {
        let result = armor.name;
        return result
    } else if (lvlDiff < 0) {
        let result = '';
        return result
    }
};

function armorBonuses(armor, pg) {
    let lvl = armor.lvl;
    let lvlDiff = pg-lvl;
    let lvl5 = lvlDiff/5;
    let div = lvl5 % 5;
    if (div >= 1) {
        let result = Math.floor(div);
        return result
    } else {
        let result = 0;
        return result
    }
};

function armorAC(armor, pg) {
    let lvl = armor.lvl;
    let pgDiv = pg/5;
    let div = pgDiv%5-Math.floor(lvl/5);
    if (pg > lvl && pg <= 20) {
        let result = Math.floor(div);
        return result
    } else {
        let result = 0;
        return result
    }
};

function changeItems() {
    table = document.getElementById('table');
    armorBonuses(armArr[5],page);
    armArr.forEach(arm => {
        if (arm.lvl <= page) {
            table.rows[arm.num+1].classList.remove('none');
            let evenNum = arm.num%2;
            let lvlDiff = page-arm.lvl;
            let name = armorName(arm,page);
            let cost = armorCost(arm, page);
            let acBonus = armorAC(arm, page);
            let armBonus = armorBonuses(arm,page);
            table.rows[arm.num+1].cells[1].innerText = name;
            table.rows[arm.num+1].cells[1].classList.add('bold');
            table.rows[arm.num+1].cells[2].innerText = cost.toLocaleString('en-US');
            table.rows[arm.num+1].cells[3].innerText = arm.eac+lvlDiff+acBonus;
            table.rows[arm.num+1].cells[4].innerText = arm.kac+lvlDiff+acBonus;
            table.rows[arm.num+1].cells[5].innerText = arm.dex+armBonus;
            table.rows[arm.num+1].cells[6].innerText = arm.str+(armBonus*2);
            table.rows[arm.num+1].cells[7].innerText = arm.wpn;
            table.rows[arm.num+1].cells[8].innerText = arm.upg+armBonus;
            if (evenNum == 0) {
                console.log(0)
                table.rows[arm.num+1].cells[1].classList.add('darkrow');
                table.rows[arm.num+1].cells[2].classList.add('darkrow');
                table.rows[arm.num+1].cells[3].classList.add('darkrow');
                table.rows[arm.num+1].cells[4].classList.add('darkrow');
                table.rows[arm.num+1].cells[5].classList.add('darkrow');
                table.rows[arm.num+1].cells[6].classList.add('darkrow');
                table.rows[arm.num+1].cells[7].classList.add('darkrow');
                table.rows[arm.num+1].cells[8].classList.add('darkrow');

            }
        } else {
            table.rows[arm.num+1].cells[1].innerText = '';
            table.rows[arm.num+1].cells[2].innerText = '';
            table.rows[arm.num+1].cells[3].innerText = '';
            table.rows[arm.num+1].cells[4].innerText = '';
            table.rows[arm.num+1].cells[5].innerText = '';
            table.rows[arm.num+1].cells[6].innerText = '';
            table.rows[arm.num+1].cells[7].innerText = '';
            table.rows[arm.num+1].cells[8].innerText = '';

            table.rows[arm.num+1].classList.add('none');
            
        }
    });
};

function changePageButton(a) {
    if (a == 'left' && page != 2) {
        page -= 1;
    } else if (a == 'left' && page == 2) {
        page = 20;
    } else if (a == 'right' && page != 20) {
        page += 1;
    } else if (a == 'right' && page == 20) {
        page = 2;
    } else if (a == 'blank') {
        console.log('Page Set')
    } else {
        console.log("Something Broke changePage function!")
    }
    document.getElementById('level-number').innerText = page;
    changeItems()
};

arrowButton.forEach(i => {
    i.addEventListener('click', function() {
        a = String(i.id).slice(6);
        changePageButton(a)
    });
});
