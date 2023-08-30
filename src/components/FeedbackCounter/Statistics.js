import React from "react";

const Statistics = ({good,neutral,bad,total,positivePercentage}) => (
    <div className="StatisticsTotal">
        <span className="StatisticsValue">Good: {good}</span>
        <span className="StatisticsValue">Neutral: {neutral}</span>
        <span className="StatisticsValue">Bad: {bad}</span>

        <span className="StatisticsValue">Total: {total}</span>
        <span className="StatisticsValue">Positive feedback: {positivePercentage}%</span>
    </div>
)

export default Statistics;