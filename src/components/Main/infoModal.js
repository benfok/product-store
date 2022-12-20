import React from 'react';
import '../../styles/modal.css';

// InfoModal component takes in a field name that maps to one of the following. This allows the component to be reused to display info relative to field selected

const InfoModal = ({content}) => {

    const rewardsModal = (
        <>
            <div className="modalHeader">
                <h3>Epic Mountain Rewards</h3>
            </div>
            <section className="informationContainer">
                <p>Information text about rewards program. Links to more information etc.</p>
            </section>
        </>
    )

    const ageModal = (
        <>
            <div className="modalHeader">
                <h3>Age Ranges</h3>
            </div>
            <section className="informationContainer">
                <p>Text</p>
            </section>
        </>
    )

    const lessonTypeModal = (
        <>
            <div className="modalHeader">
                <h3>Lesson Type</h3>
            </div>
            <section className="informationContainer">
                <p>Explanation of private vs group lessons and the benefits of each</p>
            </section>
        </>
    )

    const sportModal = (
        <>
            <div className="modalHeader">
                <h3>Ski or Snowboard</h3>
            </div>
            <section className="informationContainer">
                <p>Text</p>
            </section>
        </>
    )

    const startTimeModal = (
        <>
            <div className="modalHeader">
                <h3>Start Time</h3>
            </div>
            <section className="informationContainer">
                <p>Text</p>
            </section>
        </>
    )

    const abilityLevelModal = (
        <>
            <div className="modalHeader">
                <h3>Ability Levels</h3>
            </div>
            <section className="informationContainer">
                <p>Text</p>
            </section>
        </>
    )

    const locationModal = (
        <>
            <div className="modalHeader">
                <h3>Lesson Location</h3>
            </div>
            <section className="informationContainer">
                <p>Text</p>
            </section>
        </>
    )

    return (
        <>
            {content === 'rewards' && rewardsModal}
            {content === 'productType' && lessonTypeModal}
            {content === 'discipline' && sportModal}
            {content === 'startTime' && startTimeModal}
            {content === 'abilityLevels' && abilityLevelModal}
            {content === 'locations' && locationModal}
            {content === 'ageRange' && ageModal}
        </>
    )
}

export default InfoModal;