import React from "react";
import Statistics from "./Statistics";
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

    setGoodFeedback = () => {
        this.setState(prevGood=>({
            good: prevGood.good + 1,
        }));
    };

    setNeutralFeedback = () => {
        this.setState(prevNeutral=>({
            neutral: prevNeutral.neutral + 1,
        }));
    };

    setBadFeedback = () => {
        this.setState(prevBad=>({
            bad: prevBad.bad + 1,
        }));
    };


    render() {
  
        const countTotalFeedback = this.state.good + this.state.bad + this.state.neutral;

        const countPositiveFeedbackPercentage = Math.round((this.state.good / countTotalFeedback) * 100) || 0;

        return (
            <div className="Counter">
                <h2 className="Title">Please leave feedback</h2>
                <div className="CounterControls">
                    <button 
                        type="button" 
                        onClick={this.setGoodFeedback}
                    >
                    Good
                    </button>
                    <button 
                        type="button" 
                        onClick={this.setNeutralFeedback}
                    >
                    Neutral
                    </button>
                    <button 
                        type="button" 
                        onClick={this.setBadFeedback}
                    >
                    Bad
                    </button>
                </div>
                <h2 className="Title">Statistics</h2>

                <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage}/> 

            </div>
        );
    }
}

export default FeedbackCounter;