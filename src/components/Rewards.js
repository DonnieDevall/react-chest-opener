// This file contains the methods that generate the rewards for the user when they open a chest.
const Rewards = {
    rarity() {
        const rarity = ["Common", "Uncommon", "Rare", "Epic", "Legendary"];
        const roll = Math.floor(Math.random() * 100);
        if (roll > 98) {
            return rarity[4];
        } else if (roll > 90) {
            return rarity[3];
        } else if (roll > 70) {
            return rarity[2];
        } else if (roll > 40) { 
            return rarity[1];
        } else {
            return rarity[0];
        }
    },
    weapon() {
        const weapons = [
            ['Sword', 'heavy-one-handed'], 
            ['Axe', 'heavy-one-handed'], 
            ['Mace', 'heavy-one-handed'], 
            ['Dagger', 'light-one-handed'], 
            ['Spear', 'light-two-handed'], 
            ['Staff', 'heavy-two-handed'], 
            ['Shortbow', 'light-ranged'], 
            ['Longbow', 'heavy-ranged'], 
            ['Crossbow', 'heavy-ranged'], 
            ['Wand', 'light-ranged'], 
            ['Greatsword', 'heavy-two-handed'], 
            ['Warhammer', 'heavy-two-handed'], 
            ['Polearm', 'heavy-two-handed'],
            ['Sickle', 'light-one-handed'],
            ['Scythe', 'heavy-two-handed'],
            ['Flail', 'heavy-one-handed'],];
        return weapons[Math.floor(Math.random() * weapons.length)];
    },
    armor() {
        const armor = ["Helmet", "Chest", "Gloves", "Boots", "Shield", "Pants"];
        return armor[Math.floor(Math.random() * armor.length)];
    },
    itemType() {
        const itemTypes = ["Weapon", "Armor"];
        const random = Math.floor(Math.random() * (itemTypes.length));
        if (itemTypes[random] === "Weapon") {
            return [this.weapon(), 'weapon']
        } else if (itemTypes[random] === "Armor"){ 
            return [this.armor(), 'armor']
        }
    },
    weaponElement() {
        const weaponElement = ["Smoldering Flames", "Freezing Wrath", "Thunder and Lightning", "Toxicity", "Darkness", "Arcane Power", "Nature's Resolve", "Flowing Water", "Unmoveable Earth", "Rending Winds", "Searing Light"];
        return weaponElement[Math.floor(Math.random() * weaponElement.length)];
    },
    armorType() {
        const armorType = ["Cloth", "Leather", "Mail", "Plate"];
        return armorType[Math.floor(Math.random() * armorType.length)];
    },
    misc() {
        const misc = ["Bag of Holding", "Ring of Teleportation", "Bag of Salt", "Lockpick", "Donkey Statue", "Potion of Healing", "Potion of Mana", "Potion of Strength", "Potion of Dexterity", "Potion of Intelligence", "Musty Old Tome", "Ancient Old Tome", "Eye of Farsight", "Monocle of Futuresight", "Guldan's Skull Friend", ];
        return misc[Math.floor(Math.random() * misc.length)];
    },
    goldEarned() {
        return Math.floor(Math.random() * 100);
    }
}

export default Rewards;