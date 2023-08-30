import React from "react";

class FeedbackOptions extends React.Component {
    render() {
        const {options,onLeaveFeedback} = this.props;

        return(
            <div className="CounterControls">
                {options.map((option,index) => (
                    <button
                    key={index}
                    type="button"
                    onClick={()=>onLeaveFeedback(option)}>
                        {option}
                    </button>
                ))}
            </div>
        )
    }
}
export default FeedbackOptions;
