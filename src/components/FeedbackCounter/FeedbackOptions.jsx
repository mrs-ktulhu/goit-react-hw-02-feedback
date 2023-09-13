import React from 'react';
import styled from 'styled-components';

const FeedbackButton = styled.button`
  cursor: pointer;
  margin-right: 10px;
  &:last-child {
    margin-right: 0px;
  }
`;
class FeedbackOptions extends React.Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div className="CounterControls">
        {options.map((option, index) => (
          <FeedbackButton
            key={index}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeedbackButton>
        ))}
      </div>
    );
  }
}
export default FeedbackOptions;
