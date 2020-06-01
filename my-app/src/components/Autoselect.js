import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import "../styles/Autoselect.scss";
import { apiKey, originUrl } from '../App'

export default class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then((latLng) => {
                this.setState({ address });
                fetch(originUrl + "lat=" + latLng.lat + "&lon=" + latLng.lng + apiKey)
                    .then((respone) => {
                        return respone.json()
                    })
                    .then((respData) => {
                        this.props.action(respData)
                    })
            })
            .catch(error => console.error('Error', error));
    };

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}

            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            {...getInputProps({

                                placeholder: 'Search Places ...',
                                className: 'location-search-input current__input',
                            })}
                        />
                        <div className="autocomplete-dropdown-container current__dropdown">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? {
                                        backgroundColor: '#fafafa', cursor: 'pointer', padding: '5px 10px', borderRadius: "10px"
                                    }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer', padding: '5px 10px', borderRadius: "10px" };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}