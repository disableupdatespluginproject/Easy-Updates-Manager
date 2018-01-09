import React, { Component, Fragment } from 'react';
import LoadingGif from '../components/loading';

export default class AutomaticUpdates extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			loading: false
		};
	}

	componentWillReceiveProps() {
		this.setState( {
			loading: false
		} );
	}

	onInputChange = ( event ) => {
		event.preventDefault();

		this.setState( {
			loading: true
		} );

		this.props.saveOptions( event.target.id, event.target.value );
	}

	render() {
		const { options } = this.props;
		return (
			<div className="eum-section">
				<h2>{mpsum.I18N.automatic_updates}</h2>
				{ ! this.state.loading &&
					<ul>
						<li>
							<input type="radio" value="default" id="automatic-updates-default" checked={ 'default' == options.automatic_updates } onChange={this.onInputChange} /> <label htmlFor="automatic-updates-default">{mpsum.I18N.default}</label>
						</li>
						<li>
							<input type="radio" value="on" id="automatic-updates-on" checked={ 'on' == options.automatic_updates }  onChange={this.onInputChange} /> <label htmlFor="automatic-updates-on">{mpsum.I18N.on}</label>
						</li>
						<li>
							<input type="radio" value="off" id="automatic-updates-off" checked={ 'off' == options.automatic_updates } onChange={this.onInputChange} /> <label htmlFor="automatic-updates-off">{mpsum.I18N.off}</label>
						</li>
						<li>
							<input type="radio" value="custom" id="automatic-updates-custom" checked={ 'custom' == options.automatic_updates } onChange={this.onInputChange} /> <label htmlFor="automatic-updates-custom">{mpsum.I18N.custom}</label>
						</li>
					</ul>
				}
				{ this.state.loading &&
					<LoadingGif />
				}
			</div>
		);
	}
}