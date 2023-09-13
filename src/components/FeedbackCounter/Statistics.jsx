import React from 'react';
import styled from 'styled-components';

const StatisticsValue = styled.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="StatisticsTotal">
    <StatisticsValue>Good: {good}</StatisticsValue>
    <StatisticsValue>Bad: {bad}</StatisticsValue>

    <StatisticsValue>Total: {total}</StatisticsValue>
    <StatisticsValue>Positive feedback: {positivePercentage}%</StatisticsValue>
  </div>
);

export default Statistics;
