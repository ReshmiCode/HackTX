import React, { Component } from "react";
import { Layout, Input } from "antd";
import NavBar from "./components/NavBar";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
const { Content } = Layout;

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Layout>
        <NavBar />
        <Content>
          <h1>Search For Your Neighbourhood:</h1>
          <Input
            placeholder="etc. 234 5th Street, Stamford CT, 06905"
            style={{ marginBottom: "10px" }}
          />
          <Map
            google={this.props.google}
            zoom={14}
            initialCenter={{
              lat: 30.2,
              lng: -97.7,
            }}
          >
            <Marker
              onClick={this.onMarkerClick}
              name={"Kenyatta International Convention Centre"}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map>
        </Content>
      </Layout>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE",
})(MapContainer);
