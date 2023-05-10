export const stats = {
    weaponDamage(rarity) { 
        const damage = {
            minDamage: 0,
            maxDamage: 0,
        };
        switch (rarity) {
            case "Common":
                damage.minDamage = Math.floor(Math.random() * 15) + 10;
                damage.maxDamage = Math.floor(Math.random() * 15) + 25;
                break;
            case "Uncommon":
                damage.minDamage = Math.floor(Math.random() * 15) + 20;
                damage.maxDamage = Math.floor(Math.random() * 15) + 35;
                break;
            case "Rare":
                damage.minDamage = Math.floor(Math.random() * 15) + 30;
                damage.maxDamage = Math.floor(Math.random() * 15) + 45;
                break;
            case "Epic":
                damage.minDamage = Math.floor(Math.random() * 15) + 40;
                damage.maxDamage = Math.floor(Math.random() * 15) + 55;
                break;
            case "Legendary":
                damage.minDamage = Math.floor(Math.random() * 15) + 50;
                damage.maxDamage = Math.floor(Math.random() * 15) + 65;
                break;
            default:
                break;
        }
        return damage;
    },
    weaponAttackSpeed(holdStyle) {
        let roll = '';
        function attackSpeed(randomSpeedMod, baseSpeed) {
            return ((Math.ceil(Math.random() * randomSpeedMod) / 10) + baseSpeed).toFixed(1);
        }
        switch (holdStyle) {
            case "light-one-handed":
                roll = attackSpeed(1, 1);
                break;
            case "heavy-one-handed":
                roll = attackSpeed(1, 1.5);
                break;
            case "light-two-handed":
                roll = attackSpeed(1, 1.8);
                break;
            case "heavy-two-handed":
                roll = attackSpeed(2.5, 2.4);
                break;
            case "light-ranged":
                roll = attackSpeed(1, 1.1);
                break;
            case "heavy-ranged":
                roll = attackSpeed(2, 1.6);
                break;
            default:
                break;
        }
        return roll;
    },    
    armor(rarity) { 
        let roll = 0;
        switch (rarity) {
            case "Common":
                roll = Math.floor(Math.random() * 5) + 25;
                break;
            case "Uncommon":
                roll = Math.floor(Math.random() * 5) + 35;
                break;
            case "Rare":
                roll = Math.floor(Math.random() * 10) + 40;
                break;
            case "Epic":
                roll = Math.floor(Math.random() * 15) + 45;
                break;
            case "Legendary":
                roll = Math.floor(Math.random() * 20) + 50;
                break;
            default:}
        return roll;
    },
    weaponBonusStats(rarity) {
        //Available stats
        const bonusStats = [];
        const basicStatTypes = ["strength", "dexterity", "intelligence", "health", "mana"];

        //Choose stats
        function basicStatPicker() {
            const randomStat = basicStatTypes[Math.floor(Math.random() * basicStatTypes.length)];
            const statNumber = Math.floor(Math.random() * 20) + 5;
            const statIndex = basicStatTypes.indexOf(randomStat);
            //This part removes stats from the basicStatTypes array so they can't be chosen twice
            basicStatTypes.splice(statIndex, 1);

            return [randomStat, statNumber];
        }

        //Add stats based on rarity
        if (rarity === 'Uncommon') {
            bonusStats.push(basicStatPicker());
        } else if (rarity === 'Rare') {
            for (let i = 0; i < 2; i++) {
            bonusStats.push(basicStatPicker());
            }
        } else if (rarity === 'Epic') {
            for (let i = 0; i < 3; i++) {
            bonusStats.push(basicStatPicker());
            }
        } else if (rarity === 'Legendary') {
            for (let i = 0; i < 4; i++) {
            bonusStats.push(basicStatPicker());
            }
        }

        return bonusStats;
    }
}