import React from 'react';
import { connect } from 'react-redux';

const DownloadStateButton = ({ state }) => {
  const handleDownload = () => {
    const stateJson = JSON.stringify(state, null, 2);
    const blob = new Blob([stateJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'redux-store.json';
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button onClick={handleDownload}>
      Download Redux Store State
    </button>
  );
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(DownloadStateButton);
