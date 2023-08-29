import React from "react";
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

                <div className="StatisticsTotal">
                    <span className="StatisticsValue">Good: {this.state.good}</span>
                    <span className="StatisticsValue">Neutral: {this.state.neutral}</span>
                    <span className="StatisticsValue">Bad: {this.state.bad}</span>
                </div>
            </div>
        );
    }
}

export default FeedbackCounter;