import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (option) => {
    const name = option.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
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
    const optionsFeedbac = ["good", "neutral", "bad"];

    return (
      <div className="Feedback">
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={optionsFeedbac}
            onLeaveFeedback={this.onLeaveFeedback}
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

export default App;
