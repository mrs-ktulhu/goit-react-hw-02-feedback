import React from "react";
import PropTypes from "prop-types";
import Notification from "./Notification";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import '../FeedbackCounter/FeedbackCounter.css'


class FeedbackCounter extends React.Component {

    static defaultProps ={
        initialGood:0 ,
        initialNeutral:0,
        initialBad:0,
    }

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    setFeedback = (typeOfFeedback) => {
        this.setState((prevFeedback)=>({
            [typeOfFeedback]:prevFeedback[typeOfFeedback]+1,
        }));
    }

    render() {
        const {good,neutral,bad} = this.state;
  
        const countTotalFeedback = good + bad + neutral;

        const countPositiveFeedbackPercentage = Math.round((this.state.good / countTotalFeedback) * 100) || 0;

        return (
            <div className="Counter">

                <Section title="Please leave feedback">

                    <FeedbackOptions options={['good','neutral','bad']} onLeaveFeedback={this.setFeedback}/>

                </Section>
                
                <Section title="Statistics">

                    {countTotalFeedback === 0 ? (
                        <Notification message="There is no feedback"/>
                        ) : (
                            <Statistics 
                                good={good} 
                                neutral={neutral} 
                                bad={bad} 
                                total={countTotalFeedback} 
                                positivePercentage={countPositiveFeedbackPercentage}
                            />
                    )} 
                </Section>

            </div>
        );
    }
}

FeedbackCounter.propTypes = {
    good: PropTypes.number.isRequired,
    neutral:  PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    }
export default FeedbackCounter;

