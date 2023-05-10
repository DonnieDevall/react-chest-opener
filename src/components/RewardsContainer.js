import React from "react";
import Rewards from "./Rewards";
// import '../css/rewards-container.css';
import MainReward from "./MainReward";
import { stats } from './StatsRoller';

function RewardsContainer() {
    let item = Rewards.itemType();
    let rarity = Rewards.rarity();
    let misc = Rewards.misc();
    let gold = Rewards.goldEarned();
    let affix = item[1]==='weapon'? Rewards.weaponElement() : Rewards.armorType();
    let statRolls = {
        minDamage: stats.weaponDamage(rarity).minDamage,
        maxDamage: stats.weaponDamage(rarity).maxDamage,
        attackSpeed: stats.weaponAttackSpeed(item[0][1]),
        armor: stats.armor(rarity),
        weaponBonusStats: stats.weaponBonusStats(rarity)
    }


    //Displays the reward container on the website
    return (
        <div>
            <h2>You have acquired the following items!</h2>
            <MainReward
            rarity={rarity}
            rarityTwo={rarity}
            item={item}
            misc={misc}
            gold={gold}
            affix={affix}
            itemStats={statRolls}/>
        </div>
    )
}

export default RewardsContainer;