import React from "react";
import '../css/rewards-container.css';
import ItemStats from "./ItemStats";

function MainReward(props) {
    let rewardText= '';
    const mainItemClasses = `main-item ${props.rarity}`;

    // This alters rewardText string based on the type of the item randomly chosen
    if (props.item[1] === 'weapon') {
        props.rarity === 'Common' ? rewardText = `${props.item[0][0]}` : rewardText = `${props.item[0][0]} of ${props.affix}`;
    } else if (props.item[1] === 'armor') {
        rewardText = `${props.affix} ${props.item[0]}`;
    }

    // This is the state that controls whether the ItemStats component is displayed or not vvv
    const [itemStatsDisplay, setItemStatsDisplay] = React.useState(true);

    function MouseEnterHandler() {
        setItemStatsDisplay(false);

    }
    function MouseLeaveHandler() {
        setItemStatsDisplay(true);
    }
    // This is the state that controls whether the ItemStats component is displayed or not ^^^

    return (
        <div>
            <div className="rewards-container">
                <h2>
                    <span className={mainItemClasses} onMouseEnter={MouseEnterHandler} onMouseLeave={MouseLeaveHandler}>{rewardText}</span>
                </h2>
                <p>{props.misc}</p>
                <p>{props.gold} gold pieces</p>
            </div>

            <div className="item-box" hidden={itemStatsDisplay}>
                <ItemStats  
                itemName={rewardText}
                itemType={props.item} 
                rarity={props.rarity} 
                affix={props.affix} 
                minDamage={props.itemStats.minDamage} 
                maxDamage={props.itemStats.maxDamage}
                attackSpeed={props.itemStats.attackSpeed}
                armor={props.itemStats.armor}
                weaponBonusStats={props.itemStats.weaponBonusStats}/>
            </div>
        </div>
    )
}

export default MainReward;