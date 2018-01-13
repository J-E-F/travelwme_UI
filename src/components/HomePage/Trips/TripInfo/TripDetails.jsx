import React from 'react';
import { Image } from 'cloudinary-react';
import { connect } from 'react-redux';
import TripStatus from '../TripGroup/TripStatus';


function TripDetails(props) {
  return (
    <div>
      <header className="masthead text-white text-center">
        <div>
          <h1 className="text-uppercase triptit">{props.showtrip.title}</h1>
        </div>
      </header>
      <div className="row">
        <div className="col-8">
          <Image cloudName="travelwme" className="rounded trippic" publicId={props.showtrip.publicId} />
        </div>
        <div className="col-4 trippic">
          <h4>Description: {props.showtrip.description}</h4>
          <h4>Start Date: {props.showtrip.date_start}</h4>
          <h4>End Date: {props.showtrip.date_end}</h4>
          <h4>Relationship: {props.showtrip.relationship}</h4>
          <h4>Trip Status: { props.singlestat === null ? props.showtrip.trip_status : props.singlestat}</h4>
          <TripStatus />
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    trips: state.trips,
    showtrip: state.showtrip,
    singlestat: state.singlestat,
  };
}

export default connect(mapStateToProps)(TripDetails);
