import React from 'react';

function ItemStats(props) {
    if(props.itemType[1] === 'weapon') { 
        return (
            <div className="item-stats">
                <h2 className={props.rarity}>{props.itemName}</h2>
                <p>Weapon Damage: {props.minDamage} - {props.maxDamage}</p>
                <p>Attack Speed: {props.attackSpeed} seconds</p>
                {props.weaponBonusStats.map(stat => <p>{`+${stat[1]} ${stat[0]}`}</p>)}
            </div>
        )
    } else if (props.itemType[1] === 'armor') { 
        return (
            <div className="item-stats">
                <p>Armor: {props.armor}</p>
            </div>
        )
    }
}

export default ItemStats;
