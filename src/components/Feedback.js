import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";

class Feedback extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGood = () => {
    this.setState((state) => ({
      good: state.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState((state) => ({
      neutral: state.neutral + 1,
    }));
  };

  handleBad = () => {
    this.setState((state) => ({
      bad: state.bad + 1,
    }));
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const positivePercentage = (good * 100) / total;
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="Feedback">
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            onGood={this.handleGood}
            onNeutral={this.handleNeutral}
            onBad={this.handleBad}
          />
        </Section>
        <Section title={"Statistics"}>
          {this.countTotalFeedback({ good, neutral, bad }) === 0 ? (
            <Notification message={"No feedback given"} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback({ good, neutral, bad })}
              positivePercentage={this.countPositiveFeedbackPercentage({
                good,
                neutral,
                bad,
              })}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
