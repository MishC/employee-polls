import  './QuestionDetail.css';
import { connect } from 'react-redux';
import React,  { useEffect,Fragment } from 'react';
import Plotly from 'plotly.js-dist';

const Results = ({question , question_id, subtitle,user}) => {
  useEffect(() => {

    if (question_id) {
    
      const trace1 = {
        type: 'bar',
        x: ["Option A", "Option B"],
        y: [question.optionOne.votes.length, question.optionTwo.votes.length],
        text: [
      `Votes: ${question.optionOne.votes.length}<br>${question.optionOne.votes.join(', ')}`, 
      `Votes: ${question.optionTwo.votes.length}<br>${question.optionTwo.votes.join(', ')}`
        ],
        insidetextanchor : "middle",
        textposition: 'inside',
        textfont: {
            family: 'Arial',
            size: 12,
            color: '#ffffff',
            align:"left",
            justify:"left"
        },
        marker: {
            color: '#217471',
        },
    };

      const data = [trace1];

      const layout = {
        paper_bgcolor: ' #fff',
        plot_bgcolor: ' #fff',

        title: {text:'Number of Votes',
          font:{weight:550, size:20}
        },
        annotations: [           
          {
              text: subtitle,
                y:1.1,                       
             xref: 'paper',                
              yref: 'paper',                
              showarrow:false, 
              align:'center',
              font:{color:'#217471', size:16}
          },
         
      ],
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

      const config = { responsive: false };

      Plotly.newPlot('results-plot', data, layout, config);

     
    }
  }, [question.optionOne.votes,question.optionTwo.votes,question_id, subtitle]);

  return <Fragment><div id="results-plot" className="results-plot"></div></Fragment>;
};
const mapStateToProps = ({ user}) => ({user});

export default connect(mapStateToProps)(Results);
