import React, { Component, Fragment } from 'react';
import LoadingGif from '../components/loading';
import { saveOptions } from '../actions/save_options';
import { connect } from 'react-redux';

class VersionFooter extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			loading: false,
			checked: 'off'
		};
	}

	componentWillReceiveProps() {
		this.setState( {
			loading: false,
		} );
	}

	onInputChange = ( event ) => {
		event.preventDefault();
		let checked = 'off';
		if ( event.target.value == 'on' ) {
			checked = 'off';
		} else {
			checked = 'on';
		}
		this.setState( {
			loading: true,
			checked: checked
		} );

		this.props.saveOptions( event.target.id, event.target.value );
	}

	render() {
		const { options } = this.props;
		return (
			<div className="eum-section">
				<h3>{mpsum.I18N.version_footer}</h3>
				<p className="eum-description">
					{mpsum.I18N.version_footer_description}
				</p>
				{ ! this.state.loading &&
					<div className="toggle-wrapper">
						<label
							htmlFor="version-footer"
							className="eum-toggle-label"
							aria-label={mpsum.I18N.version_footer_label}
						>
							<input
								type="checkbox"
								value={ 'on' == options.misc_wp_footer ? 'off' : 'on' }
								id="version-footer"
								checked={ 'on' == options.misc_wp_footer ? 'checked' : false }
								className="eum-toggle eum-hidden"
								onChange={this.onInputChange}
							/>
							<span className="switch"></span>
							<span className="toggle"></span>
						{mpsum.I18N.version_footer_label}
						</label>
					</div>
				}
				{ this.state.loading &&
					<LoadingGif />
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		options: state.options,
		saveOptions: state.saveOptions
	};
}

export default connect( mapStateToProps, { saveOptions } )(VersionFooter);