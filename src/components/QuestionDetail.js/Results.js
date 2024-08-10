import  './QuestionDetail.css';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Plotly from 'plotly.js-dist';

const Results = ({question , question_id,user}) => {
  useEffect(() => {

    if (question_id) {
      const answer = user.answers[question_id];
      if (!(question[answer].votes.includes(user.id)))
        {       question[answer].votes=[...question[answer].votes,user.id]

        }
      const trace1 = {
        type: 'bar',
        x: ["Option A", "Option B"],
        y: [question.optionOne.votes.length, question.optionTwo.votes.length],
        text: [`<br> <br>Votes: ${question.optionOne.votes.length}<br>${question.optionOne.votes.join(', ')}`, 
          `<br> <br>Votes: ${question.optionTwo.votes.length}<br><br>${question.optionTwo.votes.join(', <br>')}`],

        marker: {
          color: '#217471',
          
        },
      };

      const data = [trace1];

      const layout = {
        title: 'Number of Votes',
        font: { size: 18 },
        barmode: 'stack',

        xaxis: {
          title: {
            text: ''},
          autorange: true,
          showgrid: false,
          zeroline: true,
          showline: true,
          autotick: false,
          ticks: '',
          showticklabels: true
        },
        yaxis: {
          title: {
            text: ''},
            gridwidth: 2,
          autorange: true,
          showgrid: false,
          zeroline: false,
          showline: false,
          autotick: false,
          ticks: '',
          showticklabels: false
        }
      };

      const config = { responsive: true };

      Plotly.newPlot('results-plot', data, layout, config);

     
    }
  }, []);

  return <div id="results-plot" className="results-plot"></div>;
};
const mapStateToProps = ({ user}) => ({user});

export default connect(mapStateToProps)(Results);
